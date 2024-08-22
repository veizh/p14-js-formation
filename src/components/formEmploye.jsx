import Dropdown from 'easy-dropdown-react'


const formEmploye = ()=>{

    return(
<>
<div className="form__container">

    
</div>
<div>
    <Dropdown initial={select} arrayOptions={currentArray} mutateur={setSelect}/>
   </div>
</>
    )
}
export default formEmploye