export const useSpamDetection = () => {
  // Mots-clés spam courants
  const spamKeywords = [
    'viagra', 'cialis', 'casino', 'poker', 'bitcoin', 'crypto', 'investment',
    'loan', 'credit', 'debt', 'mortgage', 'insurance', 'pharmacy',
    'weight loss', 'diet pills', 'make money', 'work from home',
    'click here', 'act now', 'limited time', 'urgent', 'congratulations',
    'winner', 'prize', 'lottery', 'inheritance', 'prince', 'nigeria',
    'seo', 'backlinks', 'ranking', 'traffic', 'followers', 'sex', 'porn', 'xxx', 'adult'
  ]

  // Patterns suspects
  const suspiciousPatterns = [
    /\b\d{4,}\s*[-\s]*\d{4,}\s*[-\s]*\d{4,}\b/g, // Numéros de carte de crédit
    /\b[A-Z]{2,}\s+[A-Z]{2,}\s+[A-Z]{2,}\b/g, // Texte tout en majuscules
    /(.)\1{4,}/g, // Caractères répétés (aaaaa)
    /[!]{3,}/g, // Exclamations multiples
    /[\$€£¥₹]{2,}/g, // Symboles monétaires multiples
  ]

  // Détection d'URLs suspectes
  const detectSuspiciousUrls = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/gi
    const urls = text.match(urlRegex) || []
    
    const suspiciousDomains = [
      'bit.ly', 'tinyurl.com', 'goo.gl', 't.co', 'ow.ly',
      'short.link', 'tiny.cc', 'rb.gy', 'is.gd'
    ]
    
    const suspiciousTlds = ['.tk', '.ml', '.ga', '.cf', '.click', '.download']
    
    for (const url of urls) {
      // Vérifier les raccourcisseurs d'URL
      if (suspiciousDomains.some(domain => url.includes(domain))) {
        return { suspicious: true, reason: 'shortened_url' }
      }
      
      // Vérifier les TLD suspects
      if (suspiciousTlds.some(tld => url.includes(tld))) {
        return { suspicious: true, reason: 'suspicious_domain' }
      }
      
      // Trop d'URLs dans un message court
      if (urls.length > 2 && text.length < 200) {
        return { suspicious: true, reason: 'too_many_urls' }
      }
    }
    
    return { suspicious: false }
  }

  // Analyse du contenu
  const analyzeMessage = (message) => {
    if (!message || message.trim().length < 10) {
      return { isSpam: false, score: 0, reasons: [] }
    }

    let spamScore = 0
    const reasons = []
    const text = message.toLowerCase()

    // 1. Vérifier les mots-clés spam
    const foundSpamWords = spamKeywords.filter(keyword => 
      text.includes(keyword.toLowerCase())
    )
    if (foundSpamWords.length > 0) {
      spamScore += foundSpamWords.length * 10
      reasons.push(`Mots suspects détectés: ${foundSpamWords.join(', ')}`)
    }

    // 2. Vérifier les patterns suspects
    for (const pattern of suspiciousPatterns) {
      if (pattern.test(message)) {
        spamScore += 15
        reasons.push('Format de texte suspect détecté')
        break
      }
    }

    // 3. Vérifier les URLs
    const urlCheck = detectSuspiciousUrls(message)
    if (urlCheck.suspicious) {
      spamScore += 20
      const urlReasons = {
        'shortened_url': 'Liens raccourcis non autorisés',
        'suspicious_domain': 'Domaine suspect détecté',
        'too_many_urls': 'Trop de liens dans le message'
      }
      reasons.push(urlReasons[urlCheck.reason])
    }

    // 4. Ratio majuscules/minuscules
    const uppercaseRatio = (message.match(/[A-Z]/g) || []).length / message.length
    if (uppercaseRatio > 0.3 && message.length > 20) {
      spamScore += 10
      reasons.push('Trop de majuscules')
    }

    // 5. Caractères spéciaux excessifs
    const specialCharsRatio = (message.match(/[!@#$%^&*()_+=\[\]{}|;':",./<>?]/g) || []).length / message.length
    if (specialCharsRatio > 0.2) {
      spamScore += 10
      reasons.push('Trop de caractères spéciaux')
    }

    // 6. Message trop court mais avec beaucoup d'URLs
    const urlCount = (message.match(/(https?:\/\/[^\s]+)/gi) || []).length
    if (urlCount > 0 && message.length < 50) {
      spamScore += 15
      reasons.push('Message trop court avec des liens')
    }

    // 7. Répétitions excessives
    if (/(.{3,})\1{2,}/.test(message)) {
      spamScore += 10
      reasons.push('Répétitions suspectes détectées')
    }

    const result = {
      isSpam: spamScore >= 15, // Seuil plus strict
      score: spamScore,
      reasons: reasons,
      severity: spamScore >= 30 ? 'high' : spamScore >= 15 ? 'medium' : 'low'
    }
    
    // Mode debug - supprimez cette ligne en production
    if (spamScore > 0) console.log('🛡️ Spam Analysis:', result)
    
    return result
  }

  const getSpamMessage = (analysis) => {
    if (!analysis.isSpam) return ''
    
    if (analysis.severity === 'high') {
      return 'Ce message contient du contenu inapproprié et ne peut pas être envoyé.'
    } else {
      return 'Ce message pourrait être considéré comme spam. Veuillez le reformuler.'
    }
  }

  return {
    analyzeMessage,
    getSpamMessage
  }
}
