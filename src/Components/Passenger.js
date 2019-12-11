import React from 'react';

const Passenger = (props) => {
  console.log(props)
  return (
    <tr style={{backgroundColor:props.survived === 'Yes' ? 'bisque':'aquamarine'}}>
      <td>{props.name}</td>
      <td>{props.age? Math.floor(props.age): 'N/A'}</td>
      <td>{props.survived}</td>
      <td>{props.ticket}</td>
    </tr>
  )
}

export default Passenger;