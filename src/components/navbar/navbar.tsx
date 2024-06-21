import { Button } from "@/components/buttons/button";

export default function Navbar() {
  return (
    <div className={`flex items-center justify-between bg-gray-900 p-4`}>
      <h1 className={"font-medium text-white"}>My Products</h1>
      <Button
        title={"New Product"}
        callback={() => console.log("test")}
        style={"from-gray-100 to-gray-50 text-gray-950"}
      />
    </div>
  );
}
