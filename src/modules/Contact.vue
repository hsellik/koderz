<template>
  <Alert v-if="isAlertVisible" class="fixed top-5">
    Your message has been sent!
  </Alert>

  <div class="bg-ufo bg-no-repeat background py-24">
    <div class="container mx-auto px-8">
      <div class="flex flex-col 2xl:flex-row flex-wrap justify-center items-center 2xl:justify-between">
        <div class="flex items-center justify-center z-10">
          <Heading class="relative uppercase text-center 2xl:text-left" level="h2" weight="bold">
            Have a project? <br/> <span class="text-primary">Let's work together</span>
            <ArrowHorizontal class="hidden 2xl:block absolute left-[80%] top-[120%] h-32 w-auto fill-white"/>
          </Heading>
        </div>

        <ArrowVertical class="h-24 w-auto fill-white 2xl:hidden"/>

        <div class="w-full max-w-3xl">
          <form id="contact-form" v-if="!isLoading" @submit.prevent="sendMessage" class="flex flex-col space-y-3">
            <InputField
                class="col-span-6"
                v-model="formData.name"
                :error="formErrors.name"
                placeholder="Name"
                name="Name"
                label="Name"
                :required="true"
                @change="validateField('name', formData)"
            />
            <InputField
                class="col-span-6"
                v-model="formData.email"
                :error="formErrors.email"
                placeholder="Email"
                name="Email"
                label="Email"
                :required="true"
                @change="validateField('email', formData)"
            />
            <InputField
                class="col-span-12"
                v-model="formData.message"
                :error="formErrors.message"
                type="textarea"
                rows="8"
                placeholder="Message"
                name="Message"
                label="Message"
                :required="true"
                @change="validateField('message', formData)"
            />

            <Separator size="medium"/>

            <Button type="submit">
              Send Message
            </Button>
          </form>

          <div v-else class="mt-20 mb-20">
            <Loader class="mx-auto"/>
          </div>

        </div>
      </div>
    </div>


  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Contact',
});
</script>

<script setup lang="ts">
import ArrowVertical from '@/assets/icons/arrow-vertical.svg';
import ArrowHorizontal from '@/assets/icons/arrow-horizontal.svg';
import { object as yupObject, string as yupString } from 'yup';
import InputField from "@/components/InputField.vue";
import Separator from "@/components/Separator.vue";
import Button from "@/components/Button.vue";
import Heading from "@/components/Heading.vue";
import { ref } from "vue";
import useForm from "@/hooks/use-form";
import emailjs from "@emailjs/browser";
import Alert from "@/components/Alert.vue";
import Loader from "@/components/Loader.vue";

interface IFormData {
  name?: string;
  email: string;
  message: string;
}

const initialState: IFormData = {
  name: '',
  email: '',
  message: '',
};

const formData = ref<IFormData>({ ...initialState });

const validationSchema = ref(
    yupObject().shape({
      name: yupString().required().max(100).nullable(),
      email: yupString().required().max(100).email().nullable(),
      message: yupString().required().max(1000).nullable(),
    }),
);

const { formErrors, validateField, handleValidation } = useForm({
  schema: validationSchema,
});

const isAlertVisible = ref(false);
const isLoading = ref(false);

const serviceID = 'default_service';
const templateID = 'template_koderz';

async function sendMessage() {
  const isValid = await handleValidation(formData.value);
  if (isValid) {
    isLoading.value = true;

    await emailjs.send(serviceID, templateID, formData.value)
    formData.value = initialState;

    isLoading.value = false;
    isAlertVisible.value = true;

    setTimeout(() => {
      isAlertVisible.value = false;
    }, 6000);
  }
}
</script>
<style scoped>
.background {
  background-size: 32em;
  background-position: top -1000px;
}
</style>

