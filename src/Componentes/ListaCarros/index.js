import Carro from "../Carro";

const ListaCarros = ({carros, carregaCarros}) => {
    return (
        <div  className='card-container'> 
            {carros.map( (p)=> (<Carro valor={p} carregaCarros={carregaCarros}></Carro> ) )} 
        </div>
    );
};

export default ListaCarros;