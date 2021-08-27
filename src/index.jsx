import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Cart } from "./pages/Cart/Cart";
import { Home } from "./pages/Home/Home";
import { Header } from "./components/Header/Header";

import { PRODUCTS } from "./data/sample-data";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

const PRODUCTS_CATEGORIES = Object.keys(PRODUCTS).map((category) => {
  return {
    en: category,
    fr: PRODUCTS[category].frenchName,
    icon: PRODUCTS[category].fontAwesomeIcon,
  };
});

const productsCollections = [];

for (let category of Object.keys(PRODUCTS)) {
  productsCollections.push(PRODUCTS[category].items);
}

const PRODUCTS_LIST = productsCollections.flat();

function App() {
  const [activeCategory, setActiveCategory] = useState("fruits");
  const [isFilteringProducts, setIsFilteringProducts] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);

  const filterProducts = (searchInputValue) => {
    const filtered = PRODUCTS_LIST.filter((product) =>
      product.name.toLowerCase().includes(searchInputValue.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <Router>
      <Header
        filterProducts={filterProducts}
        setIsFilteringProducts={setIsFilteringProducts}
        cartCounter={cartCounter}
      />

      <Switch>
        <Route exact path="/">
          <Home
            products={PRODUCTS}
            categories={PRODUCTS_CATEGORIES}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            isFilteringProducts={isFilteringProducts}
            filteredProducts={filteredProducts}
            cartCounter={cartCounter}
            setCartCounter={setCartCounter}
          />
        </Route>
        <Route path="/mon-panier">
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
