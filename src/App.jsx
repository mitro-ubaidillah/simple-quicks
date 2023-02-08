import '@fontsource/lato/400.css'
import '@fontsource/lato/700.css'
import theme from './utils/ExtendedTheme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from "react-redux";
import store from '../store'

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Home />
      </ChakraProvider>
    </Provider>
  )
}

export default App
