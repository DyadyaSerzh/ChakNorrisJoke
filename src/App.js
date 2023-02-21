import './App.css';
import {Provider} from 'react-redux'
import store from './store';
import Counter from './components/counter';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Counter></Counter>
        Hello
      </div>
    </Provider>
  );
}

export default App;
