<template>
  <section class="space-y-16 lg:space-y-24 section">
    <AppContainer>
      <h2 class="text-5xl text-center text-gray-800">
        What people say about team
      </h2>
    </AppContainer>

    <div class="space-y-16">
      <div class="swiper-container" ref="swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div
            class="px-10 py-12 text-gray-100 bg-gray-800 rounded-md swiper-slide w-96 space-y-14"
            v-for="i in 8"
            :key="i"
          >
            <div class="flex">
              <IconStar v-for="i in 5" :key="i" class="w-4 text-yellow-400" />
            </div>

            <p class="text-lg">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>

            <div class="flex items-center space-x-6">
              <div class="w-14">
                <img
                  class="rounded-full"
                  src="https://i.pravatar.cc/56"
                  alt="avatar of testimonee"
                />
              </div>
              <div>
                <h4>Ralph Edwards</h4>
                <p class="text-sm text-gray-400">UX Designer at Acme</p>
              </div>
            </div>
          </div>
        </div>
        <!-- If we need pagination -->
        <!-- <div class="swiper-pagination" ref="pagination"></div> -->

        <!-- If we need navigation buttons -->

        <!-- If we need scrollbar -->
        <!-- <div class="swiper-scrollbar"></div> -->
      </div>
      <AppContainer>
        <div class="flex justify-end space-x-8">
          <button ref="prev" class="cursor-pointer">
            <IconArrowRight
              class="w-8 transform rotate-180 text-primary stroke-3"
            />
          </button>
          <button ref="next" class="cursor-pointer">
            <IconArrowRight class="w-8 text-primary stroke-3" />
          </button>
        </div>
      </AppContainer>
    </div>
  </section>
</template>

<script>
import Swiper, { Navigation, Pagination, A11y } from 'swiper'
Swiper.use([Navigation, Pagination, A11y])

export default {
  mounted() {
    const mySwiper = new Swiper(this.$refs.swiper, {
      // Optional parameters
      // direction: 'vertical',
      loop: false,
      spaceBetween: 25,
      slidesPerView: 'auto',

      // If we need pagination
      // pagination: {
      //   el: this.$refs.pagination,
      // },

      // Navigation arrows
      navigation: {
        nextEl: this.$refs.next,
        prevEl: this.$refs.prev,
      },
      slidesPerGroup: 1,
      // slidesOffsetBefore: 70,
      // slidesOffsetAfter: 70,
      centeredSlides: true,
      // centeredSlidesBounds: true,
      grabCursor: true,

      breakpoints: {
        1100: {
          slidesPerGroup: 2,
          centeredSlides: false,
          slidesOffsetBefore: 140,
          slidesOffsetAfter: 140,
        },
      },

      // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    })
  },
}
</script>

<style lang="postcss">
.swiper-container {
  /* width: 100%; */
  /* height: 300px; */
}
.swiper-slide {
  /* width: auto; */
}

.swiper-button-disabled {
  @apply cursor-auto;
}

.swiper-button-disabled svg {
  @apply text-gray-200;
}
</style>
