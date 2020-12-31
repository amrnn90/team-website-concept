<template>
  <section class="overflow-hidden">
    <AppContainer class="section">
      <div class="max-w-6xl mx-auto space-y-24">
        <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-40">
          <div class="flex">
            <div class="max-w-lg space-y-10">
              <h2 class="text-5xl">Your hub for teamwork</h2>

              <p class="text-lg leading-relaxed text-gray-500">
                Project discussions, important documents, productive virtual
                meetings. They all live tidily and happily in Team. With all
                your information in one easily searchable place, collaborating
                online was never more fun.
              </p>

              <div>
                <AppArrowLink>Learn More</AppArrowLink>
              </div>
            </div>
          </div>
          <div class="flex justify-center lg:-mr-3vw">
            <img src="/images/mockup-img.png" alt="" />
          </div>
        </div>

        <!-- two images section -->
        <div class="space-y-24">
          <div
            class="grid items-center justify-center gap-20 md:grid-cols-2 lg:gap-40"
          >
            <div class="flex">
              <div class="max-w-lg space-y-10">
                <h2 class="text-4xl">Simple task management</h2>

                <p class="text-lg leading-relaxed text-gray-500">
                  Task management with Team is as simple as it gets. No
                  complicated layout and need for user training. Your team
                  members intuitively know how to navigate the platform. It’s so
                  simple, a baby could easily do it!
                </p>

                <div>
                  <AppArrowLink>Learn More</AppArrowLink>
                </div>
              </div>
            </div>
            <div class="flex justify-center md:order-first lg:-mr-24">
              <HomeSimpleTaskManagementComposition />
            </div>
          </div>

          <div class="grid items-center gap-20 md:grid-cols-2 lg:gap-40">
            <div class="flex">
              <div class="max-w-lg space-y-10">
                <h2 class="text-4xl">Scheduling that actually works</h2>

                <p class="text-lg leading-relaxed text-gray-500">
                  Never miss a deadline again with our scheduling solutions, we
                  integrate seamlessly with all your favorite tools such as
                  Google Calendar. Leave the tedious, boring stuff to us so that
                  you can focus on what matters and catch up with those
                  deadlines.
                </p>

                <div>
                  <AppArrowLink>Learn More</AppArrowLink>
                </div>
              </div>
            </div>
            <div class="flex justify-center lg:-ml-24">
              <HomeSchedulingThatWorksComposition />
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
