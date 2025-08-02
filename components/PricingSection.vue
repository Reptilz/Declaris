<template>
  <section id="pricing" class="py-16 bg-gray-50">
    <div class="container mx-auto px-4 xl:px-0">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Tarifs transparents
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Choisissez le plan qui correspond à vos besoins. Pas de frais cachés, pas d'engagement.
        </p>
      </div>

      <!-- Pricing Cards -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        <!-- Plan Starter -->
        <div class="bg-white rounded-lg shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
          <div class="text-center">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Starter</h3>
            <p class="text-gray-600 mb-6">Parfait pour débuter</p>
            <div class="mb-6">
              <span class="text-4xl font-bold text-indigo-600">9€</span>
              <span class="text-gray-600">/mois</span>
            </div>
          </div>
          
          <ul class="space-y-3 mb-8">
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">Jusqu'à 5 déclarations/an</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">Rappels automatiques</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">Support email</span>
            </li>
          </ul>
          
          <button class="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
            Commencer
          </button>
        </div>

        <!-- Plan Pro (Featured) -->
        <div class="bg-white rounded-lg shadow-lg p-8 border-2 border-indigo-500 hover:shadow-xl transition-shadow relative">
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span class="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Populaire
            </span>
          </div>
          
          <div class="text-center">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Pro</h3>
            <p class="text-gray-600 mb-6">Pour les indépendants actifs</p>
            <div class="mb-6">
              <span class="text-4xl font-bold text-indigo-600">19€</span>
              <span class="text-gray-600">/mois</span>
            </div>
          </div>
          
          <ul class="space-y-3 mb-8">
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">Déclarations illimitées</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">Gestion multi-activités</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">Export comptable</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">Support prioritaire</span>
            </li>
          </ul>
          
          <button class="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
            Commencer
          </button>
        </div>

        <!-- Plan Enterprise -->
        <div class="bg-white rounded-lg shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
          <div class="text-center">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
            <p class="text-gray-600 mb-6">Pour les grandes structures</p>
            <div class="mb-6">
              <span class="text-4xl font-bold text-indigo-600">39€</span>
              <span class="text-gray-600">/mois</span>
            </div>
          </div>
          
          <ul class="space-y-3 mb-8">
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">Tout du plan Pro</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">Gestion d'équipe</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">API personnalisée</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">Support dédié</span>
            </li>
          </ul>
          
          <button class="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
            Nous contacter
          </button>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-12">
        <p class="text-gray-600 mb-4">
          Besoin d'aide pour choisir ? Nous sommes là pour vous accompagner.
        </p>
        <NuxtLink to="/contact" class="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold group">
          Contactez notre équipe
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
