import React from 'react'
import './contact.css'

function Contact() {

  return (
    <>
      <section id='contact' className='contact'>
        <h1 className='title'>Contact</h1>
        <form className='form'>

          <label className='label header'>Name</label>
          <input className='input' type="text" placeholder="Enter your name" />

          <label className='label header'>Favorite Chocolate</label>
          <input className='input' type="text" placeholder="What is your favorite chocolate?" />

          <p className='label header'>Where are you visiting this page from?</p>
          <div className='options'>
            <input className='radio' type="radio" id="option1" name="device" value="phone" />
            <label for="option1">Phone</label>

            <input className='radio' type="radio" id="option2" name="device" value="computer" />
            <label for="option2">Computer</label>

            <input className='radio' type="radio" id="option3" name="device" value="tablet" />
            <label for="option3">Tablet</label>
          </div><br></br>

          <label className='label header'>Enter your message</label>
          <textarea className='input' placeholder="Enter your message" cols="50" rows="8"></textarea>

        </form>
      </section>
    </>
  )
}

export default Contact