import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable'

const JobPost = () => {
  const  [selectedOption, setSelectedOption ] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  const options = [
    {value: "JavaScript", label: "JavaScript"},
    {value: "C++", label: "C++"},
    {value: "HTML/HTML5", label: "HTML/HTML5"},
    {value: "CSS/CSS3", label: "CSS/CSS3"},
    {value: "React", label: "React"},
    {value: "Node.js", label: "Node.js"},
    {value: "Express.js", label: "Express.js"},
    {value: "MongoDB", label: "MongoDB"},
    {value: "Redux", label: "Redux"},
  ]

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      {/* Form */}
      <div className='bg-[#081229]  py-10 px-4 lg:px-16'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
          <div className='create-job-flex'>
            <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg text-white'>Job Title</label>
              <input type='text' defaultValue={"Web Developer"}
                {...register("jobTitle")} className='create-job-input' />
            </div>
            <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg text-white'>Company Name</label>
              <input type='text' placeholder='Ex: Google'
                {...register("companyName")} className='create-job-input' />
            </div>
          </div>
          <div className='create-job-flex'>
            <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg text-white'>Minimum Salary</label>
              <input type='text' placeholder='20k'
                {...register("minPrice")} className='create-job-input' />
            </div>
            <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg text-white'>Maximum Salary</label>
              <input type='text' placeholder='120k'
                {...register("maxPrice")} className='create-job-input' />
            </div>
          </div>
          <div className='create-job-flex'>
            <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg text-white'>Salary Type</label>
              <select {...register("salaryType")} className='create-job-input'>
                <option value="">Choose your salary type</option>
                <option value="Hourly">Hourly</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg text-white'>Job Location</label>
              <input type='text' placeholder='Ex: Banglore'
                {...register("jobLocation")} className='create-job-input' />
            </div>
          </div>
          <div className='create-job-flex'>
            <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg text-white'>Job Listing Date</label>
              <input type='date' placeholder='Ex: 2024-07-03'
                {...register("postingDate")} className='create-job-input' />
            </div>
            <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg text-white'>Experience Level</label>
              <select {...register("experienceLevel")} className='create-job-input'>
                <option value="">Choose your experience</option>
                <option value="Any experience">Any experience</option>
                <option value="Internship">Internship</option>
                <option value="Work remotely">Work remotely</option>
                <option value="Freshers">Freshers</option>
              </select>
            </div>
          </div>

          <div>
            <label className='block mb-2 text-lg text-white'>Required Skills:</label>
            <CreatableSelect 
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
              className='create-job-input py-4'
            />
          </div>

          <div className='create-job-flex'>
            <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg text-white'>Company Logo</label>
              <input type='url' placeholder='Paste your company logo URL here'
                {...register("companyLogo")} className='create-job-input' />
            </div>
            <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg text-white'>Employment Type</label>
              <select {...register("employmentType")} className='create-job-input'>
                <option value="">Choose your job type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>

          <div className='w-full'>
            <label className='block mb-2 text-lg text-white'>Job Description</label>
            <textarea className='w-full pl-3 py-1.5 focus:outline-none rounded placeholder:text-gray-700' 
            rows={6}
            defaultValue={"Write here..."}
            placeholder='Job Description'
            {...register("description")} 
            />
          </div>

          <div>
          <label className='block mb-2 text-lg text-white'>Job Posted By</label>
          <input 
            type='email'
            placeholder='your email'
            {...register("postedBy")}
            className='create-job-input'
          />
          </div>

          <input type="submit" className='block-mt-12 bg-RubyRed text-white font-semibold px-8 py-2 rounded-sm cursor-pointer' />
        </form>
      </div>
    </div>
  )
}

export default JobPost