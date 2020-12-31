<template>
  <component
    @click="$emit('click')"
    :is="tag"
    class="button"
    :class="[variant, size, color]"
  >
    <div class="button-background" />
    <span class="relative"><slot /></span>
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'button',
    },
    variant: {
      type: String,
      default: 'heavy',
    },
    color: {
      type: String,
      default: 'primary',
    },
    size: {
      type: String,
      default: 'lg',
    },
  },
  computed: {
    wrapperClass() {},
    variants() {},
  },
}
</script>

<style lang="postcss" scoped>
.button {
  @apply relative font-bold transition rounded-md opacity-90 hover:opacity-100;

  .button-background {
    @apply absolute inset-0 transition transform border-2 border-transparent rounded-md;
  }

  &:hover,
  &:active {
    .button-background {
      @apply scale-110;
    }
  }
}

.primary {
  &.heavy {
    @apply text-white bg-primary;

    .button-background {
      @apply bg-primary;
    }
  }

  &.soft {
    @apply text-primary bg-primary-100;

    .button-background {
      @apply bg-primary-100;
    }
  }

  &.ghost {
    @apply text-primary bg-transparent;

    .button-background {
      @apply border-primary;
    }

    &:hover,
    &:active {
      @apply text-white;
      .button-background {
        @apply bg-primary;
      }
    }
  }
}

.lg {
  @apply px-6 py-4 min-w-36;

  &:hover,
  &:active {
    .button-background {
      @apply scale-105;
    }
  }
}

.sm {
  @apply px-4 py-2 min-w-20;
}
</style>
