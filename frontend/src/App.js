import React from 'react';
import data from './data';
import Product from './components/Product';

function App() {

  function toggleText() {
    var text = document.getElementById("demo");
    if (text.style.opacity === "1") {
      text.style.display = "block";
      text.style.opacity = 0.1;
    } else {
      // text.style.display = "none";
      text.style.opacity = 1;
    }
  }

  setInterval(() => {
    toggleText()
  }, 500);


  return (
    <div className="grid-container">
      <div id="membership">
        <h4 id='demo'>Avail Lifetime Free Shipping {toggleText}<a href="signin.html">Join Now</a></h4>
      </div>
      <header className="row">
        <div>
          <a className="brand" href="/">
            Spice To Sugar
          </a>
        </div>
        <div>
          <p><a href="/cart">Cart</a>
          <a href="/signin">Sign In</a></p>
        </div>
      </header>
      <main>
        <div>
          <div className="row center">
            {data.products.map((product) => (
              <Product key={product._id} product={product}>
              </Product>
            ))}
          </div>
        </div>
      </main>
      <footer className="row center">All rights reserved</footer>
    </div>

  );
}

export default App;