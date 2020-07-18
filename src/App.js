import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import Ccc from "./Ccc.png";
import car1 from "./video/car1.gif";
import "./App.css";

const App = () => {
  const { ref } = useWebAnimations({
    keyframes: [{ transform: "translate(200px,0 )" }],
    timing: {
      duration: 6000,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out",
    },
  });
  return (
    <div className="target">
      <div className="image">
        <img src={Ccc} />
      </div>
      <div className="carr" ref={ref}>
        <img src={car1}></img>
      </div>
    </div>
  );
};

export default App;
