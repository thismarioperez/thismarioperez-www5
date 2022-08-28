import Container from "@/components/common/Container";

export default function Alert({ preview }) {
    return (
        <>
            {preview && (
                <div>
                    <Container>
                        <div className="-text--center">
                            This is a page preview.{" "}
                            {/* eslint-disable-next-line @next/next/no-html-link-for-pages*/}
                            <a href="/api/exit-preview">Click here</a> to exit
                            preview mode.
                        </div>
                    </Container>
                </div>
            )}
        </>
    );
}
