import LogoA1 from '@/assets/logo-A1'
import { ModeToggle } from './ModeToggle'
import { MenuBar } from './MenuBar'
import Link from 'next/link'

export const Header = () => {
  return (
    <div className="fixed top-0 z-50 flex h-16 w-full items-center justify-between bg-primary px-5">
      <Link href="/">
        <LogoA1 className="h-[30px] w-[30px] fill-primary-foreground" />
      </Link>

      <div className="flex flex-row items-center gap-4">
        <ModeToggle />
        <MenuBar />
      </div>
    </div>
  )
}
