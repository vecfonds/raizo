import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from './component/footer';
import Header from './component/header';
import Home from './component/home/home';

function App() {
  return (
      <div>
        <Header />
        <Home />

        <Footer />
      </div>
  );
}

export default App;

{/* <Router>
    <div>
      <Header />
      <hr />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch>
      <Footer />
    </div>
  </Router> */}
