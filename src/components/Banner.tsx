import React from "react"
import Image from "next/image"
const bannerSrc : string = "/banner.png"
export default function Banner() {
    return (
        <div className="absolute -z-10 w-full inset-0 h-screen">
            <Image src={ bannerSrc } alt="Banner image of the blog"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-[65%] object-cover transition"/>
        </div>
    );
}