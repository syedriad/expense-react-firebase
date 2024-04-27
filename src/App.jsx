import { BrowserRouter as Router , Routes, Route,  } from 'react-router-dom'
import './App.css'
import { Auth } from './pages/auth/'
import { ExpenseTracker } from './pages/expense_track/'


function App() {

  return (
    <div>

      <Router>

          <Routes>


                <Route path='/' element={<Auth/>}  >   </Route>
                <Route path='/expense-tracker' element = {<ExpenseTracker/>}  ></Route>

          </Routes>

      </Router>


    </div>
  )
}

export default App
