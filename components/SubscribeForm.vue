<template>
  <form v-if="!submitted" @submit.prevent="submit">
    <input
      class="flex-1 px-4 py-4 font-bold placeholder-gray-300 rounded-md"
      placeholder="Enter your email"
      v-model="email"
    />

    <AppButton type="submit" size="lg"> Get Early Access </AppButton>
  </form>

  <div v-else>Thank you, we'll get back to you soon!</div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      submitted: false,
    }
  },
  methods: {
    async submit() {
      await this.$strapi.graphql({
        query: `
          mutation {
            createContact(input:{data:{email: "${this.email}"}}) {
              contact {
                email
              }
            }
          }
        `,
      })

      this.submitted = true
    },
  },
}
</script>

<style></style>
