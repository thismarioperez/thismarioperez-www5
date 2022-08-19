// components
import Block from "./Block";

export default function Blocks({ blocks = [] }) {
    return (
        <>
            {blocks.map((block, i) => (
                <Block
                    key={block.id}
                    offset={i === 0 ?? undefined}
                    {...block}
                />
            ))}
        </>
    );
}
