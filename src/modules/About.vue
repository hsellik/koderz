<template>
  <div class="container mx-auto px-8 pb-24">
    <div class="flex flex-wrap justify-center gap-x-5 gap-y-5 2xl:justify-between">
      <Card padding="large" class="max-w-md">
        <div class="flex flex-col items-center text-center space-y-3">
          <CodeSvg class="h-40 w-auto"/>
          <Heading level="h4" weight="semibold">
            Capable in all areas related to software
          </Heading>
          <p>
            We can cooperate in analyzing, designing, developing and deploying your software
          </p>
        </div>
      </Card>

      <Card padding="large" class="max-w-md">
        <div class="flex flex-col items-center text-center space-y-3">
          <DevicesSvg class="h-40 w-auto"/>
          <Heading level="h4" weight="semibold">
            Not another home page company
          </Heading>
          <p>
            Experienced in developing several business critical solutions in fintech and other industries.
          </p>
        </div>
      </Card>

      <Card padding="large" class="max-w-md">
        <div class="flex flex-col items-center text-center space-y-3">
          <AccuracySvg class="h-40 w-auto"/>
          <Heading level="h4" weight="semibold">
            Stand out from the mass
          </Heading>
          <p>
            We create beautiful designs aligned with your company's visuals that people will remember
          </p>
        </div>
      </Card>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'About',
});
</script>

<script setup lang="ts">
import Card from "@/components/Card.vue";
import AccuracySvg from '@/assets/icons/accuracy.svg';
import CodeSvg from '@/assets/icons/code.svg';
import DevicesSvg from '@/assets/icons/devices.svg';
import Heading from "@/components/Heading.vue";
</script>

