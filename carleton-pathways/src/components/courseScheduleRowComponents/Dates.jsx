import React from 'react'

export default function Dates(props) {
    const highlightStyle = {
        color: 'red',
      };
  return (
    <>
        {props.highlighted ? <span style={highlightStyle}>{props.date}</span> : <span>{props.date}</span>}
    </>
  )
}
