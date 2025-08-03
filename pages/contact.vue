<template>
  <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <!-- Effet de fond décoratif -->
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    
    <!-- En-tête -->
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Contactez-nous</h2>
      <p class="mt-2 text-lg/8 text-gray-600">Une question sur Declaris ? Notre équipe est là pour vous accompagner dans la gestion de vos échéances fiscales.</p>
    </div>
    
    <!-- Formulaire -->
    <form @submit.prevent="handleSubmit" class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="first-name" class="block text-sm/6 font-semibold text-gray-900">Prénom</label>
          <div class="mt-2.5">
            <input 
              v-model="form.firstName" 
              type="text" 
              name="first-name" 
              id="first-name" 
              autocomplete="given-name" 
              :class="[
                'block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 transition-colors',
                errors.firstName ? 'outline-red-300 focus:outline-red-600' : 'outline-gray-300 focus:outline-indigo-600'
              ]" 
            />
          </div>
          <ErrorMessage :show="!!errors.firstName" :message="errors.firstName" />
        </div>
        <div>
          <label for="last-name" class="block text-sm/6 font-semibold text-gray-900">Nom</label>
          <div class="mt-2.5">
            <input 
              v-model="form.lastName" 
              type="text" 
              name="last-name" 
              id="last-name" 
              autocomplete="family-name" 
              :class="[
                'block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 transition-colors',
                errors.lastName ? 'outline-red-300 focus:outline-red-600' : 'outline-gray-300 focus:outline-indigo-600'
              ]" 
            />
          </div>
          <ErrorMessage :show="!!errors.lastName" :message="errors.lastName" />
        </div>
        <div class="sm:col-span-2">
          <label for="company" class="block text-sm/6 font-semibold text-gray-900">Entreprise (optionnel)</label>
          <div class="mt-2.5">
            <input 
              v-model="form.company" 
              type="text" 
              name="company" 
              id="company" 
              autocomplete="organization" 
              class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" 
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm/6 font-semibold text-gray-900">Email</label>
          <div class="mt-2.5 relative">
            <input 
              v-model="form.email" 
              type="email" 
              name="email" 
              id="email" 
              autocomplete="email" 
              :class="[
                'block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 transition-colors',
                errors.email ? 'outline-red-300 focus:outline-red-600' : 'outline-gray-300 focus:outline-indigo-600'
              ]" 
            />
            <div v-if="isValidatingEmail" class="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg class="animate-spin h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
          </div>
          <ErrorMessage :show="!!errors.email" :message="errors.email" />
        </div>
        <div class="sm:col-span-2">
          <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Numéro de téléphone (optionnel)</label>
          <div class="mt-2.5">
            <input
              type="tel"
              name="phone"
              id="phone"
              v-model="form.phone"
              placeholder="+32 123 45 67 89"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm/6 font-semibold text-gray-900">Message</label>
          <div class="mt-2.5">
            <textarea 
              v-model="form.message" 
              name="message" 
              id="message" 
              rows="4" 
              :class="[
                'block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 transition-colors',
                errors.message ? 'outline-red-300 focus:outline-red-600' : 'outline-gray-300 focus:outline-indigo-600'
              ]" 
              placeholder="Décrivez votre question ou votre besoin..."
            ></textarea>
          </div>
          <ErrorMessage :show="!!errors.message" :message="errors.message" />
        </div>
        <div class="flex gap-x-4 sm:col-span-2">
          <div class="flex h-6 items-center">
            <div class="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-[:checked]:bg-indigo-600 has-[:focus-visible]:outline-2">
              <span class="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-[:checked]:translate-x-3.5" />
              <input 
                v-model="form.agreeToPolicy" 
                type="checkbox" 
                class="absolute inset-0 appearance-none focus:outline-hidden" 
                aria-label="Accepter les conditions" 
                id="agree-to-policies" 
                name="agree-to-policies" 
              />
            </div>
          </div>
          <label class="text-sm/6 text-gray-600" for="agree-to-policies">
            En cochant cette case, vous acceptez notre
            {{ ' ' }}
            <NuxtLink to="/privacy" class="font-semibold whitespace-nowrap text-indigo-600 hover:text-indigo-500">politique de confidentialité</NuxtLink>.
          </label>
        </div>
        <div class="sm:col-span-2">
          <ErrorMessage :show="!!errors.agreeToPolicy" :message="errors.agreeToPolicy" :compact="true" :alignLeft="true" />
        </div>
      </div>
      <div class="mt-10">
        <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors">Envoyer le message</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import ErrorMessage from '~/components/ui/ErrorMessage.vue'

