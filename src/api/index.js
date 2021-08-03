import axios from 'axios'

const BASE_URL = 'http://ec2-18-223-143-44.us-east-2.compute.amazonaws.com:8080/estoque/produtos'
const BASE_HEADERS = { 
    'Content-Type': 'application/json'
}

axios.defaults.headers = BASE_HEADERS
axios.defaults.baseURL = BASE_URL

const Api = {
    findAll: async () => {
        try {
            const response = await axios.get()
            return response.data
        } catch(error) {
            console.log(error)
        }
    },
    find: async id => {
        try {
            const response = await axios.get(`/${id}`)
            return response.data
        } catch(error) {
            console.log(error)
        }
    },
    create: async product => {
        try {
            const response = await axios.post(product)
            return response.data
        } catch(error) {
            console.log(error)
        }
    },
    update: async product => {
        try {
            const response = await axios.put(product)
            return response.data
        } catch(error) {
            console.log(error)
        }
    },
    delete: async id => {
        try {
            return await axios.delete(`/${id}`)
        } catch(error) {
            console.log(error)
        }
    }
}

export default Api