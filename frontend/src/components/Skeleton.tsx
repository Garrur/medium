import { Circle } from "./BlogCard";

export const Skeleton = () => {
  return (
    <div role="status" className="animate-pulse">
      <div className="p-4 border-b border-slate-200  pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
          <div className="h-4 w-4 bg-gray-200 rounded-full  w-48 mb-4"></div>

          <div className="h-2 bg-gray-200 rounded-full  w-48 mb-4"></div>
          <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>

          <div className="flex justify-center flex-col pl-2 ">
            <Circle />
          </div>

          <div className="pl-2 font-thin text-slate-500 flex justify-center flex-col text-sm">
            <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
          </div>
        </div>
        <div className="font-semibold text-xl pt-2">
          <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
        </div>

        <div className="font-thin text-md">
          <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
        </div>

        <div className=" text-sm text-slate-500 font-thin pt-4">
          <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
        </div>
      </div>
      
      <span className="sr-only">Loading...</span>
    </div>
  );
};
