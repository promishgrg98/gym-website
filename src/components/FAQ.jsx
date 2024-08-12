import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function FAQ({ question, answer }) {

    const [isAnswerShowing, setAnswerShowing] = useState(false);

    return (
        <article className='faq' onClick={() => setAnswerShowing(prev => !prev)}>
            <div>
                <h4>{question}</h4>
                <button className='faq_icon'>
                    {isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </div>
            {isAnswerShowing && <p>{answer}</p>}
        </article>
    )
}

export default FAQ  