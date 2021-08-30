import { ACTIONS } from "./actions.js";

function updateArticle(article, updatedQuantity) {
  return Object.assign({}, article, {
    quantity: updatedQuantity,
  });
}

function saveToLocalStorage(articles) {
  localStorage.setItem("articlesInBasket", JSON.stringify(articles));
}

function loadFromLocalStorage() {
  const articlesInLocalStorage = JSON.parse(
    localStorage.getItem("articlesInBasket")
  );

  return articlesInLocalStorage ? articlesInLocalStorage : [];
}

const initialState = {
  articles: loadFromLocalStorage(),
};

export function basketReducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case ACTIONS.ADD_ARTICLE_TO_BASKET:
      newState = Object.assign({}, state, {
        articles: [...state.articles, action.payload],
      });

      return newState;

    case ACTIONS.UPDATE_ARTICLE_QUANTITY:
      const updatedArticles = state.articles.map((article) =>
        article.id === action.payload.id
          ? updateArticle(article, action.payload.updatedQuantity)
          : article
      );

      newState = Object.assign({}, state, { articles: updatedArticles });

      return newState;

    case ACTIONS.REMOVE_ARTICLE_FROM_BASKET:
      const remainingArticles = state.articles.filter(
        (article) => article.id !== action.payload.id
      );

      newState = Object.assign({}, state, { articles: remainingArticles });

      return newState;

    case ACTIONS.SAVE_BASKET:
      saveToLocalStorage(action.payload.articles);

      return state;

    default:
      return state;
  }
}
