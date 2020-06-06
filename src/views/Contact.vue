<template>
  <div class="contact">
  <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
          <div class="container">
              <div class="banner_content text-center">
                  <div class="page_link">
                      <router-link to="/"><a>Home</a></router-link>
                      <router-link to="/contact"><a>Contact</a></router-link>
                  </div>
              </div>
          </div>
      </div>
  </section>
  <!--================ End Banner Area =================-->
  <!-- ================ contact section start ================= -->
  <section class="section-margin">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="contact-title">Get in Touch</h2>
        </div>
        <div class="col-lg-8 mb-4 mb-lg-0">
            <div class="row">             
              <div class="col-sm-6">
                <div class="form-group">
                  <input class="form-control" v-model="input.name" id="name" type="text" placeholder="Enter your name">
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <input class="form-control"  v-model="input.phone" id="phone" type="text" placeholder="Enter Phone">
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <input class="form-control" v-model="input.email" id="email" type="email"  placeholder="Enter email address">
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                    <textarea class="form-control w-100" v-model="input.msg" id="message" cols="30" rows="9" placeholder="Enter Message"></textarea>
                </div>
              </div>
            </div>
            <div class="form-group mt-lg-3">
              <button type="button" v-on:click="message()" class="primary_btn button-contactForm">Send Message</button>
            </div>
        </div>

        <div class="col-lg-4">
          <div class="media contact-info">
            <span class="contact-info__icon"><i class="ti-home"></i></span>
            <div class="media-body">
              <h3>Mandapathdy, Batticaloa,</h3>
              <p>Sri Lanka. 30016.</p>
            </div>
          </div>
          <div class="media contact-info">
            <span class="contact-info__icon"><i class="ti-tablet"></i></span>
            <div class="media-body">
              <h3><a href="tel:454545654">+94 (77) 631 2777</a></h3>
              <p>Mon to Fri 8am to 4pm</p>
            </div>
          </div>
          <div class="media contact-info">
            <span class="contact-info__icon"><i class="ti-email"></i></span>
            <div class="media-body">
              <h3><a href="mailto:ikatheesh@gmail.com">ikatheesh@gmail.com</a></h3>
              <p>Send me your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer/>
    
  </div>
</template>

<script>

import Footer from '@/components/Footer.vue'
import axios from 'axios';

export default {
   name: 'Home',
   components: {
    Footer
   },
   data() {
      return {
         input:{
            name : "",
            email: "",
            phone: "",
            msg: ""
         } 
      };
   },
   methods: {
    message(){
         if (this.input.name != "" || this.input.email != "" || this.input.phone != "" || this.input.msg != "") {

            axios({
              method: 'get',
              url: 'https://gl-mail.herokuapp.com/api/message?name='+this.input.name+'&email='+this.input.email+'&phone='+this.input.phone+'&message='+this.input.msg,
            })
            .then(response => {

              this.$toasted.show(response.data.message, { 
                theme: "toasted-primary", 
                position: "top-right", 
                duration : 5000
              });
              this.input.name = "";
              this.input.email = "";
              this.input.phone = "";
              this.input.msg = "";
            })
            .catch(() => console.log('error occured'))     
         }
         else
         {
            this.$toasted.show("Please fillout the form completely.", { 
               theme: "toasted-primary", 
               position: "top-right", 
               duration : 5000
            });
         }
      }
   }
}
</script>