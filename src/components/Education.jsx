import React from 'react'
import VerticalCard from './Card';
const Education = () => {
  return (
    <div name='education' className='w-full  antialiased h-screen bg-[#0a192f]'>
   <div className="min-h-screen py-8 md:px-32 md:pl-[200px] pt-[200px] sm:pt-[150px] px-4">
      <h1 className="text-3xl font-bold text-center text-gray-300 mb-10 border-b-[2px] border-yellow-600 ">Education</h1>
      <div className="flex flex-col space-y-4">
        <VerticalCard 
          imageUrl=""
          link="http://bvicam.in/"
          title="Masters of Computer Application"
          college="BVICAM"
          description="2022-2024 | MCA | 8.56 CGPA"
        />
        <VerticalCard
          imageUrl=""
          link="http://ratm.in/"
          title="Bachelor of Computer Application"
          college="RATM"
          description="2019-2022 | BCA | 70.75 Percentage"
        />
        <VerticalCard
          imageUrl=""
          link="https://www.apsmathuracantt.edu.in/"
          title="High School"
          college="APS"
          description="2018-2019 | Science | 78.6 Percentage"
        />
      </div>
    </div>
      
    </div>
  )
}

export default Education
