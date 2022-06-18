<script setup>
import Postcard from '@/components/cards/Postcard.vue'
import Listcard from '@/components/cards/Listcard.vue'
</script>
<template>
  <div class="container-field">
    <div class="feed">
      <div class="row my-4">
        <div class="col-lg-7">
          

          <Postcard />
          <Postcard />
          <Postcard />
          
        </div>
        <div class="col-lg-5">
          <Listcard/>
          <Listcard/>
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