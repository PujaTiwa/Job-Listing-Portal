import React from 'react'
import InputField from '../components/InputField';

const EmployementType = ({handleChange}) => {
  return (
    <div>
    <h4 className='text-lg font-medium mb-2 text-white'>Employement Type</h4>

    <div className='text-white/70'>
      <label className='sidebar-label-container'>
        <input type='radio' name='test' id='test' value="" onChange={handleChange} />
        <span className='checkmark'></span>Any
      </label>

      <InputField
        handleChange={handleChange}
        value="full-time"
        title="Full-time"
        name="test"
      />
      <InputField
        handleChange={handleChange}
        value="temporary"
        title="Temporary"
        name="test"
      />
      <InputField
        handleChange={handleChange}
        value="part-time"
        title="Part-time"
        name="test"
      />
      <InputField
        handleChange={handleChange}
        value="contractual"
        title="Contractual"
        name="test"
      />
    </div>
  </div>
  )
}

export default EmployementType;