import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import dynamic from "next/dynamic";

const CmsLink = dynamic(() => import("./CmsLink"), {
    ssr: false,
});

function MarkdownRenderer(props) {
    return (
        <Markdown
            className="cms-content"
            remarkPlugins={[remarkGfm]}
            components={{
                a: (props) => <CmsLink {...props} />,
            }}
            {...props}
        />
    );
}

export default MarkdownRenderer;
