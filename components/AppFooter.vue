<template>
  <footer class="bg-white border-t border-gray-100">
    <div class="container p-8 mx-auto xl:px-0">
      <div class="flex flex-wrap text-left lg:text-left">
        <div class="w-full px-4 lg:w-2/6">
          <div class="flex flex-col justify-between h-full pb-6 pr-6">
            <div>
              <h3 class="text-2xl font-bold text-indigo-600">Declaris</h3>
              <div class="flex mt-2 mb-4 text-left text-gray-600">
                La solution de gestion fiscale pour les indépendants belges. Simplifiez vos obligations et ne ratez plus jamais une échéance.
              </div>
            </div>
            <div class="mt-2">
              <div class="text-sm text-gray-600">
                Copyright © {{ currentYear }} Declaris. Tous droits réservés.
              </div>
            </div>
          </div>
        </div>

        <div class="w-full px-4 lg:w-1/6">
          <div class="flex flex-col justify-between h-full pb-6">
            <div>
              <h4 class="mb-2 font-bold text-gray-800">Produit</h4>
              <ul class="text-gray-600">
                <li class="mb-2">
                  <NuxtLink to="/#features" class="hover:text-indigo-600 focus:text-indigo-600 focus:outline-none focus:underline transition-colors">
                    Fonctionnalités
                  </NuxtLink>
                </li>
                <li class="mb-2">
                  <NuxtLink to="/#pricing" class="hover:text-indigo-600 focus:text-indigo-600 focus:outline-none focus:underline transition-colors">
                    Tarifs
                  </NuxtLink>
                </li>
                <li class="mb-2">
                  <NuxtLink to="/faq" class="hover:text-indigo-600 focus:text-indigo-600 focus:outline-none focus:underline transition-colors">
                    FAQ
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="w-full px-4 lg:w-1/6">
          <div class="flex flex-col justify-between h-full pb-6">
            <div>
              <h4 class="mb-2 font-bold text-gray-800">Support</h4>
              <ul class="text-gray-600">
                <li class="mb-2">
                  <NuxtLink to="/contact" class="hover:text-indigo-600 focus:text-indigo-600 focus:outline-none focus:underline transition-colors">
                    Contact
                  </NuxtLink>
                </li>
                <li class="mb-2">
                  <NuxtLink to="/docs" class="hover:text-indigo-600 focus:text-indigo-600 focus:outline-none focus:underline transition-colors">
                    Documentation
                  </NuxtLink>
                </li>
                <li class="mb-2">
                  <NuxtLink to="/help" class="hover:text-indigo-600 focus:text-indigo-600 focus:outline-none focus:underline transition-colors">
                    Aide
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="w-full px-4 lg:w-1/6">
          <div class="flex flex-col justify-between h-full pb-6">
            <div>
              <h4 class="mb-2 font-bold text-gray-800">Légal</h4>
              <ul class="text-gray-600">
                <li class="mb-2">
                  <NuxtLink to="/terms" class="hover:text-indigo-600 focus:text-indigo-600 focus:outline-none focus:underline transition-colors">
                    Conditions d'utilisation
                  </NuxtLink>
                </li>
                <li class="mb-2">
                  <NuxtLink to="/privacy" class="hover:text-indigo-600 focus:text-indigo-600 focus:outline-none focus:underline transition-colors">
                    Politique de confidentialité
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Année dynamique pour le copyright
const currentYear = new Date().getFullYear()
</script>
