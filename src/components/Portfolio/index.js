import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

import Proj from '../../assets/images/logo4.png'


const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timer);
      }, []);
    
      return(
        <>
        <div className="container portfolio-page">
            <div className="head">
            
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['P','r','o','j','e','c','t','s']}
                idx={15}
                />
            </h1>
            {/* <Loader type="pacman" /> */}
          </div>
        <div className=" portfolio-grid ">
          
              <div className="proj-card">
                <img src={Proj} alt="" />
                <h3>Project 1</h3>
                <p></p>
              </div>
              <div className="proj-card">
                <img src={Proj} alt="" />
                <h3>Project 2</h3>
                <p></p>
              </div>
              <div className="proj-card">
                <img src={Proj} alt="" />
                <h3>Project 2</h3>
                <p></p>
              </div>
              <div className="proj-card">
                <img src={Proj} alt="" />
                <h3>Project 2</h3>
                <p></p>
              </div>
              <div className="proj-card">
                <img src={Proj} alt="" />
                <h3>Project 5</h3>
                <p></p>
              </div>
              <div className="proj-card">
                <img src={Proj} alt="" />
                <h3>Project 6</h3>
                <p></p>
              </div>
              
          
        </div>
        </div>
        
        </>
    )
}

export default Portfolio;


// function AutoLayoutExample() {
//   return (
//     <Container>
//       <Row>
//         <Col>1 of 2</Col>
//         <Col>2 of 2</Col>
//       </Row>
//       <Row>
//         <Col>1 of 3</Col>
//         <Col>2 of 3</Col>
//         <Col>3 of 3</Col>
//       </Row>
//     </Container>
//   );
// }

// export default AutoLayoutExample;