import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      tertiary: string
      black: string
      white: string
    },
    container:{
      "max-width":string,
      "margin":string,
      "background-color":string
    }
  }
}
