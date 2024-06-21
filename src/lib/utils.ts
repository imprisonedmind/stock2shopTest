import { Product } from "@/app/types";

export const validateForm = (values: Product) => {
  let errors: {
    sku?: string;
    attributes?: {
      size: string;
      grams: string;
    };
  } = {};

  if (!values.sku) {
    errors.sku = "Required";
  }

  if (!errors.attributes) {
    errors.attributes = { grams: "", size: "" };
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
  return errors;
};
