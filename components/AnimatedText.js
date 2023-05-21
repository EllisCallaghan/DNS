import React from 'react'
import { motion } from 'framer-motion'

const quote = {
  initial:{
    opacity:1,
  },
  animate:{
    opacity:1,
    transition:{
      delay:0.8,
      staggerChildren:0.3,
    }
  }
}

const singleWord = {
  initial:{
    opacity:0,
    y:50,
  },
  animate:{
    opacity:1,
    y:0,
    transition:{
      duration:0.5
    }
  }
}

const AnimatedText = ({text,className=""}) => {
  return (
      <div className='md:px-4'>
        <motion.h1 className={`flex flex-wrap justify-center text-white font-bold capitalize ${className}`}
        variants={quote}
        initial="initial"
        animate="animate">
        {
            text.split(" ").map((word,index) => (
                <motion.span
                variants={singleWord}
                
                key={word+'-'+index}>
                    {word}&nbsp;
                </motion.span>
            ))
        }
        </motion.h1>
        </div>
  )
}

export default AnimatedText