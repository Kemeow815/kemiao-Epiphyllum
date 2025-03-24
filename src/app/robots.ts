import type { MetadataRoute } from "next";
import { WebUrl } from "@/config/config";
export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${WebUrl}/sitemap.xml`,
    };
}
