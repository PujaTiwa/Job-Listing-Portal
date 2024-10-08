import React from 'react'
import InputField from '../components/InputField'

const JobPostingData = ({handleChange}) => {
    const NowDate = new Date();
    const TwentryFourHoursAgo = new Date( NowDate - 24 * 60 * 0 * 1000)
    const SevenDaysAgo = new Date( NowDate - 7 * 24 * 60 * 0 * 1000)
    const ThirtyDaysAgo = new Date( NowDate - 30 * 24 * 60 * 0 * 1000)

    // convert date to string
    const TwentryFourHoursAgoDate = TwentryFourHoursAgo.toISOString().slice(0, 10)
    const SevenDaysAgoDate = SevenDaysAgo.toISOString().slice(0, 10)
    const ThirtyDaysAgoDate = ThirtyDaysAgo.toISOString().slice(0, 10)
    // console.log(TwentryFourHoursAgoDate);
    
  return (
    <div>
    <h4 className='text-lg font-medium mb-2 text-white'>Date of posting</h4>

    <div className='text-white/70'>
      <label className='sidebar-label-container'>
        <input type='radio' name='test' id='test' value="" onChange={handleChange} />
        <span className='checkmark'></span>All time
      </label>

      <InputField
        handleChange={handleChange}
        value={TwentryFourHoursAgoDate}
        title="Last 24 hours"
        name="test"
      />
      <InputField
        handleChange={handleChange}
        value={SevenDaysAgoDate}
        title="Last 7 days"
        name="test"
      />
      <InputField
        handleChange={handleChange}
        value={ThirtyDaysAgoDate}
        title="Last month"
        name="test"
      />
    </div>
  </div>
  )
}

export default JobPostingData