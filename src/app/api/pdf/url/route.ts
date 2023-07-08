import { constants } from '@/server/utils/constants'
import { NextResponse } from 'next/server'

const pdfUrl = constants.PDF_URL

export default () => {
  return NextResponse.json({ url: pdfUrl })
}