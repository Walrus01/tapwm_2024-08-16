import '../../index.css';

const Produto = ({valor}) => {
    return (
        <div className='card'>
            <h3 className='titulo'>{valor.nome}</h3>
            <p className='subtitulo'>Preço: {valor.preco}</p>
            <img src={valor.foto} alt='Imagem do produto' className='imagem'></img>
        </div>
    )
}

export default Produto;