<template>
  <nav class="bg-white/95 backdrop-blur-md fixed w-full z-50 top-0 left-0 border-b border-gray-100 shadow-sm">
    <div class="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-4 w-full">
      
      <!-- Mobile: Hamburger à gauche -->
      <button 
        @click="toggleMobileMenu" 
        type="button" 
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors" 
        aria-controls="navbar-sticky" 
        :aria-expanded="showMobileMenu"
      >
        <span class="sr-only">{{ showMobileMenu ? 'Fermer le menu' : 'Ouvrir le menu principal' }}</span>
        <div class="w-5 h-5 flex flex-col justify-center items-center">
          <span 
            :class="{
              'rotate-45 translate-y-1.5': showMobileMenu,
              'rotate-0 translate-y-0': !showMobileMenu
            }"
            class="block w-5 h-0.5 bg-current transition-all duration-300 ease-out"
          ></span>
          <span 
            :class="{
              'opacity-0': showMobileMenu,
              'opacity-100': !showMobileMenu
            }"
            class="block w-5 h-0.5 bg-current mt-1 transition-all duration-300 ease-out"
          ></span>
          <span 
            :class="{
              '-rotate-45 -translate-y-1.5': showMobileMenu,
              'rotate-0 translate-y-0': !showMobileMenu
            }"
            class="block w-5 h-0.5 bg-current mt-1 transition-all duration-300 ease-out"
          ></span>
        </div>
      </button>
      
      <!-- Logo (centré sur mobile, à gauche sur desktop) -->
      <NuxtLink to="/" class="flex items-center space-x-3 text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-all duration-300 group md:order-1">
        <span class="transform group-hover:scale-110 transition-transform duration-300">
          <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </span>
        <span class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">Declaris</span>
      </NuxtLink>
      
      <!-- Desktop: Actions (langue + bouton) -->
      <div class="hidden md:flex md:order-2 items-center gap-3">
        <!-- Sélecteur de langue (desktop seulement) -->
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
            <svg class="w-2.5 h-2.5 ms-1 md:ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
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

        <!-- Bouton Se connecter (desktop) -->
        <NuxtLink to="/login" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group overflow-hidden">
          <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span class="relative flex items-center gap-2">
            Espace client
            <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </span>
        </NuxtLink>
      </div>
      
      <!-- Mobile: Icône utilisateur à droite -->
      <NuxtLink to="/login" class="md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
      </NuxtLink>
      
      <!-- Navigation desktop -->
      <div class="hidden md:flex md:order-1">
        <ul class="flex font-medium space-x-10">
          <li>
            <a 
              href="#features" 
              class="relative block py-2 text-base text-gray-900 hover:text-indigo-600 transition-colors duration-300 group"
            >
              <span>Fonctionnalités</span>
              <span class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-indigo-600 group-hover:w-3/4 transition-all duration-300 ease-out"></span>
            </a>
          </li>
          <li>
            <a 
              href="#pricing" 
              class="relative block py-2 text-base text-gray-900 hover:text-indigo-600 transition-colors duration-300 group"
            >
              <span>Tarifs</span>
              <span class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-indigo-600 group-hover:w-3/4 transition-all duration-300 ease-out"></span>
            </a>
          </li>
          <li>
            <NuxtLink 
              to="/contact" 
              class="relative block py-2 text-base text-gray-900 hover:text-indigo-600 transition-colors duration-300 group"
            >
              <span>Contact</span>
              <span class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-indigo-600 group-hover:w-3/4 transition-all duration-300 ease-out"></span>
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Navigation mobile -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div 
          v-show="showMobileMenu"
          class="absolute top-full left-0 w-full h-screen bg-white border-b border-gray-100 shadow-lg overflow-y-auto z-50 md:hidden" 
          id="navbar-sticky"
        >
        <ul class="flex flex-col p-4 font-medium">
          <!-- Navigation links -->
          <li>
            <a 
              href="#features" 
              @click="closeMobileMenu"
              class="relative flex items-center justify-between py-3 px-3 text-gray-900 hover:bg-gray-100 transition-colors duration-300 border-b border-gray-100"
            >
              <span>Fonctionnalités</span>
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </li>
          <li>
            <a 
              href="#pricing" 
              @click="closeMobileMenu"
              class="relative flex items-center justify-between py-3 px-3 text-gray-900 hover:bg-gray-100 transition-colors duration-300 border-b border-gray-100"
            >
              <span>Tarifs</span>
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </li>
          <li>
            <NuxtLink 
              to="/contact" 
              @click="closeMobileMenu"
              class="relative flex items-center justify-between py-3 px-3 text-gray-900 hover:bg-gray-100 transition-colors duration-300 border-b border-gray-100"
            >
              <span>Contact</span>
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </NuxtLink>
          </li>
          
          <!-- Sélecteur de langue (mobile seulement) -->
          <li class="md:hidden border-t border-gray-200 pt-4 mt-2">
            <div class="px-3 py-2 text-sm font-medium text-gray-500 uppercase tracking-wider">Langue</div>
            <button 
              @click="selectLanguage('fr')"
              :class="{'bg-indigo-50 text-indigo-600': selectedLanguage === 'fr'}"
              class="w-full text-left flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <svg class="w-4 h-4 rounded-full me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <g fill-rule="evenodd" stroke-width="1pt">
                  <path fill="#fff" d="M0 0h512v512H0z"/>
                  <path fill="#002654" d="M0 0h170.7v512H0z"/>
                  <path fill="#ce1126" d="M341.3 0H512v512H341.3z"/>
                </g>
              </svg>
              Français
            </button>
            <button 
              @click="selectLanguage('nl')"
              :class="{'bg-indigo-50 text-indigo-600': selectedLanguage === 'nl'}"
              class="w-full text-left flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <svg class="w-4 h-4 rounded-full me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="#21468b" d="M0 0h512v170.7H0z"/>
                <path fill="#fff" d="M0 170.7h512v341.3H0z"/>
                <path fill="#ae1c28" d="M0 341.3h512V512H0z"/>
              </svg>
              Nederlands
            </button>
            <button 
              @click="selectLanguage('de')"
              :class="{'bg-indigo-50 text-indigo-600': selectedLanguage === 'de'}"
              class="w-full text-left flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <svg class="w-4 h-4 rounded-full me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M0 0h512v170.7H0z"/>
                <path fill="#de2910" d="M0 170.7h512v170.6H0z"/>
                <path fill="#ffce00" d="M0 341.3h512V512H0z"/>
              </svg>
              Deutsch
            </button>
            <button 
              @click="selectLanguage('en')"
              :class="{'bg-indigo-50 text-indigo-600': selectedLanguage === 'en'}"
              class="w-full text-left flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <svg class="w-4 h-4 rounded-full me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="#012169" d="M0 0h512v512H0z"/>
                <path fill="#FFF" d="m0 0 512 512M512 0 0 512"/>
                <path fill="#C8102E" d="m0 0 512 512M512 0 0 512" stroke="#FFF" stroke-width="102.4"/>
                <path fill="#FFF" d="M0 204.8h512v102.4H0z"/>
                <path fill="#C8102E" d="M0 204.8h512v102.4H0" stroke="#FFF" stroke-width="68.3"/>
                <path fill="#FFF" d="M204.8 0v512h102.4V0z"/>
                <path fill="#C8102E" d="M204.8 0v512h102.4V0" stroke="#FFF" stroke-width="68.3"/>
              </svg>
              English
            </button>
          </li>
        </ul>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
