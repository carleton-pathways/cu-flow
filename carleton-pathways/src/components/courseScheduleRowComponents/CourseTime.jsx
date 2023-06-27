import React from 'react'

export default function CourseTime(props) {
  const time = props.course.start_time.slice(0, 5) + " - " + props.course.end_time.slice(0, 5)
  
  return (
    <span>{time}</span>
  )
}
