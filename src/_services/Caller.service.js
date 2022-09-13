/** Import des modules **/

import axios from 'axios'
import { accountService } from './account.service'


const Axios = axios.create({
    baseURL: 'http://localhost:8888'
})

Axios.interceptors.request.use(reqeuest => {

    if (accountService.isLogged) {
        reqeuest.headers.Authorization = 'Bearer '+ accountService.getToken
    }

    return reqeuest

})

export default Axios