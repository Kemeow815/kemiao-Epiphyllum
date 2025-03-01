import React from "react";
interface Props {
    className?: string;
    style?: {
        [key: string]: string | number;
    };
}
export default function tag(props: Props) {
    return (
        <div className="card-base font-bold p-4">
            <div className="text-lg flex items-center gap-2">
                <div className="font-bold w-1 h-5 rounded-md bg-sky-500"></div>
                <div>标签</div>
            </div>
        </div>
    );
}
