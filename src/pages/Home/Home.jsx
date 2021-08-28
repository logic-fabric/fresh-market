import { SecondaryNav } from "../../components/SecondaryNav/SecondaryNav";
import { Gallery } from "../../components/Gallery/Gallery";

import "./Home.css";

export function Home({
  products,
  categories,
  activeCategory,
  setActiveCategory,
  isFilteringProducts,
  filteredProducts,
  basketCounter,
  setBasketCounter,
}) {
  const productsToDisplay = products[activeCategory].items;

  return (
    <main className="content-wrapper flex">
      <aside className="w-1/4 px-4 py-3">
        <SecondaryNav
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          isFilteringProducts={isFilteringProducts}
        />
      </aside>

      <div className="w-3/4 my-3">
        <Gallery
          products={isFilteringProducts ? filteredProducts : productsToDisplay}
          activeCategory={activeCategory}
          basketCounter={basketCounter}
          setBasketCounter={setBasketCounter}
        />
      </div>
    </main>
  );
}
