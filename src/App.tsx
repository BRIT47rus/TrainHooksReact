import "./App.css";
import { TestChangesProps } from "./CastomHooks";

// const items = [
//   {id:1,name:'vova'},
//   {id:2,name:'peta'},
//   {id:3,name:'kata'},
//   {id:4,name:'fa'},
//   {id:5,name:'ej'},
// ]
function App() {
  return (
    <div>
      <TestChangesProps initcount={0} inittext="Нет текста" />
    </div>
  );
}

export default App;
