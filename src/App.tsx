import React, {useState} from 'react';
import './App.css';



function App() {
    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    const [newMoney, filterMoney] = useState([...money])
    const filtredMoney = (btn:string)=>{
        if(btn === "all"){
            return filterMoney(money)
        }
        filterMoney(money.filter((obj)=>obj.banknots === btn))
    }
    return (
            <>
                <ul>
                    {newMoney.map((obj, index) =>
                        <li key={index}>
                            <span>{obj.banknots}</span>
                            <span>{obj.value}</span>
                            <span>{obj.number}</span>
                        </li>)}
                </ul>
                <button onClick={()=>filtredMoney("all")}>all</button>
                <button onClick={()=>filtredMoney("RUBLS")}>RUBLS</button>
                <button onClick={()=>filtredMoney("Dollars")}>Dollars</button>
            </>
    );
}

const ButtonClick = (name:string, age:number)=>{
    console.log(name, age)
}

const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
]
export default App;
