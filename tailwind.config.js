/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 0px 12px 4px #0000001A'
      },
      colors: {
        mBlack: '#110E0E',
        mDarkBlue: '#262F40',
        mDarkGrey: '#4E4E4E',
        mGrey: '#808080',
        mLigthGrey: '#C1C1C1',
        mWhite: '#FCFCFC',
        mLime: '#2FDA7A',
        mLigthLime: '#D1FAEB',

        gFromColor: '#fcfcfc',
        gMidleColor: '#f8f8f8',
        gToColor: '#f0f0f0',

        gButtonFrom: '#7DEBB8',
        gButtonTo: '#61E199'
      },
      fontFamily: {
        display: 'Montserrat' // Adds a new `font-display` class
      },
      width: {
        464: '464px',
        xxl: '1440px'
      }
    }
  },
  plugins: []
}
