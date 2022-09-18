<template>
  <div class="gradient-background pt-16 pb-8">
    <div class="container mx-auto flex flex-col items-center justify-center space-y-5 ">
      <KoderzLogo class="h-8 w-auto fill-white"/>
      <p class="text-gray-400">
        All rights reserved ©
      </p>
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
</script>
<style scoped>
.gradient-background {
  background-size: auto 400px !important;
  background: radial-gradient(50% 50% at 50% 50%, rgba(56, 115, 255, 0.3) 0%, rgba(56, 115, 255, 0) 100%);
}
</style>
