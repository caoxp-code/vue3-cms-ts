import { defineConfig, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'

import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  const config: UserConfigExport = {
    plugins: [vue()],
    resolve: {
      alias: {'@': resolve(__dirname, './src')}
    },
    server: {
      port: 3000,
      open: 'http://127.0.0.1:3000/'
    },
    preview: {
      port: 8080
    }
  }
  if (command === 'serve') {
    config.server.host = '127.0.0.1'
  } else {

  }
  return config
})
