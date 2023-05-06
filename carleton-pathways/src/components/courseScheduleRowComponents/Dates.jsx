import React from 'react'

export default function Dates(props) {
    const highlightStyle = {
        color: 'blue',
      };

    const renderHighlighted = `<span style="color:blue">{props.date}</span>`
    const renderNormal = ``
  return (
    <>
        {props.highlighted ? <span style={highlightStyle}>{props.date}</span> : <span>{props.date}</span>}
    </>
  )
}
