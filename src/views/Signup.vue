<script>

export default{
    data(){
      return{
            processing: true,
            showDialog1: false,
            showErrMsg: false,
            errmsg: '',
            userDetails: {
                userId: '',
                firstname: '',
                lastname: '',
                email: '',
                role: '',
                password: '',
                date_joined: '',
                email_verified: false,
                notifications: true
            }
        }

    },
    computed: {
        validateFields(){
            if (this.userDetails.firstname == "" || this.userDetails.lastname == "" || this.userDetails.email == "" || this.userDetails.role == "" || this.userDetails.password == "") {
                this.errmsg = "All fields are required"
                return false
            }
            return true
        }
    },
    methods: {
        register(){
            if (this.validateFields) {
                let date = new Date()
                this.userDetails.date_joined = date
                this.showDialog1 = true
                fetch('http://localhost:5000/users/register', {
                    method: 'POST',
                    body: JSON.stringify(this.userDetails),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                .then(response => response.json().then(res => ({
                    status: response.status,
                    data: res
                })))
                .then(res => {
                    if (res.status == 200) {
                        this.processing = false
                        console.log(res.data)
                    }
                    else{
                        this.showDialog1 = false
                        this.errmsg = res.data.error
                        this.showErrMsg = true
                    }
                })
                .catch(err => console.log(err))   
            }
            else{
                this.showErrMsg = true
            }
        },
    }
}

</script>

<template>
<body class="ps-0">
  <div class="auth_pages">
    <div class="auth_contain">
      <div class="form_card">
        <div class="logo_contain">
          <a class="jet_logo" href="/"
            ><img src="/static/media/jets.8cb7f8c4658cb5b72382.png" alt=""
          /></a>
        </div>
        <div class="form_contain">
          <!-- Status and error dialogs -->
                <w-dialog persistent v-model="showDialog1" transition="bounce" :width="320">
                    <div class="w-flex justify-center">
                        <div v-if="processing">
                            <p class="text-center"><w-spinner color="success" /></p>
                            <p class="mt2 text-center text-bold">Processing please wait...</p>
                        </div>
                        <div v-else>
                            <p class="text-center"><img src="../assets/images/check.png"/></p>
                            <p class="text-center text-bold">Registration successful!</p>
                            <p class="text-center mt2"><w-button style="width: 100%;" route="/" class="btn" sm bg-color="success">Proceed to login</w-button></p>   
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
            <p class="page_info">Create an Account</p>
            <div class="input_contain">
              <div class="input_icon"><i class="fal fa-envelope"></i></div>
              <input type="text" v-model="userDetails.firstname" name="text" placeholder="First name" />
            </div>
            <div class="input_contain">
              <div class="input_icon"><i class="fal fa-envelope"></i></div>
              <input type="text" v-model="userDetails.lastname" name="text" placeholder="Last name" />
            </div>
            <div class="input_contain">
              <div class="input_icon"><i class="fal fa-envelope"></i></div>
              <select class="form-select border-0" v-model="userDetails.role">
                <option value="" disabled selected>Select Role</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="UI / UX Designer">UX / UI Designer</option>
                <option value="Project Manager">Project manager</option>
                <option value="">Not Listed</option>
              </select>
            </div>
            <div class="input_contain">
              <div class="input_icon"><i class="fal fa-envelope"></i></div>
              <input type="email" v-model="userDetails.email" name="email" placeholder="Email address" />
            </div>
            <div class="input_contain">
              <div class="input_icon"><i class="fal fa-lock"></i></div>
              <input type="password" v-model="userDetails.password" name="password" placeholder="Password" />
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
            <button type="submit" @click="register" class="submit_btn">Sign Up</button>
            <div class="extras">
              <p>Already have an account?</p>
              &nbsp;
              <RouterLink to="/">
                <a>Sign In</a>
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

.modal {
  /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

</style>
