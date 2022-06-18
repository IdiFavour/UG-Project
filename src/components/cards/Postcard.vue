<template>
    <div class="card mb-2">
            <!-- Cover -->
            <div class="card__cover">
              <img
                src="https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=440&h=220&q=60"
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
                        <span>May 21</span>
                      </div>
                    </div>
                  </div>
                <div class="col-12 pt-2">
                  <h5 class="h3 text-black fw-bold">
                    What tools/frameworks do you use for styling you web app?
                  </h5>
                </div>
                <div class="col-12">
                  <!-- <div class="card-tag">
                      <p class="btn btn-outline-secondary">Secondary</p>
                      <p class="btn btn-outline-secondary">Secondary</p>
                      <p class="btn btn-outline-secondary">Secondary</p>
                      <p class="btn btn-outline-secondary">Secondary</p>
                      <p class="btn btn-outline-secondary">Secondary</p>
                      <p class="btn btn-outline-secondary">Secondary</p>
                    </div> -->
                  <div class="card-tag">
                    <p class="btn">#Secondary</p>
                    <p class="btn">#Secondary</p>
                    <p class="btn">#Secondary</p>
                    <p class="btn">#Secondary</p>
                    <p class="btn">#Secondary</p>
                    <p class="btn">#Secondary</p>
                  </div>
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


</style>