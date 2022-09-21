module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    colors: {
      white: '#FFFFFF',
      'off-white': '#F3F3F3',
      black: '#000000',
      green: '#22B17A',
      grey: '#696969',
      github: '#24292E',
      linkedin: '#0B65C2'
    },
    bosShadow: {
      light: '0px 3px 6px 0px rgba(0, 0, 0, 0.3)'
    },
    fontFamily: {
      sans: ['proxima-nova', 'Helvetica Neue', 'sans-serif']
    },
    fontSize: {
      xs: '.875rem',
      sm: '1rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '1.78125rem',
      '3xl': '2.375rem',
      '4xl': '2.625rem',
      '5xl': '3.375rem'
    },
    fontWeight: {
      semibold: 400,
      bold: 700
    },
    lineHeight: {
      'leading-none': 1,
      'leading-tight': 1.25
    },
    padding: {
      none: '0',
      card: '16px 20px',
      end: '100vh 0 100px 0'
    },
    margin: {
      none: '0',
      30: '30px'
    },
    width: {
      headshot: '170px',
      'headshot-tiny': '140px'
    },
    extend: {
      screens: {
        tiny: { max: '430px' }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
