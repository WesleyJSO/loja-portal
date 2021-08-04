import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setProducts } from '../../actions/product-actions'
import Api from '../../api'

const ListProducts = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products)

    const fetchProducts = async () => dispatch(setProducts((await Api.findAll() || [])))
    
    // eslint-disable-next-line
    useEffect(() => fetchProducts(), [])

    return (
        <ul>
            { 
                products.map(product => {
                    const { codigo, nome, descricao, preco } = product
                    return (
                            <Link key={codigo} to={`produto/${codigo}`}>
                                <li>{nome} - {descricao }  R$ {preco}</li>
                            </Link>
                    )
                })
            }
        </ul>
    )
}

export default ListProducts