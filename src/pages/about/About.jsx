import React from 'react'
import './about.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'

function About() {
  return (
    <div>
      <Header title={'About Us'} image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, nobis. Sapiente voluptatum alias nulla soluta? Quaerat at magnam necessitatibus quasi.
      </Header>
    </div>
  )
}

export default About