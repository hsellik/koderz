<template>
  <Hero/>

  <About/>

  <Contact/>

  <Footer/>

  <canvas ref="canvas"/>

</template>

<script setup lang="ts">
import Hero from "@/modules/Hero.vue";
import About from "@/modules/About.vue";
import Contact from "@/modules/Contact.vue";
import Footer from "@/modules/Footer.vue";
import { onMounted, ref } from 'vue'
import emailjs from '@emailjs/browser';
// @ts-ignore
import WebGLFluid from 'webgl-fluid'

const canvas = ref();

onMounted(async () => {
  if (!isMobile()) {
    WebGLFluid(canvas.value, {
      TRIGGER: 'hover',
      PRESSURE_ITERATIONS: 10,
      DENSITY_DISSIPATION: 3,
      CURL: 5,
      SPLAT_RADIUS: 0.3,
      COLOR_UPDATE_SPEED: 5,
      TRANSPARENT: true,
      BLOOM: false,
      SUNRAYS: false,
    })
  }


  emailjs.init("bQSCpOo4twUdftcji");
});

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
</script>
<style>
canvas {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
}
</style>
