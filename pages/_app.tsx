import Head from 'next/head';

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
