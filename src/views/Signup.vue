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
          <form>
            <p class="page_info">Create an Account</p>
            <div class="input_contain">
              <div class="input_icon"><i class="fal fa-envelope"></i></div>
              <input type="email" name="text" placeholder="First name" />
            </div>
            <div class="input_contain">
              <div class="input_icon"><i class="fal fa-envelope"></i></div>
              <input type="email" name="text" placeholder="Last name" />
            </div>
            <div class="input_contain">
              <div class="input_icon"><i class="fal fa-envelope"></i></div>
              <input type="email" name="email" placeholder="Email address" />
            </div>
            <div class="input_contain">
              <div class="input_icon"><i class="fal fa-lock"></i></div>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div class="input_contain">
              <div class="input_icon"><i class="fal fa-lock"></i></div>
              <input type="password" name="password" placeholder="Confirm Password" />
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
            <button type="submit" class="submit_btn">Sign Up</button>
            <div class="extras">
              <p>Already have an account?</p>
              &nbsp;
              <RouterLink to="/">
                <a>Sign In</a>
              </RouterLink>
            </div>
          </form>
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
    background: #f5f5f5;
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

</style>
