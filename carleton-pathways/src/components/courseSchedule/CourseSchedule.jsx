import React from 'react'
import CourseScheduleHeader from '../courseScheduleHeader/CourseScheduleHeader'
import CourseScheduleTable from '../courseScheduleTable/CourseScheduleTable'

export default function CourseSchedule(props) {
  return (
    <>
    <CourseScheduleHeader/>
    <CourseScheduleTable course = {props.course}/>
    </>
  )
}
