import React from 'react'
import './trainers.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import { trainers } from '../../data'
import Trainer from '../../components/Trainer'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineX } from 'react-icons/ai'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'

function Trainers() {
  return (
    <div>
      <Header title={'Our Trainers'} image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora voluptatibus cum tempore magni? Magnam expedita at autem ex laudantium nisi?
      </Header>

      <section className="trainers">
        <div className="container trainers_container">
          {
            trainers.map(({id, image, name, job, socials})=>{
              return <Trainer key={id} image={image} name={name} job={job} socials={
                [
                  {icon: <BsInstagram/> , link: socials[0] }, 
                  {icon: <AiOutlineX/> , link: socials[1] }, 
                  {icon: <FaFacebook/> , link: socials[2] }, 
                  {icon: <FaLinkedin/> , link: socials[3] } 
                ]
              } />
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Trainers