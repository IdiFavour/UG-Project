<script>
import TopNav from "../components/TopNav.vue";

export default {
    components: {
        TopNav
    }   
}
</script>



<template>
    <TopNav/>
    <div class="container">
        <div class="row">
            <div class="col-lg-9">
                <div class="row g-3 mt-5">
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Firstname</label>
                        <input type="text" class="form-control" id="inputEmail4">
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Lastname</label>
                        <input type="text" class="form-control" id="inputPassword4">
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4">
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Password</label>
                        <input type="password" class="form-control" id="inputPassword4">
                    </div>
                    <div class="col-md-6">
                        <label for="inputAddress" class="form-label">Role</label>
                        <input type="text" class="form-control" id="inputAddress" >
                    </div>
                    <div class="col-md-6">
                        <label for="inputAddress2" class="form-label">Address 2</label>
                        <input type="text" class="form-control" id="inputAddress2" >
                    </div>
                    
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </div>
   
            </div>
        </div>
    </div>
    </div>
    
</template>