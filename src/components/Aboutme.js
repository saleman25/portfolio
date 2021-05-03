import React, {Component} from 'react';
import '../App.css';
import img from '../images/anakin.jpg';

class Aboutme extends Component {
    render () {
        return (
            <div>
                <h1>About Me</h1>
                <p>
                    Howdy! My name is Samantha. I am a full-stack web developer. 
                    I'm specialized in Ruby and Javascript. 
                    I have a passion for frontend developement
                </p>
                <br></br>
                <p>
                    I also love the space, 80's new wave, horror movies, and corgis especially mine, Anakin.
                </p>
                <div class="anakin">
                <img src={img} alt={"corgi"}/>
                </div>
            </div>
        );
    }
}

export default Aboutme;