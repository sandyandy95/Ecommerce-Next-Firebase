import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { SnackbarProvider } from 'notistack';

import theme from '../src/theme';
import Context from '../src/context/index';
import NoLayout from '../src/layouts/Container';

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const { user, layoutProps } = pageProps;
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
            <Layout layoutProps={layoutProps} user={user}>
              <SnackbarProvider>
                <CssBaseline />
                <Component {...pageProps} user={user} />
              </SnackbarProvider>
            </Layout>
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
