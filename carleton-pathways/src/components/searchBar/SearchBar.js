import React, { useRef } from 'react';

export default function SearchBar() {
  const searchInput = useRef(null)

  const handleSearch = () => {
    const searchQuery = searchInput.current.value;
    console.log(searchQuery)
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {

      handleSearch();
    }
  };


  return (
    
  <div class="mx-auto mb-4">


  <div class="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/2">
    
    <input
      
      type="search"
      ref={searchInput}
      class="relative m-0 -mr-0.5 block w-full min-w-0 flex-auto rounded-l-full rounded-r-full border border-solid border-neutral-300 border-2 outline-2 bg-transparent bg-clip-padding px-3 py-[0.25rem] 
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
  )
}
