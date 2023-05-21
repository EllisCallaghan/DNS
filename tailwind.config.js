/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['Roboto','sans-serif'],
      },
      boxShadow: {
        card: "-10px 0px 120px 30px #211e35",
      },
    },
    screens:{
      'xl':{'max':'1440px'},
      'lg':{'max':'1152px'},
      'md':{'max':'768px'},
      'sm':{'max':'560px'},
    }
  },
  plugins: [],
}
