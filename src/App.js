import axios from 'axios';
import React, {useState, useEffect} from 'react'

import './App.css';

export default function App() {

  const [country, setCountry] = useState({country:''})
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

    /* useEffect(() =>{
      axios.get(byCountry)
      .then((res)=> {
        //console.log(res)
        setLocation(res.data.All)
      })
      .catch((err) => {
        console.log(err)})
    }, [byCountry])
     */

    useEffect(() => {
      getData()
    }, [location])

    //we put a async await to give time to load the new call
    const getData = async () => {
        const data = await fetch(byCountry)
        const pais = await data.json()
        setLocation(pais)
    }
    //get value from select area or input area
      const countryHandler = (e) => {
        //console.log(e.target.value)
        setCountry({
          ...country.country,
          [e.target.name] : e.target.value
        })
      }

      const sendQuery = (e) => {
        e.preventDefault()
        setCountry(country)
        console.log(location.All)
      }

   
  return (
    <div className="App container mt-3 mb-5 bg-dark">
      <h1 className="display-2">World Covid-19 data</h1>

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

        <form className="form-group mt-5" onSubmit={sendQuery}>
          <p>Search your country here</p>
          <input type="text"
            name="country"
            value={ country.country }
            onChange={countryHandler}
            placeholder="Colombia"
            required
          />
          <input type="submit" value="Search" />
          <br/>
        </form>
        <br/>
       
       { country.country ? 
        <>
        <h2 className="display-6">{country.country} data</h2>
        <table  loading="lazy"
         className="table table-dark table-bordered table-responsive">
          <thead className="table-active">
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
        </>
        :
        <p>Type your country</p>
        }
        <br/>
    </div>
  );
}
