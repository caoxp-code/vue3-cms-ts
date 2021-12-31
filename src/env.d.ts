/// <reference types="vite/client" />

// 声明import.meta.env
interface ImportMetaEnv{
  readonly VITE_APP_TITLE: string
}
interface ImportMeta{
  readonly env: ImportMetaEnv
}

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
