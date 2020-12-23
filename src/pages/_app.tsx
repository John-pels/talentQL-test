import React from 'react'
import { ThemeProvider } from 'styled-components'
import '@styles/globals.css'
import theme from '@theme/index'
import { GlobalStyles } from '@theme/globalStyles'
import '../theme/normalize.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
