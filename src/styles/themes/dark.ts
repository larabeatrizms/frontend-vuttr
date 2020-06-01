import colors from '../colors';

export default {
  title: 'dark',

  colors: {
    primary: '#5636D3',
    secondary: '#FF872C',

    warning: '#E83F5B',
    success: '#12A454',

    background: colors.graySuperDarker,

    buttonText: colors.white,

    cardTittle: colors.purpleLighter,
    cardDescription: colors.grayRegular,
    cardTags: colors.purpleLighter,

    backgroundCard: colors.grayDarker,

    text: colors.grayDark,

    degradeTo: colors.grayDark,
    degradeFrom: colors.grayDarker,

    degrade: `linear-gradient(90deg, ${colors.grayDark} 0%, ${colors.grayDarker} 100%)`,
    // degrade: 'linear-gradient(0deg, #7B31D4 0%, #5319EC 100%)',
  },
};
