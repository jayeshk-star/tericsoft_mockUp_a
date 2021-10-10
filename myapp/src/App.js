import logo from "./logo.svg";
import "./App.css";
import Header from "./compoents/Header";
import Conatin from "./compoents/Conatin";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="middle">

      </div>
      <div className="actual_contain">
        <Conatin />
      </div>
    </div>
  );
}

export default App;
