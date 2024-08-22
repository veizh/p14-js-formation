import { useEffect, useMemo, useState } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
const Table = ({fetchData})=>{
    const [data,setData]=useState(false)
    let table = []
    useEffect(()=>{
        if(localStorage.getItem('users')){
            let userSorted = JSON.parse(localStorage.getItem('users'))
            setData(userSorted)
        }
        
      
    },[fetchData])
   
    const columns = useMemo(
        () => [{
            accessorKey: 'departement',
            header: 'Departement',
            size: 150,
          },
          {
            accessorKey: 'firstName', //access nested data with dot notation
            header: 'First Name',
            size: 150,
          },
          {
            accessorKey: 'lastName',
            header: 'Last Name',
            size: 150,
          },
          {
            accessorKey: 'state',
            header: 'State',
            size: 150,
          },
          {
            accessorKey: 'city',
            header: 'City',
            size: 150,
          },
          {
            accessorKey: 'street', 
            header: 'Street',
            size: 150,
          },
          {
            accessorKey: 'dateOfBirth',
            header: 'Date Of Birth',
            size: 150,
          },{
            accessorKey: 'startDate',
            header: 'Start Date',
            size: 150,
          },
        ],
        [],
      );
      table = useMaterialReactTable({
        columns,
        data, 
        enableFullScreenToggle: false,
        initialState: { density: 'comfortable' },
        enableDensityToggle:false,
        enableFilters:false,
        columnFilterModeOptions:false,
        enableColumnActions:false,
        enablePagination:true,
        initialState: {
          pagination: {
            pageSize: 5, // Fixer la taille de la page à 5
          },
        },
        muiTablePaginationProps: {
          rowsPerPageOptions: [5], // Désactiver les options de sélection de taille de page
        },
        manualPagination:false,
        
      })  ;
    return(
        <MaterialReactTable  table={table}  
         />
    )
}
export default Table