"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import { Icon, IconButton, Paper, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import AnimatedText from '@/components/AnimatedText'
import DataTable from '@/components/DataTable'
import News from '@/components/News'




export default function Home() {
  const [input, setInput] = useState()
  const router = useRouter()
  const handleInput = (e) => {
    setInput(e.target.value)
  }
  const handleSubmit = (e) => {
    router.push(`/${encodeURIComponent(input)}`)
    e.preventDefault()
  }
  

  return (
 
      <main className=" z-0 relative gap-[48px] w-full
    flex flex-col items-center justify-between px-24 pt-24 pb-12 xl:px-12 lg:px-0 bg-[#070E27] font-primary">

      <div className='gap-[48px] flex flex-col items-center justify-between w-full'>
        <div className=' flex flex-col gap-[14px] max-w-[90%] text-center items-center justify-between'>
          <AnimatedText text="Lorem Ipsum Dolor Sit Amet Consectetur." 
          className='font-[500] text-[56px] xl:text-[48px] lg:text-[38px]  leading-[70px] text-center'/>
          <p className='font-[500] text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Etiam efficitur erat ac tellus dictum aliquet. Quisque faucibus dolor 
            sit amet turpis cursus rutrum. Suspendisse a.
          </p>
        </div>
        <div className='w-[50%] lg:w-[75%] md:w-[90%]'>
        <form onSubmit={handleSubmit} className='w-full '>
            

            <div className=' bg-[#0059F7] rounded-[24px] flex
            w-full px-[8px] shadow-card items-center'>
              <SearchIcon sx={{color:'white'}}/>

            <TextField 
            sx={{flex:3,borderRadius:'24px',bgcolor:'#0059F7',input:{color:'white',fontFamily:'Roboto,sans-serif'},border:'none',"& fieldset": { border: 'none' },}} 
            variant='filled' InputProps={{disableUnderline:true}} label='domain' InputLabelProps={{style:{color:'white',fontFamily:'Roboto,sans-serif'}}} 
            onChange={handleInput} autoComplete='off'
            />
            <button onClick={handleSubmit} className='md:flex-1 border border-none rounded-[16px] ml-[32px] md:ml-[8px] px-[24px] lg:px-[12px] py-[15px] bg-[#689EFF] text-white my-[8px]'>
              Check Records
            </button>
            </div>

        </form>
        </div>
      </div>
   
      <div className='w-[50%] lg:w-[75%] md:w-[90%] border border-slate-500 rounded-md
       '>
        <DataTable/>
      </div>
      
      <div className='w-[60%]'>
        <News/>
      </div>
      
      </main>

  )
}
