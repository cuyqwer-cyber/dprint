/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#627D98',
          500: '#334E68',
          600: '#243B53',
          700: '#182C49',
          800: '#10223A',
          900: '#0B192C',
          950: '#060D18',
          DEFAULT: '#0B192C',
        },
        brandYellow: {
          100: '#FEF9C3',
          200: '#FEF08A',
          300: '#FDE047',
          400: '#FACC15',
          500: '#FFC000',
          hover: '#F4B91F',
          600: '#EAB308',
          700: '#CA8A04',
          DEFAULT: '#FFC000',
        },
        brandOrange: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          DEFAULT: '#F97316',
        },
        surfaceBg: '#F7F8FA',
        secondaryGray: '#64748B',
        lightBorder: '#E2E8F0',
      },
      fontFamily: {
        heading: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(11, 25, 44, 0.05), 0 1px 2px -1px rgba(11, 25, 44, 0.05)',
        'card': '0 4px 6px -1px rgba(11, 25, 44, 0.06), 0 2px 4px -2px rgba(11, 25, 44, 0.04)',
        'card-hover': '0 10px 20px -3px rgba(11, 25, 44, 0.1), 0 4px 6px -4px rgba(11, 25, 44, 0.05)',
        'modal': '0 20px 25px -5px rgba(11, 25, 44, 0.2), 0 8px 10px -6px rgba(11, 25, 44, 0.1)',
      },
      borderRadius: {
        'card': '16px',
        'card-lg': '20px',
      }
    },
  },
  plugins: [],
}
