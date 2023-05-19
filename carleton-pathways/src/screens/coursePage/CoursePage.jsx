import React from 'react'
import CourseSchedule from '../../components/courseSchedule/CourseSchedule'
import Header from '../../components/header/Header'
import CourseHeader from '../../components/courseHeader/CourseHeader'

export default function CoursePage() {
  const course = {
    section: "A",
    availability: "OPEN",
    time: "11:35 - 12:25",
    dates: ["M", "W"],
    location: "Nicol Building",
    instructor: "Alexa Sharp",
  }
  return (
    <>
    <Header/>
    <CourseHeader/>
    <div class = "mx-1">
      <CourseSchedule course = {course}/>
    </div>
   </>
  )
}
