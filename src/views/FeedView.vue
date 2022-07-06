<script>
import Postcard from '@/components/cards/Postcard.vue'
import Listcard from '@/components/cards/Listcard.vue'
import axios from 'axios'
axios.defaults.withCredentials = true

export default {
  components: {
    Postcard,
    Listcard
  },
  data(){
      return{
          items: [],
          showDialog: false,
          processing: true
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
            this.items = res.data.data
            this.items.reverse()

        })
        .catch(err => {
            if (err.response) {
                console.log(err.response.data.error)
                this.items = []
            }
        })
      },
  },
  mounted(){
      this.fetchItems()
  }

}
</script>
<template>
  <div class="container-field">
    <div class="feed">
      <div class="row my-4">
        <div class="col-lg-7 mb-4">
          
              <div v-for="post in items" :key="post">
                <Postcard :postDetails="post"></Postcard>
              </div>             
                 
        </div>
        
        <div class="col-lg-5 d-flex justify-content-center">
          <div class="col-10">
          <Listcard/>

          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* .still {
    position: sticky !important;
    top: 70px !important;
} */


</style>