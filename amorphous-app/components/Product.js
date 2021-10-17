export default function Product(props) {
  const {
    name,
    price,
    // ...
  } = props;
  const testMe = () => {
    console.log("I was tested");
  };
  return (
    <div onClick={() => testMe()}>
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
}
