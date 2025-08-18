import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
              <img src="/jp.png" alt="Jonathan Pérez" className="logo-image" />
            </a>
          </div>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href="#music" className={`nav-link ${activeSection === 'music' ? 'active' : ''}`} onClick={() => scrollToSection('music')}>Music</a></li>
            <li><a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={() => scrollToSection('about')}>About</a></li>
            <li><a href="#gallery" className={`nav-link ${activeSection === 'gallery' ? 'active' : ''}`} onClick={() => scrollToSection('gallery')}>Gallery</a></li>
            <li><a href="#tour" className={`nav-link ${activeSection === 'tour' ? 'active' : ''}`} onClick={() => scrollToSection('tour')}>Tour</a></li>
            <li><a href="#shop" className={`nav-link ${activeSection === 'shop' ? 'active' : ''}`} onClick={() => scrollToSection('shop')}>Shop</a></li>
            <li><a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
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
          <img src="/Diseño sin título (6).png" alt="Jonathan Pérez" className="hero-logo-image" />
          <p className="hero-subtitle">MÚSICO • COMPOSITOR • ARTISTA</p>
          <div className="hero-cta">
            <a href="#music" className="btn btn-primary" onClick={() => scrollToSection('music')}>Escuchar Música</a>
            <a href="#contact" className="btn btn-secondary" onClick={() => scrollToSection('contact')}>Contacto</a>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="section music-section">
        <div className="container">
          <h2 className="section-title">Música</h2>
          <div className="coming-soon-container">
            <div className="coming-soon-content">
              <div className="coming-soon-badge">
                <i className="fas fa-music badge-icon"></i>
                Próximamente
              </div>
              <h3>Nuevo Álbum en Camino</h3>
              <p>En este momento estoy trabajando en mi próximo álbum que promete ser una experiencia musical única.</p>
              <p className="highlight-text">¡Mantente atento a las actualizaciones!</p>
              
              <div className="streaming-platforms">
                <h4>Disponible próximamente en:</h4>
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
          <h2 className="section-title">Sobre Mí</h2>
          <div className="about-grid">
            <div className="about-image-container">
              <div className="about-image">
                <img src="/jona1.jpg" alt="Jonathan Pérez" className="about-photo" />
              </div>
              <div className="about-quote">
                <blockquote>
                  "La música es el lenguaje universal que conecta almas y trasciende fronteras."
                </blockquote>
              </div>
            </div>
            
            <div className="about-bio">
              <h3>Jonathan Pérez</h3>
              <h4>Músico y Compositor</h4>
              <p>Con más de una década de experiencia en la industria musical, he dedicado mi vida a crear melodías que toquen el corazón y letras que inspiren.</p>
              <p>Mi música fusiona elementos tradicionales con sonidos contemporáneos, creando un estilo único que resuena con audiencias de todas las edades.</p>
              
              <div className="skills-container">
                <div className="skill-item">
                  <div className="skill-icon">
                    <i className="fas fa-guitar"></i>
                  </div>
                  <div className="skill-info">
                    <h5>Guitarra</h5>
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
                    <h5>Vocal</h5>
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
                    <h5>Composición</h5>
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
            <h2 className="section-title">Galería</h2>
            <p className="gallery-intro">
              Una colección de momentos especiales, sesiones de estudio y presentaciones en vivo.
            </p>
          </div>
          
          <div className="coming-soon-gallery">
            {[
              { icon: 'fas fa-camera', title: 'Sesiones de Estudio', desc: 'Detrás de cámaras en el proceso creativo' },
              { icon: 'fas fa-microphone-alt', title: 'Conciertos en Vivo', desc: 'Momentos únicos con el público' },
              { icon: 'fas fa-headphones', title: 'Proceso Creativo', desc: 'El arte de crear música' },
              { icon: 'fas fa-guitar', title: 'Instrumentos', desc: 'Las herramientas de mi arte' },
              { icon: 'fas fa-users', title: 'Colaboraciones', desc: 'Trabajando con otros artistas' },
              { icon: 'fas fa-star', title: 'Momentos Especiales', desc: 'Recuerdos inolvidables' }
            ].map((item, index) => (
              <div key={index} className="coming-soon-item">
                <div className="coming-soon-icon">
                  <i className={item.icon}></i>
                </div>
                <div className="coming-soon-info">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  <span className="coming-soon-badge">Próximamente</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="gallery-cta">
            <h3>¡Sígueme en redes sociales!</h3>
            <p>No te pierdas las últimas fotos y videos. Sígueme en mis redes sociales para contenido exclusivo y actualizaciones diarias.</p>
            <a href="#contact" className="btn btn-primary" onClick={() => scrollToSection('contact')}>Conectar</a>
          </div>
        </div>
      </section>

      {/* Tour Section */}
      <section id="tour" className="section tour-section">
        <div className="container">
          <div className="tour-header">
            <h2 className="section-title">Tour</h2>
          </div>
          
          <div className="tour-content">
            <div className="tour-announcement">
              <div className="announcement-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="announcement-content">
                <h3>Próximas Fechas</h3>
                <p>Estoy emocionado de anunciar que pronto estaré de gira. Mantente atento para conocer las fechas y ciudades donde nos encontraremos.</p>
              </div>
            </div>
            
            <div className="tour-form-container">
              <div className="tour-form">
                <h3>Notificaciones de Tour</h3>
                <p>Sé el primero en enterarte de las nuevas fechas</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input 
                      type="email" 
                      placeholder="Tu email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required 
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    <i className="fas fa-bell"></i>
                    Notificarme
                  </button>
                </form>
                {isSubmitted && (
                  <div className="success-message">
                    ¡Gracias! Te notificaremos sobre las nuevas fechas.
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
            <h2 className="section-title">Tienda</h2>
            <p className="shop-intro">
              Próximamente podrás encontrar merchandise oficial, música física y productos exclusivos.
            </p>
          </div>
          
          <h3 className="upcoming-title">Productos Próximamente</h3>
          
          <div className="products-grid">
            {[
              { icon: 'fas fa-tshirt', category: 'Ropa', title: 'Camisetas Oficiales', desc: 'Diseños únicos y exclusivos' },
              { icon: 'fas fa-compact-disc', category: 'Música', title: 'Álbumes Físicos', desc: 'Ediciones limitadas en vinilo y CD' },
              { icon: 'fas fa-mug-hot', category: 'Accesorios', title: 'Tazas y Más', desc: 'Productos para el día a día' },
              { icon: 'fas fa-guitar', category: 'Instrumentos', title: 'Picks Personalizados', desc: 'Púas con mi firma' }
            ].map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-icon">
                  <i className={product.icon}></i>
                </div>
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h4>{product.title}</h4>
                  <p>{product.desc}</p>
                  <span className="product-coming-soon">Próximamente</span>
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
                <h3>¡Sé el primero en comprar!</h3>
                <p>Regístrate para recibir notificaciones cuando la tienda esté disponible y obtén descuentos exclusivos.</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-input-group">
                    <input 
                      type="email" 
                      placeholder="Tu email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required 
                    />
                    <button type="submit" className="btn">
                      <i className="fas fa-envelope"></i>
                      Notificarme
                    </button>
                  </div>
                </form>
                {isSubmitted && (
                  <div className="success-message">
                    ¡Perfecto! Te avisaremos cuando esté lista.
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
          <h2 className="section-title">Contacto</h2>
          
          <div className="contact-grid">
            <div className="contact-card">
              <h3>Conectemos</h3>
              <p>¿Tienes una propuesta, quieres colaborar o simplemente saludar? Me encantaría escucharte.</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <span>jonaperez.music@gmail.com</span>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h4>Teléfono</h4>
                    <span>+598 92 934 394</span>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4>Ubicación</h4>
                    <span>Canelones, Uruguay</span>
                  </div>
                </div>
              </div>
              
              <div className="social-links-contact">
                <h4>Sígueme</h4>
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
                <h3>Envíame un Mensaje</h3>
                
                {isSubmitted && (
                  <div className="form-message success">
                    <i className="fas fa-check-circle message-icon"></i>
                    ¡Mensaje enviado! Te responderé pronto.
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Nombre</label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>Mensaje</label>
                    <textarea 
                      rows="5" 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary">
                    <i className="fas fa-paper-plane"></i>
                    Enviar Mensaje
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
                <img src="/WhatsApp Image 2025-06-06 at 23.21.22_6dafd632.jpg" alt="Jonathan Pérez" className="footer-logo-img" />
                <h2 className="footer-title">Jonathan Pérez</h2>
                <p className="footer-tagline">Músico • Compositor • Artista</p>
                <p className="footer-description">
                  Creando música que conecta corazones y trasciende fronteras. 
                  Únete a este viaje musical extraordinario.
                </p>
              </div>
              
              <div className="footer-newsletter-epic">
                <div className="newsletter-icon">
                  <i className="fas fa-music"></i>
                </div>
                <h3>Mantente Conectado</h3>
                <p>Sé el primero en conocer mis nuevos lanzamientos y conciertos</p>
                <form className="epic-subscribe-form" onSubmit={handleSubmit}>
                  <div className="input-wrapper">
                    <input 
                      type="email" 
                      placeholder="Tu email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required 
                    />
                    <button type="submit">
                      <i className="fas fa-paper-plane"></i>
                      Suscribirse
                    </button>
                  </div>
                </form>
                {isSubmitted && (
                  <div className="epic-success">
                    <i className="fas fa-check-circle"></i>
                    ¡Bienvenido a la familia musical!
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
                  Navegación
                </h3>
                <ul className="footer-links">
                  <li><a href="#home" onClick={() => scrollToSection('home')}><i className="fas fa-home"></i>Inicio</a></li>
                  <li><a href="#music" onClick={() => scrollToSection('music')}><i className="fas fa-music"></i>Música</a></li>
                  <li><a href="#about" onClick={() => scrollToSection('about')}><i className="fas fa-user"></i>Sobre Mí</a></li>
                  <li><a href="#gallery" onClick={() => scrollToSection('gallery')}><i className="fas fa-images"></i>Galería</a></li>
                  <li><a href="#tour" onClick={() => scrollToSection('tour')}><i className="fas fa-calendar"></i>Tour</a></li>
                  <li><a href="#contact" onClick={() => scrollToSection('contact')}><i className="fas fa-envelope"></i>Contacto</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h3>
                  <i className="fas fa-share-alt"></i>
                  Redes Sociales
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
                  Contacto
                </h3>
                <div className="contact-items">
                  <div className="contact-item-epic">
                    <div className="contact-icon-epic">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="contact-details">
                      <span className="contact-label">Email</span>
                      <span className="contact-value">jonaperez.music@gmail.com</span>
                    </div>
                  </div>
                  <div className="contact-item-epic">
                    <div className="contact-icon-epic">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="contact-details">
                      <span className="contact-label">Teléfono</span>
                      <span className="contact-value">+598 92 934 394</span>
                    </div>
                  </div>
                  <div className="contact-item-epic">
                    <div className="contact-icon-epic">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="contact-details">
                      <span className="contact-label">Ubicación</span>
                      <span className="contact-value">Canelones, Uruguay</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="footer-section">
                <h3>
                  <i className="fas fa-headphones"></i>
                  Streaming
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
                <p>&copy; 2025 Jonathan Pérez. Todos los derechos reservados.</p>
                <div className="legal-links">
                  <a href="#">Política de Privacidad</a>
                  <span>•</span>
                  <a href="#">Términos de Uso</a>
                  <span>•</span>
                  <a href="#">Cookies</a>
                </div>
              </div>
              
              <div className="footer-actions">
                <button className="scroll-to-top" onClick={() => scrollToSection('home')}>
                  <i className="fas fa-rocket"></i>
                  <span>Volver Arriba</span>
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
              <span>Hecho con</span>
              <i className="fas fa-heart heart-beat"></i>
              <span>y mucha</span>
              <i className="fas fa-music music-note"></i>
              <span>por Jonathan Pérez</span>
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
