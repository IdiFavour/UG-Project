<script>
import axios from 'axios'
export default {
  data(){
    return{
      newsData: []
    }
  },
    methods: {
    fetchNews(){
            this.showDialog = true
            axios({
                method: 'get',
                url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=31decb84732c44aea7be19decb79a85f&category=technology&pageSize=5',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                withCredentials: false
            })
            .then(res => {
                this.newsData = res.data.articles
            })
            .catch(err => {
                if (err.response) {
                    console.log(err.response.data.error)
                    this.newsData = []
                }
            })
        },
  },
  mounted(){
    this.fetchNews()
  }

}
</script>
<template>
     <div class="card mb-2">
              <!-- Content -->
              <div class="card__content p-3 p-lg-4">
                <div class="row">
                  <div class="col-12">
                    <div class="card-tag">
                      <h4 class="btn fw-bold">#TopTechNews</h4>
                    </div>
                  </div>
                  <a :href="item.url" target="_blank" class="text-decoration-none text-dark" v-for="item in newsData" :key="item">
                    <div class="tab-item pb-3 pt-3 border-bottom">
                      <p class="m-0">{{item.title}}</p>
                      <p class="m-0 text-light"><small>{{item.author}} </small></p>
                    </div>
                  </a>
                </div>
              </div>
      </div>
</template>

<style>
.listcard:hover{
    background: rgb(232, 236, 243);
}
.card-tag p:hover {
  background: rgb(232, 236, 243);
  color: black;
}
.card-tag p {
  font-size: 0.8rem;
}

.card-tag h4:hover {
  background: white;
  color: black;
}

.card {
  display: flex;
  flex-direction: column;
  background: white;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(224, 224, 224);
  border-image: initial;
  border-radius: 5px;
}

.card__cover img {
  height: auto;
  width: 100%;
  object-fit: cover;
}

.card__content {
  /* Take available height */
  flex: 1;
  line-height: 1.2;
}
</style>