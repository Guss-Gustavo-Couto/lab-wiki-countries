import {useState, useEffect} from 'react';
import axios from 'axios';
// src/App.js
import './App.css';

//import Components
import Header from './Components/Header';
import CountryList from './Components/CountryList';
import CountryDetails from './Components/CountryDetails';

const apiURL = "https://ih-countries-api.herokuapp.com/countries";

function App() {
  
  const [fetching, setFetching] = useState(true);
  const [countries, setCountries] = useState([]);

  const getFromApi = async () => {
    try {
      const response = await axios.get(apiURL)
      setCountries(response.data)
      setFetching(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getFromApi()
  }, [])

return (
  <div className="App">
    <Header/>
   {App}
   <CountryList/>
  </div>
)
}

export default App;
