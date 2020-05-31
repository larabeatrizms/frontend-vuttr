import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      warning: string;
      success: string;

      background: string;

      subtitle: string;

      cardTittle: string;
      cardDescription: string;
      cardTags: string;

      backgroundCard: string;

      text: string;

      degradeTo: string;
      degradeFrom: string;

      degrade: string;
    };
  }
}
