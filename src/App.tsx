import { useState } from "react";

function App() {
  return (
    <div className="App">
      <section>
        <div className="background">
          <img src="/images/1.png" data-speed="-2" className="layer" />
          <img src="/images/3.png" data-speed="-2" className="layer" />
          <img src="/images/2.png" data-speed="1" className="layer" />
          <img src="/images/4.png" data-speed="-2" className="layer" />
          <img src="/images/5.png" data-speed="1" className="layer" />
          <img src="/images/6.png" data-speed="-2" className="layer" />
          <img src="/images/7.png" data-speed="-1" className="layer" />
          <img src="/images/8.png" data-speed="-1" className="layer" />
          <img src="/images/9.png" data-speed="-1" className="layer" />
          <img src="/images/10.png" data-speed="-3" className="layer" />
          <img src="/images/11.png" data-speed="-2" className="layer" />
          <img src="/images/12.png" data-speed="-2" className="layer" />
        </div>
        <div className="Description">
          <img src="/images/profile1.jpeg" className="profile" />
          <h2>My Name is Eric Park</h2>
          <h4>A Passionate Front-End Developer</h4>
        </div>
      </section>
      <div className="Section1">
        <h2>My Name is Eric Park</h2>
        <h4>A Passionate Front-End Developer</h4>
      </div>
    </div>
  );
}

export default App;
