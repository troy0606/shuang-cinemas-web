import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig(({ command }) => {
  const commonConfig = {
    plugins: [react(), svgr()],
    base: '/front-stage/',
    build: {
      outDir: '../../dist/front-stage',
    },
  };
  if (command === 'serve') {
    // dev 独有配置
    return {
      ...commonConfig,
      css: {
        devSourcemap: true,
      },
    };
  } else {
    // command === 'build'
    // build 独有配置
    return { ...commonConfig };
  }
});
