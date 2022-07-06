<script>
import TopNav from "../components/TopNav.vue";
import Listcard from "../components/cards/Listcard.vue";
import axios from 'axios'
axios.defaults.withCredentials = true
export default {
    components: {
        TopNav, Listcard
    },
    data(){
        return{
            postDetails: {
                postId: '',
                postTitle: '',
                date_added: '',
                postTags: [],
                postText: '',
                images: '',
                userId: ''
            },
            userDetails: {
                userId: '',
                firstname: '',
                lastname: '',
            },
            follow: 'Follow',
            showDialog: false,
            processing: true
        }
    },
    methods: {
        followChange(){
            console.log(this.follow)
            if (this.follow == 'Following'){
                this.follow = 'Follow'
            }
            else{
                this.follow = 'Following'
            }
        },
        getItemDetails(){
            this.showDialog1 = true
            axios({
                    method: 'get',
                    url: `http://localhost:5000/post/getpostdetails?postId=${this.$route.params.id}`,
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                })
                .then(res => {
                    this.postDetails = res.data.data.postDetails
                    this.userDetails = res.data.data.userDetails
                    this.showDialog1 = false
                })
                .catch(err => {
                    if (err.response) {
                        console.log(err.response.data.error)
                        this.postDetails = {}
                    }
                })
        }
    },
    mounted(){
        this.getItemDetails()
    },
    computed: {
        formatDate(){
            const date = new Date(this.postDetails.date_added);
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
            return month + '-'+dt
        }
    }
}
</script>



<template>
    <TopNav/>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-lg-7 " v-if="itemDetails != {}">
                <div class="card mt-3 mb-2">
                        <!-- Cover -->
                        <div class="card__cover">
                        <img
                            :src="postDetails.images"
                            alt=""
                        />
                        </div>

                        <!-- Content -->
                        <div class="card__content p-3 p-lg-4">
                        <div class="row">
                            <div class="second d-flex flex-row mt-2">
                                <div class="image mr-3">
                                <img
                                    src="https://i.imgur.com/0LKZQYM.jpg"
                                    class="rounded-circle"
                                    width="40"
                                />
                                </div>

                                <div class="">
                                <div class="py-1 ps-2">
                                    <span>{{userDetails.firstname}} {{userDetails.lastname}}</span>
                                    <br>
                                    <small>{{formatDate}}</small>
                                </div>
                                </div>
                            </div>
                            <div class="col-12 pt-2">
                            <h5 class="h2 text-black fw-bold py-2">
                                {{postDetails.postTitle}}
                            </h5>
                            </div>
                            <div class="col-12">
                                <div class="card-tag" >
                                    <p class="btn" v-for="tag in postDetails.postTags" :key="tag">{{tag}}</p>
                                </div>
                            </div>
                            <div class="col-12 mt-5">
                                <p v-html="postDetails.postText"></p>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
            <div class="col-lg-4 ">
                <div class="card mt-3 still">
                    <div class="card__content p-3">
                        <div class="second d-flex flex-row mt-2">
                            <div class="image mr-3">
                                <img
                                    src="https://i.imgur.com/0LKZQYM.jpg"
                                    class="rounded-circle"
                                    width="40"
                                />
                            </div>

                            <div class="">
                                <div class="py-2 ps-2">
                                    <span>{{userDetails.firstname}} {{userDetails.lastname}}</span>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <button class="btn btn-primary w-100 mt-2" v-on:click="followChange">
                              {{follow}}
                            </button>
                    </div>
                    <Listcard/>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.still{
    position: sticky !important;
    top: 70px;
}
</style>