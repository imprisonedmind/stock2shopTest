import { FC } from "react";
import { IoClose } from "react-icons/io5";

interface QuickViewTitleProps {
  title: string;
  callback: () => void;
}

export const QuickViewTitle: FC<QuickViewTitleProps> = ({
  title,
  callback,
}) => {
  return (
    <div className={"flex h-[60px] flex-row items-center justify-between px-4"}>
      <p>{title}</p>
      <IoClose
        onClick={callback}
        className={
          "h-6 w-6 cursor-pointer rounded-full bg-gray-100 p-[5px] text-neutral-950"
        }
      />
    </div>
  );
};
