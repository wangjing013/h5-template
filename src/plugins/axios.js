import { Toast } from 'vant'

const axiosPlugin = ({ $axios }, inject) => {
  $axios.setBaseURL(process.env.BASE_URL)
  $axios.onRequest((config) => {
    return config
  })
  $axios.onResponse((response) => {
    const { code, msg } = response.data
    if (code !== 200) {
      Toast({
        message: msg,
        type: 'fail',
        icon: 'none',
      })
    }
    return response.data
  })
  $axios.onError((error) => {
    Toast({
      message: error.message,
      type: 'fail',
    })
  })

  // 动态注入
  const requireContext = require.context('../api/', false, /\.js$/)
  const regx = /(?:\w+)/
  requireContext.keys().forEach((key) => {
    // 通过 requireContext(key)导出文件内容
    const mod = requireContext(key)
    const fn = mod.__esModule && mod.default ? mod.default : mod
    inject(`${regx.exec(key)[0]}Api`, fn($axios))
  })
}

export default axiosPlugin
