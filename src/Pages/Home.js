import React from "react";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "10px" }}>
        <img
          src="https://github.com/Temurbekk/my-workout-tracker/blob/master/assets/img1.png?raw=true"
          style={{
            width: "300px",
            height: "300px",
            objectFit: "fit",
            display: "block",
            boxShadow: "0 10px 10px rgba(0,0,0,.7)",
          }}
        />
      </div>
      <div style={{ padding: "10px" }}>
        <img
          src="https://github.com/Temurbekk/my-workout-tracker/blob/master/assets/img2.png?raw=true"
          style={{
            width: "300px",
            height: "300px",
            objectFit: "fit",
            display: "block",
            boxShadow: "0 10px 10px rgba(0,0,0,.7)",
          }}
        />
      </div>
      <div style={{ padding: "10px" }}>
        <img
          src="https://github.com/Temurbekk/my-workout-tracker/blob/master/assets/img3.png?raw=true"
          style={{
            width: "300px",
            height: "300px",
            objectFit: "fit",
            display: "block",
            boxShadow: "0 10px 10px rgba(0,0,0,.7)",
          }}
        />
      </div>
      <div style={{ padding: "10px" }}>
        <img
          src="https://github.com/Temurbekk/my-workout-tracker/blob/master/assets/img4.png?raw=true"
          style={{
            width: "300px",
            height: "300px",
            objectFit: "fit",
            display: "block",
            boxShadow: "0 10px 10px rgba(0,0,0,.7)",
          }}
        />
      </div>
      HOMEPAGE BEFORE SIGN IN
    </div>
  );
}

export default Home;
