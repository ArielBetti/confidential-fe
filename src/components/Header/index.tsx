import { Link } from "react-router-dom"

// icons
import { EyeIcon } from "@heroicons/react/24/outline"

// paths
import { PATHS } from "../../core/paths"

// ::
const Header = () => {
  return (
    <div className='bg-zinc-800 fixed top-0 left-0 w-full'>
      <div className="container h-16 mx-auto px-4 flex items-center justify-between">
        <Link to={PATHS.create} className="flex gap-1 text-xl items-center justify-start">
          <EyeIcon className="h-6 w-6" />
          Confidential
        </Link>
        <div>
          Links
        </div>
      </div>
    </div>
  )
}

export default Header