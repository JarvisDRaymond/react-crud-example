import { useState } from "react";

function SearchBar(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const [displayType, setDisplayType] = useState("");

  const searchButtonPressed = () => {
    setDisplayType("show");
    console.log(name);
    console.log(price);
    console.log(type);
    console.log(brand);
    props.updateSearchParams({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });
  };

  return (
    <div className="container">
      <div clasName="row">
        <h2>Search for an Item</h2>
      </div>
      <div className="row">
        <div className="col">
          <label for="name-field">Name: </label>
          <input
            className="form-control"
            className="form-control"
            id="name-field"
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="col">
          <label for="price-field">Price</label>
          <input
            className="form-control"
            className="form-control"
            className="form-control"
            id="price-field"
            value={price}
            type="number"
            onChange={(e) => setPrice(e.target.value)}
          ></input>
        </div>

        <div className="col">
          <label for="type-field">Type: </label>
          <input
            className="form-control"
            className="form-control"
            className="form-control"
            id="type-field"
            value={type}
            type="text"
            onChange={(e) => setType(e.target.value)}
          ></input>
        </div>

        <div className="col">
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
      </div>
      <div className="row mt-3">
        <div className="col-4" />
        <button
          className="col-4 btn btn-primary"
          type="button"
          onClick={searchButtonPressed}
        >
          Search
        </button>
      </div>

      <div className={displayType}>
        <p>Name: {name}</p>
        <p>Price: {price}</p>
        <p>Type: {type}</p>
        <p>Brand: {brand}</p>
      </div>
    </div>
  );
}

export default SearchBar;
