export const validateForm = (values) => {
  let errors: { sku: string; size: string; grams: string } = {};
  if (!values.sku) {
    errors.sku = "Required";
  }
  if (!values.attributes.size) {
    errors.size = "Required";
  }
  if (parseInt(values.attributes.grams) <= 0 || !values.attributes.grams) {
    errors.grams = "Must be greater than zero";
  }
  return errors;
};
