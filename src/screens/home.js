import React, { onSubmit, useState, useEffect } from 'react';
import '../styles/home.css';
import train from '../assets/train.png';
import car from '../assets/car.png';
import boat from '../assets/boat.png';
import plane from '../assets/plane.png';
import { ExampleFetch } from './example';

export const Home = () => {

  const [selectedTransport, setSeletectedTransport] = useState("");


  const [kmInput, setKmInput] = useState("");
  const [daysInput, setDaysInput] = useState("");
  const [gbpInput, setGbpInput] = useState("");
  

  const [mot, setMot] = useState("");

  
  const [km, setKm] = useState("");
  const [days, setDays] = useState("");
  const [gbp, setGbp] = useState("");
  const [formInvalid, setFormInvalid] = useState(true);

  const handleChangeKm = (e) => {
    setKmInput(e.target.value.trim());
    
  };

  const handleChangeDays = (e) => {
    setDaysInput(e.target.value.trim());
    
  };

  const handleChangeGbp = (e) => {
    setGbpInput(e.target.value.trim());
    
  };

  const submitForm = (e) => {
    e.preventDefault();
  
    if (kmInput && daysInput && gbpInput){
      console.log("made it");
      setDays(parseInt(daysInput));
      setKm(parseInt(kmInput));
      setGbp(parseInt(gbpInput));
      // console.log(km);
      // console.log(gbp);
      // console.log(days);
      setFormInvalid(false);

      // putInfoToDatabase();
 
    }else{
      return  
    }
  };


 
 
  return (
    <div className="Page">
      <div className="main">
        <header>
          <h2>Green travel</h2>
        </header>
        <h1>Calculate carbon footprint before your travel!</h1>
        <div className="container">
          <div className='blur'></div>
          <form onSubmit={submitForm}>
            {/* ICONS */}
            <div className="icons">
              <div className="right">
                <div id="plane" className={`Plane ${selectedTransport === 'Plane' ? "active" : ""}`} onClick={()=> setSeletectedTransport("Plane")}>
                  <img className="vectorPlane" src={plane} alt="plane" />
                  <span className="textPlane">Plane</span>
                </div>
                <div id="train" className={`Train ${selectedTransport === 'Train' ? "active" : ""}`} onClick={()=> setSeletectedTransport("Train")}>
                  <img className="vectorTrain" src={train} alt="train" />
                  <span className="btntext_1">Train</span>
                </div>
              </div>
              <div className="left">
                <div id="car" className={`Car ${selectedTransport === 'Car' ? "active" : ""}`} onClick={()=> setSeletectedTransport("Car")}>
                  <img className="vectorCar" src={car} alt="car" />
                  <span className="textCar">Car</span>
                </div>
                <div id="boat" className={`Boat ${selectedTransport === 'Boat' ? "active" : ""}`} onClick={()=> setSeletectedTransport("Boat")}>
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
                <input onChange={handleChangeKm}
                  value={kmInput}
                  type="text"
                  name="distance"
                  placeholder="Distance in km"
                />
              </label>
              <label>
                <h6>Length of stay</h6>
                <input onChange={handleChangeDays}  value={daysInput} type="text" name="length" placeholder="Number of days" />
              </label>
              <label>
                <h6>Costs of accommodation</h6>
                <input  onChange={handleChangeGbp}  value={gbpInput} type="text" name="costs" placeholder="Price" />
              </label>
            </div>
            <button  type="submit" value="submit">
              <p id="hover" className="calculatetext">
                Calculate
              </p>
            </button>
          </form>
        </div>
        <ExampleFetch km={km} days={days} gbp={gbp} validity={formInvalid} />
        <footer>
        <h4>OUR MISSION</h4>
        <p className='missiontext'>We believe that small inputs make great changes. Using multipy data sources and combining it to show how really one person can contribute to better greener world.
        </p>
        </footer>
      </div>
    </div>
  );
};
