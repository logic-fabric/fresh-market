export function BasketContent() {
  return (
    <table className="w-full">
      <tr classname="block w-full">
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

      <BasketContentRow />
      <BasketContentRow />
      <BasketContentRow />
      <BasketContentRow />
    </table>
  );
}

function BasketContentRow() {
  return (
    <tr className="flex w-full mt-2 rounded-sm bg-white">
      <td className="flex items-center w-1/3 px-3">
        <img
          width="80"
          height="80"
          src={`./img/fruits/citrons.png`}
          alt="Citrons verts"
        />
        <h3 className="pl-4 font-serif text-primary-600 text-2xl">Citrons</h3>
      </td>

      <td className="flex items-center w-1/6 text-neutral-600">
        <div className="w-full text-center">0,99 € / pièce</div>
      </td>

      <td className="flex items-center w-1/6 text-xl">
        <div className="w-full text-center">
          <button
            className="fas fa-minus-square mx-2 text-secondary-700"
            type="button"
          ></button>

          <span className="inline-block w-3 text-center">2</span>

          <button
            className="fas fa-plus-square mx-2 text-secondary-700"
            type="button"
          ></button>
        </div>
      </td>

      <td className="flex items-center w-1/6 text-xl font-bold">
        <div className="w-full text-center">1,98 €</div>
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
