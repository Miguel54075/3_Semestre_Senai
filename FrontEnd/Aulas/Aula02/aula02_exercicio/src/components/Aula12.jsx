import { estilos } from "../style/Estilos"
import { useState } from "react"
const Aula12 = () => {
    const [imagem, setImagem] = useState('')
    const buscarDados = async () => {
        try {
        const resposta = await fetch('https://dog.ceo/api/breeds/image/random')
        const dados = await resposta.json()
        console.log(dados.message);
        setImagem(dados.message)
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        buscarDados()
    }, [])


    return (
        <div style={estilos.cardAula}>
            <h2>Aulas 12 - Consumo de APIs</h2>
            <h3>Aprendendo a utilizar APIs em React</h3>
            <hr />
            <div>
                <p>Imagem de Cachorro</p>
                <img src={imagem} alt="Cachorro" />
                <button onClick={buscarDados}>Exibir imagem</button>
            </div>
        </div>
    )
}
export default Aula12