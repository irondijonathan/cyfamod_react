import React from 'react'
import { Link } from 'react-router-dom'
import logopng from "./../images/logo.png"
import bgjpgiii from "./../images/bg/3.jpg"
import serviiijpg from "./../images/services/3.jpg"
import servijpg from "./../images/services/1.jpg"
import servxijpg from "./../images/services/6.jpg"
import servxjpg from "./../images/services/5.jpg"

const Services = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log('Form Data:', formData);
  };
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
                    <li><i className="fal fa-map-marker"></i><a href="#" target="_b0079felank"> United kingdom</a></li>
                    <li><i className="fal fa-phone"></i><a href="tel:+234 80 37 261 465"> call only :+234 80 37 261 465</a></li>
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
                
                <Link to="/" className="logo-holder"><img src={logopng} alt=""/></Link>
                
                <a href="#" className="header-btn color-bg"><span>WELCOME </span> </a>
                <div className="search_btn htact show_search-btn"><i className="far fa-search"></i> <span className="header-tooltip">Search</span></div>
                <div className="show-share-btn showshare htact"><i className="fal fa-bullhorn"></i> <span className="header-tooltip">Share</span></div>
                
                
                <div className="header-search-wrap novis_sarch">
                  <div className="widget-inner">
                  <form action="#">
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
                        <Link to="/" className="act-link">Home </Link>
                      
                      </li>
                    
                      
                      <li><Link to="/">Blog</Link></li>
                        
                      <li><Link to="/services">Services</Link></li>
                      
                
                      <li><Link to="/contact">Contact</Link></li>

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
                  <div className="bg" data-bg={bgjpgiii} data-scrollax="properties: { translateY: '40%' }"></div>
                  <div className="parallax-wrap">
                    <div className="container">
                      <div className="page-title">
                        <h3>Our Services</h3>
                        <p>At Cyfamond Technologies, we help you find your internet presence with a strong market positioning.</p>
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
                    <a href="#">Home</a><span>Our Services</span>
                  </div>
                </div>
              </div>
              
              <section className="gray-bg small-top_padding stp-bot">
                <div className="hex-bg"><span className="hex hex1"></span><span className="hex hex2"></span><span className="hex hex3"></span></div>
                <div className="container">
                  <div className="row fl-det">
                    <div className="col-md-9">
                      
                      <div className="row">
                        <div className="col-md-6">
                          <div className="det-box">
                            <a href="#" className="det-box-media"><img src={servijpg} alt="" className="respimg"/></a>
                            <div className="det-box-ietm fl-wrap">
                              <h3><a href="#">WEB & MOBILE DEVELOPMENT</a></h3>
                              
                              <p>At Cyfamond Technologies, we believe that a great website should come with a great mobile application which is fast, responsive, free from cluttering, aids flexibility and have easy navigation for a better service. We provide all development services which includes Android, IOS and Window mobile applications for all businesses.</p>
                              
                              <span className="serv_number">01.</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="det-box">
                            <a href="#" className="det-box-media"><img src={servxijpg} alt="" className="respimg"/></a>
                            <div className="det-box-ietm fl-wrap">
                              <h3><a href="#">NETWORKING / SECURITY</a></h3>
                              
                              <p>We understand that a breach in the security system of any business can lead to loss of vital information and can cause a severe damage to both our client’s reputation, as well as ours. Hence, it is our top most priority to ensure the safety and security of our client’s data against viruses, malware attacks and cyberattacks on software solutions, mobile devices and all electronic devices, using our multi-layered, highly encrypted end-to-end security protection.</p>
                              
                              <span className="serv_number">02.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="row">
                        <div className="col-md-6">
                          <div className="det-box">
                            <a href="#" className="det-box-media"><img src={serviiijpg} alt="" className="respimg"/></a>
                            <div className="det-box-ietm fl-wrap">
                              <h3><a href="#">DIGITAL MARKETING</a></h3>
                              
                              <p>We create audio, video and text contents for your Blogpost, Podcast, video marketing, SEO, Cryptocurrency Business, technical and educational analysis. Our team of experienced content creators will work with you through the whole process of creating your content and giving your idea the right exposure it deserves.</p>
                              
                              <span className="serv_number">03.</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="det-box">
                            <a href="#" className="det-box-media"><img src={servxjpg} alt="" className="respimg"/></a>
                            <div className="det-box-ietm fl-wrap">
                              <h3><a href="#">BUSINESS BRANDING & DESIGNS</a></h3>
                              
                              <p>As the world evolves, marketing strategies gets more fragmented and highly competitive. We critically and creatively analyse the market competition and identify the loopholes therein, in other to interpret the result to give an outstanding and unbeatable brand personality. </p>
                              
                              <span className="serv_number">04.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    
                      <div className="clearfix"></div>
                      <div className="order-wrap fl-wrap">
                        <div className="row">
                          <div className="col-md-8">
                            <h4>Ready to order your project ?</h4>
                          </div>
                          <div className="col-md-4">
                            <Link to="/contact" className="ord-link color-bg">Get In Touch</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-3">
                      <div className="widget-sidebar fix-bar">
                        <ul className="serv-nav">
                          <li><Link to="/services" className="act-ser">All Services</Link></li>
                          <li><Link to="/">WEB & MOBILE DEVELOPMENT</Link></li>
                          <li><Link to="/">NETWORKING / SECURITY</Link></li>
                          <li><Link to="/">DIGITAL MARKETING</Link></li>
                          <li><Link to="/">BUSINESS BRANDING & DESIGNS</Link></li>
                          
                        </ul>
                        
                      </div>
                    </div>
                    
                  </div>
                </div>
                <div className="limit-box"></div>
              </section>
              
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
                            <li><i className="fal fa-phone"></i><span>Phone :</span><a href="tel:">Whatsapp only : +234 80 37 261 465</a></li>

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
        
          <div className="main-register-container">
            <div className="reg-overlay close-reg-form"></div>
            <div className="main-register-holder">
              <div className="main-register tabs-act fl-wrap">
                <ul className="tabs-menu">
                  <li className="current"><a href="#tab-1"><i className="fal fa-sign-in-alt"></i> Login</a></li>
                  <li><a href="#tab-2"><i className="fal fa-user-plus"></i> Register</a></li>
                </ul>
                <div className="close-modal close-reg-form"><i className="fal fa-times"></i></div>
                
                <div id="tabs-container">
                  <div className="tab">
                    
                    <div id="tab-1" className="tab-content first-tab">
                      <div className="custom-form">
                      <form method="post" name="registerform" onSubmit={handleSubmit}>
                          <label>Username or Email Address <span>*</span> </label>
                          <input name="email" type="text" onClick={(e) => e.target.select()} defaultValue="" />
                          <label>Password <span>*</span> </label>
                          <input name="password" type="password" onClick={(e) => e.target.select()} defaultValue="" />
                          <div className="filter-tags">
                            <input id="check-a" type="checkbox" name="check" />
                            <label htmlFor="check-a">Remember me</label>
                          </div>
                          <div className="lost_password">
                            <a href="#">Lost Your Password?</a>
                          </div>
                          <div className="clearfix"></div>
                          <button type="submit" className="log-submit-btn color-bg">
                            <span>Log In</span>
                          </button>
                        </form>
                      </div>
                    </div>
                    
                    <div className="tab">
                      <div id="tab-2" className="tab-content">
                        <div className="custom-form">
                        <form method="post" name="registerform" className="main-register-form" id="main-register-form2" onSubmit={handleSubmit}>
                            <label>Full Name <span>*</span> </label>
                            <input name="name" type="text" onClick={(e) => e.target.select()} defaultValue="" />
                            <label>Email Address <span>*</span></label>
                            <input name="email" type="text" onClick={(e) => e.target.select()} defaultValue="" />
                            <label>Password <span>*</span></label>
                            <input name="password" type="password" onClick={(e) => e.target.select()} defaultValue="" />
                            <button type="submit" className="log-submit-btn color-bg">
                              <span>Register</span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  
                  <div className="log-separator fl-wrap"><span>or</span></div>
                  <div className="soc-log  fl-wrap">
                    <p>For faster login or register use your social account.</p>
                    <a href="#"><i className="fab fa-facebook-f"></i>Connect with Facebook</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
      </div>
      
      
    </div>
  )
}

export default Services