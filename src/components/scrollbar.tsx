"use client";
import React from "react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
interface Props {
    className?: string;
    options?: any;
    children?: React.ReactNode;
    onClick?: (e: any) => void;
}
export default function ScrollBar({
    className = "",
    options,
    children,
    onClick,
}: Props) {
    return (
        <OverlayScrollbarsComponent
            defer
            options={options}
            className={`${className}`}
            onClick={onClick}
        >
            {children}
        </OverlayScrollbarsComponent>
    );
}
