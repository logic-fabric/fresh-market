import { useState } from "react";

import { SecondaryNav } from "./components/SecondaryNav/SecondaryNav";
import { Gallery } from "./components/Gallery/Gallery";
import { Header } from "./components/Header/Header";
import "./App.css";

import { PRODUCTS } from "./data/sample-data";

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

  const productsToDisplay = PRODUCTS[activeCategory].items;

  const filterProducts = (searchInputValue) => {
    return PRODUCTS_LIST.filter((product) =>
      product.name.toLowerCase().includes(searchInputValue.toLowerCase())
    );
  };

  return (
    <div>
      <Header filterProducts={filterProducts} />

      <main className="content-wrapper grid grid-cols-4">
        <aside className="px-4 py-3">
          <SecondaryNav
            categories={PRODUCTS_CATEGORIES}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </aside>

        <div className="col-span-3 h-6 my-3">
          <Gallery
            products={productsToDisplay}
            activeCategory={activeCategory}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
