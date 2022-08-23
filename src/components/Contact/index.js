import { useEffect,useState } from "react";
import AnimatedLetters from "../AnimatedLetters"
import "./index.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faWhatsapp,
  // faSkype,
} from '@fortawesome/free-brands-svg-icons'

const Contact=()=>{
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timer);
      }, []);

    return(
        <>
            <div className="container contact-page">
            <div className="head">
            
            <h1 className="h">
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['C','o','n','t','a','c','t',' ','M','e','!']}
                idx={15}
                />
            </h1>
            <div className="contact-details">
            <h3>
                <a href="mailto:preetindersinghbajaj@gmail.com" target='_blank' rel="noreferrer" ><h3> Mail on: Preetindersinghbajaj@gmail.com</h3></a>            
            </h3>

            <h3>
                <a href="https://wa.me/8054405080?m" target='_blank' rel="noreferrer" ><h3> Whatsapp: 8054405080</h3></a>            
            </h3>
             
            <div className="social">
                <h4 >You can also contact me on following social media handles.</h4>

                <a href=" https://github.com/preetinder-01" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} color="#4d4d4e" className="fa-3x"/></a>
                <a href=" https://github.com/preetinder-01" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" className="fa-3x"/></a>
                <a href=" https://github.com/preetinder-01" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} color="#4d4d4e" className="fa-3x"/></a>
                <a href=" https://wa.me/8054405080?m" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp} color="#4d4d4e" className="fa-3x"/></a>
            
            </div>

            </div>
            
          </div>

            </div>
        </>
    )
}
export default Contact