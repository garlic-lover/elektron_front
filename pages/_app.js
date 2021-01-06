import { ApolloProvider } from "@apollo/client";
import client from "../GraphQl/config";

import { StateProvider } from "../state/store";

import "../styles/globals.css";

import Layout from "../components/DS/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ApolloProvider client={client}>
        <StateProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </StateProvider>
      </ApolloProvider>
    </>
  );
}
