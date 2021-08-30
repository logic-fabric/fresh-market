import { connect } from "react-redux";

import { saveBasket } from "../redux/actions";
import { App } from "./App";

const mapStateToProps = (state) => {
  return { articles: state.articles };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveBasket: (articles) => dispatch(saveBasket(articles)),
  };
};

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
