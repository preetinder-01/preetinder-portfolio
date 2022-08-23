import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import Proj from '../../assets/images/logo3.png'



const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timer);
      }, []);
    
      const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
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
          
              
              <a href="/" target="_blank" rel="noopener noreferrer">
              <div className="proj-card" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
                <img src={Proj} alt="img not found" />
                <h3 > Automated Entry System <br /> ( Feb,2022- Present )</h3>
                {isHovering && 
                <p className="proj-desc" >Building an automated campus entry system using tensorflow, OCR, openCV to increase the secuirty by generating the automatic logbook of entry and exit of vehicles. <br /> <br /> <b>Under progress</b> </p> 
                }
              </div>

              </a>
              <a href="https://preetinder-singh.netlify.app/" target="_blank" rel="noopener noreferrer">
              <div className="proj-card" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
                <img src={Proj} alt="img not found" />
                <h3 >Portfolio </h3>
                {isHovering && 
                <p className="proj-desc" >Portfolio project made using React, HTML, SASS.</p>
                }
              </div>
              </a>

              <a href="https://github.com/preetinder-01/credit_card_fraud_prediction" target="_blank" rel="noopener noreferrer">
              <div className="proj-card" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
                <img src={Proj} alt="img not found" />
                <h3> Credit Card fraud prediction </h3>
                {isHovering && 
                <p className="proj-desc" >Used logistic regression to predict the credit card fraud. </p>
                }
              </div>
              </a>

              <a href="/" target="_blank" rel="noopener noreferrer">
              <div className="proj-card" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
                <img src={Proj} alt="img not found" />
                <h3> Phising Website Detection  <br />(working currenlty)</h3>
                {isHovering && 
                <p className="proj-desc" >Using logistic regression to detect for phising websites using URL. </p>
                }
              </div>
              </a>
              
              
              
              
          
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