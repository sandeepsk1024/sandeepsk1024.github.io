import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";
import react from '@vitejs/plugin-react-swc'

import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [wasm(), topLevelAwait(), react()],
});