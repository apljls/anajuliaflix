import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Home from './pages/Home'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';
import PageNotFound from './pages/notFound';
import CadastroCategoria from './pages/cadastro/categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/> 
      <Route path="/Cadastro/Video" component={CadastroVideo} exact/>
      <Route path="/Cadastro/categoria" component={CadastroCategoria} exact/>
      <Route component=/*{()=> (<div>Erro 404</div>)}*/ {PageNotFound}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
