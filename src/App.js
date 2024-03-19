import Home from "./pages/Home";
import Checkout from "../src/pages/Checkout";
import About from "../src/pages/About";

import { Provider } from "react-redux";
import store from "./redux/store";
import Layout from "./Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Layout />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
{
  /* <div className="App">
  <Home />
</div>; */
}
