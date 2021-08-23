import { Route, BrowserRouter } from "react-router-dom";
import Layout from "../src/layout/Layout";
import Home from "./pages/home";
import Create from "./pages/create";
import Numlist from "./pages/numlist";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route path="/" exact component={Home} />
        <Route path="/Create" exact component={Create} />
        <Route path="/Numlist" exact component={Numlist} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
