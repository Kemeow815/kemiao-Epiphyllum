"use client"
import React from 'react'
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
export default function ScrollBar({children} : {children: React.ReactNode}) {
  return (
    <OverlayScrollbarsComponent defer options={{ scrollbars: { autoHide: "scroll", autoHideDelay: 500 } }}>{children}</OverlayScrollbarsComponent>
  )
}
