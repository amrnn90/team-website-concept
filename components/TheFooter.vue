<template>
  <footer class="py-24 bg-gray-900 xl:py-32">
    <div class="container px-8 mx-auto text-white">
      <div class="grid grid-cols-4 md:grid-cols-6 gap-y-12 xl:grid-cols-12">
        <div class="col-span-3 space-y-8">
          <AppLogo />
          <p>The last collaboration app you will ever need.</p>
        </div>

        <div class="col-span-1"></div>

        <div
          class="col-span-2 space-y-8"
          v-for="linkGroup in footerLinks"
          :key="linkGroup.lable"
        >
          <h4 class="text-lg">{{ linkGroup.label }}</h4>
          <ul class="space-y-4 text-sm text-gray-400">
            <li v-for="link in linkGroup.links" :key="link.label">
              <a :href="link.url">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <div class="col-span-2 space-y-8">
          <h4 class="text-lg">Stay up to date</h4>
          <div class="space-y-4">
            <p class="text-sm text-gray-400">Subscribe to our newsletter</p>
            <div class="relative">
              <input
                class="w-full px-4 py-3 text-sm font-bold placeholder-gray-400 bg-gray-700 border-gray-700 rounded-md"
                type="email"
                placeholder="Email"
              />
              <span
                class="absolute inset-y-0 right-0 flex items-center justify-center mr-3"
              >
                <IconArrowRight class="w-6 text-gray-400" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerLinks: [
        {
          label: 'Company',
          links: [
            { label: 'About us', url: '#' },
            { label: 'Careers', url: '#' },
            { label: 'Contact us', url: '#' },
          ],
        },
        {
          label: 'Features',
          links: [
            { label: 'Screen sharing', url: '#' },
            { label: 'IOS & Android', url: '#' },
            { label: 'File Uploads', url: '#' },
            { label: 'Integrations', url: '#' },
          ],
        },
        {
          label: 'Contact us',
          links: [
            { label: 'services@team.com', url: '#' },
            { label: '1-888-455-7399', url: '#' },
            { label: '1960 East Grand Ave, #340', url: '#' },
          ],
        },
      ],
    }
  },
}
</script>

<style></style>
