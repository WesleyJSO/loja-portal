import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { setProduct } from "../../actions/product-actions"
import Api from "../../api"

const DetailProduct = () => {

    const dispatch = useDispatch()
    const { codigo } = useParams()
    const product = useSelector(state => state.product)
    const { nome, descricao, preco } = product

    const fetchDetail = async () => {
        const product = await Api.find(codigo)
        dispatch(setProduct(product))
    }

    // eslint-disable-next-line
    useEffect(() => codigo && fetchDetail(), [codigo])

    return (
        <>
            <h1>Detalhes do produto</h1>
            <p>{nome}</p>
            <p>{descricao}</p>
            <p>{preco}</p>
        </>
    )
}

export default DetailProduct