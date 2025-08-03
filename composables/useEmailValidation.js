export const useEmailValidation = () => {
  const validateEmail = async (email) => {
    try {
      const result = await $fetch('/api/validate-email', {
        method: 'POST',
        body: { email }
      })
      
      return result
    } catch (error) {
      console.error('Email validation error:', error)
      // En cas d'erreur API, on considère l'email comme valide pour ne pas bloquer l'utilisateur
      return {
        valid: true,
        reason: 'validation_unavailable'
      }
    }
  }

  const getErrorMessage = (reason) => {
    const messages = {
      'invalid_format': 'Format d\'email invalide',
      'disposable_email': 'Les adresses email temporaires ne sont pas autorisées',
      'no_mx_record': 'Ce domaine email n\'existe pas',
      'domain_not_found': 'Ce domaine email n\'existe pas',
      'validation_unavailable': 'Validation temporairement indisponible'
    }
    
    return messages[reason] || 'Email invalide'
  }

  return {
    validateEmail,
    getErrorMessage
  }
}
