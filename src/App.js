import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Wearerotary from "./components/pages/Wearerotary";
import Clubleaders from "./components/pages/Clubleaders";
import Presidentofrotaryclubofkaimosi from "./components/pages/Presidentofrotaryclubofkaimosi";
import Historyofrotaryclubofkaimosi from "./components/pages/Historyofrotaryclubofkaimosi";
import Historyofrotaryclubinkenya from "./components/pages/Historyofrotaryclubinkenya";
import Historyofrotaryclubinternational from "./components/pages/Historyofrotaryclubinternational";
import Stories from "./components/pages/Stories";
import Projectsection from "./components/pages/Projectsection";
import ContactUs from "./components/pages/ContactUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/wearerotary" component={Wearerotary} />
        <Route path="/clubleaders" component={Clubleaders} />
        <Route
          path="/presidentofrotaryclubofkaimosi"
          component={Presidentofrotaryclubofkaimosi}
        />
        <Route
          path="/historyofrotaryclubofkaimosi"
          component={Historyofrotaryclubofkaimosi}
        />
        <Route
          path="/historyofrotaryclubinkenya"
          component={Historyofrotaryclubinkenya}
        />
        <Route
          path="/historyofrotaryclubinternational"
          component={Historyofrotaryclubinternational}
        />
        <Route path="/stories" component={Stories} />
        <Route path="/projectsection" component={Projectsection} />
        <Route path="/contact-us" component={ContactUs} />
      </Switch>
    </Router>
  );
}

export default App;
