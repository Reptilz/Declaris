<template>
  <header class="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
    <nav class="container flex flex-wrap items-center justify-between p-6 mx-auto lg:justify-between xl:px-0">
      <!-- Logo -->
      <div class="flex items-center justify-between w-full lg:w-auto">
        <NuxtLink to="/" class="flex items-center space-x-2 text-2xl font-medium text-indigo-500">
          <span>
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </span>
          <span>Declaris</span>
        </NuxtLink>
      </div>

      <!-- Navigation -->
      <div class="hidden text-center lg:flex lg:items-center">
        <ul class="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
          <li class="mr-3 nav__item">
            <a href="#features" class="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none transition-colors">
              Fonctionnalités
            </a>
          </li>
          <li class="mr-3 nav__item">
            <a href="#pricing" class="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none transition-colors">
              Tarifs
            </a>
          </li>
          <li class="mr-3 nav__item">
            <NuxtLink to="/contact" class="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none transition-colors">
              Contact
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="flex items-center gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
        <!-- Sélecteur de langue -->
        <div class="relative">
          <button 
            @click="toggleLanguageDropdown"
            type="button" 
            class="inline-flex items-center font-medium justify-center px-3 py-2 text-sm text-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
          >
            <svg v-if="selectedLanguage === 'fr'" class="w-4 h-4 rounded-full me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <g fill-rule="evenodd" stroke-width="1pt">
                <path fill="#fff" d="M0 0h512v512H0z"/>
                <path fill="#002654" d="M0 0h170.7v512H0z"/>
                <path fill="#ce1126" d="M341.3 0H512v512H341.3z"/>
              </g>
            </svg>
            <svg v-else-if="selectedLanguage === 'nl'" class="w-4 h-4 rounded-full me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="#21468b" d="M0 0h512v170.7H0z"/>
              <path fill="#fff" d="M0 170.7h512v341.3H0z"/>
              <path fill="#ae1c28" d="M0 341.3h512V512H0z"/>
            </svg>
            <svg v-else-if="selectedLanguage === 'de'" class="w-4 h-4 rounded-full me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M0 0h512v170.7H0z"/>
              <path fill="#de2910" d="M0 170.7h512v170.6H0z"/>
              <path fill="#ffce00" d="M0 341.3h512V512H0z"/>
            </svg>
            <svg v-else class="w-4 h-4 rounded-full me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="#012169" d="M0 0h512v512H0z"/>
              <path fill="#FFF" d="m0 0 512 512M512 0 0 512"/>
              <path fill="#C8102E" d="m0 0 512 512M512 0 0 512" stroke="#FFF" stroke-width="102.4"/>
              <path fill="#FFF" d="M0 204.8h512v102.4H0z"/>
              <path fill="#C8102E" d="M0 204.8h512v102.4H0" stroke="#FFF" stroke-width="68.3"/>
              <path fill="#FFF" d="M204.8 0v512h102.4V0z"/>
              <path fill="#C8102E" d="M204.8 0v512h102.4V0" stroke="#FFF" stroke-width="68.3"/>
            </svg>
            {{ getLanguageLabel(selectedLanguage) }}
            <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
          </button>
          
          <!-- Dropdown -->
          <div v-show="showLanguageDropdown" class="absolute right-0 z-50 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow-lg border border-gray-200">
            <ul class="py-2 text-sm" role="menu">
              <li>
                <button 
                  @click="selectLanguage('fr')"
                  class="w-full text-left block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition-colors"
                  role="menuitem"
                >
                  <div class="inline-flex items-center">
                    <svg class="w-4 h-4 rounded-full me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <g fill-rule="evenodd" stroke-width="1pt">
                        <path fill="#fff" d="M0 0h512v512H0z"/>
                        <path fill="#002654" d="M0 0h170.7v512H0z"/>
                        <path fill="#ce1126" d="M341.3 0H512v512H341.3z"/>
                      </g>
                    </svg>
                    Français
                  </div>
                </button>
              </li>
              <li>
                <button 
                  @click="selectLanguage('nl')"
                  class="w-full text-left block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition-colors"
                  role="menuitem"
                >
                  <div class="inline-flex items-center">
                    <svg class="w-4 h-4 rounded-full me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="#21468b" d="M0 0h512v170.7H0z"/>
                      <path fill="#fff" d="M0 170.7h512v341.3H0z"/>
                      <path fill="#ae1c28" d="M0 341.3h512V512H0z"/>
                    </svg>
                    Nederlands
                  </div>
                </button>
              </li>
              <li>
                <button 
                  @click="selectLanguage('de')"
                  class="w-full text-left block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition-colors"
                  role="menuitem"
                >
                  <div class="inline-flex items-center">
                    <svg class="w-4 h-4 rounded-full me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M0 0h512v170.7H0z"/>
                      <path fill="#de2910" d="M0 170.7h512v170.6H0z"/>
                      <path fill="#ffce00" d="M0 341.3h512V512H0z"/>
                    </svg>
                    Deutsch
                  </div>
                </button>
              </li>
              <li>
                <button 
                  @click="selectLanguage('en')"
                  class="w-full text-left block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition-colors"
                  role="menuitem"
                >
                  <div class="inline-flex items-center">
                    <svg class="w-4 h-4 rounded-full me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="#012169" d="M0 0h512v512H0z"/>
                      <path fill="#FFF" d="m0 0 512 512M512 0 0 512"/>
                      <path fill="#C8102E" d="m0 0 512 512M512 0 0 512" stroke="#FFF" stroke-width="102.4"/>
                      <path fill="#FFF" d="M0 204.8h512v102.4H0z"/>
                      <path fill="#C8102E" d="M0 204.8h512v102.4H0" stroke="#FFF" stroke-width="68.3"/>
                      <path fill="#FFF" d="M204.8 0v512h102.4V0z"/>
                      <path fill="#C8102E" d="M204.8 0v512h102.4V0" stroke="#FFF" stroke-width="68.3"/>
                    </svg>
                    English
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bouton Se connecter -->
        <NuxtLink to="/login" class="px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors">
          Se connecter
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup>
// Gestion des langues
const selectedLanguage = ref('fr')
const showLanguageDropdown = ref(false)

