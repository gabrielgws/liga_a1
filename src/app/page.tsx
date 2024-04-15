import LogoA1 from '@/assets/logo-A1'
import { Header } from '@/components/Shared/Header'

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <Header />

      <LogoA1 className="h-[200px] w-[200px] fill-primary" />
    </div>
  )
}
