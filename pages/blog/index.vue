<template>
  <section>
    <AppContainer class="space-y-24 section mb-28">
      <div class="max-w-2xl space-y-6">
        <h1 class="text-5xl font-bold">Our Latest Thoughts ✍</h1>
        <p class="text-lg leading-relaxed text-gray-500">
          Here, you can read our latest articles where we share our thoughts,
          news and really anything that comes to our minds!
        </p>
      </div>

      <div class="grid gap-10 md:grid-cols-2 lg:gap-16 xl:grid-cols-3">
        <div v-for="post in posts" :key="post.id" class="relative rounded-lg">
          <!-- <SanityContent :blocks="post.body" /> -->

          <div class="absolute inset-0 shadow-2xl opacity-50" />
          <div class="relative z-10 bg-white rounded-lg">
            <div class="h-40">
              <img
                v-if="post.mainImage"
                :src="$imgFor(post.mainImage).size(500)"
                class="object-cover object-center w-full h-full rounded-t-lg"
                alt=""
              />
            </div>
            <div class="px-6 space-y-16 py-7">
              <div class="space-y-6">
                <NuxtLink :to="`/blog/${post.slug.current}`">
                  <h2 class="text-2xl clamp-2">
                    {{ post.title }}
                  </h2>
                </NuxtLink>

                <p class="text-gray-400">
                  {{ post.excerpt }}
                </p>
              </div>

              <div class="flex items-center space-x-4">
                <div class="w-12 h-12">
                  <img
                    v-if="post.author && post.author.image"
                    class="rounded-full"
                    :src="$imgFor(post.author.image).size(56)"
                    alt=""
                  />
                </div>
                <div class="flex justify-between flex-1 text-sm text-gray-400">
                  <h5>
                    <span v-if="post.author">{{ post.author.name }}</span>
                  </h5>
                  <span>{{
                    format(new Date(post._createdAt), 'd MMMM yyyy')
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center" v-if="!reachedPaginationEnd">
        <AppButton @click="$fetch" variant="soft">Next</AppButton>
      </div>
    </AppContainer>
  </section>
</template>

<script>
import { format } from 'date-fns'
import { groq } from '@nuxtjs/sanity'

export default {
  data() {
    return {
      posts: [],
      totalCount: null,
    }
  },
  computed: {
    reachedPaginationEnd() {
      return this.totalCount === this.posts.length
    },
  },
  async fetch() {
    const { posts, total } = await this.$api.getPosts({
      skip: this.posts.length,
    })
    this.posts = this.posts.concat(posts)

    this.totalCount = total
  },
  methods: {
    format,
  },
}
</script>

<style scoped></style>
