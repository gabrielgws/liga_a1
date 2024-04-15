import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import Link from 'next/link'
import { Home, MenuIcon, Trophy } from 'lucide-react'

import LogoA1 from '@/assets/logo-A1'

export const MenuBar = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <MenuIcon
            className="text-primary-foreground"
            width={30}
            height={30}
          />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="mt-8 flex w-full justify-start">
              <Link href="/">
                <LogoA1 className="h-[60px] w-[60px] fill-primary" />
              </Link>
            </SheetTitle>
            <SheetDescription className="flex flex-col items-start gap-8 pt-8">
              <Link
                href="/"
                className="flex flex-row items-center justify-center gap-2"
              >
                <Home className="text-primary" width={20} height={20} />
                <p className="text-lg font-bold text-primary">INÍCIO</p>
              </Link>

              <Link
                href="/liga/"
                className="flex flex-row items-center justify-center gap-2"
              >
                <Trophy className="text-primary" width={20} height={20} />
                <p className="text-lg font-bold text-primary">LIGA A1</p>
              </Link>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  )
}
