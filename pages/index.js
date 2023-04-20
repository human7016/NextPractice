// コンポーネントの予測変換を使うと自動的に入力される
import { Inter } from 'next/font/google'
import { Links } from '@/components/Links'
import { Headline } from '@/components/Headline'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Headline title="Index" />

      <Links />
    </main>
  )
}
