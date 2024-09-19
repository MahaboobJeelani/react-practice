import React, { useState } from 'react'


const HOCcomponent = (OriginalComponents) => {

    const NewComponent = () => {
        let [money, setMoney] = useState(10)
        let handleComponents = () => {
            setMoney(money + 10)
        }
        return <OriginalComponents handleincre={handleComponents} money={money} />
    }

    return NewComponent

}
export default HOCcomponent
