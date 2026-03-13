'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div key="header-name" className="space-y-2">
              <Link href="/" className="font-medium text-black dark:text-white">
                Yuria Utsumi（内海ゆりあ）
              </Link>
              <TextEffect
                as="p"
                preset="fade"
                per="char"
                className="text-zinc-600 dark:text-zinc-500"
                delay={0.5}
              >
                Machine Learning Engineer
              </TextEffect>
          </div>

          <div key="header-headshot" className="space-y-2 flex justify-end">
            <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
              <figure>
                <img src={"avatar.png"} alt={"headshot"} className="rounded-xl w-48" />
              </figure>
            </div>
          </div>
      </div>
    </header>
  )
}
