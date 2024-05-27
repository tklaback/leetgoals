import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#003049",
                  
          "secondary": "#669BBC",
                  
          "accent": "#C1121F",
                  
          "neutral": "#FDF0D5",

          "error": "#780000",
        }
      }
    ]
  }
};
export default config;
