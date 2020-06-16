import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Firebase, { FirebaseContext } from "./Components/Firebase";

ReactDOM.render(
  <StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>
  </StrictMode>,
  document.getElementById("root")
);
