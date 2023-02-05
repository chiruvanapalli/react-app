import './App.css';
import Context from './context/Context';
import Routing from './Routing'



function App() {

    return (
        <Context>
          <div className="App">
          <Routing />
        </div>
        </Context>
      );
}

export default App;
