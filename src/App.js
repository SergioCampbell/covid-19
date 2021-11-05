import axios from 'axios';
import React, {useState, useEffect} from 'react'

import './App.css';

export default function App() {

  const [country, setCountry] = useState([{country:''}])
  const [location, setLocation] = useState([])
  const [total, setTotal] = useState([]) 

  //api name
    const global = 'https://covid-api.mmediagroup.fr/v1/cases?country=Global'

    const byCountry = `https://covid-api.mmediagroup.fr/v1/cases?country=${country.country}`

    //Make petition to api
    useEffect(() =>{
        axios.get(global)
        .then((res)=> {
          //console.log(res)
          setTotal(res.data.All)
        })
        .catch((err) => {
          console.log(err)})
    }, [])

    useEffect(() =>{
      axios.get(byCountry)
      .then((res)=> {
        //console.log(res)
        setLocation(res.data.All)
      })
      .catch((err) => {
        console.log(err)})
    }, [byCountry])
    
    //get value from select area or input area
      const countryHandler = (e) => {
        //console.log(e.target.value)
        setCountry({
          ...country.name,
          [e.target.name] : e.target.value
        })
      }

      const sendQuery = (e) => {
        //e.preventDefault()
        //console.log(country.name)
      }


  return (
    <div className="App container mt-3 mb-5 bg-dark">
      <h1>World Covid-19 data</h1>

        <h2>Global data</h2>
        <table
        className="table table-dark table-bordered table-responsive-sm">
          <thead className="table-active">
            <tr>
            <th scope="col">Confirmed</th>
            <th scope="col">Deaths</th>
            <th scope="col">Population</th>
            </tr>
          </thead>
          <tbody>
          <tr>
          <td>{ total.confirmed }</td>
          <td>{ total.deaths }</td>
          <td>{ total.population }</td>
          </tr>
          </tbody>          
        </table>
        <hr/>

        <form className="form-group" onSubmit={sendQuery}>
          <p>Select your country here</p>
          <input type="text"
            name="country"
            value={ country.name }
            onChange={countryHandler}
          />
          <input type="submit" value="Search" onClick={() => countryHandler()}/>
          <br/>
        </form>
        
        <h2>By Country</h2>
       
       {country.name ? 
        <table  loading="lazy"
         className="table table-dark table-bordered table-responsive">
          <thead className="table-active">
        <h2>{country.name} data</h2>
            <tr>
            <th scope="col">Continent</th>
            <th scope="col">Country area</th>
            <th scope="col">Population</th>
            <th scope="col">Life expectancy</th>
            </tr>
          </thead>
          <tbody>
          <tr>
          <td>{ location.continent }</td>
          <td>{ location.sq_km_area } km</td>
          <td>{ location.population }</td>
          <td>{ location.life_expectancy } ~ </td>
          </tr>
          </tbody>          
        </table>
        :
        <p>Type your country</p>
        }

       {/*  <select className="form-select mb-3" 
        onSubmit={sendQuery}        
        aria-label=".form-select-lg example">
         <option value={country.name}>{country.name}</option>
        </select> */}

    </div>
  );
}
