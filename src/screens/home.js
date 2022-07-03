import React, { onSubmit } from 'react';
import '../styles/home.css';
import train from '../assets/train.png';
import car from '../assets/car.png';
import boat from '../assets/boat.png';
import plane from '../assets/plane.png';

export const Home = () => {
  return (
    <div className="Page">
      <div className="main">
        <header>
          <h2>Green travel</h2>
        </header>
        <h1>Calculate carbon footprint before your travel!</h1>
        <div className="container">
          <form onSubmit={onSubmit}>
            {/* ICONS */}
            <div className="icons">
              <div className="right">
                <div id="plane" className="Plane">
                  <img className="vectorPlane" src={plane} alt="plane" />
                  <span className="textPlane">Plane</span>
                </div>
                <div id="train" className="Train">
                  <img className="vectorTrain" src={train} alt="train" />
                  <span className="btntext_1">Train</span>
                </div>
              </div>
              <div className="left">
                <div id="car" className="Car">
                  <img className="vectorCar" src={car} alt="car" />
                  <span className="textCar">Car</span>
                </div>
                <div id="boat" className="Boat">
                  <div className="icrounddirectionsboatfilled">
                    <img className="Vector_3" src={boat} alt="boat" />
                  </div>
                  <span className="textBoat">Boat</span>
                </div>
              </div>
            </div>
            {/* ICONS END */}
            <div className="inputs">
              <label>
                <h6>Distance</h6>
                <input
                  type="text"
                  name="distance"
                  placeholder="Distance in km"
                />
              </label>
              <label>
                <h6>Length of stay</h6>
                <input name="length" placeholder="Number of days" />
              </label>
              <label>
                <h6>Costs of accommodation</h6>
                <input name="costs" placeholder="Price" />
              </label>
            </div>
            <button type="submit" value="submit">
              <p id="hover" className="calculatetext">
                Calculate
              </p>
            </button>
          </form>
        </div>
        <footer>
        <p>hey</p>

        </footer>
      </div>
    </div>
  );
};
