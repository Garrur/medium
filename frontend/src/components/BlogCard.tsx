import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishDate: string;
  id:string;
}
export const BlogCard = ({
  authorName,
  title,
  content,
  publishDate,
  id
}: BlogCardProps) => {
  return (
    <Link  to= {`/blog/${id}`}>
      <div className="p-4 border-b border-slate-200  pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
            
                <Avatar  name={authorName} />
            
            
            <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
                {authorName}
            </div>
            
            <div className="flex justify-center flex-col pl-2 ">
               <Circle />
            </div>

            <div className="pl-2 font-thin text-slate-500 flex justify-center flex-col text-sm">
                {publishDate}        
            </div>
      
        </div>
      <div className="font-semibold text-xl pt-2">
        {title}
      </div>

      <div className="font-thin text-md">
        {content.slice(0, 100) + "..."}
      </div>
      
      <div className=" text-sm text-slate-500 font-thin pt-4">
        {`${Math.ceil(content.length / 100)}minute(s) read`}
      </div>
      
      
    </div>
    </Link>
  );
};

export function Avatar({ name  }: { name: string}) {
  return (
  <div className={`relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-600 rounded-full`}>
      <span className="text-xs text-gray-600 dark:text-gray-300">
        {name[0] ||"A"}
      </span>
    </div>
  );
}

export function Circle(){
    return (
        <div className="h-1 w-1 rounded-full bg-slate-500">

        </div>
    )
}