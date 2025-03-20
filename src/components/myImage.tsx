import React from "react";
import Image from "next/image";
interface Props {
    src: string;
    alt?: string;
    position?: string;
    className?: string;
    id?: string;
}
export default function myImage({
    src,
    alt = "",
    position = "center",
    className,
    id,
}: Props) {
    return (
        <div className={`overflow-hidden relative ${className}`} id={id}>
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
