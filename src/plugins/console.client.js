import Vue from 'vue'
import VConsole from 'vconsole'
import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import { hasOwnProperty } from '@/utils'
export default defineNuxtPlugin((context) => {
  if (hasOwnProperty(context.query, 'debugger') || context.isDev) {
    const vc = new VConsole({
      theme: 'dark',
    })
    Vue.use(vc)
  }
})
