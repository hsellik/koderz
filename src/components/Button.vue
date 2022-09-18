<template>
  <div class="btn-container z-10 w-full md:w-auto">
    <button v-bind="linkProps" :class="computedClassList" :type="computedType">
      <Heading class="uppercase text-center" level="h5" weight="bold">
        <slot></slot>
      </Heading>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
});
</script>

<script setup lang="ts">
import { computed, ComputedRef, ref } from 'vue';
import Heading from "@/components/Heading.vue";

const props = defineProps({
  tag: {
    type: String,
    default: 'button',
  },
  to: {
    type: Object,
  },
  type: {
    type: String,
    validator(this: void, value: string): boolean {
      return ['button', 'submit'].includes(value);
    },
    default: 'button',
  },
});

const Tag = ref(props.to ? 'router-link' : props.tag);

const isLink = !!props.to;

// @ts-ignore
const computedType: ComputedRef<'button' | 'submit' | undefined> = computed(() => {
  return isLink || props.tag !== 'button' ? undefined : props.type;
});

const linkProps = computed(() => ({
  ...(props.to && { to: props.to }),
}));

const computedClassList = computed(() => {
  return [
    'gradient-border gradient-background py-3.5 w-full px-16 uppercase cursor-pointer',
  ];
});
</script>
<style scoped>
.gradient-border {
  @apply relative;
}

.gradient-border::before {
  content: "";
  border: 2px solid transparent;
  @apply absolute inset-0 rounded-lg;
  background: linear-gradient(90deg, hsla(var(--color-primary)), hsla(var(--color-secondary))) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
}

.gradient-background:hover {
  border: 0 transparent;
  @apply border inset-0 rounded-lg;
  background: linear-gradient(90deg, hsla(var(--color-primary)), hsla(var(--color-secondary)));
}
</style>
