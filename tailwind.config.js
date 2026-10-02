const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0B2340',
        gold: '#B99552',
        slate: '#F5F7F9',
        ink: '#1A2939',
      },
      boxShadow: {
        soft: '0 20px 45px rgba(11,35,64,0.08)'
      }
    }
  },
  plugins: []
};

export default config;
