import { Typography, Box, useTheme } from '@mui/material'
import { tokens } from '../../theme'

type HeaderProps = {
  title: string
  subtitle: string
}

export default function Header({ title, subtitle }: HeaderProps) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box mb="15px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ mb: '5px' }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  )
}
