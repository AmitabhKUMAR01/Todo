import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Todo from './pages/Todo.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import TryReducer from './pages/TryReducer.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Todo/>}/>

          <Route path='/try' element={<TryReducer/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
