const theme = {
  color: {
    default: 'black',
  },
  background: {
    default: 'white',
  },
  fontFamily: {
    default: 'Cursive',
  },
  fontSize: {
    small: '15px',
    medium: '20px',
    large: '25px',
  },
  media: {
    phone: '@media only screen and (max-width: 400px)',
    onlyPhone: '@media only screen and (min-width: 400px)',
    tablet: '@media only screen and (max-width: 700px)',
    onlyTablet: '@media only screen and (min-width: 700px)',
    laptop: '@media only screen and (max-width: 1280px)',
    desk: '@media only screen and (min-width: 1281px)',
  },
  selection: {
    default: `::selection {
        color: black;
        background: transparent;
    }`,
  },
};

export default theme;
