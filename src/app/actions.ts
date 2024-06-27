"use server";
import { Product } from "@/app/types";

export async function GetProducts() {
  const res = await fetch(`${process.env.BASE_API_URL}products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  if (res.ok) {
    const data = await res.json();
    return data as Product[];
  } else {
    throw new Error("Broken");
  }
}

export async function PostProduct({ product }: { product: Product }) {
  const res = await fetch(
    `${process.env.BASE_API_URL}products/${product.sku}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify(product),
    },
  );
  if (res.ok) {
    return await res.json();
  } else {
    throw new Error("Broken");
  }
}
