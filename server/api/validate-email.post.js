import dns from 'dns'
import { promisify } from 'util'

const resolveMx = promisify(dns.resolveMx)

export default defineEventHandler(async (event) => {
  try {
    const { email } = await readBody(event)
    
    if (!email) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Email is required'
      })
    }

    // Validation format basique
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        valid: false,
        reason: 'invalid_format'
      }
    }

    // Extraire le domaine
    const domain = email.split('@')[1]
    
    // Liste des domaines jetables/temporaires à bloquer
    const disposableDomains = [
      '10minutemail.com',
      'tempmail.org',
      'guerrillamail.com',
      'mailinator.com',
      'yopmail.com',
      'temp-mail.org',
      'throwaway.email'
    ]
    
    if (disposableDomains.includes(domain.toLowerCase())) {
      return {
        valid: false,
        reason: 'disposable_email'
      }
    }

    // Vérification MX records
    try {
      const mxRecords = await resolveMx(domain)
      
      if (!mxRecords || mxRecords.length === 0) {
        return {
          valid: false,
          reason: 'no_mx_record'
        }
      }

      return {
        valid: true,
        reason: 'valid'
      }
    } catch (dnsError) {
      return {
        valid: false,
        reason: 'domain_not_found'
      }
    }

  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Email validation failed'
    })
  }
})
