/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      // colors: {
      //   minga1: "black",
      //   minga2: "orange"
      // },
      // backgroundColor: {
      //   minga1: "orange",
      //   minga2: "black",
      // }
    }
  },
  variants: {},
  plugins: []
}

