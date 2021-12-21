import React from "react";
import { Provider } from "react-redux";
import Header from "./components/Header";
import store from "./store";

if (__DEV__) {
  import("./ReactotronConfig");
}

// navigation
import MainNavigator from "./navigation";

export default function App() {
  return (
    <Provider store={store}>
      <Header title="EcoTu" />
      <MainNavigator />
    </Provider>
  );
}
