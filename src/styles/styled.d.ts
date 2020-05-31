import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      orange: string;
      red: string;

      background: string;
      text: string;
    };
  }
}
