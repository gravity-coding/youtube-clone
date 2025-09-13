import React from 'react'
import MiniNav from './MiniNav'
import { FiHome } from 'react-icons/fi'
import { SiYoutubeshorts } from 'react-icons/si'
import { MdSubscriptions } from 'react-icons/md'
import { FaRegUserCircle } from 'react-icons/fa'
import { LuHistory } from 'react-icons/lu'

function Sidebar() {
  return (
    <>
        <div className='w-[18vw] dark:bg-black min-h-[92vh] flex flex-col space-y-1 p-2'>
            <MiniNav name="Home" icon={<FiHome className='text-lg' />}/>
            <MiniNav name="Shorts" icon={<SiYoutubeshorts className='text-lg' />}/>
            <MiniNav name="Subscription" icon={<MdSubscriptions className='text-lg' />}/>

            <hr className=' text-neutral-500'/>
            <MiniNav name="You" icon={<FaRegUserCircle className='text-lg' />}/>
            <MiniNav name="History" icon={<LuHistory className='text-lg' />}/>

            <hr className=' text-neutral-500'/>
        </div>
    </>
  )
}

export default Sidebar