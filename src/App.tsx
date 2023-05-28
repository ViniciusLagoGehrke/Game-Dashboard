import { ColorModeContext, useMode } from 'theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Header from './layout/header'

function App() {
  const { theme, colorMode } = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="flex h-full w-full flex-col items-center justify-center">
          <main className="w-full">
            <Header />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
