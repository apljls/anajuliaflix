import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route} from 'react-router-dom'

function CadastroVideo(){
  return(
    <div>Pagina de cadastro de Videos</div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact/> 
      <Route path="/Cadastro/Video" component={CadastroVideo} exact/>
      <Route component={()=> (<div>Erro 404</div>)}/>
    </Switch>
  </BrowserRouter>,
  //<React.StrictMode>
  //  <App />
  //</React.StrictMode>,
  document.getElementById('root')
);
