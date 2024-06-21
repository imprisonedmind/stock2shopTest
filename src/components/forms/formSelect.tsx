"use client";
import { FC, ReactNode } from "react";
import { FormikHandlers } from "formik";

interface FormSelectProps {
  id: string;
  name: string;
  children: ReactNode;
  onChange: FormikHandlers["handleChange"];
  defaultValue: string;
}

export const FormSelect: FC<FormSelectProps> = ({
  children,
  id,
  name,
  onChange,
  defaultValue,
}) => {
  return (
    <div
      className={`
        border-gray-20 w-full overflow-clip rounded-md border bg-gray-100 pr-2
        focus-within:ring-2 focus-within:ring-blue-600
      `}
    >
      <select
        id={id}
        name={name}
        onChange={onChange}
        required={true}
        defaultValue={defaultValue}
        className={"w-full bg-gray-100 p-2 focus:outline-none"}
      >
        {children}
      </select>
    </div>
  );
};
