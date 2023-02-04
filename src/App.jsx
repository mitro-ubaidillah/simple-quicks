import './App.css'
import theme from './utils/ExtendedTheme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
