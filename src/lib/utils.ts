export const validateForm = (values) => {
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
  if (parseInt(values.attributes.grams) <= 0 || !values.attributes.grams) {
    errors.attributes.grams = "Must be greater than zero";
  }
  return errors;
};
