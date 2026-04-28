/*mport logo from './logo.svg'; */
import './App.css';
/*import HelloWorld from './components/HelloWorld' */
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() { 
 
 /* const teste = "Lorenna"
  
  const name = 'Lorenna'

  const newName = name.toUpperCase()
  

  function sum(a, b){
    return a + b
  }

  const url = 'https://rioandlearn.com/wp-content/uploads/2016/11/image-3-1024x502.png' */
  return (
   

    <div className="App">

      <Frase/>
      <Frase/>
     <SayMyName teste="Renata"/>
     <SayMyName teste="lorenna krishna"/>
      <Pessoa
      nome="Lorenna"
      idade="24"
      profissao="Programadora" />
      
      <List />
    </div> 
      

      
/*    <div className="App">

     <SayMyName teste="Renata"/>

     <h1>Ola Mundo</h1>
     <p>Meu primeiro app</p>
     <HelloWorld/>
     <p>Ola, {newName}</p>
     <p>Ola novamente, {name}</p>
    <p>Soma: {2+2}</p>
    <p>Soma 2: {sum(1, 2)}</p>
    <img src={url} alt ="Minha Imagem"/>

    </div> */

  );

}

export default App;
