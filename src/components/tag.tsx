import React from "react";

export default function tag() {
    return (
        <div className="card-base p-2">
            <div className="text-lg font-bold flex flex-col items-center gap-1 justify-center">
                <div>标签</div>
                <div className="w-5 h-1 rounded-md bg-sky-500"></div>
            </div>
        </div>
    );
}
