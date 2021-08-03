import { useSelector } from 'react-redux'

const ListProducts = () => {

    const products = useSelector(state => state.data)
    return (
        <ul>
            { products.map((product, index) => <li key={index}>{product.nome} - {product.descricao }  R$ {product.preco}</li>) }
        </ul>
    )
}

export default ListProducts