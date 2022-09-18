<template>
  <div :class="computedClassList">
    <div class="grid grid-cols-12">
      <div class="col-start-2 col-span-10 flex items-center justify-center">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Alert',
});
</script>

<script setup lang="ts">
import { computed } from 'vue';

const classes = {
  main: 'bg-primary inset-x-0 m-auto rounded-md p-4 w-11/12 md:w-1/2 bg-opacity-70 z-50',
};

const computedClassList = computed(() => {
  return [classes.main];
});
</script>
