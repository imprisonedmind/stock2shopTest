import { FC, ReactNode } from "react";

interface LabelInputWrapperProps {
  children: ReactNode;
}

export const LabelInputWrapper: FC<LabelInputWrapperProps> = ({ children }) => {
  return <div className={"flex flex-col gap-1"}>{children}</div>;
};
