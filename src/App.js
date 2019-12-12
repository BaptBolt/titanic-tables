import React, { useState } from 'react';
import './App.css';
import Tpassengers from './bin/titanic-passengers.json';
import Passenger from './Components/Passenger';

function App() {

  const [nameFilter, setNameFilter] = useState('');

  const handleFilterNameInput = (event) => {
    setNameFilter(event.target.value)
  }

  const [survived, setSurvived]=useState(null);

  const handleFilterSurvivedYes = () =>{
    setSurvived('Yes')
  }

  const handleFilterSurvivedNo = () =>{
    setSurvived('No')
  }

  const handleFilterAllPassengers = ()=>{
    setSurvived(null)
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
        <input className="filter" type="checkbox" id="all" name="all" onClick={handleFilterAllPassengers}/>
        <label for="all">Voir tout les passagers</label>
        </div>
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name<input onChange={handleFilterNameInput} type='text' /></th>
                <th scope="col">Age</th>
                <th scope="col">Survived</th>
                <th scope="col">N° Ticket</th>
              </tr>
            </thead>
            <tbody>
              {Tpassengers
              .filter((passenger) => {
                return passenger.fields.name.includes(nameFilter)
              }).filter((passenger)=>{
                if(survived===null){
                  return <Passenger
                  name={passenger.fields.name}
                  age={passenger.fields.age}
                  survived={passenger.fields.survived}
                  ticket={passenger.fields.ticket} />
                }else{
                  return passenger.fields.survived.includes(survived)
                }
              }).map((passenger, index) => {
                return <Passenger
                  key={index}
                  name={passenger.fields.name}
                  age={passenger.fields.age}
                  survived={passenger.fields.survived}
                  ticket={passenger.fields.ticket} />
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
