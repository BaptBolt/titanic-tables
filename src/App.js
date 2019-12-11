import React, { useState } from 'react';
import './App.css';
import Tpassengers from './bin/titanic-passengers.json';
import Passenger from './Components/Passenger';

function App() {

  const [nameFilter, setNameFilter] = useState('');

  const handleFilterNameInput = (event) => {
    setNameFilter(event.target.value)
  }

  const [survived, setSurvived]=useState('No');

  const handleFilterSurvivedYes = () =>{
    if(survived==='No'){
      setSurvived('Yes')
    } 
  }

  const handleFilterSurvivedNo = () =>{
    if(survived==='Yes'){
      setSurvived('No')
    }
  }


  return (
    <div className="container">
      <div className="card">
        <div className="filters">
        <p className="title-filter">Filtres:</p>
        <input className="filter" type="checkbox" id="survivants" name="survivants" onClick={handleFilterSurvivedYes} />
        <label for="surviavnts">Survivants</label>
        <input className="filter" type="checkbox" id="décédés" name="décédés" onClick={handleFilterSurvivedNo}/>
        <label for="Décédés">Décédés</label>
        <input className="filter" type="checkbox" id="all" name="all" />
        <label for="all">Voir tout les passagers</label>
        </div>
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name<input onChange={handleFilterNameInput} type='text' /></th>
                <th scope="col">Age</th>
                <th scope="col">Survived</th>
              </tr>
            </thead>
            <tbody>
              {Tpassengers
              .filter((passenger) => {
                return passenger.fields.name.includes(nameFilter)
              }).filter((passenger)=>{
                return passenger.fields.survived.includes(survived)
              }).map((passenger, index) => {
                return <Passenger
                  key={index}
                  name={passenger.fields.name}
                  age={passenger.fields.age}
                  survived={passenger.fields.survived} />
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
