<template>
  <div class="home">
  <!--================ End Header Area =================-->

	<!--================ Start Home Banner Area =================-->
	<section class="home_banner_area">
		<div class="banner_inner">
			<div class="container">
				<div class="row align-items-center justify-content-between">
					<div class="col-lg-6">
						<div class="banner_content">
							<h3>Hey There !</h3>
							<h1 class="text-uppercase" style="font-family: 'Courier New';">I am KATHEESH</h1>
							<h5 class="text-uppercase">Software Engineer & Entrepreneur</h5><br>
							<h6><strong>❤️ Efficiency consists in a resolute mind.</strong></h6> <br>
							<github-button href="https://github.com/katheesh" data-size="large" data-show-count="true" aria-label="Follow @katheesh on GitHub">katheesh</github-button>
							<div style="margin-top: 30px; margin-bottom: 20px;">
							    <a target="_blank" href="ttps://www.npmjs.com/package/@katheesh/mailer-js">
							    	<img height="30" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAA7CAMAAABBn+jeAAAAJFBMVEX////LODfJKCfot7bgmJfOSUnFAADuy8v14eHGEA7kqKfXdXRcp15cAAAA+0lEQVRoge3Z4Q7CIAwEYCiMse3939cYwSUlpaCSkXn3y7Bb/WaiJmDsnDFXA4TA1Re4+jK9i9SMaIq3Zhd5p4UGNHk8cddqtITe5hbVJs9auNwAl97kcXDBBVfFdX7XNVfRFF2Rv3ovNLhs2J4JXnVRau6q61U8mzEvZFiDa0kXdFceobuIvVncUhMuuOCCCy644Pp3F83pOlIca17tKgIXXHDd01XMyC7+a/nN/hd3Ge4q9r/swmP5FfkJpFubZ9qi0b/vK/4//jRw9QWuvkzr6j6KqLg+ON+QYnxzxFOMzDraZ6nhz15JkD6VvL7rM0Yk2Hrggguum7oeyc0jXd/03kcAAAAASUVORK5CYII=">
							    	<a target="_blank" href="https://www.npmjs.com/package/@katheesh/mailer-js"><pre style="display: inline; font-size: 15px"> @katheesh/mailer-js </pre></a>Package Collaborator </a>
						    </div>

							<div class="social_icons my-5" style="padding: auto;">
								<a title="Stackoverflow" target="_blank" href="https://stackoverflow.com/story/katheesh">
									<img src="img/icon/stackoverflow.png">
								</a>
								<a title="GitLab" target="_blank" href="https://gitlab.com/katheesh">
									<img src="img/icon/gitlab.png">
								</a>
								<a title="GitHub" target="_blank" href="https://github.com/katheesh">
									<img src="img/icon/github.png">
								</a>
								<a title="CodePen" target="_blank" href="https://codepen.io/katheesh">
									<img src="img/icon/codepen.png">
								</a>
								<a title="Dev Blog" target="_blank" href="https://dev.to/katheesh">
									<img src="img/icon/dev.png">
								</a>
								<!-- <a title="LinkedIn" target="_blank" href="https://www.linkedin.com/in/katheeskumar">
									<img src="img/icon/linkedin.png">
								</a>
								<a title="Instagram" target="_blank" href="https://www.instagram.com/iKatheesh">
									<img src="img/icon/instagram.png">
								</a> -->
							</div> 

							<a href="https://www.patreon.com/bePatron?u=32135007"><img src="https://i.ya-webdesign.com/images/patreon-link-button-png-2.png" height="60"></a>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="home_right_img">
							<img class="img-fluid" src="img/banner/home-right.png" alt="">
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--================ End Home Banner Area =================-->

	<!--================ Start Statistics Area =================-->
	<section class="statistics_area">
		<div class="container">
			<div class="row justify-content-lg-start justify-content-center">
				<div class="col-lg-2 col-md-3">
					<div class="statistics_item">
						<h3><span class="counter">3</span>+</h3>
						<p>Years Experience Working</p>
					</div>
				</div>
				<div class="col-lg-2 col-md-3">
					<div class="statistics_item">
						<h3><span class="counter">5</span>+</h3>
						<p>Open Source Projects</p>
					</div>
				</div>
				<div class="col-lg-2 col-md-3">
					<div class="statistics_item">
						<h3><span class="counter">8</span>+</h3>
						<p>Contributing Projects</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--================ End Statistics Area =================-->

	<!--================ Start About Us Area =================-->
	<section class="about_area section_gap">
		<div class="container">
			<div class="row justify-content-start align-items-center">
				<div class="col-lg-5">
					<div class="about_img">
						<img class="" src="img/about-us.png" alt="">
					</div>
				</div>

				<div class="offset-lg-1 col-lg-5">
					<div class="main_title text-left">
						<p class="top_text">About me <span></span></p>
						<h2>
							Software Engineer <br>& Entrepreneur
						</h2>
						<p>
							“I love to program and have done so for 10,000 hours over the past four years. I’m great at knowing the right algorithm for a problem because I read computer science literature constantly. I like Algorithms based problems. I love working with people to do things bigger than I could accomplish alone. I’m motivated by big problems, and I think you’ve got some here that I can help solve.”  <router-link to="/about"><a>more ...</a></router-link>
						</p>
                        <button class="primary_btn" @click="downloadWithAxios">Download CV with Axios</button>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--================ End About Us Area =================-->

	<!--================ Start Features Area =================-->
	<section class="services_area">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="main_title">
						<p class="top_text">My Service <span></span></p>
						<h2>What Service <br>
							Offer For You </h2>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
					<div class="service_item">
						<img src="img/services/s1.png" alt="">
						<h4>IOT Development</h4>
						<p></p>
						<!-- <a href="#" class="primary_btn2 mt-35">Learn More</a> -->
					</div>
				</div>

				<div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
					<div class="service_item">
						<img src="img/services/s2.png" alt="">
						<h4>Mobile & PC App Development</h4>
						<p></p>
						<!-- <a href="#" class="primary_btn2 mt-35">Learn More</a> -->
					</div>
				</div>

				<div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
					<div class="service_item">
						<img src="img/services/s3.png" alt="">
						<h4>Web App Development</h4>
						<p></p>
						<!-- <a href="#" class="primary_btn2 mt-35">Learn More</a> -->
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--================ End Features Area =================-->

	<!--================ Start Portfolio Area =================-->
	<section class="portfolio_area" id="portfolio">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="main_title">
						<p class="top_text">My Portfolio <span></span></p>
						<h2>Check My Recent Works </h2>
					</div>
				</div>
			</div>

			<div class="filters portfolio-filter">
				<ul>
					<li class="active" data-filter="*">all</li>
					<li data-filter=".popular">Popular</li>
					<li data-filter=".front">Front-End Design</li>
					<li data-filter=".back">Backend Dashboards</li>
					<li data-filter=".package">Packages</li>
					<li data-filter=".desktop">Desktop Apps</li>
				</ul>
			</div>

			<div class="filters-content">
				<div class="row portfolio-grid">
					<div class="grid-sizer col-md-4 col-lg-4"></div>

					<div class="col-lg-4 col-md-6 all back popular">
						<div class="single_portfolio">
							<img class="img-fluid w-100" src="img/portfolio/back01.png" alt="">
							<div class="overlay"></div>
							<div class="short_info">
								<h4><a href="https://battiwestzone.lk">Back End Development for Zonal Education Office</a></h4>
								<p>Laravel Development</p>
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 all front">
						<div class="single_portfolio">
							<img class="img-fluid w-100" src="img/portfolio/pic2.png" alt="">
							<div class="overlay"></div>
							<div class="short_info">
								<h4><a href="https://battiwestzone.lk">Zonal Education Office Website</a></h4>
								<p>Website, Laravel Development</p>
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 all front">
						<div class="single_portfolio">
							<img class="img-fluid w-100" src="img/portfolio/pic3.png" alt="">
							<div class="overlay"></div>
							<div class="short_info">
								<h4><a href="https://btkjs.edu.lk">Junior School Web Application</a></h4>
								<p>Website, Laravel Development</p>
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 all front">
						<div class="single_portfolio">
							<img class="img-fluid w-100" src="img/portfolio/pic4.png" alt="">
							<div class="overlay"></div>
							<div class="short_info">
								<h4><a href="portfolio-details.html">Science Navigators Quiz Application</a></h4>
								<p>Website, Laravel Development</p>
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 all back">
						<div class="single_portfolio">
							<img class="img-fluid w-100" src="img/portfolio/back02.png" alt="">
							<div class="overlay"></div>
							<div class="short_info">
								<h4><a href="https://btkjs.edu.lk">Back End Development for Junior School</a></h4>
								<p>Laravel Development</p>
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 all back">
						<div class="single_portfolio">
							<img class="img-fluid w-100" src="img/portfolio/back03.png" alt="">
							<div class="overlay"></div>
							<div class="short_info">
								<h4><a href="https://learn.scinav.org">Quiz App Development for Science Navigators</a></h4>
								<p>Laravel Development</p>
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 all package">
						<div class="single_portfolio">
							<img class="img-fluid w-100" src="img/portfolio/pic1.png" alt="">
							<div class="overlay"></div>
							<div class="short_info">
								<h4><a href="https://bell.gitleaf.com">The Smart School Bell System</a></h4>
								<p>IOT, Programming</p>
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 all package popular">
						<div class="single_portfolio">
							<img class="img-fluid w-100" src="img/portfolio/pack01.png" alt="">
							<div class="overlay"></div>
							<div class="short_info">
								<h4><a href="https://www.npmjs.com/package/vue-mailer">VUE-Mailer Open source Package</a></h4>
								<p>NPM Javascript Development</p>
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 all package popular">
						<div class="single_portfolio">
							<img class="img-fluid w-100" src="img/portfolio/pack02.png" alt="">
							<div class="overlay"></div>
							<div class="short_info">
								<h4><a href="https://packagist.org/packages/katheesh/visitorinfo">visitorinfo Open source Package</a></h4>
								<p>Composer Package Development</p>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 all desktop front">
						<div class="single_portfolio">
							<img class="img-fluid w-100" src="img/portfolio/desk1.png" alt="">
							<div class="overlay"></div>
							<div class="short_info">
								<h4><a href="https://aulanka.com">This premium application Developed for tamil Students career evaluation </a></h4>
								<p>Developed by Electron Js</p>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 all desktop front">
						<div class="single_portfolio">
							<img class="img-fluid w-100" src="img/portfolio/desk2.png" alt="">
							<div class="overlay"></div>
							<div class="short_info">
								<h4><a href="https://github.com/Katheesh/passwordManager">This open source application Developed for store secret credintials </a></h4>
								<p>Developed by Electron Js</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--================ End Portfolio Area =================-->

	<Footer/>
	
  </div>
</template>

<script>

import Footer from '@/components/Footer.vue'
import axios from 'axios';
import GithubButton from 'vue-github-button'

export default {
   name: 'Home', 
    data() {
        return {    
            url:'https://katheesh.gitleaf.com/CV-Katheeskumar.docx'
        }
    },
    components: {
        Footer,
        GithubButton
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