// Labels des langues
const getLanguageLabel = (lang) => {
  const labels = {
    'fr': 'Français',
    'nl': 'Nederlands',
    'de': 'Deutsch',
    'en': 'English'
  }
  return labels[lang] || 'Français'
}

// Basculer l'affichage du dropdown
const toggleLanguageDropdown = () => {
  showLanguageDropdown.value = !showLanguageDropdown.value
}

// Sélectionner une langue
const selectLanguage = (lang) => {
  selectedLanguage.value = lang
  showLanguageDropdown.value = false
  
  // Ici vous pourrez plus tard intégrer avec vue-i18n ou votre système de traduction
  console.log('Langue changée vers:', lang)
  
  // Sauvegarder la préférence dans localStorage
  if (process.client) {
    localStorage.setItem('preferred-language', lang)
  }
}

// Fermer le dropdown si on clique ailleurs
const closeDropdownOnClickOutside = (event) => {
  if (!event.target.closest('.relative')) {
    showLanguageDropdown.value = false
  }
}

// Charger la langue préférée au montage
onMounted(() => {
  if (process.client) {
    const savedLang = localStorage.getItem('preferred-language')
    if (savedLang) {
      selectedLanguage.value = savedLang
    }
    
    // Écouter les clics pour fermer le dropdown
    document.addEventListener('click', closeDropdownOnClickOutside)
  }
})

// Nettoyer l'écouteur d'événements
onUnmounted(() => {
  if (process.client) {
    document.removeEventListener('click', closeDropdownOnClickOutside)
  }
})
</script>
