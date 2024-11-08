import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 w-full">
      <div className="text-2xl font-bold">
        <Link to="/">
          {/* <img src="/logo.png" alt="Logo" width={100} height={100} /> */}
          <p>Mont</p>
        </Link>
      </div>

      <div>
        <Button className="bg-purple-700 text-white">Sign in</Button>
        <Button className="bg-purple-800 text-white">Sign up</Button>
      </div>
    </div>
  );
};

export default Header;