// Gestion des langues
const selectedLanguage = ref('fr')
const showLanguageDropdown = ref(false)

// Gestion du menu mobile
const showMobileMenu = ref(false)

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

// Basculer l'affichage du dropdown langue
const toggleLanguageDropdown = () => {
  showLanguageDropdown.value = !showLanguageDropdown.value
}

// Basculer le menu mobile
const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
  // Bloquer/débloquer le scroll de la page
  if (process.client) {
    if (showMobileMenu.value) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
}

// Fermer le menu mobile
const closeMobileMenu = () => {
  showMobileMenu.value = false
  // Débloquer le scroll de la page
  if (process.client) {
    document.body.style.overflow = ''
  }
}

// Nettoyer le style overflow au démontage
onUnmounted(() => {
  if (process.client) {
    document.body.style.overflow = ''
  }
})

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

// Fermer les dropdowns si on clique ailleurs
const closeDropdownsOnClickOutside = (event) => {
  if (!event.target.closest('.relative')) {
    showLanguageDropdown.value = false
  }
  // Fermer le menu mobile si on clique sur un lien
  if (event.target.closest('a')) {
    showMobileMenu.value = false
  }
}

// Charger la langue préférée au montage
onMounted(() => {
  if (process.client) {
    const savedLang = localStorage.getItem('preferred-language')
    if (savedLang) {
      selectedLanguage.value = savedLang
    }
    
    // Écouter les clics pour fermer les dropdowns
    document.addEventListener('click', closeDropdownsOnClickOutside)
  }
})

// Nettoyer l'écouteur d'événements
onUnmounted(() => {
  if (process.client) {
    document.removeEventListener('click', closeDropdownsOnClickOutside)
  }
})
</script>
