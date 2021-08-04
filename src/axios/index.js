import axios from "axios";

export default axios.create({
    baseURL: 'http://ec2-18-223-143-44.us-east-2.compute.amazonaws.com:8080/estoque',
    headers: { 
        'Content-Type': 'application/json'
    }
})