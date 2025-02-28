import React from "react";

interface Props{
    src: string;
    alt?: string;
    position?: string;
    className?: string;
}
export default function myImage(props: Props) {
    const position : string = props.position || "center";
    return (
        <div className={"overflow-hidden relative " + props.className}>
            <div className="transition absolute inset-0 dark:bg-black/10 bg-opacity-50 pointer-events-none"></div>
            <img
                src={props.src}
                alt={props.alt || ""}
                className={"w-full h-full object-cover object-position-"+position}
            />
        </div>
    );
}
