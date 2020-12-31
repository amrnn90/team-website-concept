<template>
  <div class="font-sans antialiased text-gray-800 bg-gray-50">
    <div class="flex flex-col min-h-screen">
      <div class="absolute inset-x-0">
        <TheHeader />
      </div>

      <main class="flex-1 pt-28">
        <Nuxt />
      </main>

      <TheFooter />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
