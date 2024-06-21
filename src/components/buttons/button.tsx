"use client";
import { FC } from "react";

interface ButtonProps {
  title: string;
  callback: () => void;
  disabled?: boolean;
  style?: string;
}

export const Button: FC<ButtonProps> = ({
  title,
  callback,
  disabled,
  style,
}) => {
  return (
    <button
      onClick={callback}
      disabled={disabled}
      className={`
        ${style}
        rounded-sm bg-gradient-to-t from-gray-900 to-gray-800 px-4 py-1 text-sm
        text-gray-300
      `}
    >
      {title}
    </button>
  );
};
