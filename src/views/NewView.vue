<script>
data: () => ({
  items: [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 }
  ],
  selection: [1, 3]
})


</script>
<template>
<div class="container">
    <div class="row">
        <div class="col-lg-8">
            <RouterLink to="/feed">
              <button class="btn btn-login me-md-2 mb-3 rounded-5" type="button">Back</button>

            </RouterLink>
            <w-card class="postBody p-3">
                <div class="mb-4">
                    <label for="formFile" class="form-label">Add a cover image</label>
                    <input class="form-control" type="file" id="formFile">
                </div>
                <div class="title mb-4">
                    <input type="text" class="form-control" placeholder="New post title here">
                </div>
                <div class="tag-list">
                    <!-- <w-select :items="items" v-model="selection" multiple>
                        <template #selection="{ item }">
                            <w-tag class="mr2" v-for="(item, i) in item" :key="i" bg-color="grey-light4">
                            {{ item.label }}
                            </w-tag>
                        </template>
                    </w-select> -->
                </div>
            </w-card>
        </div>
    </div>
    
</div>
   
</template>
<style>
.postbody{
    width: 100%;
}
.title .form-control:focus {
    color: #212529;
    background-color: none !important;
    border-color: none !important;
    outline: 0 !important;
    box-shadow: none !important;
}
.title input[type=text] {
  border: none !important;
  background-color: none !important; 
  outline: 0 !important;
  font-size: 2.8rem;
}

.title input[type=text]:focus {
  border: none !important;
  background-color: none !important;
  outline: 0 !important;
}
::placeholder{
    font-size: 2.8rem;
    color: black !important;
}
</style>