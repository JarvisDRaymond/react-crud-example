import React from "react";

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("This fires as soon as the component renders");
  }
  componentWillUnmount() {
    console.log("This fires before component is destroyed");
  }
  componentDidUpdate() {
    console.log("This fires as soon as the component updates");
  }
  clickedButton() {
    this.setState({ count: this.state.count + 1 });
    console.log("clicked");
    this.props.shown(false);
  }

  render() {
    return (
      <div>
        <p>Click Count: {this.state.count}</p>
        <button
          onClick={() => this.clickedButton()}
          className="btn btn-primary"
        >
          Click me!
        </button>
      </div>
    );
  }
}
