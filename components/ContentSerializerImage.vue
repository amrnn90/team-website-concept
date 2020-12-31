<template>
  <img class="mx-auto" :src="$imgFor(asset)" />
</template>

<script>
export default {
  props: ['asset', 'crop', 'hotspot'],
}
</script>

<style></style>
