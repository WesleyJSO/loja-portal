import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../../actions/product-actions'
import Api from '../../api'

const ListProducts = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    
    const fetchProducts = async () => await Api.findAll()

    // eslint-disable-next-line
    useEffect(() => dispatch(setProducts(fetchProducts())))

    return (
        <ul>
            { 
                products.map((product, index) => {
                    const { nome, descricao, preco } = product
                    return <li key={index}>{nome} - {descricao }  R$ {preco}</li>
                })
            }
        </ul>
    )
}

export default ListProducts