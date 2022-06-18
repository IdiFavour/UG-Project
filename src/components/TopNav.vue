<script>
import { RouterLink, RouterView } from "vue-router";
import axios from 'axios'
axios.defaults.withCredentials = true
export default {
    data(){
        return{
            showUserToolbar: false
        }
    },
    methods: {
        IsloggedIn(){
            axios.post('http://localhost:5000/users/isloggedin', {
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(res => {
                this.showUserToolbar = true
                console.log(res.data.data.msg)
            })
            .catch(err => {
                if (err.response){
                    console.log(err.response.data.error)
                }
            }) 
        }
    },
    mounted() {
        this.IsloggedIn()
    }
}
</script>
<template>
    <header class="header" id="header">
        <RouterLink to="/feed">
                <button class="btn btn-login me-md-2  rounded-5" type="button">Back</button>

        </RouterLink>

        <div class="gap-2 d-md-flex justify-content-md-end">
            <RouterLink to="/search">
            <button class="btn rounded-5" type="button"><i class='bx bx-search nav_icon d-flex justify-content-center' ></i></button>

            </RouterLink>
            <div v-if="showUserToolbar">
                <RouterLink to="/new">
                <button class="btn btn-login me-md-2 rounded-5" type="button">Create Post</button>

                </RouterLink>
            
                <RouterLink to="/profile">
                <img src="https://i.imgur.com/0LKZQYM.jpg" class="rounded-circle ms-2" width="40" />
                </RouterLink>
            </div>
            <div v-else>
                <RouterLink to="/">
                <button class="btn btn-login me-md-2 rounded-5 d-none d-md-block " type="button">Log in</button>

                </RouterLink>
                <RouterLink to="/signup">
                <button type="button" class="btn btn-outline-primary btn-create rounded-5 d-none d-md-block">Create account</button>

                </RouterLink>
            </div>
            
            
        </div>
    </header>
</template>