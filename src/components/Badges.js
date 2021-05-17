import React from 'react'
import git from '../images/giticon.png';
import linked from '../images/linkedin.png';

function Badges() {
    return (
        <div>
            <div class='badges'>
                <a href="https://github.com/saleman25">
                    <img src={git} />
                </a>
                <a href="https://www.linkedin.com/in/samantha-aleman-b83306b5/">
                    <img src={linked} />
                </a>
                
            </div>
        </div>
    )
}

export default Badges
