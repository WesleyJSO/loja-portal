import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const AddProduct = () => {
    
    const dispatch = useDispatch()
    const [product, setProduct] = useState({})

    const resetFormFields = () => document.getElementById('create-product-form').reset()
    
    const addProduct = () => {
        dispatch({ type: 'ADD_PRODUCT', product })
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

            <button type="button" onClick={addProduct}>Adicionar produto</button>
        </form>
    )
}

export default AddProduct