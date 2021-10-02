import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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
}) {
  const basketCounter = useSelector((state) => state.articles.length);

  const productsToDisplay = products[activeCategory].items;

  return (
    <main className="content-wrapper flex">
      <div className="w-3/4 my-3 ml-3">
        <Gallery
          products={isFilteringProducts ? filteredProducts : productsToDisplay}
          activeCategory={activeCategory}
        />
      </div>

      <aside className="w-1/4 mr-3 pl-4 py-3">
        <Link
          className={
            basketCounter > 0
              ? "block relative w-full m-auto px-3 py-1 mt-3 mb-4 rounded-3 text-white text-center text-lg font-medium bg-gradient-to-r from-tonic-700 to-tonic-600 transition-all duration-300 hover:shadow-lg hover:opacity-90 hover:transform hover:-translate-y-px"
              : "block relative w-full m-auto px-3 py-1 mt-3 mb-4 rounded-3 text-white text-center text-lg font-medium bg-neutral-400 cursor-default"
          }
          to={basketCounter > 0 ? "/mon-panier" : "/"}
        >
          voir mon panier
          {basketCounter > 0 ? (
            <span className="basket-counter--home font-sans bg-gradient-to-r from-danger-500 to-danger-400">
              {basketCounter}
            </span>
          ) : (
            ""
          )}
        </Link>

        <SecondaryNav
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          isFilteringProducts={isFilteringProducts}
        />
      </aside>
    </main>
  );
}
