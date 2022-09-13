<template>
    <div>
        <h1>Connexion</h1>
        <form @submit.prevent="login">
            <div class="formGroup">
                <label for="user_login">Login</label>
                <input type="text" id="user_login" v-model="user.login"/>
            </div>
            <div class="formGroup">
                <label for="user_password">Password</label>
                <input type="text" id="user_password" v-model="user.password"/>
            </div>
            <div class="formGroup">
                <button type="submit" class="button">Connexion</button>
            </div>
        </form>
    </div>
</template>

<script>
import { accountService } from '../../_services'
export default {
    name: 'Login',
    data() {
        return {
            user: {
                login: '',
                password: ''
            }
      }  
    },
    methods: {
        login(){
            console.log('stop.form')
            console.log(this.user)

          /*  accountService.login(this.user)
                .then(res => {
                    accountService.saveToken(res.data.access_token)
                    this.$router.push('/admin/dashboard')
                })
                .catch(err => console.log(err)) */
        }
    }
}
</script>