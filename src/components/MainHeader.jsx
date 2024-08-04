import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../images/main_header.png'

function MainHeader() {
  return (
    <header className="main_header">
      <div className="main_header-container container">
        <div className="main_header-left">
          <h4>#100DaysOfWorkout</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vel voluptas quam obcaecati earum sequi animi corporis quos ab eum. Nemo, explicabo voluptates dolores labore nisi mollitia esse nesciunt laudantium?
          </p>
          <Link to={'/plans'} className='btn lg'>Get Started</Link>
        </div>

        <div className="main_header-right">
          <div className="main_header-circle"></div>
          <div className="main_header-image">
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader