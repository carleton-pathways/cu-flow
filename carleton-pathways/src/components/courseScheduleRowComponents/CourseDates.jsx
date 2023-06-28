import React from 'react'
import Dates from './Dates'

export default function CourseDates(props) {
    const days = props.dates
    for(let i =0; i<days.length; i++){
        if (days[i] === "Monday"){
            days[i] = "M"
        }
        if (days[i] === "Tuesday"){
            days[i] = "T"
        }
        if (days[i] === "Wednesday"){
            days[i] = "W"
        }
        if (days[i] === "Thursday"){
            days[i] = "TH"
        }
        if (days[i] === "Friday"){
            days[i] = "F"
        }
    }
  return (  
    <>
        {
            ["M ", "T ", "W ", "TH ", "F"].map((day) => {
                if (days.includes(day.replace(" ",""))){
                    return(<Dates date={day} highlighted={true}/>)
                } else {
                    return(<Dates date={day} highlighted={false}/>)
                }

            })
        }
    </>
  )
}
