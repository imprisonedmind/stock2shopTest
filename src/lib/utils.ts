import { Product } from "@/app/types";

export const validateForm = (values: Product) => {
  let errors: {
    sku: string;
    attributes: {
      size: string;
      grams: string;
    };
  } = {};

  if (!values.sku) {
    errors.sku = "Required";
  }

  if (!errors.attributes) {
    errors.attributes = {};
  }

  if (!values.attributes.size) {
    errors.attributes.size = "Required";
  }
  if (
    parseInt(values.attributes.grams as string) <= 0 ||
    !values.attributes.grams
  ) {
    errors.attributes.grams = "Must be greater than zero";
  }

  // TODO: this is really gross, I want to fix this...
  // it is required to cleanup my errors object as line 16 forces
  // the object to have a key which later causes formik.isValid to always
  // be false
  if (Object.keys(errors.attributes).length === 0) {
    delete errors.attributes;
  }

  return errors;
};
