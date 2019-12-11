import React, { useState } from 'react';
import './App.css';
import Tpassengers from './bin/titanic-passengers.json';
import Passenger from './Components/Passenger';

function App() {

  const [nameFilter, setNameFilter] = useState('');

  const handleFilterNameInput = (event) => {
    setNameFilter(event.target.value)
  }

  const [survived, setSurvived]=useState('');

  const handleFilterSurvivedYes = () =>{
    if(survived===''){
      setSurvived('Yes')
    }else if(survived==='Yes'){
      setSurvived('')
    }
  }
  const[dead,setDead]=useState('');

  const handleFilterSurvivedNo = () =>{
    if(dead===''){
      setDead('No')
    }else if(dead==='No'){
      setDead('')
    }
  }

  const[allPassengers, setAllPassengers]=useState('')

  const handleFilterAll = () =>{
    if(survived!=''){
      setSurvived('')
    }
  }


  return (
    <div className="container">
      <div className="card">
        <div className="filters">
        <p className="title-filter">Filtres:</p>
        <input className="filter" type="checkbox" id="scales" name="scales" onClick={handleFilterSurvivedYes} />
        <label for="scales">Survivants</label>
        <input className="filter" type="checkbox" id="horns" name="horns" onClick={handleFilterSurvivedNo}/>
        <label for="horns">Décédés</label>
        <input className="filter" type="checkbox" id="horns" name="horns" onClick={handleFilterAll}/>
        <label for="horns">Voir tout les passagers</label>
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
              {Tpassengers.filter((passenger) => {
                console.log(passenger)
                return passenger.fields.name.includes(nameFilter)
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
