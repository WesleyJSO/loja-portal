import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../actions/product-actions'
import Api from '../../api'


const AddProduct = () => {

    const dispatch = useDispatch()
    const [product, setProduct] = useState({})

    const resetFormFields = () => document.getElementById('create-product-form').reset()
    const save = product => Api.create(product)

    const addAndResetForm = () => {
        save(product)
        dispatch(addProduct(product))
        resetFormFields()
    }

    return (
        <form id="create-product-form">
            <label htmlFor="name">Nome</label>
            <input name="name" onChange={event => setProduct({ ...product, nome: event.target.value })} />
            
            <label htmlFor="description">Descriçao</label>
            <input name="description" onChange={event => setProduct({ ...product, descricao: event.target.value })} />
            
            <label htmlFor="price">Preço</label>
            <input name="price" onChange={event => setProduct({ ...product, preco: event.target.value })} />

            <button type="button" onClick={addAndResetForm}>Adicionar produto</button>
        </form>
    )
}

export default AddProduct