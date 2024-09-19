import HOCcomponent from "./HOCcomponent"

const Person1 = ({money, handleincre}) => {
    console.log({money, handleincre});
    return (
        <div>
            <h1>Money1 : $ {money}</h1>
            <button onClick={handleincre}>increMoney</button>
        </div>
    )
}
export default HOCcomponent(Person1)