<template>
  <div class="container mx-auto px-8 py-16">
    <div class="max-w-2xl mx-auto">
      <h1 class="text-4xl font-bold text-gray-800 mb-6">Contactez-nous</h1>
      <p class="text-xl text-gray-600 mb-8">
        Une question ? Un problème ? Notre équipe est là pour vous aider.
      </p>
      
      <div class="bg-white rounded-lg shadow-lg p-8">
        <form class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
              Nom complet
            </label>
            <input 
              type="text" 
              id="name" 
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Votre nom"
            >
          </div>
          
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input 
              type="email" 
              id="email" 
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="votre@email.com"
            >
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea 
              id="message" 
              rows="5"
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Votre message..."
            ></textarea>
          </div>
          
          <button 
            type="submit"
            class="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors font-medium"
          >
            Envoyer le message
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
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
