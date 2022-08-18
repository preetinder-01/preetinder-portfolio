import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faReact,
    faPython,
  } from '@fortawesome/free-brands-svg-icons'
  import{
    
  }from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About=()=>{    
return(
    <div className='container about-page'>
         <div className="text-zone">
            <h1>
                <AnimatedLetters
                strArray={['A','b','o','u','t',' ','m','e']}
                idx={15}
                />
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facere laudantium saepe ipsam beatae quos id accusamus officia suscipit sint magni quasi, adipisci alias tempora, voluptas sit libero molestias soluta?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facere laudantium saepe ipsam beatae quos id accusamus officia suscipit sint magni quasi, adipisci alias tempora, voluptas sit libero molestias soluta?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facere laudantium saepe ipsam beatae quos id accusamus officia suscipit sint magni quasi, adipisci alias tempora, voluptas sit libero molestias soluta?</p>
            
         </div>
         <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
              <p>Angular</p>
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faPython} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
    </div>
)
}

export default About;