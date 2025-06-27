import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import type React from "react";
import { Link } from "react-router-dom";

export const MobileNav: React.FC = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"outline"} size={"icon"}>
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Buka Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
            <SheetHeader className="text-left mb-6">
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>
              Pilih halaman yang ingin Anda tuju.
            </SheetDescription>
          </SheetHeader>
          <nav className="grid gap-6 text-lg font-medium mt-6">
            <Link to={"/"} className="flex items-center gap-2 font-semibold">
              <span className="font-bold">First Shop</span>
            </Link>
            <SheetClose asChild>
              <Link to={"/product"} className="hover:text-foreground">
                Produk
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link to={"/about"} className="hover:text-foreground">
                about
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link to={"/contact"} className="hover:text-foreground">
                contact
              </Link>
            </SheetClose>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};
