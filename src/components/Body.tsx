
type CarsTypeProps = {
    Cars: Array<topCars>
}

type topCars = {
    manufacturer: string,
    model: string,
}

export const  Body = function (props:CarsTypeProps) {
    return (
        <>
        <table>
            <tbody>
            {props.Cars.map((obj, index)=>
                <tr key={index}>
                    <td>{obj.manufacturer}</td>
                    <td> model: {obj.model}</td>
                </tr>
            )}
            </tbody>
        </table>
        </>
    )
}