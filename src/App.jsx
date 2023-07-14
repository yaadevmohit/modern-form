import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className='form-container'>
        <div className='form-stage-container'>
          <button className='form-stage'>1</button>
          <button className='form-stage'>2</button>
          <button className='form-stage'>3</button>
          <button className='form-stage'>4</button>
        </div>
        <form className='main-form'>
          <div className='stage-heading'>
            <h2>Personal info</h2>
            <span>Please provide your name, email address and phone number.</span>
          </div>
          <div className='form-field'>
            <legend for='name'>Name</legend>
            <input type='text' id='name' name='name' placeholder='e.g. Stehpen king'/>
          </div>
          <div className='form-field'>
            <legend for='email'>Email Address</legend>
            <input type='email' id='email' name='email' placeholder='e.g. stephen@lorem.ipsum'/>
          </div>
          <div className='form-field'>
            <legend for='phone'>Phone Number</legend>
            <input type='tel' id='phone' name='phone' placeholder='e.g. 111111111'/>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
