import React, { Suspense } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import CoinPage from "./components/CoinPage";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <Suspense fallback={<Loading styled />}>
      <Router>
        <Layout>
          <NavBar />
          <Switch>
            <Route path="/" exact children={<Home />} />
            <Route path="/coins/:id" exact children={<CoinPage />} />
          </Switch>
          <Footer />
        </Layout>
      </Router>
    </Suspense>
  );
}

export default App;
