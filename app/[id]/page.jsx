import React from 'react'

const page = ({ params }) => {
  return (
    <div className='h-[85vh] bg-[#070E27]'>
      {params.id}
    </div>
  )
}

export default page