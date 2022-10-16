import "./styles.css";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Wishlist from "./components/Wishlist";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <main className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Routes>
      </main>
    </Provider>
  );
}

export default App;
