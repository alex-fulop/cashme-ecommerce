import React from "react";
import data from "./data";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div className="branding">
          <a href="index.html">cashme</a>
        </div>
        <nav>
          <ul className="navigation">
            <li><a href="cart.html">cart</a></li>
            <li><a href="signin.html">sign in</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="row center">
          {
            data.products.map((product) => (
              <div key={product._id} className="card">
                <a href={`/product/${product._id}`}>
                  <img className="medium" src={product.image} alt="product"></img>
                </a>
                <div className="card-body">
                  <a href={`/product/${product._id}`}>
                    <h2 className="upper-case">{product.name}</h2>
                  </a>
                </div>
                <div className="rating">
                  <span><i className="fa fa-star"></i></span>
                  <span><i className="fa fa-star"></i></span>
                  <span><i className="fa fa-star"></i></span>
                  <span><i className="fa fa-star"></i></span>
                  <span><i className="fa fa-star"></i></span>
                </div>
                <div className="price">{product.price}$</div>
              </div>
            ))
          }
        </div>
      </main>
      <footer className="row center">
        Copyright &copy; cashme 2020. All rights reserved.
        </footer>
    </div>
  );
}

export default App;
