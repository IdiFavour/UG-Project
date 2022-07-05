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
                                <!-- <option value="">Sort By</option> -->
                                <option value="posts" selected>Posts</option>
                                <option value="people">People</option>
                                <option value="tags">Tag</option>
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
                            <div v-else-if="sort === 'tags'">
                                <div class="card mb-2">
                                        <!-- Content -->
                                        <div class="card__content p-3 p-lg-4 py-lg-3">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="card-tag">
                                                    <h4 class="btn fw-bold">#Html</h4>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <p class=" text-black mb-0">
                                                        The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.
                                                        It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.
                                                    </p>
                                                </div>
                                                <div class="col-12">
                                                    <button class="btn btn-primary float-end ms-2">
                                                        Follow
                                                    </button>
                                                
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div class="card mb-2">
                                    <!-- Content -->
                                    <div class="card__content p-2 p-lg-4 py-lg-3">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="card-tag">
                                                <h4 class="btn fw-bold">#Javascript</h4>
                                                </div>
                                            </div>
                                            <div class="col-12 ">
                                                <p class=" text-black ">
                                                    JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web,
                                                    alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.
                                                </p>
                                            </div>
                                            <div class="col-12">
                                                    <button class="btn btn-primary float-end ms-2">
                                                        Follow
                                                    </button>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card mb-2">
                                        <!-- Content -->
                                        <div class="card__content p-3 p-lg-4 py-lg-3">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="card-tag">
                                                    <h4 class="btn fw-bold">#Css</h4>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <p class=" text-black ">
                                                        Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.
                                                    </p>
                                                </div>
                                                <div class="col-12">
                                                    <button class="btn btn-primary float-end ms-2">
                                                        Follow
                                                    </button>
                                                
                                                </div>
                                            </div>
                                        </div>
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