import Image from 'next/image'
import { Inter } from 'next/font/google'

import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import UpdateBar from '../components/UpdateBar'
import { useSelector } from 'react-redux'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const data=useSelector(state=>state.list)
  return (
   <div className='flex'>
  <Sidebar/>
  <div className={`w-full  ${data.color?'bg-black':'bg-white'}  `}>
    <Header/>
    <div className='flex'>
    <div className='w-full '>  <Hero/>
    </div>
    <UpdateBar />
    </div>
  </div>
   </div>
  )
}
