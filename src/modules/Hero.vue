<template>
  <KoderzLogo class="absolute h-6 top-10 left-8 md:top-12 md:left-16 md:h-8 w-auto fill-white"/>

  <div class="gradient-background bg-cover">
    <div class="h-screen  container mx-auto px-8">
      <div class="h-full mx-auto flex flex-col items-center justify-center space-y-5">
        <Heading class="uppercase text-center" level="h1" weight="bold">
          Need <span class="text-primary">working solutions</span><br class="hidden md:block"/> for
          <br class="md:hidden"/> your business?
        </Heading>
        <p class="text-center">
          We develop world-class software for web and backend systems
        </p>

        <Separator size="small"/>

        <Button @click="scrollToContactForm">
          Contact us
        </Button>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Hero',
});
</script>

<script setup lang="ts">
import KoderzLogo from '@/assets/images/koderz-logo.svg';
import Button from "@/components/Button.vue";
import Heading from "@/components/Heading.vue";
import Separator from "@/components/Separator.vue";

function scrollToContactForm() {
  const contactFormElement = document.getElementById('contact-form');

  if (contactFormElement) {
    contactFormElement.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>
<style scoped>
.gradient-background {
  background-color: #16171E;
  background-image: linear-gradient(
      to bottom, transparent, #16171E
  ), url("./../assets/images/hero-background.png");
  background-repeat: no-repeat;
}
</style>
