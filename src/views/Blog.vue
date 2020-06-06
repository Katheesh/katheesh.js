<template>
  <div class="blog">
  <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
          <div class="container">
              <div class="banner_content text-center">
                  <h2>My Blogs</h2>
                  <div class="page_link">
                      <router-link to="/"><a>Home</a></router-link>
                      <router-link to="/blogs"><a>Blogs</a></router-link>
                  </div>
              </div>
          </div>
      </div>
  </section>
  <!--================ End Banner Area =================-->

	<!--================Blog Area =================-->
  <section class="blog_area section-margin">
      <div class="container">
          <div class="row">
              <div class="col-lg-8 mb-5 mb-lg-0">
                  <div class="blog_left_sidebar">    
                      <article class="blog_item">                       
                        <div class="blog_details">
                        	<router-link to="/blog/02">
                            <a class="d-inline-block">
                                <h2>Google inks pact for new 35-storey office</h2>
                            </a></router-link>
                            <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                            <ul class="blog-info-link">
                              <li><a href="#"><i class="far fa-user"></i> Travel, Lifestyle</a></li>
                              <li><a href="#"><i class="far fa-comments"></i> 03 Comments</a></li>
                            </ul>
                        </div>
                      </article>
                    </div>
              </div>
              <div class="col-lg-4">
                  <div class="blog_right_sidebar">
                      <aside class="single_sidebar_widget search_widget">
                            <div class="form-group">
                              <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Search Keyword">
                                <div class="input-group-append">
                                  <button class="btn" type="button"><i class="ti-search"></i></button>
                                </div>
                              </div>
                            </div>
                            <button class="primary_btn rounded-0 primary-bg text-white w-100" type="submit">Search</button>
                      </aside>
                      <aside class="single_sidebar_widget newsletter_widget">
                        <h4 class="widget_title">Newsletter</h4>

                        <form action="#">
                          <div class="form-group">
                            <input type="email" v-model="input.subscribe" class="form-control" placeholder="Enter email" required>
                          </div>
                          <button class="primary_btn rounded-0 primary-bg text-white w-100" type="submit" v-on:click="subscribe()">Subscribe</button>
                        </form>
                      </aside>
                  </div>
              </div>
          </div>
      </div>
  </section>
  <!--================Blog Area =================-->
  
  <Footer/>
    
  </div>
</template>

<script>

import Footer from '@/components/Footer.vue'

export default {
   name: 'Home',
   components: {
    Footer
   },
   data() {
      return {
         input:{
            subscribe : ""
         } 
      };
   },
   methods: {
      subscribe() {
         if(this.input.subscribe != "")
         {
            this.input.subscribe = "";
            this.$toasted.show("Your Email Added to the subscriber list", { 
               theme: "toasted-primary", 
               position: "top-right", 
               duration : 5000
            });
         }
         else
         {
            this.$toasted.show("Please enter valid email address", { 
               theme: "toasted-primary", 
               position: "top-right", 
               duration : 5000
            });
         }
      }
    }
}
</script>