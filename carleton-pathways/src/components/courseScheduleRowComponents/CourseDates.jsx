import React from 'react'
import Dates from './Dates'

export default function CourseDates(props) {
  return (  
    <>
        {
            ["M", "T", "W", "T", "F"].map((day) => {
                if (props.dates.includes(day)){
                    return(<Dates date={day} highlighted={true}/>)
                } else {
                    return(<Dates date={day} highlighted={false}/>)
                }

            })
        }
    </>
  )
}
