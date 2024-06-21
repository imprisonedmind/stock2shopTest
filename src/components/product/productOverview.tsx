import { QuickViewWrapper } from "@/components/modals/quickViewWrapper";
import { FormLabel } from "@/components/forms/formLabel";
import { FormInput } from "@/components/forms/formInput";
import { LabelInputWrapper } from "@/components/forms/labelInputWrapper";
import { FormSelect } from "@/components/forms/formSelect";
import { FormOption } from "@/components/forms/formOption";
import { Button } from "@/components/buttons/button";
import { useFormik } from "formik";
import { FC, useEffect } from "react";
import { InitialProductValues } from "@/app/types";
import { validateForm } from "@/lib/utils";
import FormOptionDefault from "@/components/forms/formOptionDefault";

interface ProductOverviewProps {
  initialValues: InitialProductValues;
}

export const ProductOverview: FC<ProductOverviewProps> = ({
  initialValues,
}) => {
  const formik = useFormik({
    initialValues: initialValues || {
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
            value={formik.values.sku}
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
          <FormSelect
            id={"size"}
            name={"size"}
            onChange={formik.handleChange}
            defaultValue={formik.values.size || "none"}
          >
            <FormOptionDefault />
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
            value={formik.values.grams}
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
};
