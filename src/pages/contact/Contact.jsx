import React from 'react'
import './contact.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'

function Contact() {
  return (
    <div>
      <Header title={'Get In Touch'} image={HeaderImage}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas eaque atque ducimus facilis nemo reiciendis rerum ullam, consequuntur ipsum perspiciatis quis enim, aspernatur, quaerat minus est nesciunt veniam. Iste, illo.
      </Header>
      <section className="contact">
        <div className="container contact_container">
          <div className="contact_wrapper">
            <a href="mailto:prameshgrg98@gmail.com" target='_blank' rel='noreferrer noopener'><MdEmail /></a>
            <a href="http://m.me/promishgurung98" target='_blank' rel='noreferrer noopener'><BsMessenger /></a>
            <a href="http://wa.me/" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp /></a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact