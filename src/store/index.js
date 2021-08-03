import { createStore } from 'redux'

const INITIAL_STATE = {
    data: [
        {
            nome: 'teste',
            descricao: 'descicao',
            preco: 12.00,
            dataHoraAtualizacao: Date.now()
        }
    ]
}

const products = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return { ...state, data: [ ...state.data, action.product ] }    
        default:
            return state;
    }
}

// TODO change to combine reducers
const store = createStore(products)

export default store