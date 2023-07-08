import { createDownloadProxy } from '@/server/utils/proxy'

const target = 'https://www.argentina.gob.ar/sites/default/files/constitucion_0.pdf'

export default createDownloadProxy(target)