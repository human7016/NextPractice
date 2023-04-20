// コンポーネントの予測変換を使うと自動的に入力される
import { Inter } from 'next/font/google'
import Main from '@/components/Main'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Main page="index"/>
  )
}
