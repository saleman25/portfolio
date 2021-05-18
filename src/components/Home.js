import React, {Component} from 'react';
import '../App.css';
import Badges from './Badges.js';

class Home extends Component {
    render () {
        return (
            <div>
                <h1>Samantha Aleman</h1>
                <h2>Software Engineer in Los Angeles</h2>
                <div>
                    
                </div>
                <Badges></Badges>
            </div>
        );
    }
}

export default Home;