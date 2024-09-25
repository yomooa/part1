import React from "react";

import Part from "./Part";

const part1 = "Fundamentals of React";
const exercises1 = 10;
const part2 = "Using props to pass data";
const exercises2 = 7;
const part3 = "State of a component";
const exercises3 = 14;

const Content = (props) => {
  return (
    <div>
      <p>
        <Part part={part1} exercises={exercises1} />
      </p>
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    </div>
  );
};

export const Suma = () => {
  const suma = exercises1 + exercises2 + exercises3;

  return <p>Number of exercises {suma}</p>;
};

export default Content;
