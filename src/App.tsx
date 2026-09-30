import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className='header'>
        <div className='headline'>Harry Potter</div>
        <div className='subtitle'>View all characters from the Harry Potter universe</div>

        <div className='search'>

          <div className='search-name'>
            <div className='title'>Name</div>
            <input type='text' className='input-name' placeholder='Search by name' />
          </div>

          <div className='search-school'>
            <div className='title'>School</div>
            <select className='input-school'>
              <option value=''>All</option>
            </select>
          </div>

        </div>
      </div>

      <div className='main'>
        <div className='character-container'>

          <div className='character-card'>
            <div className='character-image'>
              <img src="path/to/hermione-granger-image.jpg" alt="Hermione Granger" />
            </div>
            <div className='character-name'>Hermione Granger</div>
            <div className='about-character'>
              <div className='character-info'>Actor: Emma Watson</div>
              <div className='character-info'>Gender: female</div>
              <div className='character-info'>House: Gryffindor</div>
              <div className='character-info'>Wand core: dragon heartstring</div>  
              <div className='character-info'>Alive: yes </div>
            </div>
          </div>

          <div className='character-card'>
            <div className='character-image'>
              <img src="path/to/draco-malfoy-image.jpg" alt="Draco Malfoy" />
            </div>
            <div className='character-name'>Draco Malfoy</div>
            <div className='about-character'>
              <div className='character-info'>Actor: Tom Felton</div>
              <div className='character-info'>Gender: male</div>
              <div className='character-info'>House: Slytherin</div>
              <div className='character-info'>Wand core: unicorn tail-hair</div>  
              <div className='character-info'>Alive: yes </div>
            </div>
          </div>

          <div className='character-card'>
            <div className='character-image'>
              <img src="path/to/hermione-granger-image.jpg" alt="Hermione Granger" />
            </div>
            <div className='character-name'>Hermione Granger</div>
            <div className='about-character'>
              <div className='character-info'>Actor: Emma Watson</div>
              <div className='character-info'>Gender: female</div>
              <div className='character-info'>House: Gryffindor</div>
              <div className='character-info'>Wand core: dragon heartstring</div>  
              <div className='character-info'>Alive: yes </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
