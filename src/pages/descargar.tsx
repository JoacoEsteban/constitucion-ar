export default function Download () {
  const downloadUrl = '/api/download-pdf'

  const download = async () => {
    const res = await fetch(downloadUrl)
    console.log(res)
  }

  download()

  return (
    <main>
      <title>Descargando PDF</title>
      Descargando. Si la descarga no comienza hacé click <a href={downloadUrl} download>acá</a>
    </main>
  )
}