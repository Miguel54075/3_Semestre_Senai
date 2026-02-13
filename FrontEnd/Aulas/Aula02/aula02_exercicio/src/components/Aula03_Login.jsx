const Aula03_Login = () => {
    return (
        <div style={estilos.loginConteudo}>
            <img style={estilos.logo} src="https://cdn.bs9.com.br/upload/dn_arquivo/2024/05/37.jpg" alt="" />
            <h1 style={estilos.label} color="rgba(255, 0, 17, 0.93)">Login</h1>
            <input style={estilos.input} type="Email" placeholder="Digite o Email Aqui:" />
            <input style={estilos.input} type="Password" placeholder="Digite a Senha Aqui:" />
            <button style={estilos.botao}>Entrar</button>
        </div>
        
    )
}
/** @type {Object.<string, import('react').CSSProperties>} */
const estilos = {
    loginConteudo : {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        width : '300px',
        margin : '10px auto',
        backgroundColor: '#fff',
        padding : '20px',
        boxShadow : '0px 4px 6px rgba(0, 0, 0, 0.2)',
        gap : '5px'

    },
    logo: {
        height: '50px'
    },
    label: {
        display: 'block',
        fontWeight: 'bold'
    },
    input: {
        width: '100%',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc'
    },
    botao: {
        width: '100%',
    }
}

export default Aula03_Login