import { Blog } from "../hooks"
import { Appbar, AvatarApp } from "./Appbar"

export const FullBlog = ({blog}: {blog: Blog}) => {
    return (
        <div className="">
            <Appbar />
            <div className="flex justify-center">
                <div className="grid grid-cols-12  px-10 w-full pt-200 max-w-screen-xl pt-10">
                    
                    <div className="col-span-8">
                        <div className="text-5xl font-extrabold">
                            {blog.title}
                        </div>
                        <div className=" pt-2 text-lg text-slate-500 "> 
                            Posted on 2nd december 2023
                        </div>
                        <div className="pt-4 text-xl font-normal">
                            {blog.content}
                        </div>
                    </div>
                    <div className="col-span-4">
                       <div className="text-slate-500 underline text-lg font-bold">
                       Author
                       </div>
                        <div className="drop-shadow-xl flex pt-2">
                            <div className="pr-4 flex flex-col justify-center">
                                <AvatarApp  name={blog.author.name} />
                            </div>
                            <div className="">
                                <div className="text-xl font-bold">
                                    {blog.author.name ||"Anonymous"}
                                </div>
                                <div className=" text-slate-500">
                                    Random Catch Phrases about the author
                                </div>
                            </div>

                        </div>    
                       

                    </div>
                    
                    
                </div>
            </div>
        </div>
        
    )
}