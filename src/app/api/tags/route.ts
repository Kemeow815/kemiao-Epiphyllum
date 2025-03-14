import { NextResponse } from "next/server";
import { getAllTags } from "@/utils/getData";

export async function GET() {
    try {
        const tags = await getAllTags();
        return NextResponse.json({ data: tags });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch tags" },
            { status: 500 }
        );
    }
}
