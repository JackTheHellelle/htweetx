// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// 환경 변수로 BASE_URL을 지정
//const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'build',
  },
});