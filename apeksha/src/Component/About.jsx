import React from 'react'
import "../Css/About.css"
import { GoDotFill } from "react-icons/go";


const About = () => {
   
    return (
        <div  className="about" id='About'>
            <h1>All <span class="highlight">About</span> Me</h1>
            <div className='cover'>
            <div class="card">
                <div class="bg"><img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1746626709/61427899-7c87-4fe0-a609-22bff0524ec9_rrefhu.jpg" className='about-image' alt="" /></div>
                <div class="blob"></div>
            </div>

            <div className='about-para'>
                  <div className='para'>
                  <GoDotFill size={30} />
                  <p>Hello! My name is Apeksha Masodkar, and I have a deep passion for building dynamic and
                     interactive web experiences. I thrive on problem-solving and transforming ideas
                      into fully functional digital solutions.</p>
                  </div>

                  <div className='para'>
                  <GoDotFill size={30} />
                  <p>As a versatile Full Stack Developer, I specialize in creating seamless web applications
                     using JavaScript and the MERN stack (MongoDB, Express.js, React.js, and Node.js). I have 
                     a keen eye for clean, maintainable code and enjoy crafting responsive, user-friendly interfaces.</p>
                  </div>

                  <div className='para'>
                  <GoDotFill size={30} />
                  <p>Beyond coding, I excel in team collaboration, critical thinking, and efficient problem-solving.
                     Whether it's developing scalable backend systems, optimizing frontend performance, or designing
                      RESTful APIs, I approach each project with precision and creativity.</p>
                  </div>
            </div>
            </div>

        </div>
    )
}

export default About