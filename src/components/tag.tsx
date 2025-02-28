import React from 'react'
interface Props {
    className?: string,
    style? :{
        [key: string]: string | number;
    }
}
export default function tag(props : Props) {
  return (
    <div className='card-base font-bold text-xl px-4 h-24'>
      标签
    </div>
  )
}
