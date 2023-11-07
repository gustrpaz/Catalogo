import './globals.css'
import type { Metadata } from 'next'
import Image from 'next/image'
import Logo from '../assets/Logo.svg'

const titilliumWeb = 'Titillium Web, sans-serif';

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
    <html lang="br">
      <body style={{ fontFamily: titilliumWeb }}>
      <header>
        <div className='wrapper'>
          <Image src={Logo} width={160} height={53} alt='Logo'></Image>
        </div>
      </header>{children}<footer>© Todos os Diretos Reservados - Gustavo e Lívia</footer>
      </body>
    </html>
  )
}
