import{F as h}from"./Footer.f8a02d6c.js";import{a as u}from"./index.03bb1a20.js";import{r as c,o as l,c as a,a as s,b as n,w as _,F as m,j as f,k as b,v as k,g as v,t}from"./vendor.47f91c7e.js";import{_ as w}from"./index.22c0acc1.js";var y="/img/quotes/about_sunday.png",q="/img/quotes/lose.png",x="/img/quotes/revers.png",C="/img/quotes/silent.png",B="/img/quotes/sleep.png",F="/img/quotes/spenttime.png",S="/img/quotes/stoplearning.png",j="/img/quotes/stopwaiting.png",N="/img/quotes/thinkingdid.png";const V={name:"Home",components:{Footer:h},data(){return{input:{subscribe:""},Blogs:[]}},mounted(){u({method:"get",url:"https://dev.to/api/articles?username=katheesh&per_page=%2220%22"}).then(d=>{this.Blogs=d.data}).catch(()=>console.log("error occured"))},methods:{subscribe(){this.input.subscribe!=""?(this.input.subscribe="",this.$toasted.show("Your Email Added to the subscriber list",{theme:"toasted-primary",position:"top-right",duration:5e3})):this.$toasted.show("Please enter valid email address",{theme:"toasted-primary",position:"top-right",duration:5e3})}}},E={class:"blog"},M={class:"banner_area"},$={class:"banner_inner d-flex align-items-center"},D={class:"container"},H={class:"banner_content text-center"},A={class:"page_link"},K=s("a",null,"Home",-1),L=s("a",null,"Blogs",-1),P={class:"blog_area section-margin"},Q={class:"container"},T={class:"row"},U={class:"col-lg-8 mb-5 mb-lg-0"},Y={class:"blog_left_sidebar"},z={class:"blog_details"},G=["href"],I={style:{color:"black"}},J={class:"blog-info-link"},O=["href"],R=["href"],W=["href"],X=["href"],Z=["href"],ss={class:"col-lg-4"},is={class:"blog_right_sidebar"},ts=v('<aside class="single_sidebar_widget search_widget" data-aos="fade-up"><div class="form-group"><div class="input-group mb-3"><input type="text" class="form-control" placeholder="Search Keyword"><div class="input-group-append"><button class="btn" type="button"><i class="ti-search"></i></button></div></div></div><button class="primary_btn rounded-0 primary-bg text-white w-100" style="background-color:black;" type="submit">Search</button></aside>',1),es={class:"single_sidebar_widget newsletter_widget","data-aos":"fade-up"},os=s("h4",{class:"widget_title"},"Newsletter",-1),ls={action:"#"},as={class:"form-group"},ns=v('<section class="portfolio_area" id="portfolio"><div class="container" data-aos="fade-up"><div class="row"><div class="col-lg-12"><div class="main_title"><p class="top_text">Social Media posts <span></span></p><h2>My Quotes</h2></div></div></div><div class="filters-content"><div class="row portfolio-grid"><div class="col-lg-3 col-md-6 all linkedin"><div class="single_portfolio"><img class="img-fluid w-100" src="'+y+'" alt=""><div class="overlay"></div><div class="short_info"><h4><a target="_blank" href="/img/quotes/about_sunday.png">Click to open</a></h4></div></div></div><div class="col-lg-3 col-md-6 all linkedin"><div class="single_portfolio"><img class="img-fluid w-100" src="'+q+'" alt=""><div class="overlay"></div><div class="short_info"><h4><a target="_blank" href="/img/quotes/lose.png">Click to open</a></h4></div></div></div><div class="col-lg-3 col-md-6 all linkedin"><div class="single_portfolio"><img class="img-fluid w-100" src="'+x+'" alt=""><div class="overlay"></div><div class="short_info"><h4><a target="_blank" href="/img/quotes/revers.png">Click to open</a></h4></div></div></div><div class="col-lg-3 col-md-6 all linkedin"><div class="single_portfolio"><img class="img-fluid w-100" src="'+C+'" alt=""><div class="overlay"></div><div class="short_info"><h4><a target="_blank" href="/img/quotes/silent.png">Click to open</a></h4></div></div></div><div class="col-lg-3 col-md-6 all linkedin"><div class="single_portfolio"><img class="img-fluid w-100" src="'+B+'" alt=""><div class="overlay"></div><div class="short_info"><h4><a target="_blank" href="/img/quotes/sleep.png">Click to open</a></h4></div></div></div><div class="col-lg-3 col-md-6 all linkedin"><div class="single_portfolio"><img class="img-fluid w-100" src="'+F+'" alt=""><div class="overlay"></div><div class="short_info"><h4><a target="_blank" href="/img/quotes/spenttime.png">Click to open</a></h4></div></div></div><div class="col-lg-3 col-md-6 all linkedin"><div class="single_portfolio"><img class="img-fluid w-100" src="'+S+'" alt=""><div class="overlay"></div><div class="short_info"><h4><a target="_blank" href="/img/quotes/stop learning.png">Click to open</a></h4></div></div></div><div class="col-lg-3 col-md-6 all linkedin"><div class="single_portfolio"><img class="img-fluid w-100" src="'+j+'" alt=""><div class="overlay"></div><div class="short_info"><h4><a target="_blank" href="/img/quotes/stop waiting.png">Click to open</a></h4></div></div></div><div class="col-lg-3 col-md-6 all linkedin"><div class="single_portfolio"><img class="img-fluid w-100" src="'+N+'" alt=""><div class="overlay"></div><div class="short_info"><h4><a target="_blank" href="/img/quotes/thinking did.png">Click to open</a></h4></div></div></div></div></div></div></section>',1);function ds(d,e,rs,cs,o,p){const r=c("router-link"),g=c("Footer");return l(),a("div",E,[s("section",M,[s("div",$,[s("div",D,[s("div",H,[s("div",A,[n(r,{to:"/"},{default:_(()=>[K]),_:1}),n(r,{to:"/blogs"},{default:_(()=>[L]),_:1})])])])])]),s("section",P,[s("div",Q,[s("div",T,[s("div",U,[s("div",Y,[(l(!0),a(m,null,f(o.Blogs,i=>(l(),a("article",{key:i.id,class:"blog_item","data-aos":"fade-up"},[s("div",z,[s("a",{href:i.url,target:"_blank",class:"d-inline-block"},[s("h2",null,"\u{1F4A5} "+t(i.title),1)],8,G),s("p",I,"\u{1F4CC} "+t(i.description),1),s("ul",J,[s("li",null,[s("a",{href:i.url},"\u{1F4C6} "+t(i.readable_publish_date),9,O)]),s("li",null,[s("a",{href:i.url},"\u2764\uFE0F "+t(i.public_reactions_count),9,R)]),s("li",null,[s("a",{href:i.url},"\u{1F468}\u200D\u{1F4BB} "+t(i.user.name),9,W)]),s("li",null,[s("a",{href:i.url},"\u{1F4DD} "+t(i.comments_count)+" Comment(s)",9,X)]),s("li",null,[s("a",{href:i.url},"\u{1F516} "+t(i.tags),9,Z)])])])]))),128))])]),s("div",ss,[s("div",is,[ts,s("aside",es,[os,s("form",ls,[s("div",as,[b(s("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=i=>o.input.subscribe=i),class:"form-control",placeholder:"Enter email",required:""},null,512),[[k,o.input.subscribe]])]),s("button",{class:"primary_btn rounded-0 primary-bg text-white w-100",type:"submit",onClick:e[1]||(e[1]=i=>p.subscribe())},"Subscribe")])])])])])])]),ns,n(g)])}var hs=w(V,[["render",ds]]);export{hs as default};
