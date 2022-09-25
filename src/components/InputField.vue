<template>
  <div class="input relative z-10">
    <label :for="computedLabelFor" :class="computedLabelClassList">
      <span :class="computedSpanLabelClassList">
        {{ label }}
      </span>
    </label>
    <div class="relative">
      <!-- eslint-disable vue-a11y/no-autofocus -->
      <component
          :is="computedComponentType"
          :class="[computedComponentClassList, readonly && computedReadonlyClassList]"
          ref="inputRef"
          :id="`input-${name}`"
          :type="type"
          :name="name"
          :placeholder="placeholder"
          :inputmode="inputmode"
          :value="modelValue"
          :autocomplete="autocomplete"
          :maxlength="maxlength"
          :rows="computedRows"
          :readonly="readonly"
          :autofocus="autofocus"
          :aria-labelledby="`input-${name}`"
          :aria-invalid="!!error"
          :aria-describedby="computedDescribedbly"
          @input="handleInput"
          @change="handleChange"
          v-bind="inputProps"
          v-on="inputListeners"
      />
    </div>
    <InputError :name="name" :error="error"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InputField',
});
</script>

<script setup lang="ts">
import { computed, ref } from "vue";
import InputError from "@/components/InputError.vue";

type InputEvent = Event & { target: HTMLInputElement };

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  /** Handles mobile keyboard layout https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode */
  inputmode: String,
  label: {
    type: String,
    required: true,
  },
  labelHidden: Boolean,
  placeholder: {
    type: String,
  },
  /** Makes form filling more convenient with values from browser saved forms https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete */
  autocomplete: String,
  modelValue: {
    type: [String, Number, Boolean],
  },
  /** Used only when type is `textarea` */
  rows: {
    type: String,
    default: '5',
  },
  maxlength: [Number, String],
  readonly: Boolean,
  autofocus: Boolean,
  /** Add additional classes directly to input element */
  inputClasses: [String, Array],
  /** Add additional attributes directly to input element */
  inputProps: Object,
  /** Add additional listeners directly to input element */
  inputListeners: {
    type: Object,
    default: (): Record<string, unknown> => ({}),
  },
  /** Adds * after label, still needs to be handled by validator */
  required: Boolean,
  error: String,
  light: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue', 'blur', 'change', 'input']);

const classes = {
  main: 'block rounded-md border border-secondary-dark font-normal py-2 px-3 w-full transition outline-none bg-background-secondary gradient-border',
};

const inputRef = ref<HTMLInputElement>();

const computedLabelFor = computed(() => {
  return props.readonly ? undefined : `input-${props.name}`;
});

const computedLabelClassList = computed(() => {
  return [
    'block font-semibold text-lg mb-1 text-left',
    props.labelHidden && 'sr-only',
    props.error ? 'text-error' : 'text-primary-text',
  ];
});

const computedSpanLabelClassList = computed(() => {
  return [
    "relative",
    props.required && !props.readonly && "after:content-['*'] after:absolute after:-right-2",
  ];
});

const computedComponentType = computed(() => {
  return props.type === 'textarea' ? 'textarea' : 'input';
});

const computedComponentClassList = computed(() => {
  return [
    classes.main,
    props.error && 'border-error',
    props.inputClasses,
  ];
});

const computedReadonlyClassList = computed(() => {
  return [props.inputClasses];
});

const computedRows = computed(() => {
  return props.type === 'textarea' ? props.rows : null;
});

const computedDescribedbly = computed(() => {
  return props.error ? `input-error-${props.name}` : null;
});

const handleChange = (event: Event): void => {
  emit('update:modelValue', (event.target as HTMLInputElement).value || null);
  emit('change', (event.target as HTMLInputElement).value || null);
};

const handleInput = (event: Event): void => {
  emit('update:modelValue', (event.target as HTMLInputElement).value || null);
  emit('input', (event.target as HTMLInputElement).value || null);
};
</script>
<style scoped>
input:focus, textarea:focus {
  border: double 1px transparent;
  background-image: linear-gradient(hsla(var(--color-background-secondary)), hsla(var(--color-background-secondary))), linear-gradient(to right, hsla(var(--color-primary)), hsla(var(--color-secondary)));
  background-origin: border-box;
  background-clip: padding-box, border-box;
}
</style>
