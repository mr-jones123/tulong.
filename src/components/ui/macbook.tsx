"use client"

import { MacbookScroll } from "../ui/macbook-scroll";
export default function Macbook(){
    return (
        <div className="w-[100%] h-[100%]">
            <MacbookScroll src={"/image.png"} />
        </div>
    );
}