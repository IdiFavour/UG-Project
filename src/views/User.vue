<script>
import TopNav from "../components/TopNav.vue";
import axios from 'axios'
axios.defaults.withCredentials = true
export default {
    components: {
        TopNav
    },
    data(){
        return{
            Details: {
                userId: '',
                firstname: '',
                lastname: '',
                skills: [],
                role: '',
                date_joined: '',
                tags_followed: []
            },
            follow: 'Follow',
            showDialog: false,
            processing: true
        }
    },
    methods: {
        getDetails(){
            this.showDialog1 = true
            axios({
                    method: 'get',
                    url: `http://localhost:5000/users/userdetails?userId=${this.$route.params.id}`,
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                })
                .then(res => {
                    this.Details = res.data.data
                    console.log(details)
                    this.showDialog1 = false
                })
                .catch(err => {
                    if (err.response) {
                        console.log(err.response.data.error)
                        this.Details = {}
                    }
                })
        },
        followChange(){
            console.log(this.follow)
            if (this.follow == 'Following'){
                this.follow = 'Follow'
            }
            else{
                this.follow = 'Following'
            }
        }
    },
    mounted(){
        this.getDetails()
    },
    computed: {
        formatDate(){
            const date = new Date(this.Details.date_joined);
            let year = date.getFullYear()
            let month = date.getMonth()+1
            let dt = date.getDate();
            let hours = date.getHours()
            let minutes = date.getMinutes()
            if (dt < 10) {
                dt = '0' + dt;
            }
            if (month < 10) {
                month = '0' + month;
            }
            if (hours < 10){
                hours = '0' + hours;
            }
            if (minutes < 10){
                minutes = '0' + minutes;
            }
            return dt + '-'+month+'-'+year
        }
    }
}
</script>


<template>
    <TopNav/>
    <div class="profile">
    <div class="container emp-profile">
            <div >
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
                            <h3 class="uppercase fw-bold">
                                {{Details.firstname}} {{Details.lastname}}
                            </h3>
                            <h5>
                                {{Details.role}}
                            </h5>
                            
                        </div>
                        
                    </div>
                    <div class="col-md-2">
                        
                          <!-- <RouterLink to="/settings">
                            <button class="btn btn-sm btn-login w-50 mx-1">
                              Edit Profile
                            </button>
                          </RouterLink> -->
                          
                          <button class="btn btn-sm btn-primary w-50 ml-2" v-on:click="followChange">
                              {{follow}}
                            </button>
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
                              <div class="col-12 pt-2 ">
                                <div class="card-tag">
                                  <p class="btn" v-for="skills in Details.skills" :key="skills">
                                      {{skills}}
                                  </p>
                                </div>
                                
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
                                  {{Details.tags_followed}} tags followed
                                </p>
                              </div>
                              <div class="col-12 py-2 listcard">
                                <p class=" text-black mb-0">
                                  Joined: {{formatDate}}
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
            </div>           
        </div>
  </div>
</template>