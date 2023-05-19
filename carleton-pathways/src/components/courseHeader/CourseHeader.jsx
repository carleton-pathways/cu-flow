import React from 'react'

export default function CourseHeader() {
  return (
    <>
    <div class='bg-[#BA3C40] w-[95%] rounded-3xl'>
      <div class='bg-[#D76767] w-fill rounded-3xl flex flex-col items-center'>
        <div class='lg:text-center'>
          <div class='text-[48px] text-white mt-4 font-medium'>COMP 1805</div>
          <div class='text-[24px] text-white mt-[-13px] font-medium'>Discrete Structures 1</div>
        </div>
        <div class='bg-[#CA464A] w-[95%] rounded-3xl mt-2 mb-2 text-center p-2 text-white font-medium'>Introduction to discrete mathematics and discrete structures. Topics include: propositional logic, predicate calculus, set theory, complexity of algorithms, mathematical reasoning and proof techniques, recurrences, induction, finite automata and graph theory. Material is illustrated through examples from computing.</div>
      </div>
      <div class='text-[16px] text-white text-center font-medium m-1'> Prereqs: Grade 12 Math: Advanced Functions or Comp 1004 and Comp 1005 </div>
    </div>
    </>
  )
}
