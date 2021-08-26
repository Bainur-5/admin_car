import { Route, Switch } from 'react-router-dom';
import cls from './App.module.scss'
import Header from './Pages/Header';
import Main from "./Pages/Main/Main";
import Users from './Pages/Users';
const App = () =>{
  return(
    <div className={cls}>
      <Header/>
      <Switch>
        <Route path='/' exact component={Main}/>
        <Route path='/Users' exact key='key' component={Users}/>
      </Switch>
    </div>
  )
}
export default App;
