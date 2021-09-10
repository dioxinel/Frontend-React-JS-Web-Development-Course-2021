
import './index.css'
import { rotesConfig } from "./rotesConfig";
import { RotesGenerator } from "./RotesGenerator";


function App() {
  return (
    <RotesGenerator config={rotesConfig} />
  );
}

export default App;
