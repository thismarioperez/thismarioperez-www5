import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import dynamic from "next/dynamic";

const MarkdownLink = dynamic(() => import("./MarkdownLink"), {
    ssr: false,
});

function MarkdownRenderer(props) {
    return (
        <Markdown
            className="cms-content"
            remarkPlugins={[remarkGfm]}
            components={{
                a: (props) => <MarkdownLink {...props} />,
            }}
            {...props}
        />
    );
}

export default MarkdownRenderer;
