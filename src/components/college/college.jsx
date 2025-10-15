import React from "react";

class College extends React.Component {
  constructor() {
    super();
    this.state = {
      x: 100,
      name: "George Brown College, Toronto"
    };
  }
  render() {
    return <h5>George Brown College, Toronto</h5>;
  }
}

export default College;
