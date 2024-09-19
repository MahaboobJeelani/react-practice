const Hello = (x)=>{
    // console.log(x); ////{data:[10, 20, 30, 40]}
    // console.log(x.data); //[]
    // console.log(x.data[0]); //10


    // console.log(x); //{data:{name:"jeelani"}}
    // console.log(x.data.name);//"jeelani"
    return(
        <div>
            <h1>Hello {x.data}</h1>
            <h1>Hello {x.data[0]}</h1>
            <h1>Hello {x.data[1]}</h1>
            <h1>Hello {x.data.name}</h1>

        </div>
    )
}
export default Hello