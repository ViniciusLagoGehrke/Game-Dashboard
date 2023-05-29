import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid, GridAlignment } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataTeam, TeamType, ACCESS } from '../../data/mockData'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'
import Header from '../../components/Header'

type renderCellProp = {
  row: TeamType
}

type columnType = {
  field: keyof TeamType
  headerName: string
  flex?: number
  cellClassName?: string
  type?: string
  headerAlign?: GridAlignment
  align?: GridAlignment
  renderCell?: ({ row: { access } }: renderCellProp) => React.ReactElement
}

export default function Team() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const columns: columnType[] = [
    { field: 'id', headerName: 'ID' },
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
    {
      field: 'access',
      headerName: 'Acess Level',
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              width: '60%',
              m: '0 auto',
              p: '5px',
              display: 'flex',
              justifyContent: 'center',
              bgcolor:
                access === ACCESS.ADMIN
                  ? colors.greenAccent[600]
                  : colors.greenAccent[700],
              borderRadius: '4px'
            }}
          >
            {access === ACCESS.ADMIN && <AdminPanelSettingsOutlinedIcon />}
            {access === ACCESS.MANAGER && <SecurityOutlinedIcon />}
            {access === ACCESS.USER && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
              {access}
            </Typography>
          </Box>
        )
      }
    }
  ]

  return (
    <Box m="10px 20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
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
          }
        }}
      >
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  )
}
