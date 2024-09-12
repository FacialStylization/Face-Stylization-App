/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,vue}',
    '!./src/live2d-static-api/node_modules/**/*' // 排除特定路径
  ],
  theme: {
    extend: {},
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
      20: '20px'
    }
  },
  plugins: []
};
