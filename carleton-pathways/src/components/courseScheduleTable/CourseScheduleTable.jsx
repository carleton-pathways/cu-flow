import React from 'react'
import CourseSection from '../courseScheduleRowComponents/CourseSection'
import CourseAvailability from '../courseScheduleRowComponents/CourseAvailability'
import CourseTime from '../courseScheduleRowComponents/CourseTime'
import CourseDates from '../courseScheduleRowComponents/CourseDates'
import CourseLocation from '../courseScheduleRowComponents/CourseLocation'
import CourseInstructor from '../courseScheduleRowComponents/CourseInstructor'

export default function CourseScheduleRow(props) {
  return (
      
    <table class = "font-table text-sm table-auto w-[85%] m-3">
      <thead class = "font-semibold">
        <tr>
        <th>Section</th>
        <th>Status</th>
        <th>Time</th>
        <th>Dates</th>
        <th>Location</th>
        <th>Instructor</th>
        </tr>
      </thead>
      {props.course.map((course)=>(
      <tr>
        <th class = "font-normal"><CourseSection section={course.section}/></th>
        <th class = "font-normal"><CourseAvailability availability={course.status}/></th>
        <th class = "font-normal"><CourseTime time={course.time}/></th>
        {course.dates && <th class = "font-normal"><CourseDates dates = {course.dates}/></th>}
        <th class = "font-normal"><CourseLocation location={course.building}/></th>
        <th class = "font-normal"><CourseInstructor instructor={course.instructor}/></th>
      </tr>

      ))}
    </table>
  )
}
