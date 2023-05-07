import React from 'react'
import CourseSchedule from '../../components/courseSchedule/CourseSchedule'

export default function CoursePage() {
  const course = {
    section: "COMP 1805",
    availability: "OPEN",
    time: "11:35 - 12:25",
    dates: ["M", "W"],
    location: "Nicol Building",
    instructor: "Alexa Sharp",
  }
  return (
   <>
    <CourseSchedule course = {course}/>
   </>
  )
}
