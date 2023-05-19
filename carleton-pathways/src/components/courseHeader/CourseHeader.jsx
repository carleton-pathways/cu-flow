import React from 'react'

export default function CourseHeader(props) {
  return (
    <>
    <div class='bg-[#BA3C40] w-[95%] rounded-3xl'>
      <div class='bg-[#D76767] w-fill rounded-3xl flex flex-col items-center'>
        <div class='lg:text-center'>
          <div class='text-[48px] text-white mt-4 font-medium'>{props.course.faculty} {props.course.course_code}</div>
          <div class='text-[24px] text-white mt-[-13px] font-medium'>{props.course.title}</div>
        </div>
        <div class='bg-[#CA464A] w-[95%] rounded-3xl mt-2 mb-2 text-center p-2 text-white font-medium'>{props.course.description}</div>
      </div>
      <div class='text-[16px] text-white text-center font-medium m-1'> {props.course.prereqs}</div>
    </div>
    </>
  )
}
