import { Box, useTheme } from '@mui/material'
import { DataGrid, GridAlignment, GridToolbar } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataContacts, ContactsType } from '../../data/mockData'
import Header from '../../components/Header'

type columnType = {
  field: keyof ContactsType
  headerName: string
  flex?: number
  cellClassName?: string
  type?: string
  headerAlign?: GridAlignment
  align?: GridAlignment
}

export default function Contacts() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const columns: columnType[] = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'registrarId', headerName: 'Registrar ID', flex: 0.5 },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column-cell'
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left',
      align: 'left'
    },
    { field: 'phone', headerName: 'Phone Number', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'address', headerName: 'Address', flex: 1 },
    { field: 'city', headerName: 'City', flex: 1 },
    { field: 'zipCode', headerName: 'ZipCode', flex: 1 }
  ]

  return (
    <Box m="10px 20px">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for future reference"
      />
      <Box
        height="75vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none'
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none'
          },
          '& .name-column--cell': {
            color: colors.greenAccent[300]
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none'
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400]
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700]
          },
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`
          },
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${colors.grey[100]} !important`
          }
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  )
}
