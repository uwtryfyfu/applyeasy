import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
  
// import Home component
import Home from "./components/Home";
// import About component
import Policy from "./components/PrivatPolicy";
// import ContactUs component
  
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/applyeasy" exact component={Home} />
          <Route path="/applyeasy/privacypolicy" exact component={Policy} />
        </Switch>
      </Router>
    </div>
  );
}
  
export default App;