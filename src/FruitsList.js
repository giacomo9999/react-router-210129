import { Link } from "react-router-dom";

const FruitsList = (props) => {
  console.log("Fruits List Props: ", props);

  const fruitLinks = props.fruitsData.map((fruit) => (
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
