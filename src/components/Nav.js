import React from 'react';
import { Link } from 'react-router-dom';


export default function Nav(){
    return (
        <div class='topnav'>
            <ul class='navie'>
                <li>
                    <Link to="/">♥</Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/blog">Blog</Link>
                    
                </li>
            </ul>
        </div>
    )
}