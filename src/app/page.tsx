import { Products } from "@/components/product/product";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className={"mx-auto w-full max-w-[760px] p-4"}>
      <Suspense fallback={<p>loading...</p>}>
        <Products />
      </Suspense>
    </main>
  );
}
