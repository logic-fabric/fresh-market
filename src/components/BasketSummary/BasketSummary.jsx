import { Link } from "react-router-dom";

import "./BasketSummary.css";

export function BasketSummary({ articles }) {
  const calculateSubTotal = () => {
    return articles.reduce(
      (subTotal, article) =>
        subTotal + article.quantity * article.product.price,
      0
    );
  };

  const calculateTotal = () => calculateSubTotal() + deliveryCost;

  const subTotal = calculateSubTotal();
  const deliveryCost = subTotal > 0 ? 9 : 0;
  const total = calculateTotal();

  return (
    <div className="basket-summary-container">
      <ul>
        <li className="flex justify-between">
          <span className="font-bold">articles</span>
          <span>{subTotal.toFixed(2).replace(".", ",")}&nbsp;€</span>
        </li>

        <li className="flex justify-between">
          <span className="font-bold">livraison</span>
          <span>{deliveryCost.toFixed(2).replace(".", ",")}&nbsp;€</span>
        </li>

        <li className="my-2 text-center text-sm text-tonic-700 cursor-pointer">
          <span className="underline">j'ai un code promo</span>&nbsp;!
        </li>

        <li className="flex justify-between my-3 text-xl font-bold">
          <span>total</span>
          <span>{total.toFixed(2).replace(".", ",")}&nbsp;€</span>
        </li>
      </ul>

      <Link
        className={
          total > 0
            ? "block w-full m-auto px-3 py-1 my-2 rounded-3 text-white text-center text-lg font-medium bg-gradient-to-r from-tonic-700 to-tonic-600 transition-all duration-300 hover:shadow-lg hover:opacity-90 hover:transform hover:-translate-y-px"
            : "block w-full m-auto px-3 py-1 my-2 rounded-3 text-white text-center text-lg font-medium bg-neutral-400"
        }
        to={total > 0 ? "/passer-commande" : "mon-panier"}
      >
        passer commande
      </Link>
    </div>
  );
}
