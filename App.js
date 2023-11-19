import React from "react";
import ReactDOM from "react-dom";

// React Element

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);

const HeadingComponent = () => (
  <div class="container">
    <Title />
    <h1 className="heading">Heading</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