const { validateEmail, getErrorMessage } = useEmailValidation()

// État du formulaire
const form = reactive({
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  message: '',
  agreeToPolicy: false
})

// État des erreurs
const errors = ref({})
const isValidatingEmail = ref(false)

// Watchers pour effacer les erreurs en temps réel
watch(() => form.firstName, (newValue) => {
  if (newValue.trim() && errors.value.firstName) {
    delete errors.value.firstName
  }
})

watch(() => form.lastName, (newValue) => {
  if (newValue.trim() && errors.value.lastName) {
    delete errors.value.lastName
  }
})

watch(() => form.email, async (newValue) => {
  if (newValue.trim() && errors.value.email) {
    delete errors.value.email
  }
  
  // Validation email en temps réel (avec debounce)
  if (newValue.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newValue)) {
    clearTimeout(emailValidationTimeout)
    emailValidationTimeout = setTimeout(async () => {
      isValidatingEmail.value = true
      try {
        const result = await validateEmail(newValue)
        console.log('Email validation result:', result)
        isValidatingEmail.value = false
        
        if (result && !result.valid && result.reason !== 'validation_unavailable') {
          errors.value.email = getErrorMessage(result.reason)
        }
      } catch (error) {
        console.error('Email validation error in watch:', error)
        isValidatingEmail.value = false
      }
    }, 1000) // Attendre 1 seconde après que l'utilisateur arrête de taper
  }
})

let emailValidationTimeout = null

watch(() => form.message, (newValue) => {
  if (newValue.trim() && errors.value.message) {
    delete errors.value.message
  }
})

watch(() => form.agreeToPolicy, (newValue) => {
  if (newValue && errors.value.agreeToPolicy) {
    delete errors.value.agreeToPolicy
  }
})

// Fonction de validation
const validateForm = async () => {
  const newErrors = {}
  
  // Validation prénom
  if (!form.firstName.trim()) {
    newErrors.firstName = 'Le prénom est requis'
  }
  
  // Validation nom
  if (!form.lastName.trim()) {
    newErrors.lastName = 'Le nom est requis'
  }
  
  // Validation email
  if (!form.email.trim()) {
    newErrors.email = 'L\'email est requis'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    newErrors.email = 'Format d\'email invalide'
  } else {
    // Validation email avancée
    isValidatingEmail.value = true
    try {
      const emailResult = await validateEmail(form.email)
      console.log('Email validation result in form:', emailResult)
      isValidatingEmail.value = false
      
      if (emailResult && !emailResult.valid && emailResult.reason !== 'validation_unavailable') {
        newErrors.email = getErrorMessage(emailResult.reason)
      }
    } catch (error) {
      console.error('Email validation error in form:', error)
      isValidatingEmail.value = false
    }
  }
  
  // Validation message
  if (!form.message.trim()) {
    newErrors.message = 'Le message est requis'
  }
  
  // Validation politique de confidentialité
  if (!form.agreeToPolicy) {
    newErrors.agreeToPolicy = 'Vous devez accepter la politique de confidentialité'
  }
  
  errors.value = newErrors
  return Object.keys(newErrors).length === 0
}

// Fonction de soumission
const handleSubmit = async (event) => {
  event.preventDefault()
  
  if (await validateForm()) {
    console.log('Formulaire valide:', form)
    // Ici vous pouvez envoyer les données à votre API
  } else {
    console.log('Erreurs de validation:', errors.value)
  }
}

definePageMeta({
  layout: 'default'
})

useHead({
  title: 'Contact - Declaris',
  meta: [
    { name: 'description', content: 'Contactez l\'équipe Declaris pour toute question sur notre solution de gestion fiscale.' }
  ]
})
</script>
