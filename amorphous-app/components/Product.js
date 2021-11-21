export default function Product(props) {
  const {
    name,
    price,
    // ...
  } = props;
  const testMe = () => {
    console.log("I was tested again");
  };
  return (
    <div onClick={() => testMe()}>
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
}
