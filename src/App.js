import './App.css';
import Main from './Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={<Main />} />
      </Switch>
    </Router>
  );
}

export default App;
