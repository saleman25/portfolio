import React, { Component } from 'react';
import img from '../images/resume.jpg'

class Resume extends Component {

render() {
  return (
    <div>
      
        <div class="resume">
            <img src={img} alt={"resume"}/>
        </div>
      
    </div>
  );
}

};
export default Resume