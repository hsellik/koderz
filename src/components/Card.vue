<template>
  <div :class="computedClassList">
    <div>
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Card',
});
</script>
<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  padding: {
    type: String,
    validator: function (this: void, value: string): boolean {
      return ['x-small', 'small', 'medium', 'large'].includes(value);
    },
  },
  variant: {
    type: String,
    validator: function (this: void, value: string): boolean {
      return ['border', 'shadow'].includes(value);
    },
  },
  overflow: {
    type: String,
    validator: function (this: void, value: string): boolean {
      return ['hidden'].includes(value);
    },
  },
  corner: {
    type: String,
    validator: function (this: void, value: string): boolean {
      return ['small'].includes(value);
    },
  },
});

const computedClassList = computed(() => {
  return [
    'card border bg-background-secondary rounded-md drop-shadow shadow-primary',
    {
      'p-1': props.padding === 'x-small',
      'p-4': props.padding === 'small',
      'p-4 sm:p-8': props.padding === 'medium',
      'p-8 sm:p-12': props.padding === 'large',
      [`card--padding-${props.padding}`]: !!props.padding,
      'shadow-lg': props.variant === 'shadow',
      'overflow-hidden': props.overflow === 'hidden',
      'rounded-lg': props.corner === 'small',
    },
    props.variant === 'border' ? 'border-border' : 'border-transparent',
  ];
});
</script>

<style>
.card--padding-small .card--padding-small {
  margin-left: -1rem;
  margin-right: -1rem;
}

.card--padding-medium .card--padding-medium {
  margin-left: -1rem;
  margin-right: -1rem;
}

@media (min-width: 37.5rem) {
  .card--padding-medium .card--padding-medium {
    margin-left: -2rem;
    margin-right: -2rem;
  }
}

.card--padding-large .card--padding-large {
  margin-left: -1rem;
  margin-right: -1rem;
}

@media (min-width: 37.5rem) {
  .card--padding-large .card--padding-large {
    margin-left: -3rem;
    margin-right: -3rem;
  }
}

.drop-shadow {
  box-shadow: 0px 4px 0px hsla(var(--color-secondary-dark));
}
</style>
