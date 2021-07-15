import { useState } from "react";

function AddItem(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const [displayType, setDisplayType] = useState("");

  const addItemButtonPressed = () => {
    props.addItem({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <h2>Add a Item</h2>
      </div>

      <div className="row">
        <label for="name-field">Name: </label>
        <input
          className="form-control"
          id="name-field"
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label for="price-field">Price</label>
        <input
          className="form-control"
          id="price-field"
          value={price}
          type="number"
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <label for="type-field">Type: </label>
        <input
          className="form-control"
          id="type-field"
          value={type}
          type="text"
          onChange={(e) => setType(e.target.value)}
        ></input>
        <label for="brand-field">Brand</label>
        <input
          className="form-control"
          className="form-control"
          id="brand-field"
          value={brand}
          type="text"
          onChange={(e) => setBrand(e.target.value)}
        ></input>
      </div>

      <div className="row">
        <button
          type="button"
          className="mt-3 btn btn-secondary"
          onClick={addItemButtonPressed}
        >
          Add Item
        </button>
      </div>
    </div>
  );
}

export default AddItem;
