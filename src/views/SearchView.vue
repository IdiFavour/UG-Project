<script setup>
import Searchcard from '@/components/cards/Searchcard.vue'
import TopNav from '@/components/TopNav.vue'
</script>
<template>
    <TopNav/>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-lg-9 ">
                <w-card class="searchBody p-3 border-0">
                    <div class="col-9 mb-4">
                        <input type="text" class="form-control " placeholder="Search" aria-describedby="passwordHelpBlock">

                    </div>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="list-group flex-row flex-lg-column">
                                <button class="btn btn-login me-md-2 mb-2 rounded-5 text-start" type="button">Post</button>
                                <button class="btn btn-login me-md-2 mb-2 rounded-5 text-start" type="button">People</button>
                                <button class="btn btn-login me-md-2 mb-2 rounded-5 text-start" type="button">Tag</button>
                                <button class="btn btn-login me-md-2 mb-2 rounded-5 text-start" type="button">My Posts</button>

                            </div>
                        </div>
                        <div class="col-lg-9">
                            <Searchcard/>
                            <Searchcard/>
                            <Searchcard/>
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

::placeholder{
    font-size: 1rem;
    color: black !important;
}

</style>