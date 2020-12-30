import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div className="branding">
            <a href="/">cashme</a>
          </div>
          <nav>
            <ul className="navigation">
              <li><a href="/cart">cart</a></li>
              <li><a href="/signin">sign in</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
        </main>
        <footer className="row center">
          Copyright &copy; cashme 2020. All rights reserved.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
