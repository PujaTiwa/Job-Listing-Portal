import React from 'react'
import InputField from '../components/InputField'

const JobPostingData = ({handleChange}) => {
    const NowDate = new Date();
    const TwentryFourHoursAgo = new Date( NowDate - 24 * 60 * 0 * 1000)
    const SevenDaysAgo = new Date( NowDate - 7 * 24 * 60 * 0 * 1000)
    const ThirtyDaysAgo = new Date( NowDate - 30 * 24 * 60 * 0 * 1000)
  return (
    <div>
    <h4 className='text-lg font-medium mb-2'>Date of posting</h4>

    <div>
      <label className='sidebar-label-container'>
        <input type='radio' name='test' id='test' value="" onChange={handleChange} />
        <span className='checkmark'></span>All
      </label>

      <InputField
        handleChange={handleChange}
        value="noida"
        title="Noida"
        name="test"
      />
      <InputField
        handleChange={handleChange}
        value="delhi"
        title="Delhi"
        name="test"
      />
      <InputField
        handleChange={handleChange}
        value="gurgoan"
        title="Gurgoan"
        name="test"
      />
      <InputField
        handleChange={handleChange}
        value="banglore"
        title="Banglore"
        name="test"
      />
      <InputField
        handleChange={handleChange}
        value="mumbai"
        title="Mumbai"
        name="test"
      />
      <InputField
        handleChange={handleChange}
        value="pune"
        title="Pune"
        name="test"
      />
    </div>
  </div>
  )
}

export default JobPostingData