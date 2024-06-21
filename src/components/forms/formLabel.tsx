import { FC } from "react";

interface FormLabelProps {
  title: string;
  htmlFor: string;
  errors: string | undefined;
}

export const FormLabel: FC<FormLabelProps> = ({ title, htmlFor, errors }) => {
  return (
    <div className={"flex flex-row justify-between"}>
      <label className={"text-sm font-medium capitalize"} htmlFor={htmlFor}>
        {title}
      </label>
      {errors && <p className={"text-xs text-red-500"}>{errors}</p>}
    </div>
  );
};
