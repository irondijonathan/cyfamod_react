import React from 'react'
import "./../styles/style.css"
import "./../styles/plugins.css"
import "./../styles/cs-style.css"
import "./../styles/color.css"
import jpegii from "./../images/avatar/2.jpg"
import jpegiv from "./../images/avatar/4.jpg"
import pngi from "./../images/clients/1.png"
import jpgiii from "./../images/avatar/3.jpg"
import jpgvi from "./../images/folio/6.jpg"
import logopng from "./../images/logo.png"


const Home = () => {
  return (
    <div>


<div className="loader-holder">
		<span></span>
		<span></span>
		<span></span>
	</div>
	<div id="main">
		
		<div className="progress-bar-wrap">
			<div className="progress-bar color-bg"></div>
		</div>
		<header className="main-header">
			<div className="top-bar fl-wrap">
				<div className="container">
					<div className="top-bar-header-contact">
						<ul>
							<li><i className="fal fa-envelope"></i><a href="mailto:info@cyfamod.com"> info@cyfamod.com</a></li>
							<li><i className="fal fa-map-marker"></i><a href="#" target="_b0079felank">Abuja Nigeria</a></li>
							<li><i className="fal fa-whatsapp"></i><a href="tel:+44 7440 086 288"> Whatsapp only : +44 7440 086 288</a></li>
							<li><i className="fal fa-phone"></i><a href="tel:+234 80 37 261 465"> Call only : +234 80 37 261 465</a></li>
						</ul>
					</div>
					<ul className="topbar-social">
						<li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
						<li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
						<li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
						<li><a href="#" target="_blank"><i className="fab fa-youtube"></i></a></li>
						<li><a href="#" target="_blank"><i className="fab fa-whatsapp"></i></a></li>
					</ul>
					
				</div>
			</div>
			
			<div className="header-inner fl-wrap">
				<div className="container">
					
					<a href="index.html" className="logo-holder"><img src={logopng} alt=""/></a>
					
					<a href="#" className="header-btn color-bg"><span>WELCOME </span> </a>
					<div className="search_btn htact show_search-btn"><i className="far fa-search"></i> <span className="header-tooltip">Search</span></div>
					<div className="show-share-btn showshare htact"><i className="fal fa-bullhorn"></i> <span className="header-tooltip">Share</span></div>
					
					<div className="header-search-wrap novis_sarch">
						<div className="widget-inner">
                        <form>
                            <input
                                name="se"
                                id="se"
                                type="text"
                                className="search"
                                placeholder="Search..."
                                defaultValue="" // Use defaultValue instead of value
                            />
                            <button className="search-submit" id="submit_btn">
                                <i className="fa fa-search transition"></i>
                            </button>
                        </form>
						</div>
					</div>
					
					<div className="share-wrapper  isShare">
						<div className="close-share-btn"><i className="fal fa-long-arrow-up"></i></div>
						<div className="share-container fl-wrap  isShare"></div>
					</div>
					
					
					<div className="nav-button-wrap">
						<div className="nav-button">
							<span></span><span></span><span></span>
						</div>
					</div>
					
					<div className="nav-holder main-menu">
						<nav>
							<ul>
								<li>
									<a href="index.html" className="act-link">Home </a>
								
								</li>
							
								
								<li><a href="#">Blog</a></li>
									
								<li><a href="services.html">Services</a></li>
								
					
								<li><a href="contact.html">Contact</a></li>

							</ul>
						</nav>
					</div>
					
				</div>
			</div>
		</header>
		
		<div id="wrapper">
			
			<div className="content">
				
				<section className="no-padding" data-scrollax-parent="true">
					<div className="hero-wrap hero-wrap_custom hero-wrap_custom2 fl-wrap darkbg_2">
						
						<div className="slideshow-container">
							<div className="slideshow-container_wrap fl-wrap full-height">
								<div className="swiper-container full-height">
									<div className="swiper-wrapper">

										
										<div className="swiper-slide">
											<div className="slideshow-item fl-wrap">
												<div className="bg  " data-bg="images/bg/3.jpg"></div>
											</div>
										</div>
										
											<div className="swiper-slide">
												<div className="slideshow-item   fl-wrap">
													<div className="bg  " data-bg="images/bg/34.jpg"></div>
												</div>
											</div>
											
												<div className="swiper-slide ">
													<div className="slideshow-item fl-wrap">
														<div className="bg  " data-bg="images/bg/32.jpg"></div>
													</div>
												</div>
												
												<div className="swiper-slide">
													<div className="slideshow-item fl-wrap">
														<div className="bg  " data-bg="images/bg/6.jpg"></div>
													</div>
												</div>
												
											<div className="swiper-slide">
												<div className="slideshow-item   fl-wrap">
													<div className="bg  " data-bg="images/bg/5.jpg"></div>
												</div>
											</div>
											

										<div className="swiper-slide">
											<div className="slideshow-item fl-wrap">
												<div className="bg  " data-bg="images/bg/inc.jpg"></div>
											</div>
										</div>
										

								
								
									</div>
								</div>
							</div>
						</div>
						
						<div className="overlay"></div>
						<div className="container">
							<div className="hero-wrap-title_item hero-wrap_custom_title  fl-wrap">
								<h3>RC : 2016737</h3>
								<h2>Welcome To Cyfamod  <br/> <span>A Technology Company</span> <br/>  </h2>
								<div className="clearfix"></div>
								
								<div className="clearfix"></div>
								<a href="#sec2" className="hc_btn custom-scroll-link color-bg"><span>Start to Explore</span></a>
							</div>
							<div className="hero-scroll-down-notifer  ">
								<div className="scroll-down-wrap ">
									<div className="mousey">
										<div className="scroller color-bg"></div>
									</div>
								</div>
								<i className="far fa-angle-down"></i>
							</div>
						</div>
						
						
						<div style={
                            { display: "none" }
                        } id="video3">
							<video className="lg-video-object lg-html5" controls preload="none">
								<source src="video/1.mp4" type="video/mp4"/>
							</video>
						</div>
						
						<div className="hero-dec_top"></div>
						<div className="hero-slider-pagination hsp2"></div>
					</div>
				</section>
				
				<div className="breadcrumbs fl-wrap">
					<div className="container">
						<div className="breadcrumbs-list">
							<a href="#">Cyfamod</a> <span>Home</span>
						</div>
					</div>
				</div>


					
					<section data-scrollax-parent="true">
						<div className="container">
							<div className="row">
								<div className="col-md-5">
									<div className="about-title fl-wrap">
										<h4>About Us</h4>
										<h2 className="con-heading">Who we are</h2>
									</div>
									<div className="about-wrap">
										<p>Cyfamod Technologies is a fast growing technology solutions company that specializes in providing cutting-edge software applications for small, medium, enterprise software companies and organization. It is a world of digital possibilities, working towards becoming the most recommendable software solution company in Nigeria and beyond. We provide a wide range of web development services in Website, Mobile and Software applications. </p>
										<p>At Cyfamod Technologies, we help you find your internet presence with a strong market positioning, giving you a safe landing with minimum aggression, a low risk profile and a high quality reward. We also provide a measurable return on investments and enhance productivity by developing flexible technology solutions to our client’s satisfaction for a sustainable business growth. </p>
									</div>
								</div>
								<div className="col-md-1"></div>
								<div className="col-md-6">
									<div className="about-img fl-wrap">
										<img src={jpgvi} className="respimg" alt=""/>
										
									</div>
									<div className="hero-counter_wrap darkbg_2">
										<div className="hero-counter-slider">
											<div className="swiper-container">
												<div className="swiper-wrapper">
													
													
													
													
													
												</div>
											</div>
										</div>
										
									</div>
								</div>
							</div>
						</div>
						<div className="sq-secdec"></div>
					</section>
					

						
				<section className="no-padding darkbg_2">
					<div className="notifer-block fl-wrap">
						<div className="container">
							<div className="row">
								<div className="col-md-7">
									<h4><span>You need more information about our services and company capabilities?</span></h4>
								</div>
								<div className="col-md-5">
									<a href="services.html" className="nb_btn color-bg">View All Services</a>
								</div>
							</div>
						</div>
						<div className="hero-canvas-wrap">
							<div className="dots gallery__dots" data-dots=""></div>
						</div>
					</div>
				</section>
				
				
				<section className="gray-bg small-padding half-bg_dec" id="sec2">
					<div className="container">
						<div className="main-section_text-block fl-wrap">
							<div className="row">
								<div className="col-md-6">
									<h4>What We Do</h4>
									<h2>We Offer Smarter & More Affordable Access To <br/> Technology Services. <br/> </h2>
								</div>
								<div className="col-md-1"></div>
								
							</div>
						</div>
						<div className="cards-wrap fl-wrap">
							<div className="row">
								
								<div className="col-md-4">
									<a className="content-inner fl-wrap" href="services.html">
										<div className="content-front">
											<div className="cf-inner">
												<div className="inner">
													<div className="dec-icon">
														<i className="fal fa-tools"></i>
													</div>
													<h2>DEVELOPMENT</h2>
													<p>We provide all development services which includes Android, IOS and Window mobile applications for all businesses.</p>
												</div>
												<div className="serv-num">01.</div>
											</div>
										</div>
										<div className="content-back">
											<div className="bg " data-bg="images/services/1.jpg"></div>
											<div className="overlay"></div>
											<div className="inner">
												<span className="cf-inner_title color-bg">Read more</span>
											</div>
										</div>
									</a>
								</div>
								
								<div className="col-md-4">
									<a className="content-inner fl-wrap" href="services.html">
										<div className="content-front">
											<div className="cf-inner">
												<div className="inner">
													<div className="dec-icon">
														<i className="fal fa-truck-plow"></i>
													</div>
													<h2>NETWORKING/SECURITY</h2>
													<p>it is our top most priority to ensure the safety and security of our client’s data against viruses, malware attacks and cyberattacks on software solutions.</p>
												</div>
												<div className="serv-num">02.</div>
											</div>
										</div>
										<div className="content-back">
											<div className="bg " data-bg="images/services/6.jpg"></div>
											<div className="overlay"></div>
											<div className="inner">
												<span className="cf-inner_title color-bg">Read more</span>
											</div>
										</div>
									</a>
								</div>
								
								<div className="col-md-4">
									<a className="content-inner fl-wrap" href="services.html">
										<div className="content-front">
											<div className="cf-inner">
												<div className="inner">
													<div className="dec-icon">
														<i className="fal fa-pencil-ruler"></i>
													</div>
													<h2>DIGITAL MARKETING</h2>
													<p>As the world evolves, marketing strategies gets more fragmented and highly competitive. </p>
												</div>
												<div className="serv-num">03.</div>
											</div>
										</div>
										<div className="content-back">
											<div className="bg " data-bg="images/services/3.jpg"></div>
											<div className="overlay"></div>
											<div className="inner">
												<span className="cf-inner_title color-bg">Read more</span>
											</div>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="hex-bg"><span className="hex hex1"></span><span className="hex hex2"></span><span className="hex hex3"></span></div>
				</section>
				

				
			
			
				<section className="no-padding">
					<div className="half-carousel-wrap">
						<div className="half-carousel-title darkbg_2">
							<div className="half-carousel-title-item fl-wrap">
								<h2>Our Latest Projects</h2>
								<a href="#" className="hc_btn color-bg"><span>View all Projects</span></a>
							</div>
							<div className="sec-dec"></div>
						</div>
						<div className="half-carousel-conatiner">
							<div className="half-carousel fl-wrap full-height">
								<div className="swiper-container">
									<div className="swiper-wrapper">
										<div className="swiper-slide">
											<div className="half-carousel-item fl-wrap">
												<div className="bg-wrap bg-parallax-wrap-gradien">
													<div className="bg" data-bg="images/bg/long/1.jpg" data-swiper-parallax="10%"></div>
												</div>
												<div className="hc-counter color-bg">01.</div>
												<div className="half-carousel-content">
													<h3><a href="#">White Walls House</a></h3>
												</div>
											</div>
										</div>
										
										<div className="swiper-slide">
											<div className="half-carousel-item fl-wrap">
												<div className="bg-wrap bg-parallax-wrap-gradien">
													<div className="bg" data-bg="images/bg/long/2.jpg" data-swiper-parallax="10%"></div>
												</div>
												<div className="hc-counter color-bg">02.</div>
												<div className="half-carousel-content">
													<h3><a href="#">Project Endoran</a></h3>
												</div>
											</div>
										</div>
										
										<div className="swiper-slide">
											<div className="half-carousel-item fl-wrap">
												<div className="bg-wrap bg-parallax-wrap-gradien">
													<div className="bg" data-bg="images/bg/long/3.jpg" data-swiper-parallax="10%"></div>
												</div>
												<div className="hc-counter color-bg">03.</div>
												<div className="half-carousel-content">
													<h3><a href="#">Trinity River Cyfamod</a></h3>
													
												</div>
											</div>
										</div>
										
										<div className="swiper-slide">
											<div className="half-carousel-item fl-wrap">
												<div className="bg-wrap bg-parallax-wrap-gradien">
													<div className="bg" data-bg="images/bg/long/4.jpg" data-swiper-parallax="10%"></div>
												</div>
												
												<div className="hc-counter color-bg">04.</div>
												<div className="half-carousel-content">
													<h3><a href="#">World Trade Center</a></h3>
													
												</div>
											</div>
										</div>
										
									</div>
								</div>
							</div>
							<div className="hcw_btn hcw-cont-prev"><i className="fas fa-caret-left"></i></div>
							<div className="hcw_btn hcw-cont-next"><i className="fas fa-caret-right"></i></div>
						</div>
					</div>
				</section>
				
				
				<section className="gray-bg  ">
					<div className="hex-bg"><span className="hex hex1"></span><span className="hex hex2"></span><span className="hex hex3"></span></div>
					<div className="hex-bg hex-bg2"><span className="hex hex1"></span><span className="hex hex2"></span><span className="hex hex3"></span></div>
					<div className="container">
						<div className="row">
							<div className="col-md-4">
								<div className="section-title align-text">
									<h4>What is said about us</h4>
									<h2>Why Choose Us</h2>
									<div className="st-text fl-wrap">
										<p>We focus on quality, innovation and speed. CyfamodTech is a premium ICT consultancy firm in Nigeria. CyfamodTech is the pioneering digital strategy company.</p>
									</div>
								</div>
							</div>
							<div className="col-md-8">
								
								<div className="col-md-6">
									<div className="card-item fl-wrap">
										<i className="fal fa-wind-turbine"></i>
										<span className="card-item_num">01.</span>
										<h4>S E O</h4>
										<p>Get more website traffic, more customers, and more online visibility with powerful and precise SEO services. </p>
										<a href="#" className="card-link">Read more</a>
									</div>
								</div>
								
									
									<div className="col-md-6">
										<div className="card-item fl-wrap">
											<i className="fal fa-tools"></i>
											<span className="card-item_num">03.</span>
											<h4>WEB DEVELOPMENT</h4>
											<p>We build highly responsive web applications using the latest cutting-edge technologies to help businesses of all sizes </p>
											<a href="#" className="card-link">Read more</a>
										</div>
									</div>
									
								
								<div className="col-md-6">
									<div className="card-item fl-wrap">
										<i className="fal fa-microchip"></i>
										<span className="card-item_num">02.</span>
										<h4>UI UX DESIGN</h4>
										<p>We've got the tools and expertise to help you create an intuitive and engaging user experience that your customers will love. </p>
										<a href="#" className="card-link">Read more</a>
									</div>
								</div>
								
							
								
								<div className="col-md-6">
									<div className="card-item fl-wrap">
										<i className="fal fa-user-hard-hat"></i>
										<span className="card-item_num">04.</span>
										<h4>MOBILE APP DEVELOPMENT</h4>
										<p>Our skilled development teams will help you build mobile applications that drive customer engagement and business growth. </p>
										<a href="#" className="card-link">Read more</a>
									</div>
								</div>
								
							</div>
						</div>
					</div>
				</section>
				
				
				<section className="paralax-section sm-bg-par" data-scrollax-parent="true">
					<div className="bg_wrap">
						<div className="bg" data-bg="images/bg/19.jpg" data-scrollax="properties: { translateY: '30%' }"></div>
						<div className="gradinet-overlay"></div>
					</div>
					<div className="container">
				
						<div className="boxed-container fl-wrap">
							<div className="boxed-container-title color-bg">
								<h4>More about us</h4>
								<h2>5 years of quality and successful projects</h2>
								<p>We approach each project and task with a unique mindset to provide in-debt analysis and understand our customers' needs and pain points, effective solution, collaborations, optimized & sustainable flow, embracing change, customer-centric and professional in delivery </p> <a href="contact.html" className="btn   float-btn"><i className="fas fa-caret-right"></i><span>Reqest a Quote</span></a>
								<div className="bic_dec"><i className="fal fa-Project"></i></div>
							</div>
							<div className="boxed-container-wrap">
								<div className="bg" data-bg={jpgvi}></div>
								<div className="overlay"></div>
								<div className="promo-video">
									<a href="#" className="  big_prom     image-popup"><span className=" color-bg"> <i className="fas fa-play"></i> </span></a>
									<h4>Video About Our Company</h4>
								</div>
							</div>
						</div>
						<div className="inline-facts-holder bold-facts fl-wrap">
							
							<div className="inline-facts">
								<div className="milestone-counter">
									<div className="stats animaper">
										<div className="num" data-content="0" data-num="124">0</div>
									</div>
								</div>
								<h6>Finished projects</h6>
							</div>
							
							<div className="inline-facts">
								<div className="milestone-counter">
									<div className="stats animaper">
										<div className="num" data-content="0" data-num="83">0</div>
									</div>
								</div>
								<h6>Happy customers</h6>
							</div>
							
							<div className="inline-facts">
								<div className="milestone-counter">
									<div className="stats animaper">
										<div className="num" data-content="0" data-num="5">0</div>
									</div>
								</div>
								<h6>Years on the Market</h6>
							</div>
							
							<div className="inline-facts">
								<div className="milestone-counter">
									<div className="stats animaper">
										<div className="num" data-content="0" data-num="25">0</div>
									</div>
								</div>
								<h6>Skilled Professionals</h6>
							</div>
						</div>
					</div>
				</section>
				
				<section className="gray-bg small-top_padding">
					<div className="hex-bg"><span className="hex hex1"></span><span className="hex hex2"></span><span className="hex hex3"></span></div>
					<div className="hex-bg hex-bg2"><span className="hex hex1"></span><span className="hex hex2"></span><span className="hex hex3"></span></div>
					<div className="container">
						<div className="section-title">
							<h4>What said about us</h4>
							<h2>Customer Reviews</h2>
							<div className="dots-separator fl-wrap"><span></span></div>
						</div>
					</div>
					<div className="clearfix"></div>
					<div className="testimonilas-carousel-wrap fl-wrap">
						<div className="tc-button tc-button-next"><i className="fas fa-caret-right"></i></div>
						<div className="tc-button tc-button-prev"><i className="fas fa-caret-left"></i></div>
						<div className="testimonilas-carousel">
							<div className="swiper-container">
								<div className="swiper-wrapper">
									
									<div className="swiper-slide">
										<div className="testi-item fl-wrap">
											<div className="testi-avatar"><img src={jpegii} alt=""/></div>
											<div className="testimonilas-text fl-wrap">
												<h3>Andy Scott <span>Happy Client</span></h3>
												<div className="star-rating" data-starrating="5"> </div>
												<p>"Working with Cyfamod Technology was delightful. The team delivered the Ashpath project timely, within our budget and stayed in touch during every step of the project to ensure we were satisfied with the end results "</p>
												<a href="#" className="testim-link color-bg" tabIndex="0">Via Facebook</a>
												<span className="testi-number">01.</span>
											</div>
										</div>
									</div>
									
									
									<div className="swiper-slide">
										<div className="testi-item fl-wrap">
											<div className="testi-avatar"><img src={jpgiii} alt=""/></div>
											<div className="testimonilas-text fl-wrap">
												<h3>Angel  <span>Happy Client</span></h3>
												<div className="star-rating" data-starrating="4"> </div>
												<p>"We were sceptical at first when the Cyfamod Technology team proposed a Hotel Booking Portal for our establishment, but this didn&#x27;t deter them from answering all our concerns and creating a solution that has literally automated our previous processes for making reservations and bookings. "</p>
												<a href="#" className="testim-link color-bg" tabIndex="0">Via Facebook</a>
												<span className="testi-number">02.</span>
											</div>
										</div>
									</div>
									
									
									<div className="swiper-slide">
										<div className="testi-item fl-wrap">
											<div className="testi-avatar"><img src={jpegiv} alt=""/></div>
											<div className="testimonilas-text fl-wrap">
												<h3>Cynthia  <span>Happy Client</span></h3>
												<div className="star-rating" data-starrating="5"> </div>
												<p>"One of the many benefits of the IPOS Solution deployed across our organization by the Cyfamod Technology team has been the fact that it has been extremely beneficial in helping us automate our stock inventory processes across all our pharmacies and warehouses. They&#x27;ve been extremely helpful and have been really reliable business consultants throughout "</p>
												<a href="#" className="testim-link color-bg" tabIndex="0">Via Facebook</a>
												<span className="testi-number">03.</span>
											</div>
										</div>
									</div>
									
									
									
									
								</div>
							</div>
						</div>
						<div className="tc-pagination"></div>
					</div>
				</section>
				
				<div className="sect_div small-padding">
					<div className="container">
						<div className="clients-carousel-wrap fl-wrap">
							<div className="cc-btn   cc-prev"><i className="fal fa-angle-left"></i></div>
							<div className="cc-btn cc-next"><i className="fal fa-angle-right"></i></div>
							<div className="clients-carousel">
								<div className="swiper-container">
									<div className="swiper-wrapper">
										
										<div className="swiper-slide">
											<a href="#" className="client-item"><img src={pngi} alt=""/></a>
										</div>
										
										<div className="swiper-slide">
											<a href="#" className="client-item"><img src={pngi} alt=""/></a>
										</div>
										
										<div className="swiper-slide">
											<a href="#" className="client-item"><img src={pngi} alt=""/></a>
										</div>
										
										<div className="swiper-slide">
											<a href="#" className="client-item"><img src={pngi} alt=""/></a>
										</div>
										
										<div className="swiper-slide">
											<a href="#" className="client-item"><img src={pngi} alt=""/></a>
										</div>
										
										<div className="swiper-slide">
											<a href="#" className="client-item"><img src={pngi} alt=""/></a>
										</div>
										
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<section className="no-padding">
					<div className="announcement color-bg">
						
					</div>
				</section>
				
			</div>
			
			<div className="height-emulator fl-wrap"></div>
			<footer className="main-footer">
				<div className="container">
					<div className="footer-inner fl-wrap">
						<div className="row">
							<div className="col-md-4">
								
								<div className="footer-info">
									<h4>About us</h4>
									<p>Cyfamod Technologies is a fast growing technology solutions company that specializes in providing cutting-edge software applications for small, medium, enterprise software companies and organization. It is a world of digital possibilities, working towards becoming the most recommendable software solution company in Nigeria and beyond. We provide a wide range of web development services in Website, Mobile and Software applications. </p>
									<a href="#" className="footer_link">Read more <i className="fal fa-long-arrow-right"></i></a>
								</div>
								
							</div>
							<div className="col-md-4">
								
								<div className="footer-info">
									<h4>Contact info</h4>
									
									<div className="footer-contacts fl-wrap">
										<ul>
											<li><i className="fal fa-phone"></i><span>Phone :</span><a href="tel:Whatsapp only : +44 7440 086 288">Whatsapp only :+44 7440 086 288</a></li>
											<li><i className="fal fa-phone"></i><a href="tel:+234 80 37 261 465"> Call only : +234 80 37 261 465</a></li>
											<li><i className="fal fa-envelope"></i><span>Email :</span><a href="mailto:info@cyfamod.com"> info@cyfamod.com</a></li>
											<li><i className="fal fa-map-marker"></i><span>Address:</span><a href="#" target="_blank">Abuja Nigeria</a></li>
										</ul>
										<div className="fw_hours">
											<span><strong>Monday - Friday:</strong> 8am - 6pm </span>
											<span><strong>Saturday - Sunday:</strong> 2pm - 6pm </span>
										</div>
									</div>
									
								</div>
								
							</div>
							<div className="col-md-4">
								
								<div className="footer-info">
									<h4>Our Services</h4>
									<div className="footer-serv-holder">
										<ul>
											<li><a href="#">Branding</a></li>
											<li><a href="#">Web-Development</a></li>
											<li><a href="#">Mobile Development</a></li>
											<li><a href="#">Networking</a></li>
											<li><a href="#">Security</a></li>
											<li><a href="#">Server Management</a></li>
										</ul>
									</div>
								</div>
								
							</div>
						</div>
					</div>
					<div className="footer-bottom fl-wrap">
						
						<div className="footer-social">
							<span className="footer-social-title">Follow us :</span>
							<ul>
								<li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
								<li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
								<li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
								<li><a href="#" target="_blank"><i className="fab fa-vk"></i></a></li>
								<li><a href="#" target="_blank"><i className="fab fa-pinterest-p"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
				
				<div className="sub-footer fl-wrap">
					<div className="container">
						<div className="copy-right">&#169; <span>Cyfamod</span> 2023. All rights reserved. </div>
						<div className="to-top"> <i className="fas fa-caret-up"></i></div>
						<div className="subfooter-nav">
							<ul className="no-list-style">
								<li><a href="#">Terms of use</a></li>
								<li><a href="#">Privacy Policy</a></li>
								<li><a href="#">News</a></li>
							</ul>
						</div>
					</div>
				</div>
				
				<div className="footer-bg" data-ran="4"></div>
			</footer>
			
		</div>
		
	
	</div>
	
	<script src="js/jquery.min.js"></script>
	<script src="js/plugins.js"></script>
	<script src="https://apps.elfsight.com/p/platform.js" defer></script>
<div className="elfsight-app-fb18c80e-9fe4-470d-a44d-e6d2d0aecf09"></div>
	<script src="js/scripts.js"></script>
    </div>
  )
}

export default Home