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
        gButtonTo: '#61E199',
        'scrollbar-thumb': '#808080',  // bg-gray-900
        'scrollbar-thumb-hover': '#808080',  // bg-gray-700
        'scrollbar-track': '#808080',  // bg-gray-300
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
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar': {
          'scrollbar-width': 'thin',
          'scrollbar-color': '#808080 #E6E6E6',
        },
        '.scrollbar::-webkit-scrollbar': {
          'width': '8px',
          'height': '8px',
          'border-radius': '3px',
        },
        '.scrollbar::-webkit-scrollbar-thumb': {
          'background-color': '#1F2937',
          'border-radius': '9999px',
        },
        '.scrollbar::-webkit-scrollbar-thumb:hover': {
          'background-color': '#4B5563',
        },
        '.scrollbar::-webkit-scrollbar-track': {
          'background-color': '#D1D5DB',
        },
        '.scrollbar::-webkit-scrollbar-button': {
          'display': 'none',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ]
}
