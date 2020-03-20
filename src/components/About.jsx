import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <div className="container mt-5">
        <div className="card">
          <img src={"https://firebasestorage.googleapis.com/v0/b/lab08-expense.appspot.com/o/68CF3EC0-3DA1-41AF-943E-0DF3820C4467.jpeg?alt=media&token=500ef78e-3ae5-40e3-b8b3-f83776dadf75"} className='card-img-top' alt="..." />
          <div className="card-body">
            <h5 className="card-title">Developer information</h5>
            <p>Natkamon Ninphonanan (610610581)</p>
            <p>This app use Google Firebase as backend.</p>
            <Link to="/">
              <h3>
                <button type="button" className="btn btn-primary">Home</button>
              </h3>
            </Link>
          </div>

        </div>
        
      </div>
      
    </div>
  )
}
