import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();

  const NavLinks = () => (
    <nav className="text-navy text-sm">
      <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
        <li>
          <a href="#features" className="text-gray-700">
            Brands
          </a>
        </li>
        <li>
          <a href="#how-it-works" className="text-gray-700">
            Features
          </a>
        </li>
        <li>
          <a href="#testimonials" className="text-gray-700">
            Why Mont?
          </a>
        </li>
      </ul>
    </nav>
  );

  return (
    <nav className="py-4 px-4 md:px-16 flex justify-between items-center">
      <div className="flex items-center space-x-12">
        <h1 className="text-xl font-semibold text-green sm:mb-0">Mont</h1>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavLinks />
        </div>
      </div>

      <div className="flex gap-4">
        {/* Desktop Buttons */}
        <div className="flex gap-4">
          <Button
            onClick={() => navigate("/login")}
            variant={"ghost"}
            className="text-gray-800 text-sm hidden sm:block"
          >
            Login
          </Button>
          <Button
            onClick={() => navigate("/login")}
            className="text-white bg-purple-700 sm:hidden"
          >
            Sign in
          </Button>
          <Button
            onClick={() => navigate("/login")}
            className="text-white bg-purple-700 hidden sm:block"
          >
            Sign up
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-2">
                {/* <NavLinks /> */}
                <div className="flex flex-col space-y-4 ">
                  <Button
                    onClick={() => navigate("/login")}
                    variant={"ghost"}
                    className="text-gray-800 text-sm w-full"
                  >
                    Login
                  </Button>
                  <Button
                    onClick={() => navigate("/login")}
                    className="text-white bg-purple-700 w-full"
                  >
                    Sign up
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
