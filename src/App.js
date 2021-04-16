import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/SidebarcontentProjectsection.css/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Wearerotary from "./components/SidebarcontentProjectsection.css/Wearerotary";
import Clubleaders from "./components/SidebarcontentProjectsection.css/Clubleaders";
import Presidentofrotaryclubofkaimosi from "./components/SidebarcontentProjectsection.css/Presidentofrotaryclubofkaimosi";
import Historyofrotaryclubofkaimosi from "./components/SidebarcontentProjectsection.css/Historyofrotaryclubofkaimosi";
import Historyofrotaryclubinkenya from "./components/SidebarcontentProjectsection.css/Historyofrotaryclubinkenya";
import Historyofrotaryclubinternational from "./components/SidebarcontentProjectsection.css/Historyofrotaryclubinternational";
import Stories from "./components/SidebarcontentProjectsection.css/Stories";
import Projectsection from "./components/SidebarcontentProjectsection.css/Projectsection";
import ContactUs from "./components/SidebarcontentProjectsection.css/ContactUs";

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
