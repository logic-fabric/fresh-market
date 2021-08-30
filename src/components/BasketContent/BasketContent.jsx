import { useSelector } from "react-redux";

export function BasketContent() {
  const articles = useSelector((state) => state.articles);

  if (articles.length === 0) {
    return (
      <p className="m-4 text-center text-2xl">Aucun article pour le moment</p>
    );
  }

  return (
    <table className="w-full">
      <thead>
        <tr className="block w-full">
          <th className="inline-block w-1/3 text-xl font-bold">produit</th>
          <th className="inline-block w-1/6 text-xl font-bold">prix</th>
          <th className="inline-block w-1/6 text-xl font-bold">quantité</th>
          <th className="inline-block w-1/6 text-xl font-bold">sous-total</th>
          <th className="inline-block w-1/6 text-neutral-600">
            retirer
            <br />
            du panier
          </th>
        </tr>
      </thead>

      <tbody>
        {articles.map((article) => (
          <BasketContentRow key={`row-${article.uuid}`} article={article} />
        ))}
      </tbody>
    </table>
  );
}

function BasketContentRow({ article }) {
  const calculateSubTotalPrice = () =>
    (article.quantity * article.product.price).toFixed(2);

  return (
    <tr className="flex w-full mt-2 rounded-sm bg-white">
      <td className="flex items-center w-1/3 px-3">
        <img
          src={`./img/${article.product.cat}/${article.product.img}`}
          alt={article.product.name}
          width="80"
          height="80"
        />
        <h3 className="pl-3 font-serif text-primary-600 text-2xl">
          {article.product.name}
        </h3>
      </td>

      <td className="flex items-center w-1/6 text-neutral-600">
        <div className="w-full text-center">
          {article.product.price.toString().replace(".", ",")}€&nbsp;/&nbsp;
          {article.product.unit}
        </div>
      </td>

      <td className="flex items-center w-1/6 text-xl">
        <div className="w-full text-center">
          <button
            className="fas fa-minus-square mx-2 text-secondary-700"
            type="button"
          ></button>

          <span className="inline-block w-3 text-center">
            {article.quantity}
          </span>

          <button
            className="fas fa-plus-square mx-2 text-secondary-700"
            type="button"
          ></button>
        </div>
      </td>

      <td className="flex items-center w-1/6 text-xl font-bold">
        <div className="w-full text-center">
          {calculateSubTotalPrice().toString().replace(".", ",")}&nbsp;€
        </div>
      </td>

      <td className="flex justify-center items-center w-1/6">
        <button
          className="far fa-times-circle text-danger-500 text-3xl"
          type="button"
        ></button>
      </td>
    </tr>
  );
}
