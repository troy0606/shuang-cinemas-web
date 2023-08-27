import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig(({command})=> {
  const commonConfig = {
    plugins: [react()],
  };
  if (command === 'serve') {
     // dev 独有配置
    return {...commonConfig, base: "/front-stage/",};
  } else {
    // command === 'build'
    // build 独有配置
    return {...commonConfig};
  }
})
