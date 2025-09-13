import React from 'react'

function MiniNav(props) {
  return (
    <div className='w-full h-[6vh] flex justify-start items-center px-6 space-x-5 dark:hover:bg-neutral-700 hover:bg-neutral-200 rounded-sm cursor-pointer dark:text-white'>
        {props.icon}
        <span className='text-md font-semibold'>{props.name}</span>
    </div>
  )
}

export default MiniNav