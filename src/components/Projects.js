// add the video demos of yr projects
// autoplay when hovered over

import React from 'react';
import '../App.css';
import Space from './projects/Space.js';
import Corgi from './projects/Corgi.js';
import Dog from './projects/Dog.js';
import Rails from './projects/Rails.js';
import Netflix from './projects/Netflix.js';
import Twitter from './projects/Twitter.js';
import Google from './projects/Google.js';



function Projects() {
  return (
    <div id="projects" class='grid'>
      <br></br>
    <div class='projectcard'>
      <h1>Space Things</h1>
      <div class='spaceimg'>
        
      </div>
      <div class='projectdescription'>
      <h4>Technologies Used:</h4>
      <ul>
        <li>React/Redux</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Rails</li>
      </ul>
        <Space> </Space>
      </div>
    </div>

    {/* <br></br> */}

    <div class='projectcard'>
      <h1>Google Clone</h1>
      <div class='googleimg'>
        
      </div>
      <div class='projectdescription'>
      <h4>Technologies Used:</h4>
      <ul>
        <li>React</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Material-UI</li>
        <li>Material-UI/Icons</li>
      </ul>
        <Google> </Google>
      </div>
    </div>

{/* <br></br> */}

    <div class='projectcard'>
      <h1>Twitter Clone</h1>
      <div class='twitterimg'>
        
      </div>
      <div class='projectdescription'>
      <h4>Technologies Used:</h4>
      <ul>
        <li>React</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
        <Twitter> </Twitter>
      </div>
    </div>

    {/* <br></br> */}

    <div class='projectcard'>
      <h1>Corgi-Tama</h1>
      <div class='corgiimg'>
        
      </div>
      <div class='projectdescription'>
      <h4>Technologies Used:</h4>
      <ul>
        <li>Javascript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Rails</li>
      </ul>
        <Corgi></Corgi>
      </div>
      
    </div>

{/* <br></br> */}

<div class='projectcard'>
      <h1>Netflix Clone</h1>
      <div class='netfliximg'>
        
      </div>
      <div class='projectdescription'>
      <h4>Technologies Used:</h4>
      <ul>
        <li>React</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
        <Netflix></Netflix>
      </div>
    </div>

    <div class='projectcard'>
      <h1>Did You See a Dog?</h1>
      <div class='dogimg'>
        
      </div>
      <div class='projectdescription'>
        <h4>Technologies Used:</h4>
        <ul>
        <li>Sinatra</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
        <Dog></Dog>
      </div>
  
    </div>

    {/* <br></br> */}

    <div class='projectcard'>
      <h1>Rails Passport</h1>
      <div class='passportimg'>
        
      </div>
      <div class='projectdescription'>
      <h4>Technologies Used:</h4>
      <ul>
        <li>Rails</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
        <Rails></Rails>
      </div>
      
    </div>


    </div>
    
  )
}

export default Projects;
