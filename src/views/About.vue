<template>
  <div class="about">
  <!--================ Start Banner Area =================-->
  <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
          <div class="container">
              <div class="banner_content text-center">
                  <div class="page_link">
                      <router-link to="/"><a>Home</a></router-link>
                      <router-link to="/about"><a>About</a></router-link>
                  </div>
              </div>
          </div>
      </div>
  </section>
  <!--================ End Banner Area =================-->


  <!--================ Start About Us Area =================-->
	<section class="about_area section_gap">
		<div class="container">
			<div class="row justify-content-start align-items-center">
				<div class="col-lg-5" data-aos="fade-up">
					<div class="about_img">
						<img class="" src="img/about-us.png" alt="">
					</div>
				</div>

				<div class="offset-lg-1 col-lg-5" data-aos="fade-up">
					<div class="main_title text-left">
						<p class="top_text">About me <span></span></p>
						<h2>
							Software Engineer 👨‍💻 <br>& Entrepreneur
						</h2>
						<p>
							“I love to program and have done so for 10,000 hours over the past four years. I’m great at knowing the right algorithm for a problem because I read computer science literature constantly. I like Algorithms based problems. I love working with people to do things bigger than I could accomplish alone. I’m motivated by big problems, and I think you’ve got some here that I can help solve.”
            </p>
            <p>
                “I liked computer games as a kid, and wanted to make my own. I heard computers are a good career too, so I went to college in Information Technology. Once I was there I realized writing operating systems was what I like the best. I like the challenge of it, and working close to the hardware. I do my best work in very complicated systems, because I’m good at keeping track of many details and making few mistakes. I want to do this sort of work moving forward, especially as long as I get to work on something lots of people will use!”
						</p>
						<button class="primary_btn" @click="downloadWithAxios">Download CV</button>
					</div>
				</div>

         <div data-anchor="page5" class="pp-scrollable text-white section section-6">
            <div class="scroll-wrap">
               <div class="section-bg"></div>
               <div class="scrollable-content">
                  <div class="vertical-centred">
                     <div class="boxed boxed-inner">
                        <div style="font-size: 25px; padding: 20px; color: black; font-weight: bold;"><span>Resume</span></div>
                        <div class="boxed">
                           <div class="container">
                              <div class="intro">
                                 <div class="row">
                                    <div class="col-md-6" data-aos="fade-up">
                                       <div class="col-resume">
                                          <h6 class="resume-title" style="text-align: center; margin: 25px; font-size: 22px;">
                                            📗 Education 
                                          </h6>
                                          <div class="resume-content">
                                             <div class="resume-inner">
                                                <div class="resume-row">
                                                   <h6 class="resume-type">HIGHER NATIONAL DIPLOMA IN INFORMATION TECHNOLOGY</h6>
                                                   <p class="resume-study" style="color: black;">Advance Technological Institute, Batticaloa, Sri Lanka</p>
                                                   <p class="resume-date text-primary">April 2018 - Present</p>
                                                   <p class="resume-text" style="color: black;">
                                                      2 Years + 6 month training
                                                   </p>
                                                </div><br>
                                                <div class="resume-row">
                                                   <h6 class="resume-type">NATIONAL DIPLOMA IN INFORMATION COMMUNICATION TECHNOLOGY</h6>
                                                   <p class="resume-study" style="color: black;">National Vocational Institute, Vantharumoolai, Batticaloa, Sri Lanka</p>
                                                   <p class="resume-date text-primary">Jan 2016 - Dec 2017</p>
                                                   <p class="resume-text" style="color: black;">
                                                      First Graduation(NVQ Level 5). 1 Year + 6 month training
                                                   </p>
                                                </div><br>
                                                <div class="resume-row">
                                                   <h6 class="resume-type">NATIONAL CERTIFICATE IN INFORMATION COMMUNICATION TECHNOLOGY</h6>
                                                   <p class="resume-study" style="color: black;">Vocational Training Center, Kallady, Bartticaloa, Sri Lanka</p>
                                                   <p class="resume-date text-primary">Jan 2015 - June 2015</p>
                                                   <p class="resume-text" style="color: black;">
                                                      Course Title as ICT Technician(NVQ Level 4).  6 month + 6 month training
                                                   </p>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-md-6" data-aos="fade-up">
                                       <div class="col-resume">
                                          <h6 class="resume-title" style="text-align: center; margin: 25px; font-size: 22px;">
                                             👷 Experience
                                          </h6>
                                          <div class="resume-content">
                                             <div class="resume-inner">
                                                <div class="resume-row">
                                                   <h6 class="resume-type">WEB DEVELOPER (LARAVEL)</h6>
                                                   <p class="resume-study" style="color: black;">Balanita (pvt) Ltd, #273, 1/1, Galle Road, Mt.Lavinia, Sri Lanka</p>
                                                   <p class="resume-date text-primary">March 2017 - April 2019</p>
                                                   <p class="resume-text" style="color: black;">
                                                      In this work to know diffrent technologies and frameworks. Like that Laravel, Angular, VueJs, and Bootstrap.
                                                   </p>
                                                </div>
                                                <div class="resume-row">
                                                   <h6 class="resume-type">DATA ENTRY OPERATOR</h6>
                                                   <p class="resume-study" style="color: black;">West Zonal Education Office, Kurinchamunai, Batticaloa, Sri Lanka</p>
                                                   <p class="resume-date text-primary">July 2015 - Jan 2016</p>
                                                   <p class="resume-text" style="color: black;">
                                                       I got expreance on microsoft office package in this six month training. This training for ICT Technian Course completed by VTC Kallady.
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
                     </div>
                  </div>
               </div>
            </div>
         </div>

			</div>
		</div>
	</section>
  <!--================ End About Us Area =================-->

  	<Footer/>
  	
  </div>
</template>

<script>

import Footer from '@/components/Footer.vue'
import axios from 'axios';

export default {
   name: 'About', 
    data() {
        return {    
            url:'https://katheesh.gitleaf.com/CV-Katheeskumar.docx'
        }
    },
    components: {
        Footer
    },
    methods: {

    forceFileDownload(response){
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'Katheeskumar.docx') //or any other extension
      document.body.appendChild(link)
      link.click()
    },   
    downloadWithAxios(){
      axios({
        method: 'get',
        url: this.url,
        responseType: 'arraybuffer'
      })
      .then(response => {
        
        this.forceFileDownload(response)
        
      })
      .catch(() => console.log('error occured'))
    }
  }
}
</script>