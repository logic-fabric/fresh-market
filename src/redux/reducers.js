import { ACTIONS } from "./actions.js";

const initialState = {
  articles: [],
};

function updateArticle(article, updatedQuantity) {
  return Object.assign({}, article, {
    quantity: updatedQuantity,
  });
}

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

    default:
      return state;
  }
}
