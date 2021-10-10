import logo from "./logo.svg";
import "./App.css";
import Header from "./compoents/Header";
import Conatin from "./compoents/Conatin";
import Middle from "./compoents/Middle";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="middle">
      <Middle />
      </div>
      <div className="actual_contain">
        <Conatin />
      </div>
    </div>
  );
}

export default App;
