import './App.css';
import './workout.css';
import { useState,useEffect } from 'react';

import React from 'react'; // Reuse existing styles
import logo from './logo.png';
import fireIcon from './assets/fire.png';
import workoutIcon from './assets/workout.png';
import { Link } from 'react-router-dom'; 
import frontImg from './human/front.png';
import backImg from './human/back.png';
import chestSvg from './svgs/chest.svg';
import trapsSvg from './svgs/traps.svg';
import shouldersSvg from './svgs/shoulders.svg';
import shouldersSvg_r from './svgs/shoulders_r.svg';
import absSVG from './svgs/abs.svg';
import right_bicepSVG from './svgs/right_bicep.svg';
import left_bicepSVG from './svgs/left_bicep.svg';
import right_quadSVG from './svgs/right_quad.svg';
import left_quadSVG from './svgs/left_quad.svg';
import right_abdSVG from './svgs/right_abd.svg';
import left_abdSVG from './svgs/left_abd.svg';
import right_foreSVG from './svgs/right_fore.svg';
import left_foreSVG from './svgs/left_fore.svg';
import b_trapsSvg from './svgs/b_traps.svg';
import b_leftshoulderSvg from './svgs/b_leftshoulder.svg';
import b_rightshoulderSvg from './svgs/b_rightshoulder.svg';
import left_tricepSVG from './svgs/left_tricep.svg';
import right_tricepSVG from './svgs/right_tricep.svg';
import backSVG from './svgs/back.svg';
import b_left_foreSVG from './svgs/b_left_fore.svg';
import b_right_foreSVG from './svgs/b_right_fore.svg';
import glutesSVG from './svgs/glutes.svg';
import left_hamstringSVG from './svgs/left_hamstring.svg';
import right_hamstringSVG from './svgs/right_hamstring.svg';
import left_calveSVG from './svgs/left_calve.svg';
import right_calveSVG from './svgs/right_calve.svg';
import muscle_cardSVG from './svgs/muscle_card.svg'
import CHESTSVG from './muscles/chest.svg'
import TRICEPSSVG from './muscles/Triceps.svg'
import SHOULDERSSVG from './muscles/shoulders.svg'
import TRAPSSVG from './muscles/traps.svg'
import ABS from './muscles/abs.svg'
import BICEPS from './muscles/biceps.svg'
import QUADS from './muscles/leg.svg'
import BACK from './muscles/back.svg'
import HAMSTRINGS from './muscles/hamstrings.svg'
import CALVES from './muscles/calves.svg'
import FOREARMS from './muscles/forearms.svg'
import GLUTES from './muscles/glutes.svg'

import Chest from './chest';







