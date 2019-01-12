const colors = {
  teal: '#26A69A',
  lightGray: '#f6f6ff',
  lightTeal: '#64ffda',
  bgGray: 'rgba(255,255,255,0.2)',
  white: '#EEE',
  black: '#222',
  red: '##FF4081',
  lightyellow: '#FFCA28',
  Yellow: '#FF6F00',
}
const noHoverEffectDay = {
  backgroundColor: colors.white,
  color: colors.black,
}
const noHoverEffectNight = {
  backgroundColor: colors.black,
  color: colors.white,
}
const theme = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],

  colors: {
    teal: '#26A69A',
    lightGray: '#f6f6ff',
    lightTeal: '#64ffda',
    bgGray: 'rgba(255,255,255,0.2)',
    white: '#EEE',
    black: '#222',
    red: '#FF4081',
    yellow: '#ff9900',
    lightYellow: '#FFAB00',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],

  fonts: {
    sans: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },

  width: [0, 4, 8, 16, 32, 64, 128, 256],
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
    extra: '0 2px 16px rgba(0, 0, 0, 0.25)',
  },
  borderRadius: {
    upBottom: '10px',
  },
  cards: {
    day: {
      ...noHoverEffectDay,
      ':hover': {
        backgroundColor: colors.black,
        color: colors.white,
      },
    },
    night: {
      ...noHoverEffectNight,
      ':hover': {
        backgroundColor: 'transparent',
        color: colors.black,
        zIndex: '1',
      },
      ':hover:before': {
        backgroundColor: '#fff',
      },
    },
    asBackground: {
      backgroundColor: 'transparent',
      color: '#EEE',
    },
    projectDay: {
      backgroundColor: '#EEE',
      color: '#222',
    },
    projectNight: {
      backgroundColor: '#222',
      color: '#EEE',
    },
    noHoverEffectDay: { ...noHoverEffectDay },
    noHoverEffectNight: { ...noHoverEffectNight },
    backgroundImage: {
      color: colors.white,
    },
    backgroundImageWhite: {
      color: colors.black,
    },
  },
  buttons: {
    day: {
      color: '#222',
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 0 2px',
    },
    night: {
      color: '#EEE',
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 0 2px',
    },
  },
}

export default theme
