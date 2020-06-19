import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./themes/theme.config";

import Routes from "./Components/Routes";

function App() {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
