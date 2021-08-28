export function BasketSummary() {
  return (
    <div className="basket-summary-container">
      <ul>
        <li className="flex justify-between">
          <span className="font-bold">articles</span>
          <span>0,00&nbsp;€</span>
        </li>

        <li className="flex justify-between">
          <span className="font-bold">livraison</span>
          <span>0,00&nbsp;€</span>
        </li>

        <li className="my-2 text-center text-sm text-tonic-700 cursor-pointer">
          <span className="underline">j'ai un code promo</span>&nbsp;!
        </li>

        <li className="flex justify-between my-3 text-xl">
          <span className="font-bold">total</span>
          <span>0,00&nbsp;€</span>
        </li>
      </ul>

      <button
        className="w-full m-auto px-3 py-1 my-2 rounded-3 text-white text-lg font-medium bg-gradient-to-r from-tonic-700 to-tonic-600 transition-all duration-300 hover:shadow-lg hover:opacity-90 hover:transform hover:-translate-y-px"
        type="button"
      >
        passer commande
      </button>
    </div>
  );
}
