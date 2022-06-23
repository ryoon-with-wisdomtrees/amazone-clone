import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      {/** 필요한 대분류 컴포넌트들 적어놓고 만들고 나면 remove out */}
      <Header />
      <Home />
      {/** Body */}
    </div>
  );
}

export default App;
