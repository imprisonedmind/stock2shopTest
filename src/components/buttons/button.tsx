import { FC } from "react";

interface ButtonProps {
  title: string;
  callback: () => void;
  style?: string;
}

export const Button: FC<ButtonProps> = ({ title, callback, style }) => {
  return (
    <button
      className={`
        ${style}
        rounded-sm bg-gradient-to-t from-gray-900 to-gray-800 px-4 py-1 text-sm
        capitalize text-gray-300
      `}
    >
      {title}
    </button>
  );
};
