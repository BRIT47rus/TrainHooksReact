import "./App.css";
import { ListF } from "./Callback";

const items = [
  {id:1,name:'vova'},
  {id:2,name:'peta'},
  {id:3,name:'kata'},
  {id:4,name:'fa'},
  {id:5,name:'ej'},
]
function App() {
  return (
    <div>
<ListF items={items}/>
    </div>
  );
}

export default App;
