import React, { useState, useRef } from "react";
import "./Input.css";
const Input = () => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    draw(input);
  };

  const refContainer = useRef();

  function draw(val) {
    const canvas = refContainer.current;
    const ctx = canvas.getContext("2d");

    let dimension = canvas.getBoundingClientRect();
    console.log(dimension);

    canvas.width = dimension.width * devicePixelRatio;
    canvas.height = dimension.height * devicePixelRatio;

    ctx.scale(devicePixelRatio, devicePixelRatio);

    canvas.style.width = dimension.width + "px";
    canvas.style.height = dimension.height + "px";

    ctx.font = "3.8rem serif";
    ctx.fillText(val, 10, 50);
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
