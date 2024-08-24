import { PlusCircle } from 'lucide-react';
let Header = ({addEmploye,setAddEmployee})=>{
    return(
        <header>
            <div className="header__content">

           <p title='test'>HRNET</p>
           <div className="row">
           <div className="add" onClick={()=>{setAddEmployee(true)  }}> <PlusCircle stroke='whitesmoke' size={27}  /><p>Add Employee</p></div>
           
           </div>
            </div>
        </header>
    )
}
export default Header