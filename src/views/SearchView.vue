<script>
import Searchcard from '@/components/cards/Searchcard.vue'
import TopNav from '@/components/TopNav.vue'
import Profilecard from '@/components/cards/Profilecard.vue'
import axios from 'axios'
axios.defaults.withCredentials = true
export default{
    components: {
        Searchcard, TopNav, Profilecard
    },
    data(){
      return{
          posts: [],
          users: [],
          showDialog: false,
          processing: true,
          sort: ''
      }
    }, 
    methods: {
      fetchItems(){
        axios({
            method: 'get',
            url: 'http://localhost:5000/post/getposts',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => {
            console.log(res.data.data)
            this.posts = res.data.data
        })
        .catch(err => {
            if (err.response) {
                console.log(err.response.data.error)
                this.posts = []
            }
        })
      },
      fetchUsers(){
        axios({
            method: 'get',
            url: 'http://localhost:5000/users/getusers',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => {
            console.log(res.data.data)
            this.users = res.data.data
        })
        .catch(err => {
            if (err.response) {
                console.log(err.response.data.error)
                this.users = []
            }
        })
      },
  },
  mounted(){
      this.fetchItems(),
      this.fetchUsers()
  },
  computed: {
    noSecurity() {
      return this.sort === 'none';
    }
  },
}
</script>
<template>
    <TopNav/>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-lg-9 ">
                <w-card class="searchBody p-3 border-0">
                    <div class="col-9 mb-4">
                        <input type="text" class="form-control search" placeholder="Search" aria-describedby="passwordHelpBlock">

                    </div>
                    <div class="row">
                        <div class="col-lg-3">
                            <select class="form-select" v-model="sort" aria-label="Default select example">
                                <option value="">Sort By</option>
                                <option selected value="posts">Posts</option>
                                <option value="people">People</option>
                                <option value="2">Tag</option>
                                <option value="3">My Posts</option>
                            </select>
                        </div>
                        <div class="col-lg-9">
                            <div v-if="sort === 'posts'">
                                <div v-for="post in posts" :key="post">
                                    <Searchcard :postDetails="post"></Searchcard>
                                </div>
                            </div>
                            <div v-else-if="sort === 'people'">
                                <div v-for="user in users" :key="user">
                                    <Profilecard :allUsers="user"/>

                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </w-card>
            </div>
        </div>
    </div>
</template>

<style>
.title .form-control:focus {
    color: #212529;
    background-color: none !important;
    border-color: none !important;
    outline: 0 !important;
    box-shadow: none !important;
}
.title input[type=text] {
  background-color: none !important; 
  font-size: 2.8rem;
}

.title input[type=text]:focus {
  border: none !important;
  background-color: none !important;
  outline: 0 !important;
}

.search::placeholder{
    font-size: 1rem;
    color: black !important;
}

</style>