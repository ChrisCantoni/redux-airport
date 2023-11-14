import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Airlines from '../Airlines/Airlines';

function App() {

  const dispatch = useDispatch();
  const [airline, setAirline] = useState('');
  const airlines = useSelector(store => store.airlines)

  function handleClick() {
    const action = {type: 'ADD_AIRLINE', payload: airline}
    dispatch(action)
    setAirline('');
  }

  return (
    <div>
      <h1>Redux Airport</h1>
      <input value={airline} onChange={(e) => setAirline(e.target.value)}placeholder='Airline Name' />
      <button onClick={handleClick}>Add Airline</button>
        <table>
          <thead>
            <tr>
              <th>Airline</th>
            </tr>
          </thead>
          <tbody>
          {airlines.map((airline) => {
            return <Airlines airline={airline} />
          })}
          </tbody>
        </table>
    </div>
  );
}

export default App;
