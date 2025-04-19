import './App.css';
import { useState, useMemo } from 'react';
import { useEffect } from 'react';
import logo from "./logo.png";
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import fireIcon from './assets/fire.png';
import workoutIcon from './assets/workout.png';
import streakIcon from './assets/Small.svg';
import { Link } from 'react-router-dom';
import React from 'react'; 





// Static targets
const targets = {
  protein: 100,
  carbs: 1000,
  fats: 70,
  calories: 2500
};

function App() {
  const [showModal, setShowModal] = useState(false);
  const [foodItems, setFoodItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [addedFoods, setAddedFoods] = useState([]);
  const [quantities, setQuantities] = useState({});

   const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
  
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

  const openModal = () => {
    fetch('http://localhost:8080/')
      .then((res) => res.json())
      .then((data) => {
        setFoodItems(data);
        setFilteredItems(data);
        setShowModal(true);
      })
      .catch((err) => console.error('Failed to fetch:', err));
  };

  const closeModal = () => setShowModal(false);

  const filterByType = (type) => {
    setFilteredItems(
      type === 'all'
        ? foodItems
        : foodItems.filter(item => item.type?.toLowerCase() === type.toLowerCase())
    );
  };

  const handleAddFood = (item) => {
    const exists = addedFoods.some(food => food.id === item.id);
    if (!exists) {
      setAddedFoods(prev => [...prev, item]);
      setQuantities(prev => ({ ...prev, [item.id]: 100 }));
    }
    setShowModal(false);
  };

  const handleRemoveFood = (id) => {
    setAddedFoods(prev => prev.filter(item => item.id !== id));
    setQuantities(prev => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  const handleQuantityChange = (id, value) => {
    const newQty = Number(value);
    if (newQty >= 0) {
      setQuantities(prev => ({
        ...prev,
        [id]: newQty,
      }));
    }
  };

  const totals = useMemo(() => {
    let total = { calories: 0, protein: 0, carbs: 0, fats: 0 };
    for (const item of addedFoods) {
      const qty = quantities[item.id] || 100;
      const factor = qty / 100;
      total.calories += item.calories * factor;
      total.protein += item.protein * factor;
      total.carbs += item.carbs * factor;
      total.fats += item.fat * factor;
    }
    return total;
  }, [addedFoods, quantities]);

  const caloriePercentage = (totals.calories / targets.calories) * 100;




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


        {/* Navigation Buttons */}
        
        <div className="icon-button-group">
         <Link to="/workout">
          <button className="icon-button">
            <img src={workoutIcon} alt="Workout" className="icon" />
            <span>Workout</span>
          </button>
         </Link>
          

         <Link to="/">
        <button className="icon-button">
          <img src={fireIcon} alt="Your Macros" className="icon" />
          <span>Your Macros</span>
        </button>
      </Link>
          
        </div>

        {/* Circular Progress */}
        <div className="big-box">
          <div className="progress-container">
            <div style={{ position: "relative", textAlign: "center" }}>
              <h2 style={{
                color: "white",
                marginBottom: "20px",
                marginTop: "20px",
                position: "absolute",
                top: "-90px",
                left: "15%",
                transform: "translateX(-50%)",
                fontSize: "28px",
              }}>
                Your Calories
              </h2>
              <div style={{ position: "relative", marginTop: "35px" }}>
                <CircularProgressbar
                  value={caloriePercentage}
                  text={`${Math.round(caloriePercentage)}%`}
                  styles={buildStyles({
                    pathColor: '#EF4A5B',
                    textColor: '#ffffff',
                    trailColor: '#2A2727',
                    textSize: '22px',
                  })}
                />
              </div>
            </div>
            <div style={{ color: "white", marginTop: "40px", textAlign: "center", fontSize: "25px" }}>
              {totals.calories.toFixed(0)} / {targets.calories} kcal
            </div>
          </div>

          {/* Nutrients */}
          <div className="nutrients-container">
            <div className="grid-container">
              <NutrientCard name="Protein" current={totals.protein} target={targets.protein} unit="g" />
              <NutrientCard name="Carbs" current={totals.carbs} target={targets.carbs} unit="g" />
            </div>
            <div className="grid-container">
              <NutrientCard name="Fats" current={totals.fats} target={targets.fats} unit="g" />
            </div>
          </div>
        </div>

        {/* Food Section */}
        <div className="food-section">
          <div className="food-header">
            <h2>Your Food</h2>
            <button className="add-button" onClick={openModal}>Add</button>
          </div>
          <hr />
          <div className="food-items">
            {addedFoods.length === 0 ? (
              <p style={{ color: 'white' }}>No food items added yet.</p>
            ) : (
              addedFoods.map((item) => {
                const quantity = quantities[item.id] || 100;
                const factor = quantity / 100;

                return (
                  <div className="food-card" key={item.id}>
                    <div className="card-header">
                      <h2 className="food-name">{item.name}</h2>
                      <span className="kcal-badge">
                        {(item.calories * factor).toFixed(1)} kcal
                      </span>
                    </div>
                    <p className="serving-text">🍴 Serving: {item.m_type}</p>
                    <div className="macros">
                      <div className="macro-box">
                        <p className="macro-label">Protein</p>
                        <p className="macro-value">{(item.protein * factor).toFixed(1)}g</p>
                      </div>
                      <div className="macro-box">
                        <p className="macro-label">Carbs</p>
                        <p className="macro-value">{(item.carbs * factor).toFixed(1)}g</p>
                      </div>
                      <div className="macro-box">
                        <p className="macro-label">Fat</p>
                        <p className="macro-value">{(item.fat * factor).toFixed(1)}g</p>
                      </div>
                    </div>
                    <div className="input-group">
                      <label htmlFor={`qty-${item.id}`}>Quantity (grams):</label>
                      <input
                        id={`qty-${item.id}`}
                        type="number"
                        value={quantity}
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                        min="0"
                      />
                    </div>
                    <div className="remove-container" onClick={() => handleRemoveFood(item.id)}>
                      <i className="fa fa-trash"></i>
                      <span>Remove</span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <FoodModal
            filteredItems={filteredItems}
            filterByType={filterByType}
            closeModal={closeModal}
            handleAddFood={handleAddFood}
          />
        )}
      </div>

    
  );
}

// Nutrient Card Component
function NutrientCard({ name, current, target, unit }) {
  const progressValue = (current / target) * 100;
  return (
    <div className={`card card-${name.toLowerCase()}`}>
      <div className="card-header">
        <div className="header-content">
          <h4 className="card-title">{name}</h4>
          <span className={`badge ${name.toLowerCase()}-badge`}>
            {current.toFixed(1)} / {target} {unit}
          </span>
        </div>
      </div>
      <div className="card-content">
        <div className="progress-bar" style={{ width: `${progressValue}%` }}></div>
        <div className="progress-info">
          <span>0 {unit}</span>
          <span>{target} {unit}</span>
        </div>
      </div>
    </div>
  );
}

// Food Modal Component
function FoodModal({ filteredItems, filterByType, closeModal, handleAddFood }) {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) closeModal();
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>×</button>
        <div className="modal-header">
          <h3>Available Foods</h3>
          <div className="modal-buttons">
            {['all', 'dairy', 'meat', 'packedfood', 'drinks', 'chocolate', 'nutbutters'].map((type) => (
              <button className="primary-btn" key={type} onClick={() => filterByType(type)}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="modal-cards">
          {filteredItems.map((item) => (
            <div className="product-card" key={item.id}>
              <img src={`http://localhost:8080${item.image}`} alt={item.name} />
              <div className="product-details">
                <h4>{item.name}</h4>
                <p>Calories: {item.calories}</p>
                <p>Protein: {item.protein}g</p>
                <button className="add-btn" onClick={() => handleAddFood(item)}>Add</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



export default App;
