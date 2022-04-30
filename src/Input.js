import React, { useState, useRef } from "react";
import "./Input.css";
const Input = () => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    draw(input);
  };

  const refContainer = useRef(null);

  function draw(val) {
    const refElement = refContainer.current;
    const canvas = refElement.getContext("2d");
    canvas.font = "38px serif";

    // let dimension = refElement.getBoundingClientRect();
    // console.log(dimension);

    // canvas.width = dimension.width * devicePixelRatio;
    // canvas.height = dimension.height * devicePixelRatio;

    // canvas.scale(devicePixelRatio, devicePixelRatio);

    // refElement.style.width = dimension.width + "px";
    // refElement.style.height = dimension.height + "px";

    canvas.fillText(val, 10, 50);
  }

  return (
    <div className="container">
      <h1>Canvas Draw App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Enter your text:</p>
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></input>
        </label>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <div>
        <canvas
          ref={refContainer}
          className="canvas"
          style={{ width: "400px", height: "300px", backgroundColor: "white" }}
        ></canvas>
      </div>
    </div>
  );
};

export default Input;
