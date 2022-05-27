import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
  
// import Home component
import Home from "./components/Home";
// import About component
import Policy from "./components/PrivatPolicy";
// import ContactUs component
  
function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Switch>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" component={Home} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/legal/privacypolicy" component={Policy} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}
  
export default App;