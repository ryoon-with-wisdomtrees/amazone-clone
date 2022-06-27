import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Routes>
          <Route path="/login" element={<Login />}></Route>
        </Routes> */}
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/checkout"
            element={
              <Checkout>
                <Header />
              </Checkout>
            }
          ></Route>
          <Route
            path="/"
            element={
              <Home>
                <Header />
              </Home>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
