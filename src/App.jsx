import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Beers from "./pages/Beers";
import Header from "./components/Header";
import OneBeer from "./pages/OneBeer";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Header />}>
          <Route index element={<Beers />} />
          <Route path="random" element={<RandomBeer />} />
          <Route path="new" element={<NewBeer />} />
          <Route path=":id" element={<OneBeer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
