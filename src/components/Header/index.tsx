import { Link } from "react-router-dom";

// assets
import pattern from "../../assets/pattern.svg";

// icons
import { PlusSmallIcon } from "@heroicons/react/24/outline";

// paths
import { PATHS } from "../../core/paths";

// components
import { Button, ThemeToggle } from "../";

// ::
const Header = () => {
  return (
    <div className="fixed top-0 left-0 z-30 w-full bg-zinc-800/5 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={PATHS.create}>
          <img
            className="h-12 w-12 rounded-full object-cover hover:border-2 hover:border-blue-300 hover:shadow-[0px_0px_5px] hover:shadow-blue-400 hover:transition-all"
            src={pattern}
            alt="Logo"
          />
        </Link>
        <div className="flex gap-2">
          <Button asChild>
            <Link to={PATHS.create}>
              <PlusSmallIcon className="h-5 w-5" /> Message
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
