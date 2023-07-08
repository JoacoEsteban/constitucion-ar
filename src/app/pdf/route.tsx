import { constants } from '@/server/utils/constants'
import { NextResponse } from 'next/server'

export function GET () {
  return NextResponse.redirect(constants.PDF_URL)
}