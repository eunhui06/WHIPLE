import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url'; // 👈 Node.js 내장 기능 불러오기

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // ⭐️ 핵심: '@'를 입력하면 프로젝트의 'src' 폴더를 가리키게 함
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});