<template>
  <SanityContent :serializers="serializers" :blocks="blocks" />
</template>

<script>
import ContentSerializerImage from './ContentSerializerImage'
export default {
  props: {
    blocks: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      serializers: {
        types: {
          image: ContentSerializerImage,
        },
      },
    }
  },
}
</script>

<style></style>
