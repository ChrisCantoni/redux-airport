import Airlines from '../Airlines/Airlines';
import {useSelector} from 'react-redux';
import '../App/App.css';


const AirlineTable = () => {
    const airlines = useSelector(store => store.airlines);

    return (
        <table>
          <thead>
            <tr>
                <th>Airline</th>
                <th>Number of Planes</th>
            </tr>
          </thead>
          <tbody>
          {airlines.map((airline) => {
            return <Airlines airline={airline} />
          })}
          </tbody>
        </table>        

    )
}

export default AirlineTable;