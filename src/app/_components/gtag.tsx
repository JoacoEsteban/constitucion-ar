'use client'
declare global {
  interface Window {
    dataLayer: any[]
  }
}

export default function Gtag () {
  const GTAG_ID = process.env.NEXT_PUBLIC_GTAG_ID
  window.dataLayer = window.dataLayer || []
  function gtag (...args: any[]) { window.dataLayer.push(args) }
  gtag('js', new Date())
  gtag('config', GTAG_ID)

  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}></script>
      <script>
      </script>
    </>
  )
}
