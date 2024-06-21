import { QuickViewWrapper } from "@/components/modals/quickViewWrapper";
import { FormLabel } from "@/components/forms/formLabel";
import { FormInput } from "@/components/forms/formInput";
import { LabelInputWrapper } from "@/components/forms/labelInputWrapper";
import { FormSelect } from "@/components/forms/formSelect";
import { FormOption } from "@/components/forms/formOption";
import { Button } from "@/components/buttons/button";
import { useFormik } from "formik";
import { FC, useEffect } from "react";
import { Product } from "@/app/types";
import { validateForm } from "@/lib/utils";
import FormOptionDefault from "@/components/forms/formOptionDefault";
import { PostProduct } from "@/app/actions";
import { useRouter } from "next/navigation";

interface ProductOverviewProps {
  initialValues?: Product;
  title: string;
}

export const ProductOverview: FC<ProductOverviewProps> = ({
  initialValues,
  title,
}) => {
  const { refresh } = useRouter();

  const formik = useFormik({
    initialValues: initialValues || {
      sku: "",
      attributes: {
        size: "",
        grams: "",
      },
    },
    validate: validateForm,
    validateOnChange: true,
    onSubmit: async (values) => {
      PostProduct({ product: values }).then((res) => {
        refresh();
      });
    },
  });

  useEffect(() => {
    formik.validateForm();
  }, []);

  return (
    <QuickViewWrapper title={title}>
      <form
        onSubmit={formik.handleSubmit}
        className={"flex flex-col gap-4 p-4"}
      >
        <LabelInputWrapper>
          <FormLabel
            title={"SKU"}
            htmlFor={"attributes.sku"}
            errors={formik.errors.sku}
          />
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
            htmlFor={"attributes.size"}
            errors={formik.errors.size}
          />
          <FormSelect
            id={"size"}
            name={"attributes.size"}
            onChange={formik.handleChange}
            defaultValue={formik.values.attributes?.size || "none"}
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
            htmlFor={"attributes.grams"}
            errors={formik.errors.grams}
          />
          <FormInput
            required={true}
            onChange={formik.handleChange}
            value={formik.values.attributes.grams}
            placeholder={"grams"}
            inputId={"attributes.grams"}
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
