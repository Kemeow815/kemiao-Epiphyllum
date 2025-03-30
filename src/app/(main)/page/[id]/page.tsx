import React from "react";
import { getAllPage, getPageById } from "@/utils/pages";
import PageCreate from "@/components/pageCreate";
import { WebName } from "@/config/config";
import { profileConfig } from "@/config/config";
export const dynamicParams = false; // 禁用动态参数（纯静态生成）
// export const revalidate = 3600; // ISR 配置（单位：秒）
import { Metadata } from "next";
export const metadata: Metadata = {
    title: WebName,
    description: `${profileConfig.name} Page`,
    keywords: [profileConfig.name, profileConfig.bio],
};
export async function generateStaticParams() {
    const pages = await getAllPage();

    return pages.map((item) => ({
        id: item.id.toString(),
    }));
}
export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const pages = await getPageById(parseInt(id));
    return <PageCreate pages={pages.content} id={parseInt(id)}></PageCreate>;
}
