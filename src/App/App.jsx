import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Basket } from "../pages/Basket/Basket";
import { Home } from "../pages/Home/Home";
import { Header } from "../components/Header/Header";

import { PRODUCTS } from "../data/sample-data";

// Data preparation:
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

// App component:
export function App(props) {
  const { onAddArticleToBasket, onUpdateArticleQuantity } = props;

  const [activeCategory, setActiveCategory] = useState("fruits");
  const [isFilteringProducts, setIsFilteringProducts] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [basketCounter, setBasketCounter] = useState(0);

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
        basketCounter={basketCounter}
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
            basketCounter={basketCounter}
            setBasketCounter={setBasketCounter}
            onAddArticleToBasket={onAddArticleToBasket}
            onUpdateArticleQuantity={onUpdateArticleQuantity}
          />
        </Route>
        <Route path="/mon-panier">
          <Basket />
        </Route>
      </Switch>
    </Router>
  );
}
