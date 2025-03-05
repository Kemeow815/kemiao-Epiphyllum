import "@fontsource-variable/jetbrains-mono";
import "@fontsource-variable/jetbrains-mono/wght-italic.css";
import CopyButton from "./copyButton";
import ScrollBar from "./bodyScrollBar";
interface Props {
    className?: string;
    contentHtml?: string;
}

export default function ContentWrapper({
    className = "",
    contentHtml = "",
}: Props) {
    return (
        <div
            data-pagefind-body
            className={`prose dark:prose-invert prose-base !max-w-none custom-md ${className}`}
        >
            <div dangerouslySetInnerHTML={{ __html: contentHtml }}/>
            <CopyButton></CopyButton>
            <ScrollBar></ScrollBar>
        </div>
    );
}
