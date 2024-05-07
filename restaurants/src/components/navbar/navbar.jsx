import { useEffect, useState } from "react";
import "./navbar.css";

export function Navbar({ filterData, setfilterData, data }) {
  const [searchValue, setsearchValue] = useState("");
  const [searchRating, setsearchRating] = useState(0);

  function filterHandler() {
    let newArr = [...data];
    if (searchValue != "") {
      newArr = newArr.filter((el) =>
        el.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    if (searchRating > 0) {
      newArr = newArr.filter((el) => el.rating >= searchRating);
    }
    setfilterData(newArr);
  }
  useEffect(() => {
    filterHandler();
  }, [searchValue, searchRating]);
  return (
    <>
      <nav className="nav">
        <div className="nav">
          <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
          <h2 className="p">GeekFoods</h2>
        </div>
        <div className="support">
          <span className="p1">Home</span>
          <span>Quote</span>
          <span>Restaurants</span>
          <span>Foods</span>
          <span>Contacts</span>
        </div>
        <div>
          <button className="btn">Get Started</button>
        </div>
      </nav>
      <div className="data">
        <input
          value={searchValue}
          onChange={(e) => setsearchValue(e.target.value)}
          className="inputtext"
          type="text"
          placeholder="Search restaurants..."
        />
        <p>
          Minimum Rating:{" "}
          <input
            min={0}
            value={searchRating}
            onChange={(e) => setsearchRating(e.target.value)}
            className="number"
            type="number"
          />
        </p>
      </div>
    </>
  );
}
