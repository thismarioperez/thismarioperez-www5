import Container from "@/components/Container";

export default function Alert({ preview }) {
    return (
        <>
            {preview && (
                <div>
                    <Container>
                        <div className="-text--center">
                            This is a page preview.{" "}
                            <a href="/api/exit-preview">Click here</a> to exit
                            preview mode.
                        </div>
                    </Container>
                </div>
            )}
        </>
    );
}
