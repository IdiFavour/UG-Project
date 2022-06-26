<script>
export default {
    props:{
        postDetails: Object
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
        },
        linkToDetails(){
            return "/post/"+this.postDetails.postId
        }
    }
    
};

</script>
<template>
    <div class="card mb-2" >
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
                        <span>@hairtaje</span>
                        <br>
                        <small>{{formatDate}}</small>
                      </div>
                    </div>
                  </div>
                <div class="col-12 pt-2">
                  <h5 class="h3 text-black fw-bold">
                    {{postDetails.postTitle}}
                  </h5>
                </div>
                <div class="col-12">
                  <div class="card-tag mb-2" >
                    <p class="btn" v-for="tag in postDetails.postTags" :key="tag">{{tag}}</p>
                  </div>
                  <w-button style="width: 100%; padding: 13px;" class="btn" :route="linkToDetails" color="success" sm outline>More details</w-button>
                </div>
              </div>
            </div>
    </div>

    
</template>

<style>
.card-tag p:hover {
  background: rgb(232, 236, 243);
  color: black;
}
.card-tag p {
  margin: 1px;
  font-size: 0.8rem;
}

.card-tag h4:hover {
  background: rgb(232, 236, 243);
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
  max-height: 280px;
  width: 100%;
  object-fit: cover;
}

.card__content {
  /* Take available height */
  flex: 1;
  line-height: 1.2;
}

small{
  color: black !important;
}


</style>