/** Import des modules **/

import axios from 'axios'
import { accountService } from './account.service'

//import de router pour que les redirections soient plus rapide que $router
import router from '../router'


const Axios = axios.create({
    baseURL: 'http://localhost:8888'
})

Axios.interceptors.request.use(request => {

    if (accountService.isLogged) {
        request.headers.Authorization = 'Bearer '+ accountService.getToken
    }

    return request

})

Axios.interceptors.response.use(response => {
    return response
}, error => {
    console.log(error.response.status)
    if (error.response.status == 401) {
        accountService.logout()
        router.push('/login')
    }
})

export default Axios