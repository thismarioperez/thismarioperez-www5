import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import dynamic from "next/dynamic";

const MarkdownLink = dynamic(() => import("./MarkdownLink"), {
    ssr: false,
});

function MarkdownRenderer(props) {
    return (
        <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
                a: (props) => <MarkdownLink {...props} />,
            }}
            {...props}
        />
    );
}

export default MarkdownRenderer;
