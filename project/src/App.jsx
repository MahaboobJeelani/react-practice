import { Suspense, lazy } from 'react'

// import LazyLoading from "./Components/LazyLoading"
let LazyLoading = lazy(() => import('./Components/LazyLoading'))









// import { hover } from "@testing-library/user-event/dist/hover"
// import Content from "./Components/Content"
// import Nav from "./Components/Nav"
// import Classbased from "./Components/ClassbasedCom"
// import Debouncing from "./Components/Debouncing"
// import Hello from "./Components/Hello"
// import PropsObj from "./Components/PropsObj"
// import Propsarr from "./Components/Propsarr"
// import PropsStr from "./Components/PropsStr"
// import PropsStr from "./Components/PropsStr"
// import Webtech from "./Components/Webtech"
// import Task2 from "./Components/Task2"
// import Statehooks from "./Components/Statehooks"
// import Incre from "./Components/Incre"
// import Thump from "./Components/Thump"
// import List from "./Components/List"
// import Usercontent from "./Components/Usercontent"
// import Arrayobje from "./Components/Arrayonje"
// import Userdata from "./Components/Usersdata"
// import Fetchdata from "./Components/Fetchdata"
// import InlineCss from "./Components/InlineCss"
// import "./global.css" // global CSS
// import ModuleCss from "./Components/ModuleCss"
// import Referances from "./Components/Referances"
// import Form1 from "./Components/Form1"
// import Formadd from "./Components/Formadd"
// import Themecolor from "./Components/Themecolor"
// import Controlled frFormaddom "./Components/Controlled"
// import Sideeffect from "./Components/Sideeffect"
// import Userdatae from "./Components/Userdatae"
// import Profiledata from "./Components/Profile"
// import Profile1 from "./Components/Profile1"
// import Profile from "./Components/Profile"
// import Dropdown from "./Components/Dropdown"
// import Dropnav from "./Components/Dropnav" //My own componenet
// import FetchData1 from "./Components/FetchData1"
// import Slowweb from "./Components/Slowweb"
// import Main from "./Components/Main"
// import PropsChildren from "./Components/PropsChildren"
// import PropsDri1 from "./Components/PropsDri1"
// import PropsDrilContext from "./Components/PropsDrilContext"

// ==================================== Practice =========================================
// import Factor from "./Practice/Factor"
// import Keys from "./Practice/Keys"
// import HOCcomponent from "./Practice/HOCcomponent"
// import Person1 from "./Practice/Person1"
// import Person2 from "./Practice/Person2"
// import Form from "./Components/Form"
// import PropsStr from "./Components/PropsStr"

const App = () => {
  // let person = {
  //   name :"Jeelani"
  // }

  // let webtech1 = [
  //   {name : "HTML"},
  //   {name : "CSS"},
  //   {name : "JS"}
  // ]

  //   let person = {
  //     name : "Abhi",
  //     id : 123,
  //     skills : ["HTML", "CSS"],
  //     friends : [{name:"Abdul", skills:["python", "JS"]},
  //                {name:"Giri", skills:["nobrain", "Dumbo"]}]
  //   }
  // ================================== PropsDrilling =============================

  return (
    <div>

      {/* <h1>Hello World</h1>
      <h2>Welcome to Our World</h2>
      <Content></Content> */}
      {/* <Nav/> */}
      {/* <Classbased/> */}

      {/* ================ */}
      {/* <Hello data="World"/> */}
      {/* <Hello data="Galaxy"/> */}
      {/* <Hello data="Universe"/> */}
      {/* ===================== */}

      {/* <Hello data={[10, 20, 30, 40]}/> */}

      {/* <Hello data={person} /> */}


      {/* <PropsObj data={{name:"jeelani", class:"reactjs", lec:"Prajwal"}}/> */}
      {/* <Propsarr data={["jeelani", "tapan","akhif"]}/> */}
      {/* <PropsStr data="Jeelani"/> */}

      {/* // <Webtech data={webtech1}/> */}

      {/* <Task2 data={person}/> */}

      {/* <Statehooks/> */}
      {/* <Incre/> */}
      {/* <Thump/> */}
      {/* <List/> */}
      {/* <Usercontent/> */}
      {/* <Arrayobje/> */}
      {/* <Userdata/> */}
      {/* <Fetchdata /> */}
      {/* <InlineCss/> */}
      {/* <ModuleCss/> */}


      {/* <Referances/> */}
      {/* <Form1/> */}
      {/* <Formadd/> */}
      {/* <Themecolor/> */}
      {/* <Controlled/> */}

      {/* <Sideeffect/> */}
      {/* <Userdatae/> */}
      {/* <Profiledata/> */}
      {/* <Dropdown/> */}

      {/* <Profile1/> */}
      {/* <Profile/> */}
      {/* <Dropnav/> */}

      {/* <FetchData1/> */}
      {/* <Slowweb/> */}

      {/* <Main/>  */}

      {/* PropsDrilling Concept */}

      {/* <PropsChildren data="hi">Good Morning</PropsChildren> */}

      {/* <PropsDri1 data="hi"/> */}
      {/* ============ useContext() ============== */}

      {/* <PropsDrilContext/> */}

      {/* <Debouncing/> */}

      {/* ================= Practice ================================ */}

      {/* <Factnpmor/> */}
      {/* <Keys/> */}
      {/* ================ HOCcomponents.jsx =================== */}
      {/* <Person1/> */}
      {/* <Person2/> */}
      {/* //  <Form/> */}

      {/* Lazy Loading */}

      <Suspense fallback={<h1>content loading ........</h1>}>
        <LazyLoading/>
      </Suspense>
    </div>
  )
}
export default App 
