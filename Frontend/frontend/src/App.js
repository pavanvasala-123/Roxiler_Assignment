import "./App.css";
import ChartExample from "./Components/Barchart";
import Statistics from "./Components/Statistics";
import Transactions from "./Components/Transactions";


function App() {
  return (
    <div className="App">
      <Transactions/>
      <Statistics/>
      <ChartExample/>
    </div>
  );
}

export default App;
