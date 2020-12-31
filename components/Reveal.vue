<template>
  <div
    v-observe-visibility="{
      callback: (visibility) => (isVisible = visibility),
      intersection: {
        rootMargin: `0px 0px -${offset} 0px`,
        threshold: threshold,
      },
      once: once,
    }"
  >
    <slot :is-visible="isVisible" />
  </div>
</template>
<script>
export default {
  props: {
    offset: {
      type: String,
      default: '0px',
    },
    threshold: {
      type: Number,
      default: 0,
    },
    once: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isVisible: null,
    }
  },
}
</script>

<style></style>
