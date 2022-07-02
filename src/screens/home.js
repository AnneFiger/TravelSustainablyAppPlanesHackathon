import React, { onSubmit } from 'react';
import '../styles/home.css';

export const Home = () => {
  return (
    <div className="Page">
      <div className="main">
        <header>
          <h2>Green travel</h2>
        </header>
        <h1>Calculate carbon footprint before your travel!</h1>
        <div id="wcb" class="carbonbadge"></div>
        <script
          src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js"
          defer
        ></script>
        <div className="container">
          <form onSubmit={onSubmit}>
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
              <p id="calculatetext">Calculate</p>
            </button>
          </form>
        </div>
        <footer>
          <div id="wcb" class="carbonbadge wcb-d">
            <p>hey</p>
          </div>
          <script
            src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js"
            defer
          ></script>
        </footer>
      </div>
    </div>
  );
};
