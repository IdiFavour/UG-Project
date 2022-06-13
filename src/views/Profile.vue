<template>
  <div class="profile">
    <div class="row pt-5">
      <div class="col-lg-5">
        <div class="card p-3">
          <div class="d-flex align-items-center">
            <div class="image">
              <img
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                class="rounded"
                width="120"
              />
            </div>

            <div class="ms-3 w-100">
              <h4 class="mb-0 mt-0 h5">Alex HMorrision</h4>
              <span>Senior Journalist</span>

              <div
                class="
                  p-2
                  mt-2
                  bg-primary
                  d-flex
                  justify-content-between
                  rounded
                  text-white
                  stats
                "
              >
                <div class="d-flex flex-column">
                  <span class="articles">Articles</span>
                  <span class="number1">38</span>
                </div>

                <div class="d-flex flex-column">
                  <span class="followers">Followers</span>
                  <span class="number2">980</span>
                </div>

                <div class="d-flex flex-column">
                  <span class="rating">Rating</span>
                  <span class="number3">8.9</span>
                </div>
              </div>

              <div class="button mt-2 d-flex flex-row align-items-center">
              <button class="btn btn-sm btn-login w-50 mx-1">Edit Profile</button>
              <!-- <button class="btn btn-sm btn-primary btn-create w-50 ml-2">
                        Follow
                      </button> -->
            </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-lg-6">
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
    </div>
  </div>
</template>

<style>
.stats {
  background: #f2f5f8 !important;

  color: #000 !important;
}
.articles {
  font-size: 10px;
  color: #a1aab9;
}
.number1 {
  font-weight: 500;
}
.followers {
  font-size: 10px;
  color: #a1aab9;
}
.number2 {
  font-weight: 500;
}
.rating {
  font-size: 10px;
  color: #a1aab9;
}
.number3 {
  font-weight: 500;
}
</style>