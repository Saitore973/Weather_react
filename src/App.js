import Weather from './Weather';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className="container">
      
      <h1>Weather App</h1>

       <Weather defaultCity={"Lisbon"}/>

    </div>
    
  )
}

export default App;
