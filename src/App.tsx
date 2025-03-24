import "./App.css";
import { TestCastomHooks } from "./CastomHoks/TestCastomHooks";
function App() {
  return (
    <div className="App">
    <TestCastomHooks />
    <TestCastomHooks delta={5} initialState={10}/>
    </div>
  );
}

export default App;
