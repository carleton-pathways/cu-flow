import React, { useEffect, useRef, useState } from 'react';


export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState(null)
  const [courses, setCourses] = useState(null)
  const searchInput = useRef(null)

  const handleSearch = () => {
    setSearchQuery(searchInput.current.value);
    console.log(searchQuery)
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {

      handleSearch();
    }
  };

  useEffect(() =>{
    if(searchQuery === null){
      return;
    }
    const fetchCourses = async () =>{
      const response = await fetch('/search/course/' + searchQuery)
      const json = await response.json()
      if(response.ok){
        setCourses(json.courses)
      }
      console.log(json)
    }
    fetchCourses()
  },[searchQuery])


  return (
    <>
    <div class="flex items-center ml-2 w-10/12">
      <div class="w-full">
        <input
        type="search"
        ref={searchInput}
        class="relative -mr-0.5 block w-full min-w-0 flex-auto rounded-l-full rounded-r-full border-solid border-neutral-300 border-2 outline-2 bg-transparent bg-clip-padding px-3 py-[0.25rem] 
        text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-100 ease-in-out focus:z-[3] focus:border-red-300 focus:text-neutral-700 
        focus:outline-none dark:placeholder:text-neutral-200 shadow-lg "
        placeholder="Search Course Code"
        aria-label="Search"
        aria-describedby="button-addon3" 
        onKeyDown={handleKeyDown}
        />
        <style jsx>{`
          input[type="search"]::-webkit-search-cancel-button {
            display: none;
          }
        `}</style>
      </div>
    </div>
    </> 
  )
}
