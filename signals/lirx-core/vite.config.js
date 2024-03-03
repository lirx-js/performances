
/**
 * @type {import('vite').UserConfig}
 */
const config = {
  build: {
    modulePreload: {
      polyfill: false,
    },
    target: 'esnext',
  },
  optimizeDeps: {
    include: [
      '@lirx/core',
    ],
  },
};

export default config;
