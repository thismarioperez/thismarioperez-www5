import { Html, Head, Main, NextScript } from "next/document";
import LogoMark from "@/components/TheHeader/LogoMark";

export default function Document() {
    return (
        <Html
            className="no-js"
            lang="en"
            style={{ backgroundColor: "#1c1b22" }}
        >
            <Head />
            <body>
                <div
                    id="intro"
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        zIndex: 9999999999,
                        backgroundColor: "#1c1b22"
                    }}
                >
                    <div
                        id="inner"
                        style={{
                            position: "relative",
                            height: "100vh",
                            width: "100vw",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <LogoMark
                            style={{
                                height: "100px",
                                width: "100px",
                                fill: "#ffffff",
                            }}
                        />
                    </div>
                </div>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
