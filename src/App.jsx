import './App.css';
import { Main } from "./components/Main";
import slides from "./data/CarouselData.json"

function App() {
  return (
    <div className="App">
        <Main data={slides.slides}/>
    </div>
  );
}

export default App;
