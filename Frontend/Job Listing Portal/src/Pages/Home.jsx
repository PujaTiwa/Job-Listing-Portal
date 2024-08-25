import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Jobs from './Jobs'
import Sidebar from '../sidebar/Sidebar'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4;

  useEffect(() => {
    setIsLoading(true)
    fetch("jobs.json").then(res => res.json()).then(data => {
      // console.log(data);
      setJobs(data)
      setIsLoading(false);
    })
  }, []);

  // handle input change
  const [query, setQuery] = useState("")
  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }
  // console.log(query);

  // filter jobs by title
  const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  // console.log(filteredItems);

  // ----------------------------- Radio Filtering  0---------------------------------------------------
  const handleChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  //  -------------------------- Button based filtering -----------------------------------------------
  const handleClick = (e) => {
    setSelectedCategory(e.target.value)
  }

  //  calculate the index range
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  }

  // function for going to the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1)
    }
  }

  // function for going to the previous page
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  //  --------------------- main function ----------------------------
  const filteredData = (jobs, selectedItem, query) => {
    let filteredJobs = jobs;

    // filtering inpput items
    if (query) {
      filteredJobs = filteredItems;
    }

    // category filtering
    if (selectedItem) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate
        }) =>  
          jobLocation.toLowerCase() === selectedItem.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selectedItem) ||
          postingDate >= selectedItem ||
          experienceLevel.toLowerCase() === selectedItem.toLowerCase() ||
          salaryType.toLowerCase() === selectedItem.toLowerCase() ||
          employmentType.toLowerCase() === selectedItem.toLowerCase()
      );
      // console.log(filteredJobs);
    }

    // slice tha data based on current page
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex)

    return filteredJobs.map((data, i) => <Card key={i} data={data} />)
  }

  const result = filteredData(jobs, selectedCategory, query);


  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />

      {/* main content */}
      <div className='bg-[#111f24] md:grid grid-cols-4 gap-5 lg:px-20 px-3 py-12'>   {/* #FAFAFA */}
        {/* Left side */}
        <div className='bg-[#325a69] p-4 rounded'>
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>

        {/* Job cards */}
        <div className='col-span-2 bg-[#325a69] p-3 rounded-sm text-white'>
          {
            isLoading ? (<p className='font-medium'>Loading...</p>) : result.length > 0 ? (<Jobs result={result} />) : <>
              <h3 className='text-lg font-bold mb-2'>{result.length} Jobs</h3>
              <p>No data found!</p>
            </>
          }

          {/* For Pagination  */}
          {
            result.length > 0 ? (
              <div className='flex justify-center mt-4 space-x-8 text-white'>
                <button onClick={previousPage} disabled={currentPage === 1} className='hover:underline'>Previous</button>
                <span className='mx-2'>{currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
                <button onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)} className='hover:underline'>Next</button>
              </div>
            ) : ""
          }

        </div>

        {/* Right side */}
        <div className='bg-[#325a69] p-4 rounded'><NewsLetter /></div>
      </div>
    </div>
  )
}

export default Home
