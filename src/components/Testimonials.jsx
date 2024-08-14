import React, { useState } from 'react'
import SectionHead from './SectionHead'
import Card from '../UI/Card'
import { testimonials } from '../data'
import { ImQuotesLeft } from 'react-icons/im'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'

function Testimonials() {

    const [index, setIndex] = useState(0);
    const { name, quote, job, avatar } = testimonials[index];

    const prevTestimonialHandler = () => {
        setIndex(prev => {
            if (prev <= 0) {
                return testimonials.length - 1;
            } else {
                return prev - 1;
            }
        });
    }

    const nextTestimonialHandler = () => {
        setIndex(prev => {
            if (prev >= testimonials.length - 1) {
                return 0;
            } else {
                return prev + 1;
            }
        })
    }

    return (
        <section className="testimonials">
            <div className="conatiner testimonials_container">
                <SectionHead icon={<ImQuotesLeft />} title={'Testimonials'} />

                <Card className={'testimonial'}>
                    <div className="testimonial_avatar">
                        <img src={avatar} alt={name} />
                    </div>
                    <p className="testimonial_quote">{`"${quote}"`}</p>
                    <h5>{name}</h5>
                    <small className="testimonials_title">{job}</small>
                </Card>

                <div className="testimonials_btn-container">
                    <button className='testimonials_btn' onClick={prevTestimonialHandler}><IoIosArrowDropleftCircle /></button>
                    <button className='testimonials_btn' onClick={nextTestimonialHandler}><IoIosArrowDroprightCircle /></button>
                </div>
            </div>
        </section>
    )
}

export default Testimonials