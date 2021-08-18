import { Router, BrowserRouter} from "react-router-dom";
import Home from "./pages/home";
import Create from "./pages/create";
import Numlist from "./pages/numlist";

function App() {
  return (
    <BrowserRouter>
      <Router path='/' exact component={Home}/>
      <Router path='/Create' exact component={Create}/>
      <Router path='/Numlist' exact component={Numlist}/>
    </BrowserRouter>
  );
}

export default App;