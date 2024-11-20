import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="py-4 px-16 flex justify-between items-center">
      <div className="flex items-center space-x-12">
        <h1 className="text-xl font-semibold text-green sm:mb-0">Mont</h1>

        <nav className="sm:mb-0 text-navy text-sm">
          <ul className="flex space-x-8">
            <li>
              <a href="#features" className=" hover:text-green">
                Brands
              </a>
            </li>
            <li>
              <a href="#how-it-works" className=" hover:text-green">
                Features
              </a>
            </li>
            <li>
              <a href="#testimonials" className=" hover:text-green">
                Why Mont?
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex gap-4">
        <Button
          onClick={() => navigate("/login")}
          variant={"ghost"}
          className="text-gray-800 text-sm"
        >
          Login
        </Button>
        <Button onClick={() => navigate("/login")} className="text-white bg-purple-700">
          Sign up
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
