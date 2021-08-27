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
  cartCounter,
  setCartCounter,
}) {
  const productsToDisplay = products[activeCategory].items;

  return (
    <main className="content-wrapper grid grid-cols-4">
      <aside className="px-4 py-3">
        <SecondaryNav
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          isFilteringProducts={isFilteringProducts}
        />
      </aside>

      <div className="col-span-3 my-3">
        <Gallery
          products={isFilteringProducts ? filteredProducts : productsToDisplay}
          activeCategory={activeCategory}
          cartCounter={cartCounter}
          setCartCounter={setCartCounter}
        />
      </div>
    </main>
  );
}
