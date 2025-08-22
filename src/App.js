import React, { useState, useEffect } from 'react';
import './App.css';
import { translations } from './translations';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [language, setLanguage] = useState('es');

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'music', 'about', 'gallery', 'tour', 'shop', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav id="main-nav">
        <div className="nav-container">
          <div className="logo">
            <a href="#home" onClick={() => scrollToSection('home')}>
              <img src={`${process.env.PUBLIC_URL}/jp.png`} alt="Jonathan Pérez" className="logo-image" />
            </a>
          </div>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={() => scrollToSection('home')}>{t.nav.home}</a></li>
            <li><a href="#music" className={`nav-link ${activeSection === 'music' ? 'active' : ''}`} onClick={() => scrollToSection('music')}>{t.nav.music}</a></li>
            <li><a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={() => scrollToSection('about')}>{t.nav.about}</a></li>
            <li><a href="#gallery" className={`nav-link ${activeSection === 'gallery' ? 'active' : ''}`} onClick={() => scrollToSection('gallery')}>{t.nav.gallery}</a></li>
            <li><a href="#tour" className={`nav-link ${activeSection === 'tour' ? 'active' : ''}`} onClick={() => scrollToSection('tour')}>{t.nav.tour}</a></li>
            <li><a href="#shop" className={`nav-link ${activeSection === 'shop' ? 'active' : ''}`} onClick={() => scrollToSection('shop')}>{t.nav.shop}</a></li>
            <li><a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => scrollToSection('contact')}>{t.nav.contact}</a></li>
          </ul>
          <div className="language-selector">
            <button 
              className={`lang-btn ${language === 'es' ? 'active' : ''}`}
              onClick={() => setLanguage('es')}
            >
              ES
            </button>
            <button 
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
          </div>
          <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="animated-background">
          <div className="gradient-overlay"></div>
          <div className="particles"></div>
        </div>
        <div className="hero-content">
          <img src={`${process.env.PUBLIC_URL}/Diseño sin título3.png`} alt="Jonathan Pérez" className="hero-logo-image" />
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <div className="hero-cta">
            <a href="#music" className="btn btn-primary" onClick={() => scrollToSection('music')}>{t.hero.listenMusic}</a>
            <a href="#contact" className="btn btn-secondary" onClick={() => scrollToSection('contact')}>{t.hero.contact}</a>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>{t.hero.scrollDown}</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="section music-section">
        <div className="container">
          <h2 className="section-title">{t.music.title}</h2>
          <div className="coming-soon-container">
            <div className="coming-soon-content">
              <div className="coming-soon-badge">
                <i className="fas fa-music badge-icon"></i>
                {t.music.comingSoon}
              </div>
              <h3>{t.music.newAlbum}</h3>
              <p>{t.music.workingOn}</p>
              <p className="highlight-text">{t.music.stayTuned}</p>
              
              <div className="streaming-platforms">
                <h4>{t.music.availableSoon}</h4>
                <div className="streaming-links">
                  <a href="#" className="streaming-link">
                    <i className="fab fa-spotify"></i>
                    Spotify
                  </a>
                  <a href="#" className="streaming-link">
                    <i className="fab fa-apple"></i>
                    Apple Music
                  </a>
                  <a href="#" className="streaming-link">
                    <i className="fab fa-youtube"></i>
                    YouTube
                  </a>
                </div>
              </div>
            </div>
            
            <div className="coming-soon-image">
              <div className="music-visual">
                <div className="music-cover">
                  <i className="fas fa-compact-disc"></i>
                </div>
                <div className="equalizer">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className={`bar bar${i + 1}`}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">{t.about.title}</h2>
          <div className="about-grid">
            <div className="about-image-container">
              <div className="about-image">
                <img src={`${process.env.PUBLIC_URL}/jona1.jpg`} alt="Jonathan Pérez" className="about-photo" />
              </div>
              <div className="about-quote">
                <blockquote>
                  "{t.about.quote}"
                </blockquote>
              </div>
            </div>
            
            <div className="about-bio">
              <h3>{t.about.name}</h3>
              <h4>{t.about.role}</h4>
              <p>{t.about.bio1}</p>
              <p>{t.about.bio2}</p>
              
              <div className="skills-container">
                <div className="skill-item">
                  <div className="skill-icon">
                    <i className="fas fa-guitar"></i>
                  </div>
                  <div className="skill-info">
                    <h5>{t.about.guitar}</h5>
                    <div className="skill-bar">
                      <div className="skill-level" style={{width: '95%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="skill-item">
                  <div className="skill-icon">
                    <i className="fas fa-microphone"></i>
                  </div>
                  <div className="skill-info">
                    <h5>{t.about.vocal}</h5>
                    <div className="skill-bar">
                      <div className="skill-level" style={{width: '90%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="skill-item">
                  <div className="skill-icon">
                    <i className="fas fa-music"></i>
                  </div>
                  <div className="skill-info">
                    <h5>{t.about.composition}</h5>
                    <div className="skill-bar">
                      <div className="skill-level" style={{width: '88%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="signature">- Jonathan</div>
              
              <div className="social-links">
                <a href="#" className="social-link">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section gallery-section">
        <div className="container">
          <div className="gallery-header">
            <h2 className="section-title">{t.gallery.title}</h2>
            <p className="gallery-intro">
              {t.gallery.intro}
            </p>
          </div>
          
          <div className="coming-soon-gallery">
            {[
              { icon: 'fas fa-camera', title: t.gallery.studioSessions, desc: t.gallery.studioDesc },
              { icon: 'fas fa-microphone-alt', title: t.gallery.liveConcerts, desc: t.gallery.liveDesc },
              { icon: 'fas fa-headphones', title: t.gallery.creativeProcess, desc: t.gallery.creativeDesc },
              { icon: 'fas fa-guitar', title: t.gallery.instruments, desc: t.gallery.instrumentsDesc },
              { icon: 'fas fa-users', title: t.gallery.collaborations, desc: t.gallery.collaborationsDesc },
              { icon: 'fas fa-star', title: t.gallery.specialMoments, desc: t.gallery.specialDesc }
            ].map((item, index) => (
              <div key={index} className="coming-soon-item">
                <div className="coming-soon-icon">
                  <i className={item.icon}></i>
                </div>
                <div className="coming-soon-info">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  <span className="coming-soon-badge">{t.music.comingSoon}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="gallery-cta">
            <h3>{t.gallery.followSocial}</h3>
            <p>{t.gallery.socialDesc}</p>
            <a href="#contact" className="btn btn-primary" onClick={() => scrollToSection('contact')}>{t.gallery.connect}</a>
          </div>
        </div>
      </section>

      {/* Tour Section */}
      <section id="tour" className="section tour-section">
        <div className="container">
          <div className="tour-header">
            <h2 className="section-title">{t.tour.title}</h2>
          </div>
          
          <div className="tour-content">
            <div className="tour-announcement">
              <div className="announcement-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="announcement-content">
                <h3>{t.tour.upcomingDates}</h3>
                <p>{t.tour.tourAnnouncement}</p>
              </div>
            </div>
            
            <div className="tour-form-container">
              <div className="tour-form">
                <h3>{t.tour.notifications}</h3>
                <p>{t.tour.firstToKnow}</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input 
                      type="email" 
                      placeholder={t.tour.emailPlaceholder} 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required 
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    <i className="fas fa-bell"></i>
                    {t.tour.notifyMe}
                  </button>
                </form>
                {isSubmitted && (
                  <div className="success-message">
                    {t.tour.thankYou}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="section shop-section">
        <div className="container">
          <div className="shop-header">
            <h2 className="section-title">{t.shop.title}</h2>
            <p className="shop-intro">
              {t.shop.intro}
            </p>
          </div>
          
          <h3 className="upcoming-title">{t.shop.upcomingProducts}</h3>
          
          <div className="products-grid">
            {[
              { icon: 'fas fa-tshirt', category: t.shop.clothing, title: t.shop.officialShirts, desc: t.shop.uniqueDesigns },
              { icon: 'fas fa-compact-disc', category: t.shop.music, title: t.shop.physicalAlbums, desc: t.shop.limitedEditions },
              { icon: 'fas fa-mug-hot', category: t.shop.accessories, title: t.shop.mugsMore, desc: t.shop.dailyProducts },
              { icon: 'fas fa-guitar', category: t.shop.instruments, title: t.shop.customPicks, desc: t.shop.signaturePicks }
            ].map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-icon">
                  <i className={product.icon}></i>
                </div>
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h4>{product.title}</h4>
                  <p>{product.desc}</p>
                  <span className="product-coming-soon">{t.music.comingSoon}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="shop-notification">
            <div className="notification-content">
              <div className="notification-icon">
                <i className="fas fa-shopping-bag"></i>
              </div>
              <div className="notification-text">
                <h3>{t.shop.firstToBuy}</h3>
                <p>{t.shop.registerNotifications}</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-input-group">
                    <input 
                      type="email" 
                      placeholder={t.tour.emailPlaceholder} 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required 
                    />
                    <button type="submit" className="btn">
                      <i className="fas fa-envelope"></i>
                      {t.tour.notifyMe}
                    </button>
                  </div>
                </form>
                {isSubmitted && (
                  <div className="success-message">
                    {t.shop.perfectNotify}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">{t.contact.title}</h2>
          
          <div className="contact-grid">
            <div className="contact-card">
              <h3>{t.contact.letsConnect}</h3>
              <p>{t.contact.contactDesc}</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4>{t.contact.email}</h4>
                    <span>jonaperez.music@gmail.com</span>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h4>{t.contact.phone}</h4>
                    <span>+598 92 934 394</span>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4>{t.contact.location}</h4>
                    <span>Canelones, Uruguay</span>
                  </div>
                </div>
              </div>
              
              <div className="social-links-contact">
                <h4>{t.contact.followMe}</h4>
                <div className="social-icons">
                  <a href="#" className="social-icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <div className="contact-form-card">
                <h3>{t.contact.sendMessage}</h3>
                
                {isSubmitted && (
                  <div className="form-message success">
                    <i className="fas fa-check-circle message-icon"></i>
                    {t.contact.messageSent}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>{t.contact.name}</label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label>{t.contact.email}</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>{t.contact.message}</label>
                    <textarea 
                      rows="5" 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary">
                    <i className="fas fa-paper-plane"></i>
                    {t.contact.sendBtn}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Epic Footer */}
      <footer className="epic-footer">
        <div className="footer-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
        
        <div className="footer-hero">
          <div className="container">
            <div className="footer-hero-content">
              <div className="footer-brand">
                <img src={`${process.env.PUBLIC_URL}/WhatsApp Image 2025-06-06 at 23.21.22_6dafd632.jpg`} alt="Jonathan Pérez" className="footer-logo-img" />
                <h2 className="footer-title">Jonathan Pérez</h2>
                <p className="footer-tagline">{t.footer.tagline}</p>
                <p className="footer-description">
                  {t.footer.description}
                </p>
              </div>
              
              <div className="footer-newsletter-epic">
                <div className="newsletter-icon">
                  <i className="fas fa-music"></i>
                </div>
                <h3>{t.footer.stayConnected}</h3>
                <p>{t.footer.firstToKnow}</p>
                <form className="epic-subscribe-form" onSubmit={handleSubmit}>
                  <div className="input-wrapper">
                    <input 
                      type="email" 
                      placeholder={t.tour.emailPlaceholder} 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required 
                    />
                    <button type="submit">
                      <i className="fas fa-paper-plane"></i>
                      {t.footer.subscribe}
                    </button>
                  </div>
                </form>
                {isSubmitted && (
                  <div className="epic-success">
                    <i className="fas fa-check-circle"></i>
                    {t.footer.welcomeFamily}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-content">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-section">
                <h3>
                  <i className="fas fa-compass"></i>
                  {t.footer.navigation}
                </h3>
                <ul className="footer-links">
                  <li><a href="#home" onClick={() => scrollToSection('home')}><i className="fas fa-home"></i>{t.footer.home}</a></li>
                  <li><a href="#music" onClick={() => scrollToSection('music')}><i className="fas fa-music"></i>{t.nav.music}</a></li>
                  <li><a href="#about" onClick={() => scrollToSection('about')}><i className="fas fa-user"></i>{t.nav.about}</a></li>
                  <li><a href="#gallery" onClick={() => scrollToSection('gallery')}><i className="fas fa-images"></i>{t.nav.gallery}</a></li>
                  <li><a href="#tour" onClick={() => scrollToSection('tour')}><i className="fas fa-calendar"></i>{t.nav.tour}</a></li>
                  <li><a href="#contact" onClick={() => scrollToSection('contact')}><i className="fas fa-envelope"></i>{t.nav.contact}</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h3>
                  <i className="fas fa-share-alt"></i>
                  {t.footer.socialNetworks}
                </h3>
                <div className="epic-social-grid">
                  <a href="#" className="epic-social-link instagram">
                    <i className="fab fa-instagram"></i>
                    <div className="social-overlay"></div>
                  </a>
                  <a href="#" className="epic-social-link facebook">
                    <i className="fab fa-twitter"></i>
                    <div className="social-overlay"></div>
                  </a>
                  <a href="#" className="epic-social-link youtube">
                    <i className="fab fa-youtube"></i>
                    <div className="social-overlay"></div>
                  </a>
                  <a href="#" className="epic-social-link tiktok">
                    <i className="fab fa-tiktok"></i>
                    <div className="social-overlay"></div>
                  </a>
                  <a href="#" className="epic-social-link pinterest">
                    <i className="fab fa-pinterest"></i>
                    <div className="social-overlay"></div>
                  </a>
                  <a href="#" className="epic-social-link linkedin">
                    <i className="fab fa-linkedin"></i>
                    <div className="social-overlay"></div>
                  </a>
                </div>
              </div>
              
              <div className="footer-section">
                <h3>
                  <i className="fas fa-map-marker-alt"></i>
                  {t.contact.title}
                </h3>
                <div className="contact-items">
                  <div className="contact-item-epic">
                    <div className="contact-icon-epic">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="contact-details">
                      <span className="contact-label">{t.contact.email}</span>
                      <span className="contact-value">jonaperez.music@gmail.com</span>
                    </div>
                  </div>
                  <div className="contact-item-epic">
                    <div className="contact-icon-epic">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="contact-details">
                      <span className="contact-label">{t.contact.phone}</span>
                      <span className="contact-value">+598 92 934 394</span>
                    </div>
                  </div>
                  <div className="contact-item-epic">
                    <div className="contact-icon-epic">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="contact-details">
                      <span className="contact-label">{t.contact.location}</span>
                      <span className="contact-value">Canelones, Uruguay</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="footer-section">
                <h3>
                  <i className="fas fa-headphones"></i>
                  {t.footer.streaming}
                </h3>
                <div className="streaming-platforms-footer">
                  <a href="#" className="streaming-item">
                    <i className="fab fa-spotify"></i>
                    <span>Spotify</span>
                  </a>
                  <a href="#" className="streaming-item">
                    <i className="fab fa-apple"></i>
                    <span>Apple Music</span>
                  </a>
                  <a href="#" className="streaming-item">
                    <i className="fab fa-youtube"></i>
                    <span>YouTube Music</span>
                  </a>
                  <a href="#" className="streaming-item">
                    <i className="fab fa-soundcloud"></i>
                    <span>SoundCloud</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom-epic">
          <div className="container">
            <div className="footer-bottom-content">
              <div className="copyright-epic">
                <p>{t.footer.copyright}</p>
                <div className="legal-links">
                  <a href="#">{t.footer.privacyPolicy}</a>
                  <span>•</span>
                  <a href="#">{t.footer.termsOfUse}</a>
                  <span>•</span>
                  <a href="#">{t.footer.cookies}</a>
                </div>
              </div>
              
              <div className="footer-actions">
                <button className="scroll-to-top" onClick={() => scrollToSection('home')}>
                  <i className="fas fa-rocket"></i>
                  <span>{t.footer.backToTop}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-signature">
          <div className="container">
            <div className="signature-content">
              <div className="music-bars">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`music-bar bar-${i + 1}`}></div>
                ))}
              </div>
              <span>{t.footer.madeWith}</span>
              <i className="fas fa-heart heart-beat"></i>
              <span>{t.footer.and}</span>
              <i className="fas fa-music music-note"></i>
              <span>{t.footer.by}</span>
              <div className="music-bars">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`music-bar bar-${i + 1}`}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
