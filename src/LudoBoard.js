import React, { useState } from "react";

const LudoBoard = () => {
  let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });

  let updateBlue = () => {
    setMoves({ ...moves, blue: moves.blue + 1 });
  };

  let updateRed = () => {
    setMoves({ ...moves, red: moves.red + 1 });
  };

  let updateYellow = () => {
    setMoves({ ...moves, yellow: moves.yellow + 1 });
  };
  let updateGreen = () => {
    setMoves({ ...moves, green: moves.green + 1 });
  };

  return (
    <div>
      <h1 style={{ margin: "50px" }}>Game Begin!</h1>
      <div className="board">
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>
          Blue moves ={moves.blue}
        </p>
        <button
          style={{
            backgroundColor: "blue",
            width: "8rem",
            height: "2.5em",
            color: "white",
            fontSize: "15px",
            fontWeight: "bold",
            borderRadius: "50px",
          }}
          onClick={updateBlue}
        >
          +1
        </button>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>
          Red moves ={moves.red}
        </p>
        <button
          style={{
            backgroundColor: "red",
            width: "8rem",
            height: "2.5em",
            color: "white",
            fontSize: "15px",
            fontWeight: "bold",
            borderRadius: "50px",
          }}
          onClick={updateRed}
        >
          +1
        </button>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>
          Yellow moves ={moves.yellow}
        </p>
        <button
          style={{
            backgroundColor: "yellow",
            width: "8rem",
            height: "2.5em",
            color: "Black",
            fontSize: "15px",
            fontWeight: "bold",
            borderRadius: "50px",
          }}
          onClick={updateYellow}
        >
          +1
        </button>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>
          Green moves ={moves.green}
        </p>
        <button
          style={{
            backgroundColor: "green",
            width: "8rem",
            height: "2.5em",
            color: "white",
            fontSize: "15px",
            fontWeight: "bold",
            borderRadius: "50px",
          }}
          onClick={updateGreen}
        >
          +1
        </button>
      </div>
    </div>
  );
};

export default LudoBoard;
