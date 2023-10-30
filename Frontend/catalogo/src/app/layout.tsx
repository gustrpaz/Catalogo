import type { Metadata } from 'next'
import './globals.css'
import Image from 'next/image'
import Logo from '../assets/Logo.svg'

export const metadata: Metadata = {
  title: 'Catálogo',
  description: 'Um catálogo de filmes e séries construído com React, Next.Js e TypeScript',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header>
        <div className='wrapper'>
          <Image src={Logo} width={160} height={53} alt='Logo'></Image>
        </div>
      </header>
      <main className='wrapper'>{children}</main>
      <footer>© Todos os Diretos Reservados - Gustavo e Lívia</footer>
    </>
  )
}
