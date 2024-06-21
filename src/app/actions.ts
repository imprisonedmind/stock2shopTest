"use server";
import { Product } from "@/app/types";

export async function GetProducts() {
  const res = await fetch(`${process.env.BASE_API_URL}products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.ok) {
    const data = await res.json();
    return data as Product[];
  } else {
    throw new Error("Broken");
  }
}
