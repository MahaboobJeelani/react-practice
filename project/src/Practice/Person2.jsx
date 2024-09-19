import HOCcomponent from "./HOCcomponent"

const Person2 = ({money, handleincre}) => {
    console.log({money, handleincre});
    return (
        <div>
            <h1>Money2 : $ {money}</h1>
            <button onClick={handleincre}>increMoney</button>
        </div>
    )
}
export default HOCcomponent(Person2)