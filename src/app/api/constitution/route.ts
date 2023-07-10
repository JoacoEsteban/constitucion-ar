import { constitution } from '@/server/data/constitution'
import { NextResponse } from 'next/server'

export function GET () {
  return NextResponse.json(constitution)
}