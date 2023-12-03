import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("First thing to be called");
    this.state = {
      count: 0,
      count1: 1,
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Niharika-pat");
    const json = data.json;
    console.log(json);
  }

  componentDidUpdate() {
    console.log(
      "After the api call, setState setting new value and rerender happens and DOm is updated"
    );
  }

  componentWillUnmount() {
    console.log("When component is removed from DOM");
  }

  render() {
    console.log("After constructor is called");
    return (
      <div className="user-card">
        <h3>Count: {this.state.count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Click
        </button>
        <h3>{this.props.name}</h3>
        <h3>Location - Gurgaon1</h3>
      </div>
    );
  }
}

export default UserClass;
