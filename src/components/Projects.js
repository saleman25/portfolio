// add the video demos of yr projects
// autoplay when hovered over

import React from 'react';
import '../App.css';
import Space from './projects/Space.js';
import Corgi from './projects/Corgi.js';
import Dog from './projects/Dog.js';
import Rails from './projects/Rails.js';

import Grid from '@material-ui/core/Grid';


function Projects() {
  return (
    <div>
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

    <br></br>

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

<br></br>

    <div class='projectcard'>
      <h1>Did You See a Dog Today?</h1>
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

    <br></br>

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
