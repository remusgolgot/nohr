import {useAuthContext} from '../hooks/useAuthContext'
import { useEffect } from 'react'
import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

const Admin = () => {

    const {user} = useAuthContext()
    const [users, setUsers]  = useState([])
   
    const fetchUsers = async() => {
        const response = await fetch('/api/users/', {
            headers : {
                'Authorization' : `Bearer ${user.token}`
            }
        })
        setUsers(await response.json())
    }
    
    useEffect( () => {
        fetchUsers()
    }, [user])

    const deleteUser = (row) => {
        console.log("PRINT ME " + row.email)
    }

    const disableUser = (row) => {
        console.log("PRINT ME " + row.email)
    }

    const columns = [
        {
          field: 'role',
          headerName: 'ROLE',
          width: 150,
          editable: false,
        },
        {
          field: 'email',
          headerName: 'EMAIL',
          width: 1088,
          editable: false,
        },
        {
            field: 'delete',
            headerName: '',
            width: 80,
            editable: false,
            renderCell: ({ row }) =>
            <button onClick={() => deleteUser(row)}>
              Delete
            </button>,
          },
          {
            field: 'disable',
            headerName: '',
            width: 80,
            editable: false,
            renderCell: ({ row }) =>
            <button onClick={() => disableUser(row)}>
              Disable
            </button>,
          },
    ]

    return(
        <div>
            ADMIN DASHBOARD
        
        <Box sx={{ height: 400, width: '100%', backgroundColor:'black' }}>
          <DataGrid
            rows={users}
            columns={columns}
            getRowId={(row) =>  row._id}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[10]}
            disableRowSelectionOnClick
          />
        </Box>
        </div> 
      );

}


export default Admin