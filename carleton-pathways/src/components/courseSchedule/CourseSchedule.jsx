import React from 'react'
import CourseScheduleHeader from '../courseScheduleHeader/CourseScheduleHeader'
import CourseScheduleTable from '../courseScheduleTable/CourseScheduleTable'

export default function CourseSchedule(props) {
  return (
    <div class = "shadow-md rounded-2xl bg-table m-5 border-4 border-[#dab8b8]">
      <div>
        <CourseScheduleHeader/>
      </div>
      
      <div class = "flex justify-center">
        <CourseScheduleTable course = {props.course}/>
      </div>
    </div>
  )
}
