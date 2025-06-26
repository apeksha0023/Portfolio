import React, { useState } from 'react'
import "../Css/Project.css"
import { AiOutlineEllipsis } from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'
import { MdLiveTv } from 'react-icons/md'


const Project = () => {

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  // const [showModal3, setShowModal3] = useState(false);
  // const [showModal4, setShowModal4] = useState(false);
  return (
    <div className="project" id='Project'>
      <h1>My Creative <span class="highlight">Portfolio</span> Section</h1>
      <div className='project-cover'>
        <div>
          <div class="project-card">
            <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1746627204/Bluefly_gyhsao.png" alt="Project Preview" />
            <div class="overlay">
              <a href="https://bluefly-clone-ten.vercel.app/" class="icon" title="Live Demo" target="_blank" rel="noopener noreferrer">
                <MdLiveTv size={25} />
              </a>
              <a href="https://github.com/apeksha0023/Bluefly-Clone" class="icon" title="GitHub" target="_blank" rel="noopener noreferrer" >
                <FaGithub size={25} />
              </a>
              {/* <button className="icon" title="Details" onClick={() => setShowModal1(true)}>
                <AiOutlineEllipsis size={25} />
              </button> */}
            </div>
            <h3>Bluefly Clone</h3>
            <p>This is a fully responsive e-commerce website inspired by Bluefly, built with modern web technologies. It features user authentication, product listings, filtering, and a seamless cart and checkout experience. The project showcases front-end design and dynamic data handling for a realistic online shopping experience.</p>

          </div>


        


        </div>

        <div>
          <div class="project-card">
            <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1746627196/Age_Calculater_gar0de.png" alt="Project Preview" />
            <div class="overlay">
              <a href="https://age-calculator-topaz-nine.vercel.app/" class="icon" title="Live Demo" target="_blank" rel="noopener noreferrer">
                <MdLiveTv size={25} />
              </a>
              <a href="https://github.com/apeksha0023/Age-calculator" class="icon" title="GitHub" target="_blank" rel="noopener noreferrer">
                <FaGithub size={25} />
              </a>
              {/* <button className="icon" title="Details" onClick={() => setShowModal2(true)}>
                <AiOutlineEllipsis size={25} />
              </button> */}
            </div>
            <h3>Age Calculator</h3>
            <p>This is a simple and responsive Age Calculator web app that allows users to input their birthdate and instantly calculate their exact age in years, months, and days. Built with clean UI and real-time validation for accurate results.</p>
          </div>
          

        </div>

          <div>
          <div class="project-card">
            <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1747971764/Sparkin-assignment_dxqwqv.png" alt="Project Preview" />
            <div class="overlay">
              <a href="https://sparkin-assignment.vercel.app/" class="icon" title="Live Demo" target="_blank" rel="noopener noreferrer">
                <MdLiveTv size={25} />
              </a>
              <a href="https://github.com/apeksha0023/Sparkin-Assignment" class="icon" title="GitHub" target="_blank" rel="noopener noreferrer">
                <FaGithub size={25} />
              </a>
              {/* <button className="icon" title="Details" onClick={() => setShowModal2(true)}>
                <AiOutlineEllipsis size={25} />
              </button> */}
            </div>
            <h3>Dynamic Dashboard</h3>
            <p>Developed a modern web application using Vite and React to demonstrate clean architecture, component reusability, and efficient state management. The project showcases a responsive UI and fast performance, emphasizing best practices in frontend development. Ideal for rapid prototyping and scalable deployment.</p>
          </div>
       

        </div>

         <div>
          <div class="project-card">
            <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1747971783/Mail_luuvvu.png" alt="Project Preview" />
            <div class="overlay">
              <a href="https://sde-1.vercel.app/" class="icon" title="Live Demo" target="_blank" rel="noopener noreferrer">
                <MdLiveTv size={25} />
              </a>
              <a href="https://github.com/apeksha0023/SDE-1" class="icon" title="GitHub" target="_blank" rel="noopener noreferrer">
                <FaGithub size={25} />
              </a>
              {/* <button className="icon" title="Details" onClick={() => setShowModal2(true)}>
                <AiOutlineEllipsis size={25} />
              </button> */}
            </div>
            <h3>Mailing Dashboard</h3>
            <p>A fully responsive mailing dashboard built with React, Shadcn UI, and Tailwind CSS, featuring secure JWT-based authentication. The application includes inbox navigation, detailed email views, and user auth flows (Sign In/Sign Up) backed by a Node.js mock API—perfect for showcasing frontend skills in a real-world scenario.</p>
          </div>
        

        </div>


         <div>
          <div class="project-card">
            <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1747972010/Budget_Visualizer_smxcfl.png" alt="Project Preview" />
            <div class="overlay">
              <a href="https://budget-visualizer-chi.vercel.app/" class="icon" title="Live Demo" target="_blank" rel="noopener noreferrer">
                <MdLiveTv size={25} />
              </a>
              <a href="https://github.com/apeksha0023/SDE-1" class="icon" title="GitHub" target="_blank" rel="noopener noreferrer">
                <FaGithub size={25} />
              </a>
              {/* <button className="icon" title="Details" onClick={() => setShowModal2(true)}>
                <AiOutlineEllipsis size={25} />
              </button> */}
            </div>
            <h3>Personal Budget Visualizer</h3>
            <p>An intuitive web application to track income and expenses, visualize financial habits, and manage budgets with ease. Built with React and Tailwind CSS, it features dynamic charts and real-time transaction insights for smarter financial planning.</p>
          </div>
        

        </div>
        

      </div>

    </div>
  )
}

export default Project