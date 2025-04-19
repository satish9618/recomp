import React, { useState } from "react";

const style = `
.chest-container {
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

.chest-container::-webkit-scrollbar {
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
  height: 100px;        /* Increased height */
  width: 80%;        /* Decreased width */
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
  font-size: 2.5rem;

}

`;

const ExerciseItem = ({ name, defaultColor }) => {
  const [color, setColor] = useState(defaultColor);

  return (
    <div className="exercise-item">
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="color-circle"
        title="Change color"
      />
      <span className="exercise-name">{name}</span>
    </div>
  );
};

const ExerciseSection = ({ title, exercises }) => (
  <div className="exercise-section">
    <h2 className="section-title">{title}</h2>
    {exercises.map((exercise, index) => (
      <ExerciseItem
        key={index}
        name={exercise.name}
        defaultColor={exercise.color}
      />
    ))}
  </div>
);

const Chest = () => {
  const chestExercises = {
    "Upper Chest": [
      { name: "Incline Dumbbell Press", color: "#f87171" },
      { name: "Incline Barbell Press", color: "#facc15" },
    ],
    "Middle Chest": [
      { name: "Flat Bench Press", color: "#60a5fa" },
      { name: "Flat Barbell Press", color: "#c084fc" },
    ],
  };

  return (
    <>
      <style>{style}</style>
      <div className="chest-container">
        <h1 className="main-title">Chest Exercises</h1>
        {Object.entries(chestExercises).map(([section, exercises]) => (
          <ExerciseSection
            key={section}
            title={section}
            exercises={exercises}
          />
        ))}
      </div>
    </>
  );
};

export default Chest;
