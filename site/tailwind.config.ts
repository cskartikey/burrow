import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'backgroundBlack': '#181818',
        'hackClubRed': '#EC3750',
        'burrowPurple': '#4E4FEB',
        'burrowStroke': '#595959',
        'burrowHover': '#3D3D3D'
      },
      fontFamily: {
        SpaceMono: ['var(--font-space-mono)'],
        Poppins: ['var(--font-poppins)'],
      }
    },
  },
  plugins: [],
}
export default config
