<template>
  <div class="hello">
  <footer class="footer_area">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="footer_top flex-column">
            <div class="footer_logo">
              <a href="#">
                <img src="img/logo2.png" alt="">
              </a>
              <div class="d-lg-block d-none">
                <nav class="navbar navbar-expand-lg navbar-light justify-content-center">
                  <div class="collapse navbar-collapse offset">
                    <ul class="nav navbar-nav menu_nav mx-auto">
                      <li class="nav-item"><router-link to="/"><a class="nav-link text-white">Home</a></router-link></li>
                      <li class="nav-item"><router-link to="/about"><a class="nav-link text-white">About</a></router-link></li>
                      <li class="nav-item"><router-link to="/blogs"><a class="nav-link text-white">BLogs</a></router-link></li>
                      <li class="nav-item"><router-link to="/contact"><a class="nav-link text-white">Contact</a></router-link></li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            <div class="footer_social mt-lg-0 mt-4">
              <a target="_blank" href="https://www.facebook.com/iKatheesh"><i class="fab fa-facebook-f social-btn"></i></a>
              <a target="_blank" href="https://www.twitter.com/iKatheesh"><i class="fab fa-twitter social-btn"></i></a>
              <a target="_blank" href="https://www.instagram.com/iKatheesh"><i class="fab fa-instagram social-btn"></i></a>
              <a target="_blank" href="https://www.linkedin.com/katheeskumar"><i class="fab fa-linkedin social-btn"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="row footer_bottom justify-content-center">
        <p class="col-lg-8 col-sm-12 footer-text">
          Katheesh &copy; 2020 All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  </div>
</template>

<style scoped>
  .social-btn{
    margin-top: 15px;
  }
</style>