function Workout() {

  const [isShouldersHovered, setIsShouldersHovered] = useState(false);
  const [isbicepsHovered, setIsbicepsHovered] = useState(false);
  const [isquadsHovered, setIsquadsHovered] = useState(false);
  const [isabdsHovered, setIsabdsHovered] = useState(false);
  const [isforesHovered, setIsforesHovered] = useState(false);
  const [istrapsHovered, setIstrapsHovered] = useState(false);
  const [istricepsHovered, setIstricepsHovered] = useState(false);
  const [ishamsHovered, setIshamsHovered] = useState(false);
  const [iscalvesHovered, setIscalvesHovered] = useState(false);


  const [selectedMuscle, setSelectedMuscle] = useState(null);

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // You can set any value you prefer


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false); // scrolling down
      } else {
        setShowHeader(true); // scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);




  const chestPosition = {
    x: 165, // move horizontally
    y: 160  // move vertically
  };

  const trapsPosition = {
    x: 172, // move horizontally
    y: 130  // move vertically
  };
  const shouldersPosition = {
    x: 125, // move horizontally
    y: 158  // move vertically
  }
  const shoulders_rPosition = {
    x: 315, // move horizontally
    y: 158  // move vertically
  }
  
  const absPosition = {
    x: 213, // move horizontally
    y: 254  // move vertically
  }

  const right_bicepPosition = {
    x: 113, // move horizontally
    y: 210  // move vertically
  }

  const left_bicepPosition = {
    x: 335, // move horizontally
    y: 210  // move vertically
  }

  const right_quadPosition = {
    x: 158, // move horizontally
    y: 368  // move vertically
  }
  
  const left_quadPosition = {
    x: 280, // move horizontally
    y: 380  // move vertically
  }
  
  const right_abdPosition = {
    x: 190, // move horizontally
    y: 374  // move vertically
  }

  const left_abdPosition = {
    x: 255, // move horizontally
    y: 374  // move vertically
  }
  
  const right_forePosition = {
    x: 95, // move horizontally
    y: 265  // move vertically
  }

  const left_forePosition = {
    x: 353, // move horizontally
    y: 275  // move vertically
  }

  const b_trapsPosition = {
    x: 180, // move horizontally
    y: 103  // move vertically
  };

  const b_leftshoulderPosition = {
    x: 136, // move horizontally
    y: 135  // move vertically
  };

  const b_rightshoulderPosition = {
    x: 314, // move horizontally
    y: 135  // move vertically
  };
  
  const left_tricepsPosition = {
    x: 127, // move horizontally
    y: 180 // move vertically
  }

  const right_tricepsPosition = {
    x: 328, // move horizontally
    y: 180 // move vertically
  }

  const backPosition = {
    x: 172, // move horizontally
    y: 138 // move vertically
  }

  const b_left_forePosition = {
    x: 116, // move horizontally
    y: 250 // move vertically
  }

  const b_right_forePosition = {
    x: 344, // move horizontally
    y: 250 // move vertically
  }

  const glutesPosition = {
    x: 189, // move horizontally
    y: 300 // move vertically
  }

  const left_hamstringPosition = {
    x: 178, // move horizontally
    y: 410 // move vertically
  }

  const right_hamstringPosition = {
    x: 267, // move horizontally
    y: 410 // move vertically
  }

  const left_calvePosition = {
    x: 167, // move horizontally
    y: 530 // move vertically
  }

  const right_calvePosition = {
    x: 284, // move horizontally
    y: 530 // move vertically
  }

  const muscle_cardPosition ={
    x:1200,
    y: 450,
  }

  const headingPosition = {
    x: 620,
    y: 30, // a little above the muscle card y=100
  };
  



  






  return (
    <div className="app">
      {/* Header */}
      <header className={`top-header ${!showHeader ? "hidden" : ""}`}>
        <div className="header-content">
        <Link to="/" className="brand-name">
           <span className="brand-name">RE_COMP</span>
        </Link>
         <img src={logo} alt="Logo" className="logo" />
        
        </div>
      </header>

      {/* Icon Buttons */}
      <div className="icon-button-group">
      <Link to="/workout">
        <button className="icon-button">
          <img src={workoutIcon} alt="Workout" className="icon" />
          <span>Workout</span>
        </button>
      </Link>

      {/* Your Macros button */}
      <Link to="/">
        <button className="icon-button">
          <img src={fireIcon} alt="Your Macros" className="icon" />
          <span>Your Macros</span>
        </button>
      </Link>

      </div>

      {/* Additional Workout Content */}
      <div>
      {/* Add your workout-related components or content here */}

      <div style={{ marginTop: '100px', display: 'flex' }}>
        <div
          id="front-image-container"
          className="image-container"
          style={{ position: 'relative', marginRight: '-50px' }}
        >
          <img
            src={frontImg}
            alt="Front Pose"
            style={{ width: '500px', height: 'auto' }}
          />
          <img
            src={chestSvg}
            alt="Chest SVG"
            className="chest-svg"
            onClick={() => setSelectedMuscle(CHESTSVG)}
            style={{
              position: 'absolute',
              left: `${chestPosition.x}px`,
              top: `${chestPosition.y}px`
            }}    
          />
          <img
            src={trapsSvg}
            alt="Traps SVG"
            className={`traps-svg ${istrapsHovered ? 'glow' : ''}`}
            onClick={() => setSelectedMuscle(TRAPSSVG)}
            onMouseEnter={() => setIstrapsHovered(true)}
            onMouseLeave={() => setIstrapsHovered(false)}
            style={{
              position: 'absolute',
              width: "150px",
              height: 'auto',
              cursor: 'grab',
              opacity:1,

              left: `${trapsPosition.x}px`,
              top: `${trapsPosition.y}px`
            }}
          />

          

          <img
            src={shouldersSvg}
            alt="Shoulders SVG"
            className={`shoulder-svg ${isShouldersHovered ? 'glow' : ''}`}
            onClick={() => setSelectedMuscle(SHOULDERSSVG)}
            onMouseEnter={() => setIsShouldersHovered(true)}
            onMouseLeave={() => setIsShouldersHovered(false)}
            style={{
              position: 'absolute',
              width: "60px",
              height: 'auto',
              cursor: 'grab',
              opacity:1,

              left: `${shouldersPosition.x}px`,
              top: `${shouldersPosition.y}px`
            }}
          />

          <img
            src={shouldersSvg_r}
            alt="Shoulders_r SVG"
            className={`shoulder-svg ${isShouldersHovered ? 'glow' : ''}`}
            onClick={() => setSelectedMuscle(SHOULDERSSVG)}
            onMouseEnter={() => setIsShouldersHovered(true)}
            onMouseLeave={() => setIsShouldersHovered(false)}
            style={{
              position: 'absolute',
              width: "60px",
              height: 'auto',
              cursor: 'grab',
              opacity:1,
              left: `${shoulders_rPosition.x}px`,
              top: `${shoulders_rPosition.y}px`
            }}
          />






          <img
            src={absSVG}
            alt="abs SVG"
            className="abs-svg"
            onClick={() => setSelectedMuscle(ABS)}
            style={{
              position: 'absolute',
              left: `${absPosition.x}px`,
              top: `${absPosition.y}px`
            }}
          />

          <img
            src={right_bicepSVG}
            alt="right_bicep SVG"
            className={`bicep-svg ${isbicepsHovered ? 'glow' : ''}`}
            onClick={() => setSelectedMuscle(BICEPS)}
            onMouseEnter={() => setIsbicepsHovered(true)}
            onMouseLeave={() => setIsbicepsHovered(false)}
            style={{
              position: 'absolute',
              width: "50px",
              height: 'auto',
              cursor: 'grab',
              opacity:1,

              left: `${right_bicepPosition.x}px`,
              top: `${right_bicepPosition.y}px`
            }}
          />

          <img
            src={left_bicepSVG}
            alt="left_bicep SVG"
            className={`bicep-svg ${isbicepsHovered ? 'glow' : ''}`}
            onClick={() => setSelectedMuscle(BICEPS)}
            onMouseEnter={() => setIsbicepsHovered(true)}
            onMouseLeave={() => setIsbicepsHovered(false)}
            style={{
              position: 'absolute',
              width: "50px",
              height: 'auto',
              cursor: 'grab',
              opacity:1,

              left: `${left_bicepPosition.x}px`,
              top: `${left_bicepPosition.y}px`
            }}
          />

          <img
            src={right_quadSVG}
            alt="right_quad SVG"
            className={`quad-svg ${isquadsHovered ? 'glow' : ''}`}
            onClick={() => setSelectedMuscle(QUADS)}
            onMouseEnter={() => setIsquadsHovered(true)}
            onMouseLeave={() => setIsquadsHovered(false)}
            style={{
              position: 'absolute',
              width: "60px",
              height: 'auto',
              cursor: 'grab',
              opacity:1,

              left: `${right_quadPosition.x}px`,
              top: `${right_quadPosition.y}px`
            }}
          />

          <img
            src={left_quadSVG}
            alt="left_quad SVG"
            className={`quad-svg ${isquadsHovered ? 'glow' : ''}`}
            onClick={() => setSelectedMuscle(QUADS)}
            onMouseEnter={() => setIsquadsHovered(true)}
            onMouseLeave={() => setIsquadsHovered(false)}
            style={{
              position: 'absolute',
              width: "60px",
              height: 'auto',
              cursor: 'grab',
              opacity:1,

              left: `${left_quadPosition.x}px`,
              top: `${left_quadPosition.y}px`
            }}
          />

          <img
            src={right_abdSVG}
            alt="right_abd SVG"
            className={`abd-svg ${isabdsHovered ? 'glow' : ''}`}
            onClick={() => setSelectedMuscle(QUADS)}
            onMouseEnter={() => setIsabdsHovered(true)}
            onMouseLeave={() => setIsabdsHovered(false)}
            style={{
              position: 'absolute',
              width: "50px",
              height: 'auto',
              cursor: 'grab',
              opacity:1,

              left: `${right_abdPosition.x}px`,
              top: `${right_abdPosition.y}px`
            }}
          />

          <img
            src={left_abdSVG}
            alt="left_abd SVG"
            className={`abd-svg ${isabdsHovered ? 'glow' : ''}`}
            onClick={() => setSelectedMuscle(QUADS)}
            onMouseEnter={() => setIsabdsHovered(true)}
            onMouseLeave={() => setIsabdsHovered(false)}
            style={{
              position: 'absolute',
              width: "54px",
              height: 'auto',
              cursor: 'grab',
              opacity:1,

              left: `${left_abdPosition.x}px`,
              top: `${left_abdPosition.y}px`
            }}
          />

          <img
            src={right_foreSVG}
            alt="right_fore SVG"
            className={`fore-svg ${isforesHovered ? 'glow' : ''}`}
            onClick={() => setSelectedMuscle(FOREARMS)}
            onMouseEnter={() => setIsforesHovered(true)}
            onMouseLeave={() => setIsforesHovered(false)}
            style={{
              position: 'absolute',
              width: "50px",
              height: 'auto',
              cursor: 'grab',
              opacity:1,

              left: `${right_forePosition.x}px`,
              top: `${right_forePosition.y}px`
            }}
          />

          <img
            src={left_foreSVG}
            alt="left_fore SVG"
            className={`fore-svg ${isforesHovered ? 'glow' : ''}`}
            onClick={() => setSelectedMuscle(FOREARMS)}
            onMouseEnter={() => setIsforesHovered(true)}
            onMouseLeave={() => setIsforesHovered(false)}
            style={{
              position: 'absolute',
              width: "47px",
              height: 'auto',
              cursor: 'grab',
              opacity:1,

              left: `${left_forePosition.x}px`,
              top: `${left_forePosition.y}px`
            }}
          />
        </div>
      <div id="back-image-container" style={{ position: 'relative' , transform: 'translateX(-20px)'}}>
        <img
          src={backImg}
          alt="Back Pose"
          style={{ width: '500px', height: 'auto' }}
        />
        
        <img
            src={left_tricepSVG}
            alt="left_triceps SVG"
            className={`tricep-svg ${istricepsHovered ? 'glow' : ''}`}
            onClick={() => setSelectedMuscle(TRICEPSSVG)}
            onMouseEnter={() => setIstricepsHovered(true)}
            onMouseLeave={() => setIstricepsHovered(false)}
            style={{
              position: 'absolute',
              width: "45px",
              height: 'auto',
              cursor: 'grab',
              opacity:1,

              left: `${left_tricepsPosition.x}px`,
              top: `${left_tricepsPosition.y}px`
            }}
          />

          <img
            src={right_tricepSVG}
            alt="right_triceps SVG"
            className={`tricep-svg ${istricepsHovered ? 'glow' : ''}`}
            onClick={() => setSelectedMuscle(TRICEPSSVG)}
            onMouseEnter={() => setIstricepsHovered(true)}
            onMouseLeave={() => setIstricepsHovered(false)}
            style={{
              position: 'absolute',
              width: "44px",
              height: 'auto',
              cursor: 'grab',
              opacity:1,

              left: `${right_tricepsPosition.x}px`,
              top: `${right_tricepsPosition.y}px`
            }}
          />

          <img
            src={b_rightshoulderSvg}
            alt="b_rightShoulder SVG"
            className={`shoulder-svg ${isShouldersHovered ? 'glow' : ''}`}
            onClick={() => setSelectedMuscle(SHOULDERSSVG)}
            onMouseEnter={() => setIsShouldersHovered(true)}
            onMouseLeave={() => setIsShouldersHovered(false)}
            style={{
              position: 'absolute',
              width: "50px",
              height: 'auto',
              cursor: 'grab',
              opacity:1,
              left: `${b_rightshoulderPosition.x}px`,
              top: `${b_rightshoulderPosition.y}px`
            }}
          />

          <img
            src={b_leftshoulderSvg}
            alt="b_leftShoulder SVG"
            className={`shoulder-svg ${isShouldersHovered ? 'glow' : ''}`}
            onClick={() => setSelectedMuscle(SHOULDERSSVG)}
            onMouseEnter={() => setIsShouldersHovered(true)}
            onMouseLeave={() => setIsShouldersHovered(false)}
            style={{
              position: 'absolute',
              width: "50px",
              height: 'auto',
              cursor: 'grab',
              opacity:1,
              left: `${b_leftshoulderPosition.x}px`,
              top: `${b_leftshoulderPosition.y}px`
            }}
          />

          <img
            src={b_trapsSvg}
            alt="b_Traps SVG"
            className={`traps-svg ${istrapsHovered ? 'glow' : ''}`}
            onClick={() => setSelectedMuscle(TRAPSSVG)}
            onMouseEnter={() => setIstrapsHovered(true)}
            onMouseLeave={() => setIstrapsHovered(false)}
            style={{
              position: 'absolute',
              width: "150px",
              height: 'auto',
              cursor: 'grab',
              opacity:1,

              left: `${b_trapsPosition.x}px`,
              top: `${b_trapsPosition.y}px`
            }}
          />

          <img
            src={backSVG}
            alt="back SVG"
            className="back-svg"
            onClick={() => setSelectedMuscle(BACK)}
            style={{
              position: 'absolute',
              left: `${backPosition.x}px`,
              top: `${backPosition.y}px`
            }}
          />

          <img
            src={b_left_foreSVG}
            alt="b_left_fore SVG"
            className={`fore-svg ${isforesHovered ? 'glow' : ''}`}
            onClick={() => setSelectedMuscle(FOREARMS)}
            onMouseEnter={() => setIsforesHovered(true)}
            onMouseLeave={() => setIsforesHovered(false)}
            style={{
              position: 'absolute',
              width: "42px",
              height: 'auto',
              cursor: 'grab',
              opacity:1,

              left: `${b_left_forePosition.x}px`,
              top: `${b_left_forePosition.y}px`
            }}
          />

          <img
            src={b_right_foreSVG}
            alt="b_right_fore SVG"
            className={`fore-svg ${isforesHovered ? 'glow' : ''}`}
            onClick={() => setSelectedMuscle(FOREARMS)}
            onMouseEnter={() => setIsforesHovered(true)}
            onMouseLeave={() => setIsforesHovered(false)}
            style={{
              position: 'absolute',
              width: "42px",
              height: 'auto',
              cursor: 'grab',
              opacity:1,

              left: `${b_right_forePosition.x}px`,
              top: `${b_right_forePosition.y}px`
            }}
          />

          <img
            src={glutesSVG}
            alt="glutes SVG"
            className="glutes-svg"
            onClick={() => setSelectedMuscle(GLUTES)}
            style={{
              position: 'absolute',
              left: `${glutesPosition.x}px`,
              top: `${glutesPosition.y}px`
            }}
          />

          <img
            src={left_hamstringSVG}
            alt="left_hamstring SVG"
            className={`hamstring-svg ${ishamsHovered ? 'glow' : ''}`}
            onClick={() => setSelectedMuscle(HAMSTRINGS)}
            onMouseEnter={() => setIshamsHovered(true)}
            onMouseLeave={() => setIshamsHovered(false)}
            style={{
              position: 'absolute',
              width: "55px",
              height: 'auto',
              cursor: 'grab',
              opacity:1,

              left: `${left_hamstringPosition.x}px`,
              top: `${left_hamstringPosition.y}px`
            }}
          />

          <img
            src={right_hamstringSVG}
            alt="right_hamstring SVG"
            className={`hamstring-svg ${ishamsHovered ? 'glow' : ''}`}
            onClick={() => setSelectedMuscle(HAMSTRINGS)}
            onMouseEnter={() => setIshamsHovered(true)}
            onMouseLeave={() => setIshamsHovered(false)}
            style={{
              position: 'absolute',
              width: "55px",
              height: 'auto',
              cursor: 'grab',
              opacity:1,

              left: `${right_hamstringPosition.x}px`,
              top: `${right_hamstringPosition.y}px`
            }}
          />

          <img
            src={left_calveSVG}
            alt="left_calve SVG"
            className={`calves-svg ${iscalvesHovered ? 'glow' : ''}`}
            onClick={() => setSelectedMuscle(CALVES)}
            onMouseEnter={() => setIscalvesHovered(true)}
            onMouseLeave={() => setIscalvesHovered(false)}
            style={{
              position: 'absolute',
              width: "48px",
              height: 'auto',
              cursor: 'grab',
              opacity:1,

              left: `${left_calvePosition.x}px`,
              top: `${left_calvePosition.y}px`
            }}
          />

          <img
            src={right_calveSVG}
            alt="right_calve SVG"
            className={`calves-svg ${iscalvesHovered ? 'glow' : ''}`}
            onClick={() => setSelectedMuscle(CALVES)}
            onMouseEnter={() => setIscalvesHovered(true)}
            onMouseLeave={() => setIscalvesHovered(false)}
            style={{
              position: 'absolute',
              width: "48px",
              height: 'auto',
              cursor: 'grab',
              opacity:1,

              left: `${right_calvePosition.x}px`,
              top: `${right_calvePosition.y}px`
            }}
          />

          

      </div>

      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
  {/* Your h2 and other stuff here */}
          <h2
          style={{
            position: 'absolute',
            fontSize: '32px', // <-- adjust as needed
            fontWeight: 'bold',
            top: `${headingPosition.y}px`,
            left: `${headingPosition.x}px`,
            color: 'white',
            zIndex: 9999,
          }}
        >
          Muscle Group
        </h2>

      </div>  
     

      <div>
        {/* Muscle Card SVG positioned dynamically */}
        <img
          src={muscle_cardSVG}
          alt="muscle_card SVG"
          className="muscle_card-svg"
          style={{
            position: 'absolute',
            left: `${muscle_cardPosition.x}px`,
            top: `${muscle_cardPosition.y}px`,
            width: '1000px',
            height: 'auto',
            zIndex: 1000
          }}
        />

        {/* Muscle Image Container */}
          {selectedMuscle && (
            <div
              style={{
                position: 'absolute',
                left: `${muscle_cardPosition.x + 250}px`, // adjust to center
                top: `${muscle_cardPosition.y + 10}px`,  // adjust to center vertically
                width: '500px',
                height: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                zIndex: 1001
              }}
            >
              <img
                src={selectedMuscle}
                alt="Selected Muscle"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  borderRadius: '15px',         // smooth curved corners
                  boxShadow: '0 0 15px rgba(0,0,0,0.3)' 
                }}
              />
            </div>
          )}
      </div>
      
      {selectedMuscle === CHESTSVG && (
     <div className="move-down-container" style={{ position: 'absolute', left: '120px', top: '330px' }}>
        <Chest />
      </div>

      )}

      </div>


    </div>
    </div>
  );
}

export default Workout;
