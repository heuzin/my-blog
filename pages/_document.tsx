import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="title" property="og:title" content="Blog - Matheus Silva" />
                    <meta
                        name="image"
                        property="og:image"
                        content="http://farmgirlmarketingsolutions.com/wp-content/uploads/2015/12/blog-pic-b2c.jpg"
                    />
                    <meta
                        name="description"
                        property="og:description"
                        content="I blog about web development - especially JavaScript frameworks and libraries."
                    />
                    <meta property="og:image:type" content="image/jpeg" />
                    <meta property="og:image:width" content="800" />
                    <meta property="og:image:height" content="600" />
                    <meta property="og:type" content="website" />
                    <meta property="og:type" content="article" />
                    <meta property="article:author" content="Matheus Silva" />
                    <meta property="article:published_time" content="date_time" />
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
