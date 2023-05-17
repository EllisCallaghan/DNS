"use client"

import React from 'react'

import Image from 'next/image'
import news1 from '../public/News1.jpg'
import news2 from '../public/News1.jpg'
import news3 from '../public/News3.jpg'
import arrowLeft from '../public/arrowLeft.png'
import arrowRight from '../public/arrowRight.png'
const CardData = [{
  image:news1,
  title:'Lorem, ipsum dolor.',
  text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, minus.',
  id:'1'
},{
  image:news2,
  title:'Lorem, ipsum dolor.',
  text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, minus.',
  id:'2'
},{
  image:news3,
  title:'Lorem,ipsum dolor.',
  text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, minus.',
  id:'3'
},{
    image:news1,
    title:'Lorem, ipsum dolor.',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, minus.',
    id:'4'
  },{
    image:news2,
    title:'Lorem, ipsum dolor.',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, minus.',
    id:'5'
  },{
    image:news3,
    title:'Lorem,ipsum dolor.',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, minus.',
    id:'6'
  }]

const NewsCard = ({pic,title,text}) => {
  return(
      <div className=' hover:scale-105 hover:bg-slate-950 transition ease-in-out hover: cursor-pointer rounded-3xl flex flex-col gap-[8px] border border-white min-w-[300px] p-5'>
          <Image src={pic} className='w-[300px] h-[180px] rounded-3xl'/>
          <h1 className='text-[24px] font-[500]'>{title}</h1>
          <p>{text}</p>
      </div>
  )
}

const News = () => {
    
const scrollRef = React.useRef(null);
  
const scroll = (direction) => {
  const { current } = scrollRef;

  if (direction === 'left') {
    current.scrollLeft -= 316;
  } else {
    current.scrollLeft += 316;
  }
};

return (
  <div className='flex flex-col gap-[24px]'>
    <div className='flex flex-row px-4 items-center justify-between'>
      <h1 className='text-[32px] font-[500]'>Latest News</h1>
      <div className='flex flex-row gap-[24px]'>
        <button onClick={() => scroll('left')}>
        <Image src={arrowLeft} alt='arrow left' className='w-[12px] h-[24px]' />
        </button>
        <button onClick={() => scroll('right')}>
        <Image src={arrowRight} alt='arrow left' className='w-[12px] h-[24px]' />
        </button>
      </div>
    </div>
    <div className='flex flex-row py-4 min-w-[300px] pl-4 md:pl-0 w-full overflow-x-scroll scroll-smooth' ref={scrollRef}>
        <div className=' flex flex-row w-full justify-between gap-4 '>
            {CardData.map((item) => (
                <NewsCard key={item.id}
                pic={item.image} title={item.title} text={item.text}/>
            ))}
        </div>
    </div>
  </div>
)
}

export default News;