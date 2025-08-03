<template>
  <div class="antialiased bg-white min-h-screen flex flex-col">
    <!-- Header -->
    <LayoutAppHeader />

    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <LayoutAppFooter />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>

<script setup>
// Layout global pour toutes les pages
</script>
