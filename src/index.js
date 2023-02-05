import React from "react";
import ReactDOM from "react-dom";

const name = "Nikhil";
const date = new Date();
const currentTime = date.getHours();

let greeting;

const customStyle = {
  color: ""
};
if (currentTime < 12) {
  greeting = "Good Moring";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "blue";
} else {
  greeting = "Good night";
  customStyle.color = "yellow";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    Hello {name} {greeting}
  </h1>,
  document.getElementById("root")
);
