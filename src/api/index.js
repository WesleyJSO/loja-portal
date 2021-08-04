import axios from "../axios"

const RESOURCE = '/produtos'

const Api = {
    findAll: async () => {
        try {
            const response = await axios.get(`${RESOURCE}`)
            console.log({response})
            return response.data
        } catch(error) {
            console.log({error})
        }
    },
    find: async id => {
        try {
            const response = await axios.get(`${RESOURCE}/${id}`)
            console.log({response})
            return response.data
        } catch(error) {
            console.log({error})
        }
    },
    delete: async id => {
        try {
            return await axios.delete(`${RESOURCE}/${id}`)
        } catch(error) {
            console.log({error})
        }
    },
    create: async product => {
        try {
            const response = await axios.post(`${RESOURCE}`, product)
            console.log({response})
            return response.data
        } catch(error) {
            console.log({error})
        }
    },
    update: async product => {
        try {
            const response = await axios.put(`${RESOURCE}`, product)
            console.log({response})
            return response.data
        } catch(error) {
            console.log({error})
        }
    }
}

export default Api