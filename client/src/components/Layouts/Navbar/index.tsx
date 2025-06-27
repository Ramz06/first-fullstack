import { Link } from "react-router-dom";
import { DesktopNav } from "./DesktopNav";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./Mobilenav";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <section className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to={"/"} className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">Fisrt Shop</span>
          </Link>
          <DesktopNav />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="hidden md:block">
            <Button asChild>
              <Link to={"/signin"}></Link>
            </Button>
          </div>
          <MobileNav />
        </div>
      </section>
    </header>
  );
};

export default Navbar;
