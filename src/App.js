import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Tickets from './Components/Tickets';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
function App() {
  
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/tickets' element={<Tickets/>} />
    </Routes>

  </Router>

   
  );
}

export default App;
