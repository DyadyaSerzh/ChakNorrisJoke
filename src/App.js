import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import ChuckNorris from "./components/chuckNorris";
import Favorits from "./components/Favorits";
import JokeListBlock from "./components/JokeListBlock";
import Burger from "./components/Burger";
import Overlay from "./components/Overlay";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="leftCol">
          <div>
            <h3>MSI 2023</h3>
            <h1>Hey!</h1>
            <h3>Let’s try to find a joke for you:</h3>
          </div>
          
          <div >
            <ChuckNorris></ChuckNorris>
          </div>
          <JokeListBlock></JokeListBlock>
        </div>
        <div className="rightCol" >
          <Favorits></Favorits>
        </div>
        <Burger/>
        <Overlay/>
      </div>
    </Provider>
  );
}

export default App;
