import { createStore, createLogger } from 'vuex'
const isProduction = process.env.NODE_ENV === 'production'
export default createStore({
  modules: {},
  strict: true,
  plugins: isProduction ? [] : [createLogger()],
})
