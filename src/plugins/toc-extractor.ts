import type { Plugin } from "unified";
import type { Root as HtmlRoot, Element } from "hast";
import { selectAll } from "hast-util-select";
import { toString } from "hast-util-to-string";
import { TocItem } from "@/utils/getData";

export const tocExtractor: Plugin<[void?], HtmlRoot> = () => {
    return (tree, file) => {
        const toc: TocItem[] = [];
        const stack: { depth: number; node: TocItem }[] = [];

        // 选择所有标题元素
        selectAll("h1,h2,h3,h4,h5,h6", tree).forEach((node: Element) => {
            const depth = parseInt(node.tagName[1], 10);
            const text = toString(node);
            const id = (node.properties?.id as string) || "";
            const item: TocItem = {
                depth,
                text,
                id,
            };
            toc.push(item);
        });

        // 挂载到文件数据
        (file.data as any).toc = toc;
    };
};
