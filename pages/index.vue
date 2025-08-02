<template>
  <div>

    <!-- Hero Section -->
    <section class="flex items-center w-full bg-white py-16 mt-8 md:mt-16">
      <div class="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
        <div class="flex flex-col items-center w-full lg:flex-row lg:w-2/5">
          <div class="max-w-2xl mb-8">
            <h1 class="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              Ne ratez plus jamais vos 
              <span class="text-indigo-600">échéances fiscales</span>
            </h1>
            <p class="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
              Declaris vous aide à gérer vos obligations fiscales et sociales en tant qu'indépendant belge. Recevez des rappels personnalisés pour ne plus jamais oublier.
            </p>

            <div class="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a href="#" class="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Commencer gratuitement
              </a>
              <a href="#features" class="flex items-center space-x-2 text-gray-500 hover:text-indigo-600 transition-colors duration-200 group">
                <span>En savoir plus</span>
                <svg class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center w-full lg:w-3/5">
          <div class="w-full max-w-md">
            <!-- Placeholder pour illustration -->
            <div class="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 text-center">
              <div class="w-24 h-24 bg-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a4 4 0 118 0v4m-4 0v8m0-8H6a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Gestion simplifiée</h3>
              <p class="text-gray-600">Toutes vos échéances fiscales en un seul endroit</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="bg-gray-50 py-20">
      <div class="container p-8 mx-auto xl:px-0">
        <div class="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
          <!-- Cartes empilées interactives à gauche sur desktop -->
          <div class="flex items-center justify-center w-full lg:w-1/2 order-2 lg:order-1">
            <InteractiveCards />
          </div>

          <!-- Texte à droite sur desktop -->
          <div class="flex items-center justify-center w-full lg:w-1/2 order-1 lg:order-2">
            <div class="max-w-2xl mb-8">
              <h2 class="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">
                Pourquoi choisir Declaris ?
              </h2>
              <p class="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-xl">
                Une solution complète pour gérer vos obligations fiscales sans stress. Simplifiez votre quotidien d'indépendant.
              </p>

              <div class="w-full mt-5">
                <div class="flex items-start mt-8 space-x-3">
                  <div class="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11">
                    <svg class="w-7 h-7 text-indigo-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-xl font-medium text-gray-800">Rappels automatiques</h4>
                    <p class="mt-1 text-gray-500">Recevez des notifications par email avant chaque échéance importante.</p>
                  </div>
                </div>

                <div class="flex items-start mt-8 space-x-3">
                  <div class="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11">
                    <svg class="w-7 h-7 text-indigo-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-xl font-medium text-gray-800">Personnalisé pour vous</h4>
                    <p class="mt-1 text-gray-500">Configurez votre profil : statut, fréquence TVA, versements anticipés...</p>
                  </div>
                </div>

                <div class="flex items-start mt-8 space-x-3">
                  <div class="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11">
                    <svg class="w-7 h-7 text-indigo-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a4 4 0 118 0v4m-4 0v8m0-8H6a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-xl font-medium text-gray-800">Sécurisé et fiable</h4>
                    <p class="mt-1 text-gray-500">Vos données sont protégées. Interface simple et intuitive.</p>
                  </div>
                </div>
              </div>
              
              <!-- Lien En savoir plus -->
              <div class="mt-8">
                <a href="#pricing" class="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200 group">
                  Voir nos tarifs
                  <svg class="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="bg-indigo-600 py-20">
      <div class="container p-8 mx-auto xl:px-0">
        <div class="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
          <div class="flex-grow text-center lg:text-left">
            <h2 class="text-2xl font-medium lg:text-4xl">
              Prêt à simplifier votre gestion fiscale ?
            </h2>
            <p class="mt-2 text-white text-opacity-90 lg:text-xl">
              Rejoignez des centaines d'indépendants qui font confiance à Declaris
            </p>
          </div>
          <div class="flex-shrink-0 w-full text-center lg:w-auto">
            <a href="#" class="inline-flex items-center justify-center gap-2 py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 hover:bg-gray-50 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200 ease-in-out group">
              Commencer maintenant
              <svg class="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Pricing -->
    <div id="pricing">
      <PricingSection />
    </div>

  </div>
</template>

<script setup>
// Configuration de la page
definePageMeta({
  title: 'Accueil - Declaris.be',
  description: 'Ne ratez plus jamais vos échéances fiscales. Recevez des rappels personnalisés pour vos obligations TVA, cotisations sociales et versements anticipés.'
})

// Configuration du head
useHead({
  title: 'Accueil - Declaris.be',
  meta: [
    {
      name: 'description',
      content: 'Ne ratez plus jamais vos échéances fiscales. Recevez des rappels personnalisés pour vos obligations TVA, cotisations sociales et versements anticipés.'
    },
    {
      property: 'og:title',
      content: 'Declaris.be - Rappels fiscaux pour indépendants belges'
    },
    {
      property: 'og:description',
      content: 'Ne ratez plus jamais vos échéances fiscales. Recevez des rappels personnalisés pour vos obligations TVA, cotisations sociales et versements anticipés.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})
</script>
