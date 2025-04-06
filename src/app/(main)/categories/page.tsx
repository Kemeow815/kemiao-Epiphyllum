import { getAllCategories } from "@/utils/getData";
import Link from "next/link";
import { Metadata } from "next";
import { cn } from "@/utils/cn";
export const metadata: Metadata = {
    title: "Categories - Blog",
    description: "Categories",
    keywords: [
        ...(await getAllCategories()).map((category) => category.category),
    ],
};
export default async function page() {
    const categories = await getAllCategories();
    return (
        <div className="card-base px-9 py-6">
            <div className="mx-auto text-center text-3xl font-bold mb-8">
                Categories
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
                {categories.map(({ category, count }, index) => {
                    return (
                        <CategoryCard
                            category={category}
                            count={count}
                            key={index}
                            index={index}
                        />
                    );
                })}
            </div>
        </div>
    );
}
function CategoryCard({
    category,
    count,
    index,
}: {
    category: string;
    count: number;
    index: number;
}) {
    const colorMap = [
        {
            text: "text-sky-600",
            border: "border-sky-300",
        },
        {
            text: "text-red-600",
            border: "border-red-300",
        },
        {
            text: "text-yellow-600",
            border: "border-yellow-300",
        },
        {
            text: "text-green-600",
            border: "border-green-300",
        },
        {
            text: "text-purple-600",
            border: "border-purple-300",
        },
        {
            text: "text-pink-600",
            border: "border-pink-300",
        },
        {
            text: "text-orange-600",
            border: "border-orange-300",
        },
        {
            text: "text-teal-600",
            border: "border-teal-300",
        },
        {
            text: "text-blue-600",
            border: "border-blue-300",
        },
    ];
    const color = colorMap[index % colorMap.length];
    const { text: textColor, border: borderColor } = color;
    return (
        <Link
            href={`/categories/${category}`}
            className={cn(
                "relative overflow-hidden rounded-2xl border p-4 h-28 hover:scale-105 border-l-4",
                borderColor
            )}
        >
            <div className="mb-3 flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-800">{category}</h3>
                <span className="text-center text-sm text-gray-500">
                    {count} 篇文章
                </span>
            </div>
            <div className="absolute inset-0 opacity-40">
                <div
                    className={`absolute bottom-4 left-1/2 -translate-x-1/2 text-6xl font-bold ${textColor} transform rotate-[-6deg]`}
                >
                    {category}
                </div>
            </div>
        </Link>
    );
}
