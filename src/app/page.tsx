import { Button } from '@/components/ui/button'
import TypeWriterTitle from '@/components/ui/typeWriterTitle'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-gradient-to-r min-h-screen from-blue-200 to-emerald-100'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <h1 className='font-semibold text-7xl text-center'>
          AI <span className='text-green-600 font-bold'>Task Manager</span> Assistant
        </h1>
        <div className='mt-4'></div>
        <h2 className='font-semibold text-3xl text-center  text-slate-700'>
          <TypeWriterTitle text='Supercharged productivity.' subtext='AI-Powered Insights.' />
        </h2>
        <div className='mt-8'></div>
        <div className='flex justify-center'>
          <Link href='/dashboard'>
            <Button className='bg-green-800'>
              Get Started <ArrowRight className='ml-2 w-5 h-5'/>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
