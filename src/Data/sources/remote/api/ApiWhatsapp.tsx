import axios from 'axios'

const ApiWhatsapp = axios.create({
    baseURL: 'http://10.0.2.2:4000/api',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export { ApiWhatsapp }

