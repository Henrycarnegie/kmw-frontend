import React from 'react'

const InputLabel = ({label}: {label: string}) => {
  return (
    <label className='text-sm text-gray-500'>{label}</label>
  )
}

export default InputLabel