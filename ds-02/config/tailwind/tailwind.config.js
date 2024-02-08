import bitPreset from './preset';

const colors = require('./colors');

/** @type {import('tailwindcss').Config} */
export default {
  // use the basic preset to get the files from the workspace
  content: [...bitPreset.content],
  prefix: 'j-',
  theme: {
    extend: {
      colors,
      fontFamily: {
        primary: ['Manrope', 'sans-serif'],
        sans: [
          '"Manrope"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        mono: [
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
};
