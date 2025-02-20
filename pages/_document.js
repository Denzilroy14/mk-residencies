import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en" className="scroll-smooth">
            <Head>
                {/* Import Google Fonts */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300;400;900&family=Rajdhani:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
