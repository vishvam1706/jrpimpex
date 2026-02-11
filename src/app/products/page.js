import { Suspense } from "react";
import ProductsClient from "@/components/Product/ProductClient";

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
      <ProductsClient />
    </Suspense>
  );
}
