import React, { useState } from "react";
import axios from "axios";

import Products from "./Products";

function FoodRecipee() {
  const [search, setSearch] = useState("");
  const [data, setdata] = useState([]);
  const YOUR_APP_ID = "dbad24a9	";
  const YOUR_APP_KEY = "85b68bd699458668db9623cfe5cb04af";
  const clickHandler = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`
      )
      .then((res) => setdata(res.data.hits));
  };

  return (
    <div>
      <center>
        <h4>Food Recipe App</h4>
        <form onSubmit={clickHandler}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />{" "}
          <br />
          <input type="submit" className="btn btn-primary" value="Search" />
        </form>
        {data.length >= 1 ? <Products data={data} /> : null}
      </center>
    </div>
  );
}

export default FoodRecipee;
