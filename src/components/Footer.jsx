import React from 'react'
import Logo from '../images/gym-logo.png'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { AiFillInstagram } from 'react-icons/ai'
import './footer.css'

function Footer() {
  return (
    <footer>
      <div className="container footer_container">
        <article>
          <Link to={'/'} className='logo'>
            <img src={Logo} alt="Footer Logo" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi esse quas itaque, doloribus odit dolores quibusdam illo temporibus dignissimos nostrum explicabo blanditiis quaerat veniam porro et vitae expedita ab quia.
          </p>
          <div className="footer_socials">
            <a href="https://np.linkedin.com/" target='_blank' rel='noreferrer noopener'><FaLinkedin/></a>
            <a href="https://www.facebook.com/" target='_blank' rel='noreferrer noopener'><FaFacebookF/></a>
            <a href="https://x.com/" target='_blank' rel='noreferrer noopener'><FaXTwitter/></a>
            <a href="https://www.instagram.com/" target='_blank' rel='noreferrer noopener'><AiFillInstagram/></a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to={'/about'}>About</Link>
          <Link to={'/plans'}>Plans</Link>
          <Link to={'/trainers'}>Trainers</Link>
          <Link to={'/gallery'}>Gallery</Link>
          <Link to={'/contact'}>Contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to={'/s'}>Blog</Link>
          <Link to={'/s'}>Case Studies</Link>
          <Link to={'/s'}>Events</Link>
          <Link to={'/s'}>Communities</Link>
          <Link to={'/s'}>FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to={'/contact'}>Contact Us</Link>
          <Link to={'/s'}>Support</Link>
        </article>
      </div>
      <div className="footer_copyright">
        <small>2024 Fitness &copy; All Right Reserved</small>
      </div>
    </footer>
  )
}

export default Footer