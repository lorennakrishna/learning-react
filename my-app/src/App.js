import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'

function App() { 
  
  const name = 'Lorenna'

  const newName = name.toUpperCase()
  

  function sum(a, b){
    return a + b
  }

  const url = 'https://rioandlearn.com/wp-content/uploads/2016/11/image-3-1024x502.png'
  return (
   

    <div className="App">
     <h1>Ola Mundo</h1>
     <p>Meu primeiro app</p>
     <HelloWorld/>
     <p>Ola, {newName}</p>
     <p>Ola novamente, {name}</p>
    <p>Soma: {2+2}</p>
    <p>Soma 2: {sum(1, 2)}</p>
    <img src={url} alt ="Minha Imagem"/>

    </div> 
      

      


  );

}

export default App;
