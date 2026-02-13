/** @type {Object.<string, import('react').CSSProperties>} */
export const estilos = {
    tituloModulo: {
        color: 'blue',
        fontWeight: 'bold'
    },
    descricaoModulo: {
        fontStyle: 'italic'
    },
    fundo: {
        backgroundColor: '#f3f4f6',
        minHeight: '100vh'
    },
    conteudo: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px'
    },
    listaAulas: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },
    cardAula: {
        backgroundColor: 'white',
        padding: '16px',
        borderRadius: '8px',
        width: '100%',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
    },
    filmes: {
    display: 'inline-block',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '20px',
    padding: '20px',
},
cardFilme: {
    backgroundColor: 'white',
    padding: '16px',
    borderRadius: '8px',
    width: '300px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
},
   

    imagens_filme: {
        width: '300px',
        height: '300px',
        objectFit: 'cover',
        borderRadius: '8px',
        border: '2px solid #ddd',
    },
    botao: {
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '4px',
        cursor: 'pointer',
        width: '100%',
        transition: 'background-color 0.3s ease',
    },
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
   