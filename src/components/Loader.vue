<template>
    <LoaderSvg class="h-20 w-auto fill-primary"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Loader',
});
</script>
<script setup lang="ts">
import LoaderSvg from '@/assets/icons/loader.svg';
</script>
