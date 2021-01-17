import './App.css';
import { Route } from 'react-router-dom'

import { Login, Registration, Welcome} from "./pages";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Route path='/' component={Welcome} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/registration' component={Registration} exact />
    </div>
  );
}

export default App;
