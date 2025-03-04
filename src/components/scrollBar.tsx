"use client";
import React from "react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
interface Props {
    options?: any;
    children?: React.ReactNode;
}
export default function ScrollBar({
    options,
    children,
}: Props) {
    
    return (
        <OverlayScrollbarsComponent
            defer
            options={options}
        >
            {children}
        </OverlayScrollbarsComponent>
    );
}
