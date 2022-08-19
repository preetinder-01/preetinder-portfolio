import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import {
    
    faCss3,
    faGitAlt,
    faHtml5,
    faReact,
    faPython,
    faLinux,
    
  } from '@fortawesome/free-brands-svg-icons'
  import{
    
  }from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Loader from 'react-loaders';  



const About=()=>{   
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
return(
  <>
    <div className='container about-page'>
         <div className="text-zone">
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['A','b','o','u','t',' ','m','e']}
                idx={15}
                />
            </h1>
            <p>Hey! I'm Preetinder, currently pursuing Bachelors of Engineering in computer engineering at Thapar Institute of Engineering & Tecghnology, Patiala with background in Information & Cyber Security</p>
            <p>Currently, I am learning React and practicing Data Structures. Also i'm exploring cyber security field.</p>
            <p>I'm eager to work in a flexible schedule and am available for job. Will relocate if needed.</p>
            
         </div>
         <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faGitAlt} color="#DD0031"/>
              <div className='git'>GIT</div>
              
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              <div className='html'>HTML</div>
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              <div className='git'>CSS</div>
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              <div className='react '>REACT</div>
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faPython} color="#EFD81D" />
              <div className='python '>PYTHON</div>
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faLinux} color="#EC4D28" />
              <div className='python '>LINUX</div>
            </div>
          </div>
        </div>
    </div>
    {/* <Loader type='pacman'/> */}
    
    
    </>
)
}

export default About;