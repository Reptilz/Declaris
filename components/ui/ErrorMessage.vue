<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-1 scale-95"
    enter-to-class="opacity-100 translate-y-0 scale-100"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0 scale-100"
    leave-to-class="opacity-0 translate-y-1 scale-95"
  >
    <div v-if="show" :class="[
      'flex items-center gap-2 text-sm text-red-600',
      alignLeft ? 'justify-start' : 'justify-end',
      compact ? 'mt-1' : 'mt-2'
    ]">
      <ExclamationCircleIcon class="w-4 h-4 flex-shrink-0" />
      <span>{{ message }}</span>
    </div>
  </Transition>
</template>

<script setup>
import { ExclamationCircleIcon } from '@heroicons/vue/20/solid'

defineProps({
  show: {
    type: Boolean,
    default: false
  },
  message: {
    type: String,
    required: true
  },
  compact: {
    type: Boolean,
    default: false
  },
  alignLeft: {
    type: Boolean,
    default: false
  }
})
</script>
