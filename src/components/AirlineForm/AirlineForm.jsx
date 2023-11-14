import {useDispatch} from 'react-redux';
import {useState} from 'react';

const AirlineForm = () => {

    const dispatch = useDispatch();
    const [airline, setAirline] = useState('');
    const [numberOfPlanes, setNumberOfPlanes] = useState(0);

    function handleSubmit(e) {
        e.preventDefault();
        const action = {type: 'ADD_AIRLINE', payload: {airline: airline, amount: numberOfPlanes}};
        dispatch(action)
        setAirline('');
        setNumberOfPlanes(0);
      }


    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input value={airline} onChange={(e) => setAirline(e.target.value)}placeholder='Airline Name' />
            <input value={numberOfPlanes} onChange={(e) => setNumberOfPlanes(e.target.value)} placeholder='Number of planes'/>
            <button type="submit">Add Airline</button>
            </form>
      </div>

    )
}

export default AirlineForm;