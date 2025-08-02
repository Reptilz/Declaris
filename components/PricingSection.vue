<template>
  <section class="py-20 bg-gray-50">
    <div class="container px-4 mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">
          Tarifs simples et transparents
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Choisissez la formule qui correspond à vos besoins d'indépendant.
        </p>
      </div>

      <!-- Plans -->
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- Plan Gratuit -->
        <div class="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-gray-800 mb-2">Gratuit</h3>
            <div class="mb-4">
              <span class="text-4xl font-bold text-gray-900">0€</span>
              <span class="text-gray-600">/mois</span>
            </div>
            <p class="text-gray-600">Pour découvrir Declaris</p>
          </div>
          
          <ul class="space-y-4 mb-8">
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">Jusqu'à 3 rappels par mois</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">Notifications par email uniquement</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">Calendrier de base</span>
            </li>
          </ul>
          
          <button class="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 transition-colors cursor-pointer">
            Commencer gratuitement
          </button>
        </div>

        <!-- Plan Premium (Populaire) -->
        <div class="bg-white rounded-xl shadow-lg p-8 border-2 border-indigo-500 relative">
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span class="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Populaire</span>
          </div>
          
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-gray-800 mb-2">Premium</h3>
            <div class="mb-4">
              <span class="text-4xl font-bold text-gray-900">9€</span>
              <span class="text-gray-600">/mois</span>
            </div>
            <p class="text-gray-600">Pour ne jamais rien oublier</p>
          </div>
          
          <ul class="space-y-4 mb-8">
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">Rappels illimités</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">Notifications email + SMS</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">Rappels personnalisés</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">Calendrier avancé</span>
            </li>
          </ul>
          
          <button class="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors cursor-pointer">
            Choisir Premium
          </button>
        </div>

        <!-- Plan Pro -->
        <div class="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-gray-800 mb-2">Pro</h3>
            <div class="mb-4">
              <span class="text-4xl font-bold text-gray-900">19€</span>
              <span class="text-gray-600">/mois</span>
            </div>
            <p class="text-gray-600">Pour les professionnels exigeants</p>
          </div>
          
          <ul class="space-y-4 mb-8">
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">Tout du plan Premium</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">Historique complet des échéances</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">Export PDF des rappels</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">Support téléphonique dédié</span>
            </li>
          </ul>
          
          <button class="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 transition-colors cursor-pointer">
            Choisir Pro
          </button>
        </div>

      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-12">
        <p class="text-gray-600 mb-4">
          Une question sur nos tarifs ? Nous sommes là pour vous aider.
        </p>
        <NuxtLink to="/contact" class="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold group">
          Nous contacter
          <svg class="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
// Aucune logique nécessaire pour ce composant statique
</script>
