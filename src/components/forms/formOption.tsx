import { FC } from "react";

interface FormOptionProps {
  value: string;
  id: string;
}

export const FormOption: FC<FormOptionProps> = ({ value, id }) => {
  return (
    <option id={id} name={id} value={value}>
      {value}
    </option>
  );
};
