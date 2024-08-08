import React from 'react'
import Image from '../images/values.jpg'
import SectionHead from './SectionHead';
import {values} from '../data'
import { GiCutDiamond } from "react-icons/gi";
import Card from '../UI/Card';

function Values() {
  return (
    <section className='values'>
        <div className="values_container container">
            <div className="values_left">
                <div className="values_image">
                    <img src={Image} alt="Values Image" />
                </div>
            </div>

            <div className="values_right">
                <SectionHead icon={<GiCutDiamond />} title={'Values'} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eveniet voluptatem alias consequuntur, quos praesentium eius obcaecati rem et debitis pariatur doloribus ratione explicabo dicta quia eum officiis at cupiditate!</p>
                <div className="values_wrapper">
                    {
                        values.map(({id, icon, title, desc})=> {
                            return <Card className={'values_value'}>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values