import Airlines from '../Airlines/Airlines';
import {useSelector} from 'react-redux';


const AirlineTable = () => {
    const airlines = useSelector(store => store.airlines);

    return (
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

    )
}

export default AirlineTable;