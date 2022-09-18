<template>
  <p
    v-if="error"
    :id="`input-error-${name}`"
    class="relative text-error text-sm text-left py-2 whitespace-pre-wrap"
    v-html="error"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InputError',
  props: {
    name: {
      type: String,
      required: true,
    },
    error: [String, Object],
  },
});
</script>
