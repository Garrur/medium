import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const Appbar = ()=>{
 return(
    <div className="border-b flex justify-between px-10 py-4 shadow-xl ">
        <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer">
            Medium 
        </Link>    
        <div>
        <Link to={`/publish`}>   
            <button type="button" className=" pl-4 pt-2 mr-8 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
                New
            </button>
        </Link> 
            <AvatarApp  name={""|| "Ananu"} />
        </div>
        
    </div>
 )
}

export function AvatarApp({ name  }: { name: string}) {
    return (
    <div className="relative inline-flex items-center justify-center w-10 h-10  overflow-hidden bg-gray-600 rounded-full">
        <span className="text-xs text-gray-600 dark:text-gray-300">
          {name[0] ||"Anany"}
        </span>
      </div>
    );
  }