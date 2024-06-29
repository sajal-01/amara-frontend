"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet";

type ShoppingCartProps = {
  children: React.ReactNode;
};

export default function ShoppingCart({ children }: ShoppingCartProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="min-h-screen m-0 p-0">
        <SheetHeader className="flex flex-row items-center justify-between border-b ">
          <SheetTitle className="pb-2 font-kumbh tracking-[3.2px] font-light text-xl p-5">
            CART
          </SheetTitle>
          <SheetClose />
        </SheetHeader>

        <div className="w-full py-4 uppercase flex font-kumbh text-sm items-center justify-center min-h-[70vh]">
          YOUR CART IS EMPTY
        </div>
      </SheetContent>
    </Sheet>
  );
}
