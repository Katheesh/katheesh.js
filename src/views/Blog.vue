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

                      <!-- <center><h3>No blogs found</h3></center> -->
                      <article class="blog_item">
                        <div class="blog_item_img">
                          <img class="card-img rounded-0" src="img/blog/my-blog/helloworld.png" alt="">
                          <router-link to="/blogs">
                          <a class="blog_item_date">
                            <h3>01</h3>
                            <p>May</p>
                          </a>
                          </router-link>
                        </div>                      
                        <div class="blog_details">
                        	<router-link to="/blogs">
                            <a class="d-inline-block">
                                <h2>Hello World by Katheesh</h2>
                            </a></router-link>
                            <p>Hi my dear friends, This is my first blog. I will try to write blog to share my tricks and techniques with others. </p>
                            <p>"Hello, World!" program generally is a computer program that outputs or displays the message "Hello, World!". Such a program is very simple in most programming languages, and is often used to illustrate the basic syntax of a programming language. It is often the first program written by people learning to code </p>
                            <ul class="blog-info-link">
                              <li><a href="#"><i class="far fa-user"></i> Katheesh </a></li>
                            </ul>
                        </div>
                      </article>

                      <div id="gitalk-container"></div>
                      
                      <!-- <article class="blog_item">
                        <div class="blog_item_img">
                          <img class="card-img rounded-0" src="img/blog/main-blog/m-blog-2.jpg" alt="">
                          <router-link to="/blog/02">
                          <a class="blog_item_date">
                            <h3>15</h3>
                            <p>Jan</p>
                          </a></router-link>
                        </div>                        
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
                      </article> -->
                    
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

                      <aside class="single_sidebar_widget post_category_widget">
                        <h4 class="widget_title">Category</h4>
                        <ul class="list cat-list">
                            <li>
                                <a href="#" class="d-flex">
                                    <p>Latest Technology</p>
                                    <p>(0)</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="d-flex">
                                    <p>Programming</p>
                                    <p>(0)</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="d-flex">
                                    <p>Common Life</p>
                                    <p>(0)</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="d-flex">
                                    <p>Business Life</p>
                                    <p>(0)</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="d-flex">
                                    <p>UI & UX </p>
                                    <p>(0)</p>
                                </a>
                            </li>
                        </ul>
                      </aside>

                      <aside class="single_sidebar_widget popular_post_widget">
                          <h3 class="widget_title">Recent Post</h3>
                          <div class="media post_item">
                              <img src="img/blog/popular-post/helloworld.png" alt="post">
                              <div class="media-body">
                                  <router-link to="/blogs">
                                      <h3>Hello World by Katheesh...</h3>
                                  </router-link>
                                  <p>May 01, 2020</p>
                              </div>
                          </div>
                          <!-- <div class="media post_item">
                              <img src="img/blog/popular-post/post2.jpg" alt="post">                              
                              <div class="media-body">
                                  <a href="single-blog.html">
                                      <h3>The Amazing Hubble</h3>
                                  </a>
                                  <p>02 Hours ago</p>
                              </div>
                          </div>
                          <div class="media post_item">
                              <img src="img/blog/popular-post/post3.jpg" alt="post">                              
                              <div class="media-body">
                                  <a href="single-blog.html">
                                      <h3>Astronomy Or Astrology</h3>
                                  </a>
                                  <p>03 Hours ago</p>
                              </div>
                          </div>
                          <div class="media post_item">
                              <img src="img/blog/popular-post/post4.jpg" alt="post">
                              <div class="media-body">
                                  <a href="single-blog.html">
                                      <h3>Asteroids telescope</h3>
                                  </a>
                                  <p>01 Hours ago</p>
                              </div>
                          </div> -->
                      </aside>
                      <aside class="single_sidebar_widget tag_cloud_widget">
                          <h4 class="widget_title">Tag Clouds</h4>
                          <ul class="list">
                              <li>
                                  <a href="#">project</a>
                              </li>
                              <li>
                                  <a href="#">love</a>
                              </li>
                              <li>
                                  <a href="#">technology</a>
                              </li>
                              <li>
                                  <a href="#">travel</a>
                              </li>
                              <li>
                                  <a href="#">life style</a>
                              </li>
                              <li>
                                  <a href="#">design</a>
                              </li>
                              <li>
                                  <a href="#">illustration</a>
                              </li>
                          </ul>
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
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'

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
   mounted() {
      const gitalk = new Gitalk({
        clientID: 'dac1f325c587f2c55568',
        clientSecret: '74ff317509e7c7a81919a830de7f8c848f2cd331',
        repo: 'katheesh.github.io',
        owner: 'katheesh',
        admin: ['katheesh'],
        id: location.pathname,      // Ensure uniqueness and length less than 50
        distractionFreeMode: false  // Facebook-like distraction free mode
      })
       
      gitalk.render('gitalk-container')
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