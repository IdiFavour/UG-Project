<script>
import Editor from '@tinymce/tinymce-vue'
import axios from 'axios'
axios.defaults.withCredentials = true


export default {
    data() {
        return {
            tags: [
                "javascript",
                "css",
                "html",
                "python",
                "reactjs",
                "vuejs",
                "nodejs",
                "mongodb",
                "firebase",
                "github",
                "git"
            ],
            
            selectedTags: [],
            processing: true,
            showDialog1: false,
            showErrMsg: false,
            errmsg: '',
            imageSources: [],
            imgFiles: [],
            postDetails: {
                postId: "",
                postTitle: "",
                date_added: "",
                postTags: [],
                postText: this.myContent,
                images: [],
            }
        };
    },
    components: {
    'editor': Editor
  },
  computed: {
        validateFields(){
            if (this.postDetails.postTitle == "" || this.postDetails.postText == "" || this.postDetails.postTags == []) {
                this.errmsg = 'All fields are required'
                return false
            }
            return true
        },
  },
  methods: {
        
        async drop(e){
            let files = [...e.dataTransfer.files]
            let images = files.filter(file => file.type.indexOf('image/') >= 0)
            let promises = []
            images.forEach(file => {
                promises.push(this.getBase64(file))
            })
            let sources = await Promise.all(promises)
            this.imageSources = sources
            this.imgFiles = images
        },
        getBase64(file) {
            const reader = new FileReader()
            return new Promise(resolve => {
                reader.onload = ev => {
                    resolve(ev.target.result)
                }
                reader.readAsDataURL(file)
            })
        },
        selectFile(){
            let input = this.$refs.fileInput
            let file = input.files
            if (file && file[0]) {
                    let reader = new FileReader
                    reader.onload = e => {
                        this.imagePreview = e.target.result
                    }   
                    reader.readAsDataURL(file[0])
                    this.imageFile = file[0]
                    this.$emit('input', file[0])
            }
        },
        uploadImages(){
            if (this.validateFields) {
                this.showDialog1 = true
                let formData = new FormData();
                formData.append('item_image', this.imageFile)
                axios({
                    method:'post',
                    url:'http://localhost:5000/post/uploadimages',
                    data: formData
                })
                .then(res => {
                    this.postDetails.images = res.data
                    this.addItemToDb()
                })
                .catch(err => {
                    console.log(err.response.data.error)
                    this.showDialog1 = false
                    this.errmsg = err.response.data.error
                    this.showErrMsg = true
                });   
            }
            else{
                this.showErrMsg = true
            }
        },
        addItemToDb(){
            let date = new Date()
            this.postDetails.date_added = date
            this.postDetails.postTags = this.selectedTags
            axios({
                method: 'post',
                url:'http://localhost:5000/post/additem',
                data: this.postDetails,
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(res => {
                this.clearFields()
            })
            .catch(err => {
                console.log(err.response.data.error)
            })
        },
        clearFields(){ 
            this.imageSources = []
            this.imgFiles = []
            this.processing = false
            this.postDetails.postTitle = ""
            this.postDetails.postText = ""
            this.postDetails.postTags = []
            this.postDetails.images = []
        }
  },
  
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
                <!-- Status and error dialogs -->
                <w-dialog persistent v-model="showDialog1" transition="bounce" :width="320">
                    <div class="w-flex justify-center">
                        <div v-if="processing">
                            <p class="text-center"><w-spinner color="success" /></p>
                            <p class="mt2 text-center text-bold">Processing please wait...</p>
                        </div>
                        <div v-else>
                            <p class="text-center"><img src="../../assets/images/check.png"/></p>
                            <p class="text-center text-bold">Posted successfully!</p>
                            <p class="text-center mt2"><w-button style="width: 100%;" class="btn" sm bg-color="success" @click="showDialog1 = false">Complete process</w-button></p>   
                        </div>
                    </div>
                </w-dialog>

                <w-alert v-if="showErrMsg" error icon-outside>
                    <div class="w-flex justify-space-between align-center">
                        <p>{{errmsg}}!</p>
                        <div><ion-icon class="del-icon" @click="this.showErrMsg = false" name="close-outline"></ion-icon></div>
                    </div>
                </w-alert>
                <div class="mb-4">
                    <label for="formFile" class="form-label">Add a cover image</label>
                    <input class="form-control" type="file" ref="fileInput" id="formFile" @change="selectFile">
                </div>
                <div class="title mb-4">
                    <input type="text" class="form-control" v-model="postDetails.postTitle" placeholder="New post title here">
                </div>
                <div class="tag-list">
                    
                    <div class="form-check form-check-inline">                                          
                        <input class="form-check-input" type="checkbox" value="#html" id="inlineCheckbox1" v-model="selectedTags">
                        <label class="form-check-label" for="inlineCheckbox1">#html</label>
                    </div>
                    <div class="form-check form-check-inline">                                          
                        <input class="form-check-input" type="checkbox" value="#js" id="inlineCheckbox1" v-model="selectedTags">
                        <label class="form-check-label" for="inlineCheckbox1">#js</label>
                    </div>
                    <div class="form-check form-check-inline">                                          
                        <input class="form-check-input" type="checkbox" value="#css" id="inlineCheckbox1" v-model="selectedTags">
                        <label class="form-check-label" for="inlineCheckbox1">#css</label>
                    </div>
                    <p>{{selectedTags}}</p>
                </div>
    
                <div class="text-editor mt-4">
                    <editor
                    api-key="3pgexxzajnrd13iqm99qlm7gpqu6i29asc65a6uaz6omrj0s" v-model="postDetails.postText"
                />
                </div>
                <RouterLink to="/new">
                    <button type="button" class="btn btn-outline-primary btn-create rounded-5 mt-3 float-end" @click="uploadImages">Publish</button>

                </RouterLink>
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