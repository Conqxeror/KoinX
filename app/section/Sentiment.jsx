import React from 'react'
import KeyEvents from '../components/KeyEvents'
import AnalystEstimate from '../components/AnalystEstimate'

export default function Sentiment() {
  return (
    <div className='p-5 bg-white rounded-md'>
        <div className='font-bold text-xl'>Sentiment</div>
        <div className='font-bold py-3 text-lg'>Key Events</div>
        <KeyEvents/>
        <div className='font-bold py-3 text-lg'>Analyst Estimates</div>
        <AnalystEstimate/>
    </div>
  )
}
