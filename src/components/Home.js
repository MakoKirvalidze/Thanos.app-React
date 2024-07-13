import React from 'react';
import thanosImage from '../thanos.jpg';

function Home() {
  return (
    <div>
      <h1>თანოსი</h1>
      <img src={thanosImage} alt="თანოსი" className="thanos-image"/>
    </div>
  );
}

export default Home;