import styles from "./App.module.css";
import Info from "./Info.js";
import SearchBar from "./SearchBar.js";
import AddItem from "./AddItem.js";
import ItemsDisplay from "./ItemsDisplay.js";
import Test from "./Test.js";

import PropTypes from "prop-types";
import { useState } from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: aliceblue;
  background: black;
  width: 100%;
  display: block;
`;

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });
  const [showTest, setShowTest] = useState(true);

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const addItemToData = (item) => {
    let items = data["items"];
    item.id = items.length;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    };
    fetch("http://localhost:3000/items", requestOptions)
      .then((response) => response.json())
      .then(items.push(item), setData({ items: items }));
    console.log(data);
  };
  const filterData = (data) => {
    const filteredData = [];
    if (!filters.name) {
      return data;
    }
    for (const item of data) {
      if (filters.name !== "" && item.name !== filters.name) {
        continue;
      } else if (filters.price !== "" && item.price !== filters.price) {
        continue;
      } else if (filters.price !== "" && item.price !== filters.price) {
        continue;
      } else if (filters.type !== "" && item.type !== filters.type) {
        continue;
      } else if (filters.brand !== "" && item.brand !== filters.brand) {
        continue;
      } else {
        filteredData.push(item);
      }
    }
    return filteredData;
  };

  return (
    <div className="App">
      <div className="container">
        <Title>App JS</Title>
        <marquee className={styles.blue}>App JS</marquee>
        <div className="row  mt-2">
          <ItemsDisplay items={filterData(data["items"])} />
        </div>
        <div className="row mt-2">
          <SearchBar updateSearchParams={updateFilters}></SearchBar>
        </div>
        <div className="row  mt-5">
          <AddItem addItem={addItemToData} />
        </div>
        {showTest ? <Test shown={setShowTest} /> : null}
        <br /> <br /> <br /> <br /> <br />
        <Info title="Inventory" />
        <ButtonState />
        <AddInlineItem text="Tim" number={2} />
        <AddInlineItem text="John" number={3} />
        <AddInlineItem addItem={addItemToData} />
      </div>
    </div>
  );
}

// New Functional Component
function ButtonState() {
  // useState: when defining the first var is var for the state,
  // the second is the function used to update the var
  // inside of useState you define the default state
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);

  const updateTitleClicked = () => {
    setTitle("We now have a title!");
  };
  const updateCounterClicked = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Title: {title} </p>
      <p>Counter: {count}</p>
      {/* Different, functional approach of doing the above: */}
      <Data title={title} count={count} />
      {/* Pass the function you want called in onClick */}
      <button onClick={updateTitleClicked}>Update Title</button>
      <button onClick={updateCounterClicked}>Update Count</button>
    </div>
  );
}

// Add Inline item: demonstrates adding and default properties

function AddInlineItem({ text, number }) {
  const value = "default";
  return (
    <>
      <h2>Add Inline Item </h2>
      <form>
        <label for="text-form">Add something: </label>
        <p>ID Number: {number}</p>
        <input id="text-form" value={text} type="text"></input>
      </form>
    </>
  );
}

AddInlineItem.defaultProps = {
  number: 0,
  text: "Placeholder",
};
AddInlineItem.propTypes = {
  number: PropTypes.number,
  text: PropTypes.string,
};

function Data(props) {
  return (
    <div>
      <p>Data Title: {props.title}</p>
      <p>Data Count: {props.count}</p>
    </div>
  );
}

export default App;
