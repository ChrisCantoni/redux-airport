

const Airlines = (props) => {


    return (
        <tr>
        <td>
            {props.airline.airline}
        </td>
        <td>{props.airline.amount}</td>
        </tr>
    )
}

export default Airlines;