import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { BasketContent } from "../../components/BasketContent/BasketContent";
import { BasketSummary } from "../../components/BasketSummary/BasketSummary";

export function Basket() {
  const articles = useSelector((state) => state.articles);

  return (
    <main className="content-wrapper flex">
      <section className="w-3/4 my-3 ml-3 px-3 py-2 rounded-1 bg-neutral-100">
        <h1 className="mb-3 font-serif text-secondary-700 text-center text-3xl">
          mon panier
        </h1>

        <BasketContent articles={articles} />
      </section>

      <div className="w-1/4 mr-3 pl-4 py-3">
        <Link
          className="block relative m-auto px-3 py-1 mt-3 mb-4 rounded-3 text-white text-center text-lg font-medium bg-gradient-to-r from-tonic-700 to-tonic-600 transition-all duration-300 hover:shadow-lg hover:opacity-90 hover:transform hover:-translate-y-px"
          to="/"
        >
          ajouter un autre article
        </Link>

        <aside className="basket-summary-container w-full px-3 py-2 rounded-1 leading-7 bg-primary-100">
          <h2 className="mb-3 font-serif text-primary-800 text-center text-3xl">
            récapitulatif
          </h2>

          <BasketSummary articles={articles} />
        </aside>
      </div>
    </main>
  );
}
