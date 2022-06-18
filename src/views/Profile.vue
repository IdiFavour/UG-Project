<script setup>
import Postcard from "@/components/cards/Postcard.vue";
</script>
<template>
  <div class="profile">
    <div class="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                            <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                            <h5>
                                Kshiti Ghelani
                            </h5>
                            <h6>
                                Web Developer and Designer
                            </h6>
                            
                        </div>
                    </div>
                    <div class="col-md-2">
                        
                          <RouterLink to="/settings">
                            <button class="btn btn-sm btn-login w-50 mx-1">
                              Edit Profile
                            </button>
                          </RouterLink>
                          <!-- <button class="btn btn-sm btn-primary btn-create w-50 ml-2">
                                  Follow
                          </button> -->
                        
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card my-3">
                          <!-- Content -->
                          <div class="card__content p-3 p-lg-4">
                            <div class="row">
                              <div class="col-12">
                                <h4 class=" h5 fw-bold">Skills/Languages</h4>
                              </div>
                              <div class="col-12 pt-2 listcard">
                                <p class=" text-black ">
                                  MEVN, MERN, Python
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card my-3">
                          <!-- Content -->
                          <div class="card__content p-3 py-2">
                            <div class="row">
                              
                              <div class="col-12 py-2 listcard">
                                <p class=" text-black mb-0">
                                  0 posts published
                                </p>
                              </div>
                              <div class="col-12 py-2 listcard">
                                <p class=" text-black mb-0">
                                  3 tags followed
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="tabs">
                          <div class="tab-2">
                            <label for="tab2-1">Posts</label>
                            <input id="tab2-1" name="tabs-two" type="radio" checked="checked" />
                            <div>
                              <Postcard />
                              <Postcard />
                            </div>
                          </div>
                          <div class="tab-2">
                            <label for="tab2-2">Two</label>
                            <input id="tab2-2" name="tabs-two" type="radio" />
                            <div>
                              <h4>Tab Two</h4>
                              <p>
                                Quisque sit amet turpis leo. Maecenas sed dolor mi. Pellentesque
                                varius elit in neque ornare commodo ac non tellus. Mauris id
                                iaculis quam. Donec eu felis quam. Morbi tristique lorem eget
                                iaculis consectetur. Class aptent taciti sociosqu ad litora
                                torquent per conubia nostra, per inceptos himenaeos. Aenean at
                                tellus eget risus tempus ultrices. Nam condimentum nisi enim,
                                scelerisque faucibus lectus sodales at.
                              </p>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </form>           
        </div>
  </div>
</template>

<style>
.number3 {
  font-weight: 500;
}
.tabs {
  display: block;
  display: -webkit-flex;
  display: -moz-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  -moz-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0;
  overflow: hidden;
}
.tabs [class^="tab"] label,
.tabs [class*=" tab"] label {
  color: #000;
  cursor: pointer;
  display: block;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1em;
  padding: 1rem 0;
  text-align: center;
}
.tabs [class^="tab"] [type="radio"],
.tabs [class*=" tab"] [type="radio"] {
  border-bottom: 1px solid rgba(239, 237, 239, 0.5);
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: block;
  width: 100%;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.tabs [class^="tab"] [type="radio"]:hover,
.tabs [class^="tab"] [type="radio"]:focus,
.tabs [class*=" tab"] [type="radio"]:hover,
.tabs [class*=" tab"] [type="radio"]:focus {
  border-bottom: 1px solid #fd264f;
}
.tabs [class^="tab"] [type="radio"]:checked,
.tabs [class*=" tab"] [type="radio"]:checked {
  border-bottom: 2px solid #fd264f;
}
.tabs [class^="tab"] [type="radio"]:checked + div,
.tabs [class*=" tab"] [type="radio"]:checked + div {
  opacity: 1;
}
.tabs [class^="tab"] [type="radio"] + div,
.tabs [class*=" tab"] [type="radio"] + div {
  display: block;
  opacity: 0;
  padding: 2rem 0;
  width: 90%;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.tabs .tab-2 {
  width: 50%;
}
.tabs .tab-2 [type="radio"] + div {
  width: 200%;
  margin-left: 200%;
}
.tabs .tab-2 [type="radio"]:checked + div {
  margin-left: 0;
}
.tabs .tab-2:last-child [type="radio"] + div {
  margin-left: 100%;
}
.tabs .tab-2:last-child [type="radio"]:checked + div {
  margin-left: -100%;
}

/* profile */
.emp-profile{
    padding: 3%;
    margin-top: 3%;
    margin-bottom: 3%;
    border-radius: 0.5rem;
    background: #fff;
}
.profile-img{
    text-align: center;
}
.profile-img img{
    width: 70%;
    height: 100%;
}
.profile-img .file {
    position: relative;
    overflow: hidden;
    margin-top: -20%;
    width: 70%;
    border: none;
    border-radius: 0;
    font-size: 15px;
    background: #212529b8;
}
.profile-img .file input {
    position: absolute;
    opacity: 0;
    right: 0;
    top: 0;
}
.profile-head h5{
    color: #333;
}
.profile-head h6{
    color: #0062cc;
}
.profile-edit-btn{
    border: none;
    border-radius: 1.5rem;
    width: 70%;
    padding: 2%;
    font-weight: 600;
    color: #6c757d;
    cursor: pointer;
}


.profile-work p{
    font-size: 12px;
    color: #818182;
    font-weight: 600;
    margin-top: 10%;
}
.profile-work a{
    text-decoration: none;
    color: #495057;
    font-weight: 600;
    font-size: 14px;
}
.profile-work ul{
    list-style: none;
}
.profile-tab label{
    font-weight: 600;
}
.profile-tab p{
    font-weight: 600;
    color: #0062cc;
}
</style>