import React from 'react'
import SearchBar from '../../components/searchBar/SearchBar'

export default function HomePage() {
  return (
    <div class="margin-auto p-50 place-content-center m-10 rounded-3xl ">
      <div class="grid">
        <h1 class="font-serif font-medium text-7xl m-20 w-[60%] text-[#000000] place-self-center text-center tracking-wide">
        Looking for a solution to <strong class="underline decoration-solid decoration-[#BA3C40]">
        Course Scheduling?</strong> Check out Carleton Pathways!
        </h1>
        <div class='place-self-center w-[45%]'> 
          <SearchBar/>
          </div>
        
        <p class="text-2xl mt-10 text-center">Type in your course name and hit enter! </p>
      </div>
    </div>
  )





}
