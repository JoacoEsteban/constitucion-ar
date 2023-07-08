import { onClient } from '@/client/utils/on-client'

export default function Download () {
  const downloadUrl = '/api/download-pdf'

  const download = async () => {
    await onClient()
    const res = await fetch(downloadUrl)
    const blob = await res.blob()
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'constitucion.pdf'
    a.click()
  }

  download()

  return (
    <main>
      <title>Descargando PDF</title>
      Descargando. Si la descarga no comienza hacé click <a href={downloadUrl} download>acá</a>
    </main>
  )
}