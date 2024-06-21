import { QuickViewWrapper } from "@/components/modals/quickViewWrapper";
import { FormLabel } from "@/components/forms/formLabel";
import { FormInput } from "@/components/forms/formInput";
import { LabelInputWrapper } from "@/components/forms/labelInputWrapper";
import { FormSelect } from "@/components/forms/formSelect";
import { FormOption } from "@/components/forms/formOption";
import { Button } from "@/components/buttons/button";
import { useFormik } from "formik";
import { useEffect } from "react";

export default function NewProductModal() {
  const validateForm = (values) => {
    let errors: { sku: string; size: string; grams: string } = {};
    if (!values.sku) {
      errors.sku = "Required";
    }
    if (!values.size) {
      errors.size = "Required";
    }
    if (values.grams <= 0) {
      errors.grams = "Must be greater than zero";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      sku: "",
      size: "",
      grams: 0,
    },
    validate: validateForm,
    validateOnChange: true,
    onSubmit: async (values) => {
      console.log(`WE SENT OFF DATA: ${values}`);
    },
  });

  useEffect(() => {
    formik.validateForm();
  }, []);

  console.log(formik.values);

  return (
    <QuickViewWrapper title={"Add a New Product"}>
      <form
        onSubmit={formik.handleSubmit}
        className={"flex flex-col gap-4 p-4"}
      >
        <LabelInputWrapper>
          <FormLabel title={"SKU"} htmlFor={"sku"} errors={formik.errors.sku} />
          <FormInput
            required={true}
            autoFocus={true}
            onChange={formik.handleChange}
            placeholder={"SKU"}
            inputId={"sku"}
            maxLength={3}
          />
        </LabelInputWrapper>

        <LabelInputWrapper>
          <FormLabel
            title={"size"}
            htmlFor={"size"}
            errors={formik.errors.size}
          />
          <FormSelect id={"size"} name={"size"} onChange={formik.handleChange}>
            <FormOption value={"--Please Select--"} id={"size"} />
            <FormOption value={"Extra Small"} id={"size"} />
            <FormOption value={"Small"} id={"size"} />
            <FormOption value={"Medium"} id={"size"} />
            <FormOption value={"Large"} id={"size"} />
            <FormOption value={"Extra Large"} id={"size"} />
          </FormSelect>
        </LabelInputWrapper>

        <LabelInputWrapper>
          <FormLabel
            title={"grams"}
            htmlFor={"grams"}
            errors={formik.errors.grams}
          />
          <FormInput
            required={true}
            onChange={formik.handleChange}
            placeholder={"grams"}
            inputId={"grams"}
            type={"number"}
            max={1000}
          />
        </LabelInputWrapper>
      </form>
      <div className={"w-full p-4"}>
        <Button
          title={!formik.isValid ? "Please add Required Values" : "Submit"}
          callback={formik.handleSubmit}
          disabled={formik.isSubmitting || !formik.isValid}
          style={`${!formik.isValid && "cursor-not-allowed"} py-2 w-full`}
        />
      </div>
    </QuickViewWrapper>
  );
}
