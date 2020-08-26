import React from "react";

import { Provider } from "react-redux";
import store from "./store";
import Catalog from "./components/Catalog";

function App() {
  return (
    <Provider store={store}>
      <h1>Hello World</h1>
      <Catalog />
    </Provider>
  );
}

export default App;
