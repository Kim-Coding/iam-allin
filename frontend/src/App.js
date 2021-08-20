import { Route, BrowserRouter } from "react-router-dom";
import Layout from "../src/layout/Layout";
import Home from "./pages/home";
import Create from "./pages/create";
import Numlist from "./pages/numlist";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route path="/" exact component={Home} />
        <PrivateRoute path="/Create" exact component={Create} />
        <PrivateRoute path="/Numlist" exact component={Numlist} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
