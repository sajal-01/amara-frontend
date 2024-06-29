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
import { SearchIcon } from "@/app/icons";

type SearchBarProps = {
  children: React.ReactNode;
};

export default function SearchBar({ children }: SearchBarProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="top">
        <div className="w-full py-4 flex items-center space-x-2">
          <SearchIcon className="w-6 h-6 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full  py-2 font-light  text-gray-600 placeholder-gray-400 bg-white  focus:outline-none focus:shadow-outline text-2xl font-kumbh uppercase border-b border-gray-300"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
