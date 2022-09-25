import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../components/styles/globalstyles'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


const theme: DefaultTheme = {
  colors: {
    primary: '#27617e',
    secondary: '#4e99ad',
    tertiary: "#849daa",
    white: "#fff",
    black: "#000"
  },
  container:{
    "max-width":"1140px",
    "margin": "auto",
    "background-color":"transparent",
    "padding":"0.5rem"
  },
  carousel:{
    "700":700,
    "600":600,
    "500":500,
    "400":400,
    "300":300
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
