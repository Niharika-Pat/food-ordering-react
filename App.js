const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h2", {}, "Hello React"),
    React.createElement("h2", {}, "Hello React2"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
