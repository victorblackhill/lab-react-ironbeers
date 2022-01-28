import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Beers() {
  const [list, setList] = React.useState([]);

  async function getBeers() {
    try {
      const res = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
      //console.log(theList.data)
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }
  async function fetchList() {
    try {
      setList(await getBeers());
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  console.log(list);

  return (
    <>
      <div className="fulllist">
        <div className="one-beer">
          {list.map((beer) => (
            <li key={beer._id}>{beer.name}</li>
          ))}
        </div>
      </div>
    </>
  );
}

export default Beers;
