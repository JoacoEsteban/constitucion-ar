import Link from 'next/link'
import { DocumentView } from '../_components/DocumentView'
import { constitution } from '@/server/data/constitution'
import OnProd from '../_helpers/OnProd'
import Script from 'next/script'

export default function Home () {
  const GTAG_ID = process.env.NEXT_PUBLIC_GTAG_ID

  return (
    <main>
      <OnProd>
        <div className="container">
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`} />
          <Script id="google-analytics">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${GTAG_ID}');
        `}
          </Script>
        </div>
      </OnProd>
      <DocumentView doc={constitution} />
      <Link href={'/pdf'}>Ver PDF Oficial</Link>
    </main>
  )
}
