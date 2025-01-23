/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{html,ts,scss}', 
    ],
    theme: {
      extend: {
        colors: {
          custom: 'red',
        },
      },
    },
    plugins: [],
  };
  