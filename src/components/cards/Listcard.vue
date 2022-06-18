<template>
     <div class="card mb-2">
              <!-- Content -->
              <div class="card__content p-3 p-lg-4">
                <div class="row">
                  <div class="col-12">
                    <div class="card-tag">
                      <h4 class="btn fw-bold">#Secondary</h4>
                    </div>
                  </div>
                  <div class="col-12 pt-3 listcard">
                    <p class=" text-black ">
                      What tools/frameworks do you use for styling you web app?
                    </p>
                  </div>
                  <div class="col-12 pt-3 listcard">
                    <p class=" text-black">
                      What tools/frameworks do you use for styling you web app?
                    </p>
                  </div>
                  <div class="col-12 pt-3 listcard">
                    <p class=" text-black">
                      What tools/frameworks do you use for styling you web app?
                    </p>
                  </div>
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