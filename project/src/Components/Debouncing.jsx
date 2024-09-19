import { useMemo, useState } from "react"

const Debouncing = () => {
    let [inputstate, setInputstate] = useState('')

    let debounce = (fun, delay) => {
        let timerId;
        return (e) => {
            clearTimeout(timerId)
            timerId = setTimeout(() => fun(e), delay)
        }
    }

    let getData = (e) => console.log(e.target.value)

    let debouncingCallAPI = useMemo(() => debounce(getData, 1000), [])

    return (
        <>
            <h1>Debouncing</h1>
            <input type="text" value={inputstate} onChange={(e) => {
                setInputstate(e.target.value)
                debouncingCallAPI(e)
            }} />
        </>
    )
}
export default Debouncing
