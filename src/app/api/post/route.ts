import { NextResponse } from "next/server";
import { BlogData, getAllSortedPosts } from "@/utils/getData";

export async function GET() {
    try {
        const posts = await getAllSortedPosts();
        return NextResponse.json({ data: posts });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch posts" },
            { status: 500 }
        );
    }
}
