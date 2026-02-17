import { useEffect, useRef } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import ProductSection, { PRODUCTS } from "./ProductSection";

interface Props {
  productId: string | null;
  onClose: () => void;
}

const ProductDrawer = ({ productId, onClose }: Props) => {
  const product = PRODUCTS.find((p) => p.id === productId);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (product && contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [product]);

  return (
    <Sheet open={!!product} onOpenChange={(open) => !open && onClose()}>
      <SheetContent
        side="right"
        className="w-full sm:w-[480px] sm:max-w-[480px] p-0 overflow-hidden flex flex-col"
      >
        <SheetHeader className="px-6 py-4 border-b border-border flex-shrink-0">
          <SheetTitle className="text-left">
            {product?.name} — Dettagli & Taglie
          </SheetTitle>
        </SheetHeader>
        <div ref={contentRef} className="flex-1 overflow-y-auto px-6 py-6">
          {product && <ProductSection product={product} compact />}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ProductDrawer;
