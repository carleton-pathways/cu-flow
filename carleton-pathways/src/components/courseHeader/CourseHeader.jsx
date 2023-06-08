import React from 'react';

export default function CourseHeader(props) {
  return (
    <div className="bg-[#BA3C40] m-6 rounded-3xl">
      <div className="flex bg-[#D76767] rounded-3xl items-center pt-14 justify-center mb-2">
        <div className="flex-item m-4 font-header">
          <div className="text-[36px] text-white">{props.course.faculty} {props.course.course_code}</div>
          <div className="text-[20px] text-white ">{props.course.title}</div>
        </div>
        <div className="flex-item bg-[#CA464A] w-[66%] rounded-3xl text-center p-2 text-white sm:m-4">
          <div className="container text-white">
            {props.course.description}
          </div>
        </div>
      </div>
    <div className="text-[16px] text-white text-center p-1">{props.course.prereqs}</div>
    </div>
  );
}



