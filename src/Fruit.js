const Fruit = (props) => {
  console.log("Fruit props:", props);
  return (
    <div className="container-inner">
      <h1>{props.name}</h1>
      <h2>{props.match.params.fruitId}</h2>
      <h2>{props.color}</h2>
    </div>
  );
};

export default Fruit;
