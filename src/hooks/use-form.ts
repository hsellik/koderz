import { ref, watch } from 'vue';
import { SchemaOf } from 'yup';

interface IParsedErrors {
  [key: string]: string;
}
interface IErrorOptions {
  path: string;
  message: string;
}
interface IError {
  inner: IErrorOptions[];
}
interface IFormErrorsValue {
  [key: string]: string;
}
interface IFormErrors {
  value: IFormErrorsValue;
}
type TFormData = Record<string, unknown>;
interface ISchema {
  value: SchemaOf<unknown>;
}
interface IUseFormProps {
  schema: ISchema;
}
interface IUseForm {
  formErrors: any;
  parseErrors(error: IError): IParsedErrors;
  validateForm(formData: TFormData): Promise<void>;
  validateField(field: string, formData: TFormData): Promise<void>;
  resetFormErrors(): void;
  handleValidation(formData: TFormData): Promise<Boolean>;
}

export const useForm = ({ schema }: any): IUseForm => {
  const formErrors = ref<IFormErrorsValue>({});
  const formSchema = ref(schema.value);

  watch(
    () => schema.value,
    (newSchema) => {
      formSchema.value = newSchema;
    },
  );

  const parseErrors = (error: IError): IParsedErrors => {
    return Object.assign(
      {},
      ...error.inner.map((item: IErrorOptions) => ({
        [item.path]: item.message,
      })),
    );
  };

  const validateForm = async (formData: TFormData): Promise<void> => {
    try {
      await formSchema.value.validate(formData, { abortEarly: false });
    } catch (error: any) {
      formErrors.value = parseErrors(error);
      throw error;
    }
  };

  const validateField = async (field: string, formData: TFormData): Promise<void> => {
    try {
      await formSchema.value.validateAt(field, formData);

      formErrors.value[field] = '';
    } catch (error: any) {
      formErrors.value[error.path] = error.message;
    }
  };

  const resetFormErrors = (): void => {
    formErrors.value = {};
  };

  const handleValidation = async (formData: TFormData): Promise<Boolean> => {
    resetFormErrors();
    try {
      await validateForm(formData);
    } catch (error) {
      return false;
    }
    return true;
  };

  return {
    formErrors,
    parseErrors,
    validateForm,
    validateField,
    resetFormErrors,
    handleValidation,
  };
};

export default useForm;
