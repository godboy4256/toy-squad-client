import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSize: {
      xxs: string;
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
    };
    fontWeight: {
      light: number;
      mid: number;
      bold: number;
    };
    color: {
      red: string;
      green: string;
      lightGrey: string;
      black: string;
      white: string;
    };
  }
}
