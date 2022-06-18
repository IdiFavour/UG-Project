<script>
export default {
    data(){
        return {
            tags: [
                'javascript', 'css', 'html', 'python', 'reactjs', 'vuejs', 'nodejs', 'mongodb', 'firebase', 'github', 'git'
            ]
        }
    }

}



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
                    
                    <div class="form-check form-check-inline" :key="tag" v-for="tag in tags">                                          
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">#{{tag}}</label>
                    </div>
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
.form-control::placeholder{
    font-size: 2.8rem;
    color: black !important;
}
</style>