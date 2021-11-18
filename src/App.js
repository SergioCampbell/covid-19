import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {Line} from 'react-chartjs-2'


import './App.css';

export default function App() {

  const [country, setCountry] = useState('')
  const [location, setLocation] = useState([])
  const [total, setTotal] = useState([]) 

  //api name
    const global = 'https://covid-api.mmediagroup.fr/v1/cases?country=Global'

    const byCountry = `https://covid-api.mmediagroup.fr/v1/cases?country=${country}`

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
        console.log(res.data)
        setLocation(res.data)
      })
      .catch((err) => {
        console.log(err)})
    }, [])

    

    //get value from select area or input area
      const countryHandler = (e) => {
        //console.log(e.target.value)
        setCountry(
           e.target.value
        )
      }

      // 
      const findByCountry = (countryy) =>{
        const url = `https://covid-api.mmediagroup.fr/v1/cases?country=${countryy}`
        axios.get(url)
        .then((res)=> {
          console.log(res.data)
          setLocation(res.data.All)
        })
        .catch((err) => {
          console.log(err)})
      }

      const sendQuery = (e) => {
        e.preventDefault()
       // setCountry(country)

       //setup the string in variable "conuntry" to make it an array
       const arr = country.toLowerCase().split(" ")

       //loop through each element of the array and capitalize the first letter
        for (var i = 0; i < arr.length; i++){
          arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
        }

        //join all the elements of the array back into a new string using a blanck space as separator
        const str = arr.join(" ")
        
        //const str = country.charAt(0).toUpperCase() + country.slice(1)
        console.log(str)
        
       findByCountry(str)
        console.log(location.All)
      }

      //config the chart
      const state = {
        labels: ['Confirmed', 'Recovered', 'Deaths', 'Updated'],
        datasets: [{
          label: country + ' report covid-19 data',
          fill: false,
          data: [location.confirmed, location.recovered, location.deaths],
          borderColor: '#000',
          borderWidth: 2
        }]
      };

   
  return (
    <div className="App container mt-3 mb-5 bg-primary rounded">
      <h1 className="display-2">World Covid-19 data</h1>

        <h2>Global data</h2>
        <table
        className="table table-primary table-bordered table-responsive-sm">
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
            value={ country }
            onChange={ countryHandler }
            placeholder="Type a country here"
            required
          />
          <input type="submit" value="Search" />
          <br/>
        </form>

        <br/>
       
       { country ? 
        <div className="container bg-covid">
        <h2 className="display-6">{country} data</h2>
        <table  loading="lazy"
         className="table table-info table-bordered table-responsive">
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
          <thead className="table-active">
            <tr>
              <th>Updated</th>
            </tr>
          </thead>   
          <tbody>
            <tr>
            <td>{ location.updated }</td>
            </tr>
          </tbody>     
        </table>

        <div>
          <Line
            data={state}
            options={{
              title:{
                display:true,
                text: 'this is the chart',
                fontZise: 20
              },
              legend: {
                display: true,
                position: 'right'
              }
            }}
           />
        </div>

        </div>
        :
        <p>Type your country</p>
        }
        <br/>
    </div>
  );
}
