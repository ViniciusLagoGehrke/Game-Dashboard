import { ColorModeContext, useMode } from 'theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Header from './layout/Header'
import Sidebar from './layout/Sidebar'
import Dashboard from './pages/Dashboard'
// import Team from './pages/Team'
// import Contacts from './pages/Contacts'
// import Invoices from './pages/Invoices'
// import Bar from './pages/Bar'
// import Form from './pages/Form'
// import Line from './pages/Line'
// import Pie from './pages/Pie'
// import FAQ from './pages/FAQ'
// import Geography from './pages/Geography'
// import Calendar from './pages/Calendar'

function App() {
  const { theme, colorMode } = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="flex h-full w-full">
          <Sidebar />
          <main className="w-full">
            <Header />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/team" element={<Team />} /> */}
              {/* <Route path="/contacts" element={<Contacts />} /> */}
              {/* <Route path="/invoices" element={<Invoices />} /> */}
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/form" element={<Form />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/faq" element={<FAQ />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
              {/* <Route path="/calendar" element={<Calendar />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
