import Dropdown from 'easy-dropdown-react'
import './styles/main.css';
import { useEffect, useState } from 'react';
import currentStatesArray from "./mock/states.js"
import DatePicker from "react-datepicker";
import Header from './components/Header.jsx';
import "react-datepicker/dist/react-datepicker.css";
import Footer from './components/Footer.jsx';
import { CirclePlus } from 'lucide-react';
import Table from './components/table.jsx';
const currentDepartementsArray =["Sale","Legal","Human Ressources","Engineering","Marketing"]
function App() {
  let [addEmployee,setAddEmployee]=useState(false)
  useEffect(()=>{
    console.log(addEmployee);
  },[addEmployee])
  return (
   <>
   <ModalForm isOpen={addEmployee} SetIsOpen={setAddEmployee} />
    <Header setAddEmployee={setAddEmployee} addEmployee={addEmployee} />
    <div className='Layout'>

    <Table fetchData={addEmployee} />
    </div>
    <Footer/>
   </>
  );
}
function storeUsersInLocalStorage(user) {

  if (localStorage.getItem('users')) {
      
      // Convertir le tableau d'objets en chaîne JSON
      let userSorted = JSON.parse(localStorage.getItem('users'))
       let tmp = []
       userSorted.forEach(e=>{
        tmp.push(e)
       })
       tmp.push(user)
       tmp = JSON.stringify(tmp)
      // Stocker la chaîne JSON dans le localStorage sous la clé 'users'
      localStorage.setItem('users', tmp);
  } else {
    let tmp = []
    tmp.push(user)
    console.log(tmp);
    const usersJSON = JSON.stringify(tmp);
    localStorage.setItem('users', usersJSON);

  }
}

function getInputValues(selectState,selectDepartement,birthDate,startDate){
  let tmp = {
    firstName:document.getElementById('firstName').value,
    lastName:document.getElementById('lastName').value,
    street:document.getElementById('street').value,
    city:document.getElementById('city').value,
    state:selectState,
    departement:selectDepartement,
    dateOfBirth:birthDate,
    startDate:startDate

  }
  return tmp
}

function ClearForm(setSelectState,setSelectDepartement){
 document.getElementById('firstName').value=""
    document.getElementById('lastName').value=""
    document.getElementById('street').value=""
    document.getElementById('city').value=""
    setSelectState("Select a State")
    setSelectDepartement("Select a Departement")
}
let inputArray=[
  {
    type:"text",
    name:"FirstName",
    id:"firstName",
    placeholder:"John"
  },{
    type:"text",
    id:"lastName",
    name:"LastName",
    placeholder:"Doe"
  },{
    type:"text",
    id:"street",
    name:"Street",
    placeholder:"Baker St."
  },{
    type:"text",
    id:"city",
    name:"City",
    placeholder:"New-York"
  },{
    type:"number",
    name:"ZipCode",
    id:"zipCode",

    placeholder:"64343"
  }
]
const ModalForm= ({isOpen,SetIsOpen})=>{
  const [startDate, setStartDate] = useState(new Date());
  const [birthDate, setBirthDate] = useState(new Date());
  let [selectState,setSelectState]=useState('Select a State')
  let [selectDepartement,setSelectDepartement]=useState('Select a Departement')

 

  return (
    <div className={isOpen?'backdrop open':'backdrop'} >
      <div className='modal__content'>
      <div className='modal__header'>
        <p>Create new employee</p>
      </div>
       {inputArray.map((e,i)=>{
     switch (e.type) {
      case "text":
        return( <div className='col' key={i}><label>{e.name}</label><input type='text' id={e.id} placeholder={e.placeholder} name={e.name}  /></div> )
        case "number":
          return( <div className='col' key={i}><label>{e.name}</label><input type='number' id={e.id} placeholder={e.placeholder} name={e.name}  /></div> )
      default:
        return(<></>)
     }
       })} 
       <div className='col'>
       <label>State</label>
       <Dropdown initial={selectState} arrayOptions={currentStatesArray} mutateur={setSelectState} />
       </div>
       <div className='col'>
       <label>Departement</label>
       <Dropdown initial={selectDepartement} arrayOptions={currentDepartementsArray} mutateur={setSelectDepartement} />
       </div>
       <div className='col'>
       <label>Date of Birth</label>
       <DatePicker selected={birthDate} onChange={(date) => setBirthDate(date)} />
       </div>
       <div className='col'>
       <label>Start Date</label>
       <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
       </div>
       
        <div className='col'></div>
        <button className='confirm' onClick={()=>{
          SetIsOpen(false)
          
          storeUsersInLocalStorage(getInputValues(selectState,selectDepartement,birthDate,startDate))
          ClearForm(setSelectState,setSelectDepartement)
        }}>Add Employe  <CirclePlus  stroke='#1e1e1e' size={22} /></button>
        <CirclePlus onClick={()=>SetIsOpen(false)} stroke='white' size={28} className='close__btn' />
      </div>

    </div>
  )
}
export default App;
