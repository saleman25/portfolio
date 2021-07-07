import React, {Component} from 'react';
import '../App.css';
import img from '../images/anakin.jpg';

class Aboutme extends Component {
    render () {
        return (
            <div>
                <br></br>
                <h1 class='me'>About Me</h1>
                <p class='abtme'>
                    Howdy! My name is Samantha. I am a full-stack web developer with a passion for frontend development.
                    Theres two things in my life that I've always loved.
                    Being able to help others
                    and
                    being able to learn.  
                    My whole life I have loved being able to help people in any way that I can. From working 
                    in the service industry as a barista to now being able to develope code in my freelance work, I love being 
                    able to help someone get what they want. When I first enrolled at Flatiron School I didn't realize I was going 
                    to fall in love with coding as much as I did and that it would come so easily to me. 
                    As I continue my career doing what I love I want to be able to share that with others so they can achieve what they love as well. 
                    With software engineering there's so much for me to learn and things are always changing and things are always being created
                    so I will always be learning so I can be the best I can be. And to me that is the best life I could ever ask for.

                </p>
                <br></br>
                <p class='abtme'>
                    Aside from software engineering I also love everything about space Sagan, Kaku, Tyson are genuises when it comes to the cosmos and the physics around it. I also love 80's new wave shoutout to my dad for getting me into The Psychedlic Furs and New Order and shoutout to my mom for giving me my love for horror movies. 
                    I also love corgis especially mine, Anakin.
                </p>
                <div class="anakin">
                <img src={img} alt={"corgi"}/>
                </div>
            </div>
        );
    }
}

export default Aboutme;