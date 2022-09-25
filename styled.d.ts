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
      "background-color":string,
      "padding":string
    },
    carousel:{
      "700":number,
      "600":number,
      "500":number,
      "400":number,
      "300":number
    }
  }
}
