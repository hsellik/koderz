<template>
  <hr :class="computedClassList"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Separator'
});

</script>
<script setup lang="ts">
import { computed } from "vue";

const computedClassList = computed(() => {
  return [
    'separator m-0',
    !props.hasLine && 'border-0 border-transparent',
    props.hasLine && 'border-border',
    props.size === 'x-small' && 'my-1',
    props.size === 'small' && 'my-4',
    props.size === 'medium' && 'my-8',
    props.size === 'large' && 'my-12',
    props.card === 'small' && '-mx-4',
    props.card === 'medium' && '-mx-4 sm:-mx-8',
    props.card === 'large' && '-mx-4 sm:-mx-12',
  ];
});
const props = defineProps({
  corner: {
    type: String,
    validator: function (this: void, value: string): boolean {
      return ['small'].includes(value);
    },
  },
  hasLine: {
    type: Boolean,
    default: false,
  },
  card: {
    type: String,
    validator: function (this: void, value: string): boolean {
      return ['small', 'medium', 'large'].includes(value);
    },
  },
  size: {
    type: String,
    validator: function (this: void, value: string): boolean {
      return ['x-small', 'small', 'medium', 'large'].includes(value);
    },
  },
});
</script>
