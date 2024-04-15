import { Metadata } from 'next'
import React from 'react'
import Liga from './page'

export const metadata: Metadata = {
  title: 'Liga A1 - Masculino',
  description: 'Liga A1 - Masculino do M180',
}

export default function layout() {
  return <Liga />
}
