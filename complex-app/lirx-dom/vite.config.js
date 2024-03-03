import { aotPlugin } from '@lirx/dom-aot-plugin';

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
  plugins: [
    aotPlugin({
      pathMatches: (path) => {
        return path.endsWith('.ts')
          || path.endsWith('.component.mjs');
      },
    }),
  ],
  optimizeDeps: {
    include: [
      '@lirx/core',
      '@lirx/dom',
    ],
  },
};

export default config;
