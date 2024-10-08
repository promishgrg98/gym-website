import React from 'react'
import './plans.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_4.jpg'
import { plans } from '../../data'
import Card from '../../UI/Card'

function Plans() {
  return (
    <div>
      <Header title={'Membership Plans'} image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium pariatur tenetur ex minima at dignissimos.
      </Header>

      <section className="plans">
        <div className="container plans_container">
          {
            plans.map(({id, name, desc, price, features})=>{
              return <Card key={id} className={'plan'}>
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>${price}</h1><h2>/mo</h2>
                <h4>Features</h4>
                {
                  features.map(({feature, available}, index)=>{
                    return <p key={index} className={available ? '' : 'disabled'}>
                      {feature}
                    </p>
                  })
                }
                <button className='btn lg'> Choose Plan</button>
              </Card>
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Plans