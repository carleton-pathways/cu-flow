import React from 'react'
import TermSelector from '../termSelector/TermSelector'

export default function CourseScheduleHeader() {
  return (
    <>
    {/* <div class = "font-header bg-header py-3">
        <span><TermSelector/></span>
        <span>Course Schedule</span>
    </div> */}
    <div class="font-header rounded-2xl bg-header py-3 flex items-center justify-around text-3xl">
      <span class = ""><TermSelector /></span>
      <span class="">Course Schedule</span>
      <span class = "mx-6"></span>
    </div>
    </>
  )
}
