import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        resume: {
          10: '#FFEBA9',
          50: '#FFF3D1',
          100: '#FFE3A3',
          200: '#FFD375',
          300: '#FFC347',
          400: '#F7A313',
          500: '#DE9311',
          600: '#B5770E',
          700: '#8C5B0B',
          800: '#664208',
          850: 'transparent',
          851: '#F2EFE7',
          852: '#1F1F1F',
          900: '#4A3206',
        },
        custom: {
          grey: '#E2E7ED',
          grey100: '#E5E5E5',
        },
      },
      borderRadius: {
        md: '4px',
      },
      boxShadow: {
        'level-4px-0.25': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        'level-8dp':
          '0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)',
        'level-4dp':
          '0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)',
        'level-hard': 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
      },
      screens: {
        'max-md': { max: '767px' },
      },
    },
  },
  plugins: [],
};
export default config;
