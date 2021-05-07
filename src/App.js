import "./App.css";
import LoginPage from "./LoginPage"
import AboutPage from "./AboutPage"

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 


function App() {
	return (
		<Router>
        <div>
          <Switch>
            
            <Route exact path="/">
              <LoginPage/>
            </Route>
  
            <Route exact path="/about">
              <AboutPage/>
            </Route>
        
          </Switch>
        </div>
      </Router>
	);
}

export default App;
