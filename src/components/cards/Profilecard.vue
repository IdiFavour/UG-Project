<script>
export default {
    props:{
        allUsers: Object
    },
    data(){
        return{
            follow: 'Follow',
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
        }
    },
    computed: {
        linkToDetails(){
            return "/users/"+this.allUsers.userId
        }
    }
}
</script>

<template>
    <div class="card mb-2 people">
           
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
                <div class="pt-2 ps-2">
                    <span>{{allUsers.firstname}} {{allUsers.lastname}}</span>
                    
                </div>
                </div>
            </div>
            <div class="col-12 pt-2">
            <h5 class="h4 text-black fw-bold">
                {{allUsers.role}}
            </h5>
            </div>
            <div class="col-12">
                
                <button class="btn btn-primary float-end ms-2" v-on:click="followChange">
                              {{follow}}
                            </button>
                <w-button style=" padding: 15px;" class="btn" :route="linkToDetails" color="success btn-login float-end" sm outline>View Profile</w-button>
                
            </div>
        </div>
        </div>
    </div>
</template>