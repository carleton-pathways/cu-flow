import React, { useEffect, useState } from 'react';import CourseSchedule from '../../components/courseSchedule/CourseSchedule'
import Header from '../../components/header/Header'
import CourseHeader from '../../components/courseHeader/CourseHeader'


export default function CoursePage() {

  const [courses, setCourses] = useState([{
    faculty: "COMP",
    course_code: "1805",
    section: "A",
    title: "Discrete Structures I",
    section_information: "Introduction to discrete mathematics and discrete structures. Topics include: propositional logic, predicate calculus, set theory, complexity of algorithms, mathematical reasoning and proof techniques, recurrences, induction, finite automata and graph theory. Material is illustrated through examples from computing.",
    status: "OPEN",
    time: "11:35 - 12:25",
    dates: ["M", "T"],
    building: "Nicol Building",
    instructor: "Alexa Sharp",
    prereqs_string: "Prereqs: Grade 12 Math: Advanced Functions or Comp 1004 and Comp 1005",
  }])
  useEffect(() => {},[courses]) 
  const handleCoursesChange = (newCourses) => {
    console.log(newCourses.course)
    setCourses(newCourses.course);
    }
  const course = [{
    faculty: "COMP",
    course_code: "1805",
    section: "A",
    title: "Discrete Structures I",
    description: "Introduction to discrete mathematics and discrete structures. Topics include: propositional logic, predicate calculus, set theory, complexity of algorithms, mathematical reasoning and proof techniques, recurrences, induction, finite automata and graph theory. Material is illustrated through examples from computing.",
    status: "OPEN",
    time: "11:35 - 12:25",
    dates: ["M", "W"],
    location: "Nicol Building",
    instructor: "Alexa Sharp",
    prereqs_string: "Prereqs: Grade 12 Math: Advanced Functions or Comp 1004 and Comp 1005",
  }]
  return (
    <>
    <Header handleCoursesChange = {handleCoursesChange}/>
    {courses && <CourseHeader course={courses}/>}
    <div class = "mx-1">
      {courses && <CourseSchedule course = {courses}/>}
    </div>
   </>
  )
}
