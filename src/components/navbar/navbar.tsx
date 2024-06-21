import { Button } from "@/components/buttons/button";
import NewProductButton from "@/components/buttons/newProductButton";

export default function Navbar() {
  return (
    <div className={`flex items-center justify-between bg-gray-900 p-4`}>
      <h1 className={"font-medium text-white"}>My Products</h1>
      <NewProductButton />
    </div>
  );
}
