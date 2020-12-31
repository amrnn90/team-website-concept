<template>
  <section
    class="relative flex items-center h-screen bg-fixed bg-left bg-cover hero min-h-hero md:bg-center -mt-28"
  >
    <div class="absolute inset-0 z-0 h-64 left-infinite parallax-anchor" />
    <div class="absolute inset-0 z-0 parallax-background" />

    <AppContainer class="relative">
      <div class="max-w-2xl space-y-12 md:space-y-16">
        <div class="space-y-6 text-white md:space-y-10">
          <h1 class="text-5xl font-bold leading-none md:text-7xl">
            Instant collaboration for remote teams
          </h1>
          <p class="text-xl">
            All-in-one place for your remote team to chat, collaborate and
            getting things done.
          </p>
        </div>
        <SubscribeForm
          class="flex flex-col max-w-lg space-y-4 md:space-y-0 md:space-x-2 md:flex-row"
        >
          <!-- <input
            class="flex-1 px-4 py-4 font-bold placeholder-gray-300 rounded-md"
            type="email"
            placeholder="Enter your email"
          />

          <AppButton size="lg"> Get Early Access </AppButton> -->
        </SubscribeForm>
      </div>
    </AppContainer>
  </section>
</template>

<script>
import * as basicScroll from 'basicscroll'

export default {
  mounted() {
    this.scrollInstance = basicScroll.create({
      elem: this.$el.querySelector('.parallax-anchor'),
      direct: this.$el.querySelector('.parallax-background'),
      from: 'top-top',
      to: 'bottom-top',
      props: {
        '--opacity': {
          from: '0.099',
          to: '0.99',
        },
      },
    })
    this.scrollInstance.start()
    setTimeout(() => {
      this.scrollInstance.update()
    })
  },
  destroyed() {
    this.scrollInstance.destroy()
  },
}
</script>

<style lang="postcss" scoped>
.hero {
  background-image: url(/images/hero-img.jpg);
}

.parallax-background {
  background: theme('colors.gray.900');
  opacity: var(--opacity);
  will-change: opacity;
}
</style>
