import style from "./profile.module.css"
import axios from "axios";
import { useEffect, useState } from "react"


const Profile = () => {
    let [data, setData] = useState([])


    useEffect(() => {
        axios.get("https://api.github.com/users")
            .then((res) => {
                // console.log(res.data);
                setData(res.data)
            })
            .catch(() => {
                // console.log("Error Occured");
            })
    }, [])



    return (
        <div>

            {data.map((x) => {
                let accept = (y) => {
                    // console.log(y);
                    //     alert(`Friend Request Sent to ${x.login}`)
                    //     // console.log(y);
                    //     // console.log(y.target);
                    //     ////========================== First Way =========================
                    //     // y.target.innerHTML = "cancel"
                    //     // change.innerText = "Request Sent"

                    //     /////============== another Way =================
                    //     document.getElementById(x.id).innerHTML = "cancel"

                    ////=======================================================
                    if (y.target.innerText === "Add-Friend") {
                        y.target.innerText = "Cancel"
                        alert(`Request has been Sent to ${x.login}`)
                    } else {
                        y.target.innerText = "Add-Friend"
                        alert(`Request has been Cancel ${x.login}`)
                    }
                }

                let message = () => {
                    let message = prompt(`Enter the message.....`)
                    console.log(message);
                    alert(`${message} sent to the ${x.login}`)
                }

                return (
                    <section key={x.id}>
                        <article>
                            <div className={style.img} >
                                <img src={x.avatar_url} />
                            </div>
                            <div className={style.name}>
                                <h1 className={style.name1}>Name:</h1>
                                <h1 className={style.name2}>{x.login}</h1>
                            </div>
                            <div className={style.id}>
                                <h1 className={style.id1}>ID:</h1>
                                <h1 className={style.id2}>{x.id}</h1>
                            </div>
                            <div className={style.btn}>
                                <button className={style.accept1} onClick={accept} id={x.id}>Add-Friend</button>
                                <button className={style.reject} onClick={message}>Message</button>
                            </div>
                        </article>
                    </section>
                )
            })}
        </div>
    )
}
export default Profile