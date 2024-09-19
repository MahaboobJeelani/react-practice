const Task2 = (x)=>{
    console.log(x);
    return(
        <div>
            <h1>My Name is {x.data.name}</h1>
            <h1>I have few skills they are 1. {x.data.skills[0]} 2. {x.data.skills[1]}</h1>
            <h1>I have 2 Friends</h1>
            <h1>1.{x.data.friends[0].name}</h1>
            <h1>2.{x.data.friends[1].name}</h1>
            <h1>{x.data.friends[0].name} has {x.data.friends[0].skills[0]} & {x.data.friends[0].skills[1]} skills</h1>
            <h1>{x.data.friends[1].name} has {x.data.friends[1].skills[0]}</h1>
        </div>
    )
}
export default Task2