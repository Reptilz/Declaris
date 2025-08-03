export const usePhoneValidation = () => {
  // Regex pour les numéros belges valides
  const belgianPhoneRegex = {
    // Format international avec +32
    international: /^\+32\s?[1-9]\d{8}$/,
    
    // Format national avec 0
    national: /^0[1-9]\d{8}$/,
    
    // Formats avec espaces/tirets (plus flexibles)
    internationalFlexible: /^\+32\s?[1-9](?:[\s\-\.]?\d){8}$/,
    nationalFlexible: /^0[1-9](?:[\s\-\.]?\d){8}$/,
    
    // Mobiles belges spécifiques (04xx)
    mobile: /^(?:\+32\s?|0)4[5-9]\d{7}$/,
    
    // Fixes belges (02, 03, 09, 010-087)
    landline: /^(?:\+32\s?|0)(?:2|3|9|1[0-9]|2[0-7]|3[2-9]|4[0-4]|5[0-8]|6[0-8]|7[1-9]|8[0-7])\d{6,7}$/
  }

  const validateBelgianPhone = (phone) => {
    if (!phone || phone.trim() === '') {
      return { valid: true, formatted: '', type: 'empty' } // Optionnel
    }

    // Nettoyer le numéro (supprimer espaces, tirets, points)
    const cleanPhone = phone.replace(/[\s\-\.]/g, '')
    
    // Vérifications par ordre de priorité
    
    // 1. Format international strict (+32xxxxxxxxx)
    if (belgianPhoneRegex.international.test(cleanPhone)) {
      return {
        valid: true,
        formatted: formatBelgianPhone(cleanPhone),
        type: 'international',
        original: phone
      }
    }
    
    // 2. Format national strict (0xxxxxxxxx)
    if (belgianPhoneRegex.national.test(cleanPhone)) {
      return {
        valid: true,
        formatted: formatBelgianPhone(cleanPhone),
        type: 'national',
        original: phone
      }
    }
    
    // 3. Formats flexibles avec espaces/tirets
    if (belgianPhoneRegex.internationalFlexible.test(phone) || 
        belgianPhoneRegex.nationalFlexible.test(phone)) {
      return {
        valid: true,
        formatted: formatBelgianPhone(cleanPhone),
        type: 'flexible',
        original: phone
      }
    }
    
    // 4. Vérifications spécifiques
    if (belgianPhoneRegex.mobile.test(cleanPhone)) {
      return {
        valid: true,
        formatted: formatBelgianPhone(cleanPhone),
        type: 'mobile',
        original: phone
      }
    }
    
    if (belgianPhoneRegex.landline.test(cleanPhone)) {
      return {
        valid: true,
        formatted: formatBelgianPhone(cleanPhone),
        type: 'landline',
        original: phone
      }
    }
    
    // Numéro invalide
    return {
      valid: false,
      error: getPhoneError(cleanPhone),
      type: 'invalid',
      original: phone
    }
  }

  const formatBelgianPhone = (cleanPhone) => {
    // Convertir format national vers international si nécessaire
    if (cleanPhone.startsWith('0')) {
      cleanPhone = '+32' + cleanPhone.substring(1)
    }
    
    // Formater avec espaces pour lisibilité
    if (cleanPhone.startsWith('+32')) {
      const number = cleanPhone.substring(3)
      if (number.startsWith('4')) {
        // Mobile: +32 4xx xx xx xx
        return `+32 ${number.substring(0, 3)} ${number.substring(3, 5)} ${number.substring(5, 7)} ${number.substring(7)}`
      } else {
        // Fixe: +32 x xxx xx xx
        return `+32 ${number.substring(0, 1)} ${number.substring(1, 4)} ${number.substring(4, 6)} ${number.substring(6)}`
      }
    }
    
    return cleanPhone
  }

  const getPhoneError = (cleanPhone) => {
    if (cleanPhone.length < 9) {
      return 'Le numéro de téléphone est trop court'
    }
    
    if (cleanPhone.length > 13) {
      return 'Le numéro de téléphone est trop long'
    }
    
    if (!cleanPhone.match(/^[\+\d]/)) {
      return 'Le numéro doit commencer par + ou un chiffre'
    }
    
    if (cleanPhone.startsWith('0') && cleanPhone.length !== 10) {
      return 'Format national invalide (doit être 0xxxxxxxxx)'
    }
    
    if (cleanPhone.startsWith('+32') && cleanPhone.length !== 12) {
      return 'Format international invalide (doit être +32xxxxxxxxx)'
    }
    
    if (cleanPhone.startsWith('0') && !cleanPhone.match(/^0[1-9]/)) {
      return 'Le deuxième chiffre doit être entre 1 et 9'
    }
    
    return 'Format de numéro de téléphone belge invalide'
  }

  // Exemples de numéros valides pour aide utilisateur
  const getPhoneExamples = () => {
    return [
      '04xx xx xx xx (mobile)',
      '02 xxx xx xx (Bruxelles)',
      '03 xxx xx xx (Anvers)',
      '+32 4xx xx xx xx (international)',
      '+32 2 xxx xx xx (international fixe)'
    ]
  }

  return {
    validateBelgianPhone,
    formatBelgianPhone,
    getPhoneError,
    getPhoneExamples
  }
}
