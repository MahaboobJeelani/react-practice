const PropsObj = (x)=>{
    console.log(x);
    console.log(x.data);
    return(
        <div>
            <h1> {x.data.name} Props Obj</h1>
        </div>
    )
}
export default PropsObj