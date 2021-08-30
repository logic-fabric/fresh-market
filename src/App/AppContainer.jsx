import { connect } from "react-redux";

import { App } from "./App";

const mapStateToProps = (state) => {
  return { articles: state.articles };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
