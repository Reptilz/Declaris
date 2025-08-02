<template>
  <div class="relative w-full flex flex-col items-center" 
       @mouseenter="isHovered = true" 
       @mouseleave="isHovered = false">
    <!-- Stack de cartes -->
    <div class="relative">
      <!-- Cartes arrière (autres cartes) -->
      <div 
        v-for="(card, index) in cards" 
        :key="card.id"
        v-show="index !== currentCard"
        :class="[
          'absolute w-96 h-56 rounded-xl shadow-lg transform transition-all duration-500',
          card.color === 'green' ? 'bg-gradient-to-br from-green-50 to-green-100' : '',
          card.color === 'amber' ? 'bg-gradient-to-br from-amber-50 to-amber-100' : '',
          card.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-blue-100' : '',
          index === (currentCard + 1) % cards.length ? 'top-4 left-4 rotate-3 z-10' : 'top-8 left-8 rotate-6 z-0'
        ]">
        <div class="p-10">
          <div class="flex items-center space-x-4 mb-8">
            <div :class="[
              'w-5 h-5 rounded-full',
              card.color === 'green' ? 'bg-green-500' : '',
              card.color === 'amber' ? 'bg-amber-500' : '',
              card.color === 'blue' ? 'bg-blue-500' : ''
            ]"></div>
            <span class="text-lg font-medium text-gray-700">{{ card.title }}</span>
          </div>
          <div class="text-base text-gray-500">{{ card.date }}</div>
        </div>
      </div>
      
      <!-- Carte avant (active) -->
      <div class="relative w-96 h-56 bg-white rounded-xl shadow-xl border border-gray-100 z-20 transition-all duration-500 hover:scale-105">
        <div class="p-10">
          <div class="flex items-center justify-between mb-8">
            <div class="flex items-center space-x-4">
              <div :class="[
                'w-5 h-5 rounded-full',
                cards[currentCard].color === 'green' ? 'bg-green-500' : '',
                cards[currentCard].color === 'amber' ? 'bg-amber-500' : '',
                cards[currentCard].color === 'blue' ? 'bg-blue-500' : ''
              ]"></div>
              <span class="text-lg font-medium text-gray-800">{{ cards[currentCard].title }}</span>
            </div>
            <div :class="[
              'w-8 h-8 font-bold text-2xl flex items-center justify-center',
              cards[currentCard].color === 'green' ? 'text-green-500' : '',
              cards[currentCard].color === 'amber' ? 'text-amber-500' : '',
              cards[currentCard].color === 'blue' ? 'text-blue-500' : ''
            ]">
              {{ getStatusIcon(cards[currentCard].status) }}
            </div>
          </div>
          <div class="text-base text-gray-500 mb-6">{{ cards[currentCard].date }}</div>
          <div :class="[
            'text-base font-medium',
            cards[currentCard].color === 'green' ? 'text-green-600' : '',
            cards[currentCard].color === 'amber' ? 'text-amber-600' : '',
            cards[currentCard].color === 'blue' ? 'text-blue-600' : ''
          ]">
            {{ getStatusIcon(cards[currentCard].status) }} {{ getStatusText(cards[currentCard].status) }}
          </div>
        </div>
      </div>
    </div>
    
    <!-- Indicateurs interactifs centrés -->
    <div class="flex justify-center mt-12">
      <div class="flex space-x-2">
        <button 
          v-for="(card, index) in cards" 
          :key="card.id"
          @click="changeCard(index)"
          :class="[
            'w-3 h-3 rounded-full transition-all duration-300 hover:scale-125',
            index === currentCard ? 'bg-indigo-600 scale-110' : 'bg-indigo-300 hover:bg-indigo-400'
          ]"
        ></button>
      </div>
    </div>
    
    <!-- Texte descriptif centré et réactif -->
    <div class="text-center mt-8 max-w-md">
      <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ getCardTitle(cards[currentCard].status) }}</h3>
      <p class="text-gray-600 text-base">{{ getCardDescription(cards[currentCard].status) }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// État de la carte active et du survol
const currentCard = ref(0)
const isHovered = ref(false)
let autoRotationInterval = null

// Données des cartes avec les différents statuts
const cards = ref([
  {
    id: 1,
    title: 'Déclaration TVA',
    date: '20 janvier 2024',
    status: 'completed',
    color: 'green'
  },
  {
    id: 2,
    title: 'Versement anticipé',
    date: '15 février 2024',
    status: 'pending',
    color: 'amber'
  },
  {
    id: 3,
    title: 'Cotisations sociales',
    date: '31 mars 2024',
    status: 'upcoming',
    color: 'blue'
  }
])

// Change la carte active et reset l'animation au clic sur un indicateur
const changeCard = (index) => {
  currentCard.value = index
  // Reset du timer d'animation automatique
  if (autoRotationInterval) {
    clearInterval(autoRotationInterval)
  }
  startAutoRotation()
}

// Tourne les cartes automatiquement
const startAutoRotation = () => {
  autoRotationInterval = setInterval(() => {
    if (!isHovered.value) {
      currentCard.value = (currentCard.value + 1) % cards.value.length
    }
  }, 3000)
}

// Lance l'animation au montage de la page
onMounted(() => {
  startAutoRotation()
})

// Retourne l'icône selon le statut
const getStatusIcon = (status) => {
  switch (status) {
    case 'completed':
      return '✓'
    case 'pending':
      return '!'
    case 'upcoming':
      return '→'
    default:
      return '•'
  }
}

// Retourne le texte selon le statut
const getStatusText = (status) => {
  switch (status) {
    case 'completed':
      return 'Complétée'
    case 'pending':
      return 'En cours'
    case 'upcoming':
      return 'À venir'
    default:
      return 'En attente'
  }
}

// Retourne le titre selon le statut de la carte
const getCardTitle = (status) => {
  switch (status) {
    case 'completed':
      return 'Mission accomplie !'
    case 'pending':
      return 'En cours de traitement'
    case 'upcoming':
      return 'Prochaine échéance'
    default:
      return 'Chaque carte raconte une histoire'
  }
}

// Retourne la description selon le statut de la carte
const getCardDescription = (status) => {
  switch (status) {
    case 'completed':
      return 'Cette échéance a été traitée avec succès. Vous êtes à jour !'
    case 'pending':
      return 'Cette échéance est en cours. Nous vous tiendrons informé.'
    case 'upcoming':
      return 'Cette échéance arrive bientôt. Préparez vos documents.'
    default:
      return 'Vos échéances fiscales organisées dans des cartes intuitives et interactives'
  }
}
</script>
