<template>
  <component :is="Tag" :class="computedClassList">
    <slot/>
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Heading',
});
</script>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  tag: {
    type: String,
  },
  level: {
    type: String,
    validator: function (this: void, value: string): boolean {
      return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value);
    },
    default: 'h1',
  },
  /** Changes only CSS of current Heading, HTML element stays whatever is `tag` or `level` prop */
  visualLevel: {
    type: String,
    validator: function (this: void, value: string): boolean {
      return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value);
    },
  },
  position: {
    type: String,
    validator: function (this: void, value: string): boolean {
      return ['left', 'center', 'right'].includes(value);
    },
  },
  weight: {
    type: String,
    validator: function (this: void, value: string): boolean {
      return [
        'thin',
        'extralight',
        'light',
        'normal',
        'medium',
        'semibold',
        'bold',
        'extrabold',
        'black',
      ].includes(value);
    },
  },
  /** Align content centrally */
  align: {
    type: String,
    validator: function (this: void, value: string): boolean {
      return ['center'].includes(value);
    },
  },
  color: {
    type: String,
    validator: function (this: void, value: string): boolean {
      return ['error', 'secondary-text', 'secondary-text-dark', 'white', 'primary'].includes(value);
    },
    default: 'white',
  },
});

const Tag = props.tag || props.level;

const computedClassList = computed(() => {
  return [
    'heading font-heading font-weight-heading',
    {
      'text-h3 md:text-h1': [props.visualLevel, props.level].includes('h1'),
      'text-h4 md:text-h2': [props.visualLevel, props.level].includes('h2'),
      'text-h3': [props.visualLevel, props.level].includes('h3'),
      'text-h4': [props.visualLevel, props.level].includes('h4'),
      'text-h5': [props.visualLevel, props.level].includes('h5'),
      'text-h6': [props.visualLevel, props.level].includes('h6'),
      'text-left justify-start': props.position === 'left',
      'text-center justify-center': props.position === 'center',
      'text-right justify-end': props.position === 'right',
      'flex items-center': props.align === 'center',
      'text-error': props.color === 'error',
      'text-white': props.color === 'white',
      'text-secondary-text': props.color === 'secondary-text',
      'text-secondary-text-dark': props.color === 'secondary-text-dark',
      'font-thin': props.weight === 'thin',
      'font-extralight': props.weight === 'extralight',
      'font-light': props.weight === 'light',
      'font-normal': props.weight === 'normal',
      'font-medium': props.weight === 'medium',
      'font-semibold': props.weight === 'semibold',
      'font-bold': props.weight === 'bold',
      'font-extrabold': props.weight === 'extrabold',
      'font-black': props.weight === 'black',
    },
  ];
});

</script>
