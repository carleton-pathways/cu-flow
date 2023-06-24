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
      <tr>
        <th class = "font-normal"><CourseSection section={props.course[0].section}/></th>
        <th class = "font-normal"><CourseAvailability availability={props.course[0].availability}/></th>
        <th class = "font-normal"><CourseTime time={props.course[0].time}/></th>
        <th class = "font-normal"><CourseDates dates = {props.course[0].dates}/></th>
        <th class = "font-normal"><CourseLocation location={props.course[0].location}/></th>
        <th class = "font-normal"><CourseInstructor instructor={props.course[0].instructor}/></th>
      </tr>
    </table>
  )
}
