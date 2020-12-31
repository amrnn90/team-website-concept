<template>
  <div class="-mt-48 overflow-hidden bg-white section" v-if="post">
    <AppContainer class="max-w-4xl pt-48 mx-auto space-y-24">
      <div class="space-y-6">
        <h1 class="text-5xl font-bold">
          {{ post.title }}
        </h1>
        <div class="flex items-center space-x-4">
          <div class="w-14 h-14">
            <img
              v-if="post.author && post.author.image"
              class="rounded-full"
              :src="$imgFor(post.author.image).size(56)"
              alt=""
            />
          </div>
          <div class="flex space-x-4 text-gray-400">
            <h5>{{ post.author ? post.author.name : 'Unknown Warrior' }}</h5>
            <span class="text-gray-200">|</span>
            <span>{{ format(new Date(post._createdAt), 'd MMMM yyyy') }}</span>
          </div>
        </div>
      </div>

      <div class="flex justify-center full-bleed">
        <img :src="$imgFor(post.mainImage).size(1100)" alt="" />
      </div>

      <article class="prose prose-lg md:prose-xl">
        <SanityContent :blocks="post.body" />
      </article>
    </AppContainer>

    <AppContainer class="section">
      <div class="max-w-5xl mx-auto" v-if="post.author">
        <div>
          <div
            class="flex flex-col items-center space-y-8 md:space-x-8 md:flex-row"
          >
            <div class="flex-none w-28 h-28">
              <img
                v-if="post.author.image"
                class="rounded-full"
                :src="$imgFor(post.author.image).size(120)"
                alt=""
              />
            </div>

            <div
              class="flex flex-col items-center max-w-lg space-y-4 md:items-start"
            >
              <div class="space-y-1">
                <h4
                  class="text-sm font-bold tracking-widest uppercase text-accent"
                >
                  Written By
                </h4>
                <h3 class="text-2xl">{{ post.author.name }}</h3>
              </div>
              <p class="text-gray-500" v-if="post.author.bio">
                <SanityContent :blocks="post.author.bio" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  </div>
</template>

<script>
import { format } from 'date-fns'
import marked from 'marked'

export default {
  data() {
    return {
      post: null,
    }
  },
  methods: {
    format,
    marked,
  },
  async fetch() {
    // console.log(this.$route.params.slug)
    // const { posts } = await this.$strapi.graphql({
    //   query: `
    //     {
    //       posts(where:{slug: "${this.$route.params.slug}"}) {
    //         title
    //         slug
    //         excerpt
    //         body
    //         published_at
    //         cover {
    //           formats
    //         }
    //         author {
    //           name
    //           avatar {
    //             formats
    //           }
    //         }
    //       }
    //     }
    //   `,
    // })
    this.post = await this.$api.getPost(this.$route.params.slug)
    console.log(this.post)
  },
}
</script>

<style></style>
