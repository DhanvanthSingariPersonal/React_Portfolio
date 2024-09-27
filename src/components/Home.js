import React from 'react';
import './Home.css';
import Projects from './Projects';
import TypeWriter from "./TypeWriter";

const Home = () => {
  return (
    <div className="home-container fade-in">
      <h1>Welcome to My Portfolio</h1>
      <div class="typewriter-style">
                <TypeWriter />
              </div>
      <p>Passionate about creating interactive web applications.</p>
      
      <a href="#projects" className="cta-button">View My Work</a> {/* Call to action */}
    </div>
  );
};

export default Home;
