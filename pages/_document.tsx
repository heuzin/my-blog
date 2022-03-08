import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="title" property="og:title" content="[Content title here]" />
                    <meta
                        name="image"
                        property="og:image"
                        content="https://my-blog-blond-pi.vercel.app/_next/image?url=%2Fimages%2Fsite%2Fmatheus.png&w=384&q=75"
                    />
                    <meta name="description" property="og:description" content="This is my Blog site." />
                    <meta name="author" content="Matheus Silva" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <div id="notifications"></div>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
