import React from "react";
import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import SearchSocio from "./components/SearchSocio";

function App() {
  return (
    <Provider store={store}>
      <SearchSocio />
    </Provider>
  );
}

export default App;
