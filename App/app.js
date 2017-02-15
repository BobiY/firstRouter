import React,{ Component } from "react";
import { render } from "react-dom";
import { Router,Route,hashHistory,Link,IndexRoute } from "react-router";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Tab extends Component{
  constructor(props) {
    super();
  }
  render(){
    return(
       <div>
           <Link to="/" activeStyle = {{color:"blue"}}> Home</Link>
           <Link to={{pathname:"/list",query:{foo:"111"}}} activeStyle = {{color:"blue"}}>List</Link>
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
         <ReactCSSTransitionGroup component="div"  transitionName="transitionWrapper"  transitionEnterTimeout={500}  transitionLeaveTimeout={500}
        >
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname
          })}
        </ReactCSSTransitionGroup>
         <h1>{"df65645456"}</h1>
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
      routerWillLeave( nextLocation ){
        console.log(nextLocation);
         return `页面即将从Me切换到${nextLocation.pathname}`
      }
      render(){
        return(
          <h1>this is me</h1>
        )
      }
      componentWillMount(){
       this.context.router.setRouteLeaveHook(
         this.props.route,
         this.routerWillLeave
       )
       /*this.context.router.push({
         pathname:"/about",
         query:{
           foo:"1111"
         }
       });*/
       /*
         this.context.router.repalce({
         pathname:"/about",
         query:{
         foo:"1111"
       }
       })
       */
     }
    }
    Me.contextTypes = {
      router:React.PropTypes.object
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
            <Route path = "/about" component = {About} onEnter = {requireCredentials}/>
            <Route path = "/list" component = {List} />
            <Route path = "/:name" component = {Me} />
          </Route>
        </Router>
      )
    }

render(<App />,document.getElementById('app'));


    function requireCredentials(nextState, replace, next) {
      //获取传输过来的数据

      if (1) {
        //包含一个对象
        //console.log(nextState);
        //页面重定向
        //console.log(replace);
        //移除钩子函数
        //console.log(next);
      } else {
        replace('/error')
        next()
      }
    }　　
