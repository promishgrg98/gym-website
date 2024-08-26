import React from 'react'
import './gallery.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'

function Gallery() {

  const images = [];

  for (let i = 1; i <= 15; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  }

  return (
    <div>
      <Header title={'Our Gallery'} image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius nesciunt nihil magnam amet itaque numquam adipisci ea omnis dolorem soluta necessitatibus in asperiores ipsum recusandae iure assumenda odit, quod labore.
      </Header>

      <section className="gallery">
        <div className="container gallery_container">
          {
            images.map((image, index) => {
              return <article key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </article>
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Gallery