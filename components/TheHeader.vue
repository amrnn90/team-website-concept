<template>
  <header
    class="header"
    :class="[
      routeClass,
      {
        'is-floating': isFloating,
        'is-open': isNavOpen,
        'is-mobile': !isWideScreen,
      },
    ]"
  >
    <AppContainer
      class="flex items-center justify-between"
      :class="[
        isNavOpen && !isWideScreen ? 'fixed z-50 inset-x-0' : 'relative',
      ]"
    >
      <NuxtLink to="/" class="relative z-50"
        ><AppLogo :variant="logoVariant"
      /></NuxtLink>

      <transition
        enter-active-class="transition duration-300 ease-out transform"
        leave-active-class="transition duration-300 ease-in transform"
        enter-class="-translate-y-full"
        enter-to-class="translate-y-0"
        leave-class="translate-y-0"
        leave-to-class="-translate-y-full"
      >
        <nav v-if="isWideScreen || isNavOpen" class="nav">
          <div
            class="flex flex-col items-center space-y-12 text-xl md:flex-row md:text-base md:space-x-12 md:space-y-0"
          >
            <ul
              class="flex flex-col items-center md:flex-row space-y-9 md:space-x-9 md:space-y-0"
            >
              <li v-for="link in links" :key="link.label">
                <NuxtLink
                  :to="link.url"
                  class="transition opacity-80 hover:opacity-100"
                  >{{ link.label }}</NuxtLink
                >
              </li>
            </ul>

            <AppButton tag="a" href="#" variant="ghost" size="sm">
              Get Access
            </AppButton>
          </div>
        </nav>
      </transition>
      <button
        v-if="!isWideScreen"
        @click="isNavOpen = !isNavOpen"
        class="nav-toggle"
      >
        <IconHamburger v-if="!isNavOpen" class="w-12" />
        <IconClose v-else class="w-12" />
      </button>
    </AppContainer>
  </header>
</template>

<script>
import { throttle } from 'lodash-es'

export default {
  data() {
    return {
      isNavOpen: false,
      isWideScreen: false,
      isFloating: false,
      routeClass: null,
    }
  },
  computed: {
    links() {
      return [
        { label: 'Blog', url: '/blog' },
        { label: 'Product', url: '/blog' },
        { label: 'Services', url: '/blog' },
        { label: 'Log In', url: '/blog' },
      ]
    },
    logoVariant() {
      return !this.isWideScreen && this.isNavOpen
        ? 'light'
        : this.isFloating || this.routeClass === 'index'
        ? 'light'
        : 'dark'
    },
  },
  watch: {
    $route: {
      handler() {
        this.routeClass = this.$route.name
        this.isNavOpen = false
      },
      immediate: true,
    },
  },
  mounted() {
    const mqCallback = (mq) => {
      this.isWideScreen = mq.matches
    }
    const mediaWatcher = matchMedia('(min-width: 768px)')
    mediaWatcher.addListener(mqCallback)
    mqCallback(mediaWatcher)

    window.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape') {
        this.isNavOpen = false
      }
    })

    const scrollHandler = (() => {
      let prevScroll = 0
      let currentScroll = null
      let tick = false
      let prevResult = 0

      const cb = () => {
        currentScroll = window.scrollY
        const headerHeight = this.$el.clientHeight
        const result =
          currentScroll < 300
            ? 0
            : currentScroll < 800
            ? headerHeight
            : currentScroll - prevScroll < 0
            ? 0
            : headerHeight

        if (result !== prevResult) {
          this.$el.style.setProperty('--translate-y', `-${result}px`)
        }
        // this.$el.classList[currentScroll > 700 ? 'add' : 'remove']('floating')
        this.isFloating = currentScroll > 700

        prevScroll = currentScroll
        prevResult = result
        tick = false
      }

      cb()

      return () => {
        if (!tick) {
          tick = true
          requestAnimationFrame(cb)
        }
      }
    })()

    window.addEventListener('scroll', throttle(scrollHandler, 150))
  },
}
</script>

<style lang="postcss" scoped>
.header {
  @apply relative z-50 flex  items-center h-28  inset-x-0;
  top: var(--translate-y);
  transition: top 0.2s ease;
  will-change: top;

  .nav {
    @apply fixed inset-0 flex items-center justify-center text-gray-900 bg-gray-900 md:bg-transparent md:static;
  }

  .nav-toggle {
    @apply relative z-50 text-gray-900;
  }

  &.index {
    @apply bg-transparent;

    .nav,
    .nav-toggle {
      @apply text-white;
    }
  }

  &.is-floating {
    @apply fixed bg-gray-900 h-16 text-white;

    .nav,
    .nav-toggle {
      @apply text-white;
    }
  }

  &.is-open {
    .nav-toggle {
      @apply text-white;
    }

    .nav {
      @apply text-white;
    }
  }
}
</style>
