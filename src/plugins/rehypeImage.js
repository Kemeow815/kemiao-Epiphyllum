import { visit } from "unist-util-visit";
export function rehypeImage() {
    return (tree) => {
        visit(tree, "element", (node) => {
            if (node.tagName === "img") {
                if (node.properties.src.startsWith("./assets/")) {
                    node.properties.src = `/posts/${node.properties.src.slice(
                        2
                    )}`;
                } else if (node.properties.src.startsWith("assets/")) {
                    node.properties.src = `/posts/${node.properties.src}`;
                }
            }
        });
    };
}
