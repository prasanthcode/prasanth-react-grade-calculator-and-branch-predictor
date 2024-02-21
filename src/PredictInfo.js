import React from 'react'
import { Link } from 'react-router-dom'

export default function PredictInfo() {
  return (
    <div className="prediction-info">
          <p>
            <strong>Branch Prediction</strong> with insights from the 2019 Batch
            data.
          </p>
          <span className="testing-label">Testing Phase</span>
          <Link to="/branch-prediction" className='btn' style={{color:'white'}}>Try Now!
         
          </Link>
        </div>
  )
}
