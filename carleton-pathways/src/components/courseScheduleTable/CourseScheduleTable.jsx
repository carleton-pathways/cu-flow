import React from 'react'
import CourseScheduleRow from '../courseScheduleRow/CourseScheduleRow'

export default function CourseScheduleTable(props) {
  return (
    <>
    <CourseScheduleRow course={props.course}/>
    </>
  )
}
