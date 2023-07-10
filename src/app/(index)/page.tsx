import Link from 'next/link'
import { DocumentView } from '../_components/DocumentView'
import { constitution } from '@/server/data/constitution'

export default function Home () {
  return (
    <main>
      <DocumentView doc={constitution} />
      <Link href={'/pdf'}>Ver PDF Oficial</Link>
    </main>
  )
}
