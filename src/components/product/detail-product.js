import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { selectProduct } from "../../actions/product-actions"
import Api from "../../api"

const DetailProduct = () => {

    const dispatch = useDispatch()
    const { codigo } = useParams()
    const product = useSelector(state => state.product)
    const { nome, descricao, preco } = product

    const fetchDetail = async () => dispatch(selectProduct(await Api.find(codigo) || {}))
    

    // eslint-disable-next-line
    useEffect(() => (codigo && fetchDetail()), [codigo])
    
    return (
        <>
            <h1>Detalhes do produto</h1>
            <h2>Produto</h2>
            <p>{nome}</p>
            <h2>Descriçao</h2>
            <p>{descricao}</p>
            <p>R$ {preco}</p>
        </>
    )
}

export default DetailProduct