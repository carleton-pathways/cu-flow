import React from 'react'
import Term from '../term/Term'

export default function TermSelector() {

  const terms = ['F', 'W', 'S']

  return (
    <>
    <Term termName = {"F"}/>
    <Term termName = {"W"}/>
    <Term termName = {"S"}/>
    </>
  )
}
