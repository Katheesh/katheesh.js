<template>
  <div id="app">
    <header class="header_area">
    <div class="main_menu">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <a class="navbar-brand logo_h"><router-link to="/"><img src="img/logo.png" alt=""></router-link> </a>
          <a class="navbar-brand logo_inner_page"><router-link to="/"><img src="img/logo2.png" alt=""></router-link></a>      
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
           aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
            <ul class="nav navbar-nav menu_nav">
              <li class="nav-item"><router-link to="/"><a class="nav-link">Home</a></router-link></li>
              <li class="nav-item"><router-link to="/about"><a class="nav-link">About</a></router-link></li>
              <li class="nav-item"><router-link to="/blogs"><a class="nav-link">Blog</a></router-link></li>
              <li class="nav-item"><router-link to="/contact"><a class="nav-link">Contact</a></router-link></li>
              <li class="nav-item"><a href="/cli/index.html" class="nav-link">CLI Version</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </header>
    <router-view />
  </div>
</template>

<script>
  export default {
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll () {
        let header = document.querySelector(".header_area");
        if (window.scrollY > 50) {
        header.classList.add('navbar_fixed'); 
        } else if (window.scrollY < 50) {
          header.classList.remove('navbar_fixed');
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "./scss/_variables.scss";
  @import "./scss/_mixins.scss";
  @import "./scss/_reset.scss";
  @import "./scss/_predefine.scss";
  @import "./scss/_header.scss";
  @import "./scss/_banner.scss";
  @import "./scss/_blog.scss";
  @import "./scss/_contact.scss";
  @import "./scss/_elements.scss";
  @import "./scss/_home.scss";
  @import "./scss/_responsive.scss";
  @import "./scss/_footer.scss";
</style>
