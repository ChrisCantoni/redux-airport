import {useDispatch} from 'react-redux';
import {useState} from 'react';

const AirlineForm = () => {

    const dispatch = useDispatch();
    const [airline, setAirline] = useState('');

    function handleClick() {
        const action = {type: 'ADD_AIRLINE', payload: airline}
        dispatch(action)
        setAirline('');
      }


    return (
        <div>
            <input value={airline} onChange={(e) => setAirline(e.target.value)}placeholder='Airline Name' />
            <button onClick={handleClick}>Add Airline</button>
      </div>

    )
}

export default AirlineForm;