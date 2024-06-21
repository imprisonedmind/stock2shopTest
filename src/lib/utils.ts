export const validateForm = (values) => {
  let errors: { sku: string; size: string; grams: string } = {};
  if (!values.sku) {
    errors.sku = "Required";
  }
  if (!values.size) {
    errors.size = "Required";
  }
  if (values.grams <= 0 || !values.grams) {
    errors.grams = "Must be greater than zero";
  }
  return errors;
};
