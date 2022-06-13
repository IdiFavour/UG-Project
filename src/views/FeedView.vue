<template>
  <div class="container-field">
    <div class="feed">
      <div class="row flex-column-reverse flex-lg-row">
        <div class="col-lg-7 my-4">
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
                <div class="col-1 pe-0">
                  <div class="avatar">
                    <div class="avatar__letters">
                      <!-- The letters -->
                      NA
                    </div>
                  </div>
                </div>
                <div class="col-11 ps-4 ps-lg-0 ps-md-1">
                  <div class="col-12">
                    <small class="avatar-name">Nacho Idi</small>
                  </div>
                  <div class="col-12">
                    <small class="date-posted">May 2</small>
                  </div>
                </div>
                <div class="col-12 pt-2">
                  <h5 class="h2 text-black fw-bold">
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
          <div class="card mb-2">
            <!-- Content -->
            <div class="card__content p-3 p-lg-4">
              <div class="row">
                <div class="col-1 pe-0">
                  <div class="avatar">
                    <div class="avatar__letters">
                      <!-- The letters -->
                      NA
                    </div>
                  </div>
                </div>
                <div class="col-11 ps-4 ps-lg-0 ps-md-1">
                  <div class="col-12">
                    <small class="avatar-name">Nacho Idi</small>
                  </div>
                  <div class="col-12">
                    <small class="date-posted">May 2</small>
                  </div>
                </div>
                <div class="col-12 pt-2">
                  <h5 class="h4 text-black fw-bold">
                    What tools/frameworks do you use for styling you web app?
                  </h5>
                </div>
                <div class="col-12">
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
        </div>
        <div class="col-lg-5 my-4">
          <div class="still">
            <div class="form-group p-3 pt-0">
                <input type="text" class="form-control p-2 ps-3 rounded-0 shadow-0 form-control-lg form-control-a" placeholder="Search">
            </div>
            <div class="card mb-2">
              <!-- Content -->
              <div class="card__content p-3 p-lg-4">
                <div class="row">
                  <div class="col-12">
                    <div class="card-tag">
                      <h4 class="btn">#Secondary</h4>
                    </div>
                  </div>
                  <div class="second d-flex flex-row mt-2">
                    <div class="image mr-3">
                      <img
                        src="https://i.imgur.com/0LKZQYM.jpg"
                        class="rounded-circle"
                        width="40"
                      />
                    </div>

                    <div class="">
                      <div class="py-2 ps-2">
                        <span>@hairtaje</span>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 pt-2">
                    <p class="h5 text-black fw-bold">
                      What tools/frameworks do you use for styling you web app?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-2">
              <!-- Content -->
              <div class="card__content p-3 p-lg-4">
                <div class="row">
                  <div class="col-12">
                    <div class="card-tag">
                      <h4 class="btn">#Secondary</h4>
                    </div>
                  </div>
                  <div class="second d-flex flex-row mt-2">
                    <div class="image mr-3">
                      <img
                        src="https://i.imgur.com/0LKZQYM.jpg"
                        class="rounded-circle"
                        width="40"
                      />
                    </div>

                    <div class="">
                      <div class="py-2 ps-2">
                        <span>@hairtaje</span>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 pt-2">
                    <p class="h5 text-black fw-bold">
                      What tools/frameworks do you use for styling you web app?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.still {
    position: sticky !important;
    top: 100px !important;
}
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
  width: 100%;
  object-fit: cover;
}

.card__content {
  /* Take available height */
  flex: 1;
  line-height: 1.2;
}
.avatar {
  /* Center the content */
  display: inline-block;
  vertical-align: middle;

  /* Used to position the content */
  position: relative;

  /* Colors */
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;

  /* Rounded border */
  border-radius: 50%;
  height: 2.2rem;
  width: 2.2rem;
}

.avatar__letters {
  /* Center the content */
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}
.date-posted {
  font-size: 0.75rem;
  color: rgb(82, 82, 82);
}
.avatar-name {
  font-size: 0.875rem;
}
</style>