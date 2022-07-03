import React from 'react';
import './EachFaq.css'

const EachFaq = ({eachFaq}) => {
    const {question,answer}=eachFaq;
    console.log(answer)
    return (
        <div className='mb-5'>
             <details>
  <summary class="accordion">{question}</summary>
  
  <div class="accordionDrop">{answer}</div>
</details>

        </div>
    );
};

export default EachFaq;