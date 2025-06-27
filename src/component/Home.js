import React from 'react';

const Home = () => {
  return (
    <section>
      <h1 className="home-title">Developer</h1>
      <p className="home-subtitle">Hey I’m <span style={{ color: '#00f7ff' }}>Grig</span>, Frontend Developer</p>
      <p className="home-description">
        I help business grow by crafting amazing web experiences. If you're looking for a developer that likes to get stuff done.
      </p>

      <div className="info-container">
        <div className="info-box">
          <p><strong>Name:</strong> Grig</p>
          <p><strong>Location:</strong> Armenia</p>
          <p><strong>Type:</strong> Full-Time / Freelancer</p>
          <a href="#">Download CV ⬇️</a>
        </div>

        <div className="stats">
          <div className="stats-box">
            <div className="stat-number">4</div>
            <div className="stat-label">Languages</div>
          </div>
          <div className="stats-box">
            <div className="stat-number">6</div>
            <div className="stat-label">Dev Tools</div>
          </div>
          <div className="stats-box">
            <div className="stat-number">8</div>
            <div className="stat-label">Years Exp</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;