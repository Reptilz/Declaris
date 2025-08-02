<template>
  <div class="antialiased bg-white">
    <!-- Header -->
    <LayoutAppHeader />

    <!-- Main Content -->
    <main>
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
