import React, {onSubmit} from 'react';
import '../styles/home.css';

export const Home = () => {
  return (
    <div className="Page">
      <div className="container">
        <form onSubmit={onSubmit}>
          <label>
            Distance
            <input name="distance" />
          </label>
          <label>
            Length of stay
            <input name="lengthOfStay" />
          </label>
          <label>
          Costs of accommodation
            <input name="costs" />
          </label> 
          <button type="submit" value="submit">Calculate</button>
        </form>
      </div>
    </div>
  );
};
