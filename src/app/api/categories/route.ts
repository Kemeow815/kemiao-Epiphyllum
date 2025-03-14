import { NextResponse } from "next/server";
import { getAllCategories } from "@/utils/getData";

export async function GET() {
    try {
        const categories = await getAllCategories();
        return NextResponse.json({ data: categories });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch categories" },
            { status: 500 }
        );
    }
}
