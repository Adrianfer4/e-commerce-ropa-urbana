import React from "react"; // Importamos react para crear componentes y renderizar la interfaz de usuario
import "./home.css"; // Estilos para la vista

//Definimos el componente funcional de React, para crear la vista Home
const Home = () => {
  const products = [
    { id: 1, name: "Camiseta Oversize", price: "$25", image: require("../assets/camiseta.jpg") },
    { id: 2, name: "Sudadera Streetwear", price: "$40", image: require("../assets/sudadera.jpg") },
    { id: 3, name: "Gorra Snapback", price: "$20", image: require("../assets/gorra.jpg") },
  ];

  return (
    <div className="home-container">
      <h1>Tienda de Ropa Urbana</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
