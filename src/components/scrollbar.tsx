"use client";
import React from "react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { useEffect } from "react";
import { OverlayScrollbars } from "overlayscrollbars";
interface Props {
    className?: string;
    options?: any;
    children?: React.ReactNode;
}
export default function ScrollBar({
    className = "",
    options,
    children,
}: Props) {
    return (
        <OverlayScrollbarsComponent
            defer
            options={options}
            className={`${className}`}
        >
            {children}
        </OverlayScrollbarsComponent>
    );
}
