import { Options, createProxyMiddleware } from 'http-proxy-middleware'

export const createDirectProxy = (target: string, options: Options = {}) => createProxyMiddleware({
  target,
  pathRewrite: {
    '.*': ''
  },
  changeOrigin: true,
  ...options
})

export const createDownloadProxy = (target: string, options: Options = {}) => createDirectProxy(target, {
  ...options,
  onProxyRes: (proxyRes, req, res) => {
    proxyRes.headers['Content-Disposition'] = 'attachment; filename="constitucion_0.pdf"'
  }
})