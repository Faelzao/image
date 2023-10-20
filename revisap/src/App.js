import Img from './img/chevete.png';
import './App.css';
import Noticia from "./components/Noticia"

function App() {
  return (
    <div className="App">

      <h1> essa é minha  imagem </h1>
    

      <Noticia
       titulo= "Meu nome é josoares sua piranha "
       imagem= {Img}
       descricao= "Eu, tu, nóis bota nela O bonde chegou é os predador de perereca Sapeca pepeca, dividi essa tchec Vai senta com força pros meninos da favela então  "
       categoria = "funk dos cria "
       />
      
    </div>
  );
}

export default App;
