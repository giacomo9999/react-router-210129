import { Link, Route } from "react-router-dom";
import Fruit from "./Fruit";

const FruitsList = (props) => {
  //   console.log("Fruits List Props: ", props);
  const fruitsData = [
    { id: 1, name: "Apple", color: "red" },
    { id: 2, name: "Banana", color: "yellow" },
    { id: 3, name: "Orange", color: "orange" },
  ];

  const fruitLinks = fruitsData.map((fruit) => (
    <li key={fruit.id}>
      <Link to={props.match.url + "/" + fruit.id}>{fruit.name}</Link>
    </li>
  ));

  return (
    <div className="container-outer">
      <h1>Fruits List</h1>
      <ul>{fruitLinks}</ul>
    </div>
  );
};

export default FruitsList;
