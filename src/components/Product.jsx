// src/Product.jsx

export default function Product({ name, imgUrl, price }) {
  const test = 'test';
  return (
    <div>
      <h2>{name}</h2>
      <h2>{test}</h2>
      <img src={imgUrl} alt={name} width="480" />
      <p>Price: {price} credits</p>
    </div>
  );
};
