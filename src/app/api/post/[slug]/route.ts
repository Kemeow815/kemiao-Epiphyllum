import { NextResponse } from "next/server";
import { getPostBySlug } from "@/utils/getData";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params;
        const decodedSlug = decodeURIComponent(slug);

        const post = await getPostBySlug(decodedSlug);

        if (!post) {
            return NextResponse.json(
                { error: "Post not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ data: post });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch post" },
            { status: 500 }
        );
    }
}
