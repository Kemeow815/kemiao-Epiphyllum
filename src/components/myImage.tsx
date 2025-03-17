import React from "react";
import Image from "next/image";
interface Props {
    src: string;
    alt?: string;
    position?: string;
    className?: string;
    sizes?: number;
}
export default function myImage({
    src,
    alt = "",
    position = "center",
    className,
    sizes = 100,
}: Props) {
    return (
        <div className={`overflow-hidden relative ${className}`}>
            <Image
                src={src}
                alt={alt}
                sizes="50vw"
                fill
                quality={100}
                className={`object-cover object-position-${position}`}
            ></Image>
        </div>
    );
}
