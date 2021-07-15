import React from "react";
const title = "Inventory";
const showTitle = 1;

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      title: "",
    };
  }

  buttonPressed() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    const title = this.props.title;
    return (
      <div>
        <h1>{showTitle ? title : ""}</h1>
        <p>Manage your inventory.</p>
        <p>Info Count: {this.state.count}</p>
        <button onClick={() => this.buttonPressed()}>Update Info Count</button>
      </div>
    );
  }
}

Info.defaultProps = {
  title: "Default Title",
};


export default Info;
