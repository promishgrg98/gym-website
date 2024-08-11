import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";

function FAQ({ question, answer }) {
    return (
        <article className='faq'>
            <div>
                <h4>{question}</h4>
                <button className='faq_icon'>
                    <AiOutlinePlus />
                </button>
            </div>
            <p>{answer}</p>
        </article>
    )
}

export default FAQ