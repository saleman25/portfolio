import React, {Component} from 'react';
import '../App.css';
import Badges from './Badges.js';
import ButtonMailto from './ButtonMailto.js';
import flower from '../images/flowerborder.png'

class Contact extends Component {
    render () {
        return (
            <div>
              <br></br>
                <div class='contactcard'>
                  <h1>Contact Me</h1>
                  <div class='contactdescription'>
                    
                    <p>
                    Please feel free to reach out regarding 
                    any career opportunities, networking, 
                    or if you have any questions!
                    </p>

                    <br></br>

                    <ButtonMailto label="E-mail Me!" mailto="mailto:samantha.aleman25@gmail.com" />
            
                    <br></br>
                    <br></br>

                    <div class="div-wrapper">
                      <img src={flower} alt={"flowers"}/>
                    </div>
                  </div>
                </div>
                <Badges></Badges>
            </div>
        );
    }
}

export default Contact;

