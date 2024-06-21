import { FC } from "react";
import { FormikHandlers } from "formik";

interface FormInputProps {
  required?: boolean;
  autoFocus?: boolean;
  value: any;
  placeholder: string;
  inputId: string;
  type?: string;
  max?: number;
  maxLength?: number;
  onChange: FormikHandlers["handleChange"];
}

export const FormInput: FC<FormInputProps> = ({
  required,
  autoFocus = false,
  value,
  placeholder,
  inputId,
  type,
  max,
  maxLength,
  onChange,
  onBlur,
}) => {
  return (
    <input
      required={required}
      autoFocus={autoFocus}
      defaultValue={value}
      placeholder={`Enter a ${placeholder}`}
      id={inputId}
      type={type || "text"}
      max={max}
      maxLength={maxLength}
      onChange={onChange}
      onBlur={onBlur}
      className={"rounded-md border border-gray-200 bg-gray-100 p-2 text-sm"}
    />
  );
};
