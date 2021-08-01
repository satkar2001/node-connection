import logo from './logo.svg';
import './App.css';
import axios from 'axios';
function App() {
  function getdatafromNode(){
      axios.get('/players')
       .then(res=>console.log(res))
       .catch(err=>console.log(err))
  }
  return (
    <div className="App">
      <h1>hfiifhos</h1>
      <button onClick={getdatafromNode}>get data from back</button>
    </div>
  );
}

export default App;
