import Link from 'next/link'
import { DocumentView } from '../_components/DocumentView'
import { constitution } from '@/server/data/constitution'
import Gtag from '../_components/gtag'
import OnProd from '../_helpers/OnProd'

export default function Home () {
  return (
    <main>
      <OnProd>
        <Gtag />
      </OnProd>
      <DocumentView doc={constitution} />
      <Link href={'/pdf'}>Ver PDF Oficial</Link>
    </main>
  )
}
