import React,{ Component } from "react";
import { render } from "react-dom";
import { Router,Route,hashHistory,Link,IndexRoute } from "react-router";

class Tab extends Component{
  constructor(props) {
    super();
  }
  render(){
    return(
       <div>
           <Link to="/" activeStyle = {{color:"blue"}}> Home</Link>
           <Link to="/list" activeStyle = {{color:"blue"}}>List</Link>
           <Link to="/about" activeStyle = {{color:"blue"}}>About</Link>
           <Link to="/me" activeStyle = {{color:"blue"}}>Me</Link>
       </div>
    )
  }
}

class Lists extends Component {
  constructor(props) {
    super();
  }
  render(){
    return(
      <div>
         <Tab />
         {this.props.children}
         <h1>111111111111111111111111</h1>
      </div>
    )
  }
}

class Home extends Component {
  constructor(props) {
    super();
  }
  render(){
    return(
      <h1>this is home</h1>
    )
  }
}

class About extends Component {
  constructor(props) {
    super();
  }
  render(){
    return(
      <h1>this is about</h1>
    )
  }
}

class List extends Component {
  constructor(props) {
    super();
  }
  render(){
    return(
      <h1>this is list</h1>
    )
  }
}

class Me extends Component {
  constructor(props) {
    super();
  }
  render(){
    return(
      <h1>this is me</h1>
    )
  }
}

class App extends Component{
  constructor(props) {
    super();
  }
  render(){
    return(
      <div>
         <Renders />
      </div>
    )
  }
}

let Renders = () => {
  return (
    <Router history = {hashHistory}>
      <Route path = "/" component = {Lists}>
        <IndexRoute component = {Home} />
        <Route path = "/about" component = {About} />
        <Route path = "/list" component = {List} />
        <Route path = "/me" component = {Me} />
      </Route>
    </Router>
  )
}

render(<App />,document.getElementById('app'))
