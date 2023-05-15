import React from 'react'
import Term from '../term/Term'

export default function TermSelector() {

  const terms = ['F', 'W', 'S']

  return (
    <>
    <span class = "m-1"><Term termName = {"F"}/></span>
    <span class = "m-1"><Term termName = {"W"}/></span>
    <span class = "m-1"><Term termName = {"S"}/></span>
    </>
  )
}
