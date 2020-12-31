<template>
  <div class="relative">
    <img
      class="max-w-sm lg:max-w-full"
      src="/images/simple-task-management-img.png"
      alt=""
    />

    <Reveal
      once
      offset="25%"
      :threshold="0.5"
      #default="{ isVisible }"
      class="absolute top-0 right-0 w-4/6 lg:-right-4"
    >
      <div :class="{ 'is-visible': isVisible }">
        <img
          class="transition duration-500 ease-out transform overlap overlap-1"
          src="/images/simple-task-management-overlap1.png"
          alt=""
        />

        <img
          class="-mt-6 transition duration-500 ease-out transform overlap overlap-2"
          src="/images/simple-task-management-overlap2.png"
          alt=""
        />
      </div>
    </Reveal>
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
.overlap {
  @apply translate-x-0 opacity-0;
}
.is-visible .overlap-1 {
  @apply translate-x-10 xl:translate-x-16 opacity-100;
}

.is-visible .overlap-2 {
  @apply -translate-x-10 xl:-translate-x-10 opacity-100;
}
</style>
>
