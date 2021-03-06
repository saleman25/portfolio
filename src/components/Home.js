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
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6802646013061427200?compact=1" height="284" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                </div>
                <Badges></Badges>
            </div>
        );
    }
}

export default Home;