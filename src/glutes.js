import React, { useState } from "react";
import ReactPlayer from 'react-player';

const style = `
.glutes-container {
  background-color:rgb(6, 6, 6);
  color: white;
  min-height: 30vh;  /* Increased height */
  width: 1700px;     /* Increased width in pixels (you can adjust as needed) */
  height: 450px;     /* Increased height */
  padding: 100px;
  font-family: sans-serif;
  margin: 0 auto;  /* Centers the container horizontally */
  overflow-y: auto;  
  scrollbar-width: none;         /* Firefox */
  -ms-overflow-style: none; 
  box-shadow: 0 8px 20px rgba(95, 95, 95, 0.6);
  border-radius: 16px;
  display: flex;
  align-items: center;
 /* Allows scrolling when the content exceeds the container's size */
}

.glutes-container::-webkit-scrollbar {
  display: none;                 /* Chrome, Safari */
}

.main-title {
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 20px;
  margin-left: 100px;
  margin-right:100px;
}

.exercise-section {
  margin-bottom: 60px;
  margin-right: 60px;

}

.section-title {
  font-size: 3.0rem;
  font-weight: bold;
  margin-bottom: 15px;
  
}

.exercise-item {
  background-color: #1f2937;
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 12px;
  margin-bottom: 25px;
  height: 100px;
  width: 80%;
  transition: all 0.3s ease-in-out;
}

.exercise-item:hover {
  background-color:rgba(94, 102, 116, 0.67);
  transform: scale(1.02);
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.3);
}

.color-circle {
  width: 50px; 
  height: 40px;
  border: none;
  border-radius: 500%;
  margin-right: 15px;
  cursor: pointer;
  background: transparent;
}

.exercise-name {
  font-size: 2.3rem;

}

.modal-content {
  background-color:rgb(18, 17, 17);
  color: white;
  padding: 30px;
  border-radius: 10px;
  width: 1000px;
  height: 1000px;
  max-width: 90vw;
  max-height: 100vh;
  overflow-y: auto;
  position: relative;
  z-index: 1000; 
  /* Hide scrollbar */
  scrollbar-width: none;            /* Firefox */
  -ms-overflow-style: none;         /* IE/Edge */
}

.modal-overlay {
  position: fixed;
  top: 200px;
  left: 300px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999; /* Make sure it's above everything */
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content::-webkit-scrollbar {
  display: none;                    /* Chrome, Safari */
}



.modal-content h2 {
  font-size: 2rem;
  margin-bottom: 17px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 1.5rem;
  cursor: pointer;
  color: white;
}

.video-player {
  width: 100%;
  height: 300px;
  background-color: black;
  margin-bottom: 20px;
}

.effectiveness {
  margin-bottom: 20px;
   font-size: 20px;
  margin-top: 200px;
}

.effectiveness span {
  color: limegreen;
  font-size: 1.2rem;
}

.button-group {
  display: flex;
  justify-content: space-between;
}

.modal-btn {
  padding: 10px 20px;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.modal-btn.add {
  background-color:rgb(74, 146, 101);
  font-size: 20px;
  color: white;
  
}

.modal-btn.not {
  background-color:rgb(69, 66, 66);
  font-size: 20px;
  color: white;
 

`;

const Modal = ({ visible, onClose, exercise }) => {
  if (!visible || !exercise) return null;

  const renderEffectiveness = (effect) => {
    let count = parseInt(effect);
    const max = 5;
  
    if (isNaN(count) || count < 0) count = 0;
    if (count > max) count = max;
  
    return (
      <>
        {[...Array(count)].map((_, i) => <span key={`g-${i}`}>🟢</span>)}
        {[...Array(max - count)].map((_, i) => <span key={`w-${i}`}>⚪</span>)}
      </>
    );
  };
  
  
  

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>🔵 {exercise.name}</h2>

        {/* Use ReactPlayer for dynamic video embedding */}
        <div className="video-player">
        <ReactPlayer 
          url={exercise.videoUrl} 
          controls
          width="100%" 
          height="450px"  // 👈 Set desired height here
        />
      </div>


        <div className="effectiveness">
            Effectiveness: <span>{renderEffectiveness(exercise.effect)}</span>
        </div>
        <div className="button-group">
          <button className="modal-btn not" onClick={onClose}>
            ❌ Not for me
          </button>
          <button className="modal-btn add" onClick={() => alert("Added to profile!")}>
            ✅ Add to Profile
          </button>
        </div>
      </div>
    </div>
  );
};


const ExerciseItem = ({ name, defaultColor, onClick }) => {
  const [color, setColor] = useState(defaultColor);

  return (
    <div className="exercise-item" onClick={onClick}>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="color-circle"
        title="Change color"
        onClick={(e) => e.stopPropagation()}
      />
      <span className="exercise-name">{name}</span>
    </div>
  );
};

const ExerciseSection = ({ title, exercises, onExerciseClick }) => (
  <div className="exercise-section">
    <h2 className="section-title">{title}</h2>
    {exercises.map((exercise, index) => (
      <ExerciseItem
        key={index}
        name={exercise.name}
        defaultColor={exercise.color}
        onClick={() => onExerciseClick(exercise)}
      />
    ))}
  </div>
);



const Glutes = () => {

  const [selectedExercise, setSelectedExercise] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const GlutesExercises = {
    
        "": [
            { name: "Barbell Hip Thrust", color: "#b41ce3", videoUrl: "https://youtu.be/LM8XHLYJoYs", effect: "5" },           // red
            { name: "Glute Bridge", color: "#b41ce3", videoUrl: "https://youtu.be/m2Zx-57cSok", effect: "3" },                 // green
            { name: "Cable Kickbacks", color: "#b41ce3", videoUrl: "https://youtu.be/1bVY5D9Z2tM", effect: "4" }, // green
        ],

        " ": [
            { name: "Dumbbell Romanian Deadlifts", color: "#b41ce3", videoUrl: "https://youtu.be/ytGaGIn3SjE", effect: "4" },  // red
            { name: "Step-Ups", color: "#b41ce3", videoUrl: "https://youtu.be/JQgrzF1v9is", effect: "3" },                     // green
            { name: "Bulgarian Split Squats", color: "#b41ce3", videoUrl: "https://youtu.be/2C-uNgKwPLE", effect: "4" }                    // green
        ],



    };

  const handleExerciseClick = (exercise) => {
    setSelectedExercise(exercise);
    setModalVisible(true);
  };
  
  

  return (
  
    <>
      <style>{style}</style>
      <div className="glutes-container">
        <h1 className="main-title">Glutes Exercises</h1>
        {Object.entries(GlutesExercises).map(([section, exercises]) => (
          <ExerciseSection
            key={section}
            title={section}
            exercises={exercises}
            onExerciseClick={handleExerciseClick}
          />
        ))}
      </div>
      <Modal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        exercise={selectedExercise}
      />
    </>
  );
};

export default Glutes;
