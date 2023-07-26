import React from 'react'

const Contact = () => {
  return (
    <body>
	
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
							<li><i className="fal fa-phone"></i><a href="tel:+234 80 37 261 465"> Call only : +234 80 37 261 465</a></li>
							<li><i className="fal fa-phone"></i><a href="tel:+44 7440 086 288"> Whatsapp only : +44 7440 086 288</a></li>
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
					<a href="index.html" className="logo-holder"><img src="images/logo.png" alt=""/></a>
					
					<a href="#" className="header-btn color-bg"><span>WELCOME </span> </a>
					<div className="search_btn htact show_search-btn"><i className="far fa-search"></i> <span className="header-tooltip">Search</span></div>
					<div className="show-share-btn showshare htact"><i className="fal fa-bullhorn"></i> <span className="header-tooltip">Share</span></div>
					
					<div className="header-search-wrap novis_sarch">
						<div className="widget-inner">
							<form>
								<input name="se" id="se" type="text" className="search" placeholder="Search..." value="" />
								<button className="search-submit" id="submit_btn"><i className="fa fa-search transition"></i> </button>
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
								<li><a href="project.html">Projects </a></li>
					
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
					<div className="parallax-inner page-title-wrap">
						<div className="bg" data-bg="images/bg/3.jpg" data-scrollax="properties: { translateY: '40%' }"></div>
						<div className="parallax-wrap">
							<div className="container">
								<div className="page-title">
									<h3>Our Contacts</h3>
									<p> We value our client’s trust and work towards building a strong lasting relationship while delivering quality and durable services.</p>
								</div>
								<div className="hero-scroll-down-notifer  ">
									<div className="scroll-down-wrap ">
										<div className="mousey">
											<div className="scroller color-bg"></div>
										</div>
									</div>
									<i className="far fa-angle-down"></i>
								</div>
								<div className="pw_dec"></div>
							</div>
						</div>
					</div>
				</section>
				
				<div className="breadcrumbs fl-wrap">
					<div className="container">
						<div className="breadcrumbs-list">
							<a href="#">Home</a> <span>Contacts</span>
						</div>
					</div>
				</div>
				
				<section className="gray-bg small-top_padding stp-bot">
					<div className="hex-bg"><span className="hex hex1"></span><span className="hex hex2"></span><span className="hex hex3"></span></div>
					<div className="container">
						<div className="row">
							
							<div className="col-md-4">
								<div className="card-item fl-wrap">
									<i className="fal fa-envelope"></i>
									<span className="card-item_num">01.</span>
									<h4>Our Mails</h4>
									<p>Email us today. </p>
									<a href="#" className="card-link">info@cyfamod.com</a>
								</div>
							</div>
							
							<div className="col-md-4">
								<div className="card-item fl-wrap">
									<i className="fal fa-phone-rotary"></i>
									<span className="card-item_num">02.</span>
									<h4>Our Phones </h4>
									<p>Contact us today. </p>
									<a href="#" className="card-link">1. Whatsapp only : +44 7440 086 288</a><br/>
									<a href="#" className="card-link">2. Call only : +234 80 37 261 465</a>
								</div>
							</div>
							
							<div className="col-md-4">
								<div className="card-item fl-wrap">
									<i className="fal fa-map-marked"></i>
									<span className="card-item_num">03.</span>
									<h4>Our Address </h4>
									<p>Visit us today. </p>
									<a href="#" className="card-link">1. United kingdom</a><br/>
									<a href="#" className="card-link">2. Abuja NIgeria</a>
								</div>
							</div>
							
						</div>
						<div className="contacts-opt fl-wrap">
							<div className="contact-social">
								<span className="cs-title">Find us on: </span>
								<ul>
									<li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
									<li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
									<li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
									<li><a href="#" target="_blank"><i className="fab fa-whatsapp"></i></a></li>
								</ul>
							</div>
						
						</div>
						<div className="map-links_title">Location of our offices:</div>
						<div className="map-links_tabs">
							<a className="map-link ml_act" href="#" data-linklat="40.7427837" data-linklong="-73.11445617"><span>01.</span> UK Office</a>
							<a className="map-link ml_act" href="#" data-linklat="38.90706436" data-linklong="-77.05604553"><span>02.</span> Nigeria Office</a>
							
						</div>
						
					</div>
				</section>
				
				<section className="no-padding">
					<div className="announcement color-bg">
						<div className="container">
						
						</div>
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
											<li><i className="fal fa-phone"></i><span>Phone :</span><a href="tel:">Call only : +234 80 37 261 465</a></li>

											<li><i className="fal fa-phone"></i><span>Phone :</span><a href="tel:">Whatsapp only : +44 7440 086 288</a></li>
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
			
        <div className="contact-form-wrap">
            <div className="contact-form-container">
             
            </div>
            <div className="contact-form-overlay"></div>
        </div>
        		
	</div>
	
</body>
  )
}

export default Contact