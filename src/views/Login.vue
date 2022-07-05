<script>
import axios from 'axios'
axios.defaults.withCredentials = true
export default {
    data(){
        return {
            processing: true,
            showDialog1: false,
            showErrMsg: false,
            errmsg: '',
            loginDetails: {
                email: '',
                password: ''
            }
        }
    },
    computed:{
        validateFields(){
            if (this.loginDetails.email == '' || this.loginDetails.password == '') {
                this.errmsg = 'All fields are required'
                return false
            }
            return true
        }
    },
    methods: {
        loginUser(){
            if (this.validateFields) {
                this.showDialog1 = true
                axios({
                    method: 'post',
                    url: 'http://localhost:5000/users/login',
                    data: this.loginDetails,
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                .then(res => {
                    this.processing = false
                    console.log(res.data)
                })
                .catch(err => {
                    if (err.response) {
                        console.log(err.response.data.error)
                        this.showDialog1 = false
                        this.errmsg = err.response.data.error
                        this.showErrMsg = true
                    }
                }) 
            }
            else{
                this.showErrMsg = true
            }
        }
    },
}
</script>
<template>
    <body class="ps-0">
        <div class="auth_pages">
            <div class="auth_contain">
                <div class="form_card">
                    <img class="img-form-card" src="https://tpc.googlesyndication.com/simgad/16455733136025148555/downsize_200k_v1" alt="" width="100" height="100">
                </div>
                <div class="form_card">
                    <div class="logo_contain">
                    <a class="jet_logo" href="/"
                        ><img src="/static/media/jets.8cb7f8c4658cb5b72382.png" alt=""
                    /></a>
                    </div>
                    <div class="form_contain">
                        <p class="page_info">Sign Into Account</p>
                        <!-- Status and error dialogs -->
                            <w-dialog persistent v-model="showDialog1" transition="bounce" :width="320">
                                <div class="w-flex justify-center">
                                    <div v-if="processing">
                                        <p class="text-center"><w-spinner color="success" /></p>
                                        <p class="mt2 text-center text-bold">Processing please wait...</p>
                                    </div>
                                    <div v-else>
                                        <p class="text-center"><img src="../assets/images/check.png"/></p>
                                        <p class="text-center text-bold">Login successful!</p>
                                        <p class="text-center mt2"><w-button style="width: 100%;" class="btn" sm bg-color="success" route="/feed">Proceed</w-button></p>   
                                    </div>
                                </div>
                            </w-dialog>

                            <w-alert v-if="showErrMsg" error icon-outside>
                                <div class="w-flex justify-space-between align-center">
                                    <p>{{errmsg}}!</p>
                                    <div><ion-icon class="del-icon" @click="this.showErrMsg = false" name="close-outline"></ion-icon></div>
                                </div>
                            </w-alert>
                            <!-- End of status and error dialogs -->
                        <div class="input_contain">
                        <div class="input_icon"><i class="fal fa-envelope"></i></div>
                        <input type="email" name="email" v-model="loginDetails.email" placeholder="Email address" />
                        </div>
                        <div class="input_contain">
                        <div class="input_icon"><i class="fal fa-lock"></i></div>
                        <input type="password" name="password" v-model="loginDetails.password" placeholder="Password" />
                        </div>
                        <div class="forget_password">
                        <a href="/auth/forgot-password">Forget password</a>
                        </div>
                        <p class="agreement">
                        By signing in, I agree to the Pendev
                        <a
                            href="/auth/signin/terms-and-condition"
                            style="color: rgb(17, 17, 17)"
                            >Terms and Conditions</a
                        >,<a
                            href="/auth/signin/privacy-policy"
                            style="color: rgb(17, 17, 17)"
                            >Privacy Statement</a
                        >.
                        </p>
                        <button type="submit" @click="loginUser" class="submit_btn">Sign In</button>
                        <div class="extras">
                        <p>Don't have an account?</p>
                        &nbsp;
                        <RouterLink to="/signup">
                            <a>Sign Up</a>
                        </RouterLink>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </body>
   
  
</template>

<style>

* {
    box-sizing: border-box;
    font-family: "Nunito", sans-serif !important;
    margin: 0;
    padding: 0;
}
.img-form-card{
    width: 100%;
    height: 440px;
    object-fit: cover;
}
.auth_pages .auth_contain {
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 70vh;
    padding: 50px 20px;
    width: 100%;
}
.auth_pages .auth_contain .form_card {
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    width: 430px;
}
.auth_pages .auth_contain .form_card .logo_contain {
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    justify-content: center;
    padding: 10px 0;
}
.auth_pages .auth_contain .form_card .form_contain {
    padding: 20px;
}
.auth_pages .auth_contain .form_card .logo_contain .jet_logo {
    height: 50px;
    width: auto;
}
.auth_pages .auth_contain .form_card .logo_contain .jet_logo img {
    height: 100%;
    width: 100%;
}
.auth_pages .auth_contain .form_card .form_contain .page_info {
    font-size: .9em;
    margin-bottom: 20px;
    text-align: center;
    font-weight: 800;
    text-transform: uppercase;
}
.auth_pages .auth_contain .form_card .form_contain .input_contain {
    align-items: center;
    border: 1px solid #e0e0e0;
    display: flex;
    height: 45px;
    margin-bottom: 10px;
}
.auth_pages .auth_contain .form_card .form_contain .input_contain .input_icon {
    align-items: center;
    background: #fff;
    border-right: 1px solid #e0e0e0;
    display: flex;
    height: 80%;
    justify-content: center;
    width: 40px;
}
.auth_pages .auth_contain .form_card .form_contain .input_contain input {
    border: none;
    flex: 1 1;
    font-weight: 500;
    height: 100%;
    outline: none;
    padding: 4% 10px 10px;
}
.auth_pages .auth_contain .form_card .form_contain .forget_password {
    margin-bottom: 10px;
    text-align: end;
}
.auth_pages .auth_contain .form_card .form_contain .forget_password a {
    color: #111;
    font-size: .7em;
    font-weight: 900;
    text-decoration: underline;
}
.auth_pages .auth_contain .form_card .form_contain .agreement {
    font-size: .7em;
    font-weight: 900;
    line-height: 1.4em;
    margin-bottom: 20px;
}
.auth_pages .auth_contain .form_card .form_contain .submit_btn {
    background: #0f1473;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: .8em;
    font-weight: 900;
    height: 40px;
    margin-bottom: 20px;
    text-transform: uppercase;
    width: 100%;
}
.auth_pages .auth_contain .form_card .form_contain .extras {
    display: flex;
    font-size: .6em;
    font-weight: 900;
    justify-content: center;
    text-transform: uppercase;
}
.auth_pages .auth_contain .form_card .form_contain .extras a {
    color: #111;
    text-decoration: underline;
}

</style>
