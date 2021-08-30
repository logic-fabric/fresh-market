/* =============
 * ACTIONS TYPES
 * ============= */

export const ACTIONS = {
  ADD_ARTICLE_TO_BASKET: "ADD_ARTICLE_TO_BASKET",
  UPDATE_ARTICLE_QUANTITY: "UPDATE_ARTICLE_QUANTITY",
  REMOVE_ARTICLE_FROM_BASKET: "REMOVE_ARTICLE_FROM_BASKET",
};

/* ================
 * ACTIONS CREATORS
 * ================ */

const uuid = () => Math.random().toString(16).slice(2);

export function addArticleToBasket(product, quantity) {
  return {
    type: ACTIONS.ADD_ARTICLE_TO_BASKET,
    payload: {
      uuid: uuid(),
      product: product,
      quantity: quantity,
    },
  };
}

export function updateArticleQuantity(product, updatedQuantity) {
  return {
    type: ACTIONS.UPDATE_ARTICLE_QUANTITY,
    payload: {
      product: product,
      updatedQuantity: updatedQuantity,
    },
  };
}

export function removeArticleFromBasket(product) {
  return {
    type: ACTIONS.REMOVE_ARTICLE_FROM_BASKET,
    payload: product,
  };
}
