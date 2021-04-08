import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { SnackbarProvider } from 'notistack';

import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import theme from '../src/theme';
import Context from '../src/context/index';
import NoLayout from '../src/layouts/Container';
import LoadingModal from '../src/components/LoadingModal';
import LoadingScreen from '../src/components/LoadingScreen';
import Bot from '../src/components/Bot';

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const { user, layoutProps } = pageProps;
  const [isLoading, setIsLoading] = useState(false);
  const Router = useRouter();

  useEffect(() => {
    const updateLoadingStatus = () => setIsLoading(!isLoading);

    Router.events.on('routeChangeStart', updateLoadingStatus);
    Router.events.on('routeChangeComplete', updateLoadingStatus);

    return () => {
      Router.events.off('routeChangeStart', updateLoadingStatus);
      Router.events.off('routeChangeComplete', updateLoadingStatus);
    };
  }, [Router.events, isLoading]);

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const Layout = Component.layout || NoLayout;

  return (
    <>
      <Head>
        <title>E-commerce</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="/globals.css" />
      </Head>
      <Context>
        <ThemeProvider theme={theme}>
          <main>
            {isLoading ? (
              <AnimatePresence>
                <AnimateSharedLayout type="crossfade">
                  <LoadingScreen />
                </AnimateSharedLayout>
              </AnimatePresence>
            ) : (
              <AnimatePresence>
                <AnimateSharedLayout type="crossfade">
                  <Layout layoutProps={layoutProps} user={user}>
                    <SnackbarProvider>
                      <CssBaseline />
                      <Component {...pageProps} user={user} />
                    </SnackbarProvider>
                  </Layout>
                </AnimateSharedLayout>
              </AnimatePresence>
            )}
            <LoadingModal />
            <Bot />
          </main>
        </ThemeProvider>
      </Context>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape().isRequired,
  layoutProps: PropTypes.shape(),
  user: PropTypes.shape(),
};
MyApp.defaultProps = {
  layoutProps: {},
  user: {},
};
