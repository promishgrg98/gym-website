import React from 'react'
import './about.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'

function About() {
  return (
    <div>
      <Header title={'About Us'} image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, nobis. Sapiente voluptatum alias nulla soluta? Quaerat at magnam necessitatibus quasi.
      </Header>

      <section className="about_story">
        <div className="container about_story-container">
          <div className="about_section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about_section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum officia officiis totam reiciendis, eaque voluptates consequatur dolorum, id voluptatem tempora dolor! Ab dicta quo earum temporibus aperiam vero itaque maxime nihil veritatis doloremque consectetur velit architecto minima, voluptatibus commodi inventore.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error facere officia labore omnis praesentium, illo eius autem impedit consequuntur recusandae doloribus odio vel nulla obcaecati. Dignissimos doloribus nulla doloremque incidunt!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi veniam officia odit aperiam aut reprehenderit commodi natus nulla. Beatae, sequi!
            </p>
          </div>
        </div>
      </section>

      <section className="about_vision">
        <div className="container about_vision-container">
          <div className="about_section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae reiciendis recusandae, earum dolorum reprehenderit aliquam totam mollitia, adipisci nemo consectetur sit veritatis debitis? Harum dolorem vel odio aut commodi nam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate repudiandae, accusantium quod, maiores architecto ut iure doloribus quaerat quia sunt cum. Eius pariatur optio porro harum natus repellat dicta, praesentium libero voluptates accusantium, nulla odio soluta quia voluptatem, omnis sequi!
            </p>
          </div>
          <div className="about_section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>

      <section className="about_mission">
        <div className="container about_mission-container">
          <div className="about_section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about_section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum officia officiis totam reiciendis, eaque voluptates consequatur dolorum, id voluptatem tempora dolor! Ab dicta quo earum temporibus aperiam vero itaque maxime nihil veritatis doloremque consectetur velit architecto minima, voluptatibus commodi inventore.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error facere officia labore omnis praesentium, illo eius autem impedit consequuntur recusandae doloribus odio vel nulla obcaecati. Dignissimos doloribus nulla doloremque incidunt!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi veniam officia odit aperiam aut reprehenderit commodi natus nulla. Beatae, sequi!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About