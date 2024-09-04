import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './Pages/Login'
import Dashboard from './Pages/Dashboard'


function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/' element={<Dashboard/>}/>
      </Routes>
    </Router>
  )
}

export default App
