import Cabecalho from "./components/Cabecalho"
import Aula01 from "./components/Aula01"
import Aula02 from "./components/Aula02"
import Aula03 from "./components/Aula03"
import Aula03_Login from "./components/Aula03_Login"
import Aula04 from "./components/Aula04"
import Aula04_IMC from "./components/Aula04_IMC"
import { estilos } from "./style/Estilos"
import Aula04_Filme from "./components/Aula04_Filme"
import Aula05 from "./components/Aula05"
import Aula05_Exercicio from "./components/Aula05_Exercicio"
import Aula06 from "./components/Aula06"
import Aula04_Login from "./components/Aula04_Login"
import Aula06_Calculadora from "./components/Aula06_Calculadora"

const App = () => {
  return (
    <div style={estilos.fundo}>
      <Cabecalho aula='React' />
      <main style={estilos.conteudo}>
        <h2>Aulas</h2>
        <div style={estilos.lista_aulas}>
          <Aula01 />
          <Aula02 />
          <Aula03 />
        </div>
        <Aula03_Login />
        <div style={estilos.filmes}>
          <Aula04 />
        </div>
        <Aula04_Login/>
        <Aula05 />
        <Aula05_Exercicio />
        <Aula06 />
        <Aula06_Calculadora />
      </main>
    </div>
  )
}

export default App
