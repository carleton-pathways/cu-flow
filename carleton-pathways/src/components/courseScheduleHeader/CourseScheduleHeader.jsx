import React from 'react'
import TermSelector from '../termSelector/TermSelector'

export default function CourseScheduleHeader() {
  return (
    <>
    <header>
        <TermSelector/>
        <span>Course Schedule</span>
    </header>
    </>
  )
}
