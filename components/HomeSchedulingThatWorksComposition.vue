<template>
  <div class="relative">
    <img
      class="max-w-sm lg:max-w-full"
      src="/images/scheduling-that-works-img.png"
      alt=""
    />

    <Reveal
      :threshold="0.5"
      offset="25%"
      once
      #default="{ isVisible }"
      class="absolute top-0 left-0 w-4/6"
    >
      <img
        class="transition duration-500 ease-out transform overlap"
        :class="[
          isVisible
            ? '-translate-x-10 lg:-translate-x-20 opacity-100'
            : 'translate-x-0 opacity-0',
        ]"
        src="/images/scheduling-that-works-overlap.png"
        alt=""
      />
    </Reveal>
  </div>
</template>
