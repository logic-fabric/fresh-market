import { connect } from "react-redux";

import { App } from "./App";
import { addArticleToBasket, updateArticleQuantity } from "../redux/actions";

const mapStateToProps = (state) => {
  return { articles: state.articles };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddArticleToBasket: (article, quantity) =>
      dispatch(addArticleToBasket(article, quantity)),
    onUpdateArticleQuantity: (article, quantity) =>
      updateArticleQuantity(article, quantity),
  };
};

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
