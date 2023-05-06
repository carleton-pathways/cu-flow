import React from 'react'
import CourseSection from '../courseScheduleRowComponents/CourseSection'
import CourseAvailability from '../courseScheduleRowComponents/CourseAvailability'
import CourseTime from '../courseScheduleRowComponents/CourseTime'
import CourseDates from '../courseScheduleRowComponents/CourseDates'
import CourseLocation from '../courseScheduleRowComponents/CourseLocation'
import CourseInstructor from '../courseScheduleRowComponents/CourseInstructor'

export default function CourseScheduleRow(props) {
  return (
    <>
    <span><CourseSection section={props.course.section}/></span>
    <span><CourseAvailability availability={props.course.availability}/></span>
    <span><CourseTime time={props.course.time}/></span>
    <span><CourseDates dates = {props.course.dates}/></span>
    <span><CourseLocation location={props.course.location}/></span>
    <span><CourseInstructor instructor={props.course.instructor}/></span>
    </>
  )
}
