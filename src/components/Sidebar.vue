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

document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId);

    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener("click", () => {
        // show navbar
        nav.classList.toggle("show");
        // change icon
        toggle.classList.toggle("bx-x");
        // add padding to body
        bodypd.classList.toggle("body-pd");
        // add padding to header
        headerpd.classList.toggle("body-pd");
      });
    }
  };

  showNavbar("header-toggle", "nav-bar", "body-pd", "header");

  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll(".nav_link");

  function colorLink() {
    if (linkColor) {
      linkColor.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    }
  }
  linkColor.forEach((l) => l.addEventListener("click", colorLink));

  // Your code to run since DOM is loaded and ready
});
</script>

<template>

  <body id="body-pd">
    <header class="header" id="header">
      <div class="header_toggle">
        <i class="bx bx-menu" id="header-toggle"></i>
      </div>

      <div class="gap-2 d-flex justify-content-md-end">
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
        <div v-else class="d-flex">
            <RouterLink to="/">
              <button class="btn btn-login me-md-2 rounded-5 d-none d-md-block " type="button">Log in</button>

            </RouterLink>
            <RouterLink to="/signup">
              <button type="button" class="btn btn-outline-primary btn-create rounded-5 d-none d-md-block">Create account</button>

            </RouterLink>
        </div>
        
        
      </div>
    </header>
    <div class="l-navbar" id="nav-bar">
      <nav class="nav">
        <div>
          <div class="nav_list">
            <RouterLink to="/feed">
              <a class="nav_link active">
                <i class="bx bx-grid-alt nav_icon"></i>
                <span class="nav_name">Home</span>
              </a>
            </RouterLink>

            <RouterLink to="/chat">
              <a class="nav_link">
                <i class="bx bx-message-square-detail nav_icon"></i>
                <span class="nav_name">Messages</span>
              </a>
            </RouterLink>

            <a href="#" class="nav_link">
              <i class="bx bx-bookmark nav_icon"></i>
              <span class="nav_name">Bookmark</span>
            </a>
            <a href="/profile" class="nav_link">
              <i class="bx bx-user nav_icon"></i>
              <span class="nav_name">Profile</span>
            </a>

            <a href="#" class="nav_link">
              <i class="bx bxs-adjust-alt nav_icon"></i>

              <span class="nav_name">Display</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
    <!--Container Main start-->
    <div class="height-100">
      <RouterView />
    </div>
    <!--Container Main end-->
  </body>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap");

:root {
  --header-height: 3rem;
  --nav-width: 68px;
  --first-color: rgb(10, 28, 68);
  --first-color-lit: rgb(232, 236, 243);
  --first-color-light: #afa5d9;
  --white-color: #f7f6fb;
  --body-font: "Nunito", sans-serif;
  --normal-font-size: 1rem;
  --z-fixed: 100;
}

*,
::before,
::after {
  box-sizing: border-box;
}

body {
  position: relative;
  margin: var(--header-height) 0 0 0;
  padding: 0 0.5rem;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  transition: 0.5s;
  background: white;
}

a {
  text-decoration: none;
}

.header {
  width: 100%;
  height: var(--header-height);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  border-bottom: 2px solid rgb(224, 224, 224);
  background-color: white;
  z-index: var(--z-fixed);
  transition: 0.5s;
}

.header_toggle {
  color: var(--first-color);
  font-size: 1.5rem;
  cursor: pointer;
}

.header_img {
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
}

.header_img img {
  width: 40px;
}

.l-navbar {
  position: fixed;
  top: 30;
  left: -30%;
  width: var(--nav-width);
  height: 100vh;
  background-color: var(--first-color);
  padding: 0.5rem 1rem 0 0;
  transition: 0.5s;
  z-index: var(--z-fixed);
}

.nav {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}

.nav_logo,
.nav_link {
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  column-gap: 1rem;
  padding: 0.5rem 0 0.5rem 1.5rem;
}

.nav_logo {
  margin-bottom: 2rem;
}

.nav_logo-icon {
  font-size: 1.25rem;
  color: var(--white-color);
}

.nav_logo-name {
  color: var(--white-color);
  font-weight: 700;
}

.nav_link {
  position: relative;
  color: var(--first-color-light);
  margin-bottom: 1.5rem;
  transition: 0.3s;
}

.nav_link:hover {
  color: var(--white-color);
}

.nav_icon {
  font-size: 1.25rem;
}

.show {
  left: 0;
}

.body-pd {
  padding-left: calc(var(--nav-width) + 1rem);
}

.body-pd .header {
  padding-left: 1.5rem;
}

.active {
  color: var(--white-color);
}

.active::before {
  content: "";
  position: absolute;
  left: 0;
  width: 2px;
  height: 32px;
  background-color: var(--white-color);
}

.height-100 {
  height: 100vh;
}

@media screen and (min-width: 768px) {
  body {
    margin: calc(var(--header-height) + 1rem) 0 0 0;
    padding-left: 3rem;
  }

  .header {
    height: calc(var(--header-height) + 1rem);
    padding: 0 2rem 0 1.5rem;
  }

  .body-pd .header {
    padding-left: 1.5rem;
  }

  .header_img {
    width: 40px;
    height: 40px;
  }

  .header_img img {
    width: 45px;
  }

  .l-navbar {
    left: 0;
    padding: 1rem 1rem 0 0;
  }

  .show {
    width: calc(var(--nav-width) + 156px);
  }

  .body-pd {
    padding-left: calc(var(--nav-width) + 188px);
  }
}

.btn-login:hover {
  text-decoration: underline;
  background-color: var(--first-color-lit);
}

.btn-create:hover {
  text-decoration: underline;
  background-color: var(--first-color);
  border-color: var(--first-color);
}

.btn-create {
  color: var(--first-color);
  border-color: var(--first-color);
}
</style>
