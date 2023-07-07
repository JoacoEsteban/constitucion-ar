import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge'
}

export default function middleware () {
  NextResponse.redirect('https://www.argentina.gob.ar/sites/default/files/constitucion_0.pdf')
}