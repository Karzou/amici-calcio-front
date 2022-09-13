/** Import des modules **/

import axios from 'axios'
import Axios from './Caller.service'


let login = (credentials) => {
    return Axios.post('auth/login', credentials)
}

let logout = () => {
    localStorage.removeItem('token')
}

let saveToken = (token) => {
    localStorage.setItem('token', token)
}

let isLogged = () => {
    let token = localStorage.getItem('token')
    return !!token  // retourne false si pas de token / true si token
}

export const accountService = {
    login,
    logout,
    saveToken,
    isLogged
}