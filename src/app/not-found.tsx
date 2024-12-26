"use client"
import Image from "next/image";
export default function notFound(){
    return(
        <div className="min-h-screen flex flex-col">
        <div className="h-[700px] flex flex-col justify-center items-center">
                <Image 
                src="/confused_joe.jpg"
                alt="Confused Joe"
                width={100}
                height = {150}
                className="w-auto h-44" />
                <h1 className="text-6xl font-black text-feuGreen mt-9">404 Not Found</h1>
        </div>
           
        </div>
    );
}   