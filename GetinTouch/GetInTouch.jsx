import React from 'react';
import './GetInTouch2.css';

const GetInTouch = () => {
  return (
    <section className="getInTouch container section" id='getInTouch'>
        <h2 className="section__title">Get In Touch</h2>

        <div className="getInTouch__container grid">
            <div className="getInTouch__info">
                <h3 className="getInTouch__title">Let's talk about everything!</h3>
                <p className="getInTouch__details">Don't like forms?Send me an email</p>
            </div>
            <form action="" className="getInTouch__form">
                <div className="getInTouch__form-group">
                    <div className="getInTouch__form-div">
                        <input type="text" className="getInTouch__form-input"  placeholder='Enter Your Name'/>
                    </div>

                    <div className="getInTouch__form-div">
                        <input type="email" className="getInTouch__form-input"  placeholder='Enter Your Email'/>
                    </div>
                    </div>

                    <div className="getInTouch__form-div getInTouch__form-area">
                        <input type="text" className="getInTouch__form-input"  placeholder='Enter Your Subject'/>
                        </div>
                        
                        <div className="getInTouch__form-div">
                        <textarea 
                        name="" 
                        id="" 
                        cols="30" 
                        rows="10" 
                        className='getInTouch__form-input' 
                        placeholder='Write Your Message'>

                        </textarea>
                        
                        </div>
                        <button className='btn'>Send</button>
                        </form>
                        </div>
                        
                    
                        
                    
                
            
        
    </section>
  )
}

export default GetInTouch