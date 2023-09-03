import "./App.css";
import { sum } from "@libs/utils";
import Root from "./Root";

function App() {

  console.log("import own package sum(1,2,3)", sum(1, 2, 3));

  return <Root />;
}

export default App;
