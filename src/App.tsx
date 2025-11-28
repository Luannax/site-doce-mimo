import { useState } from 'react';
import './App.css';
import { products, contactInfo, features, PHONE_NUMBER } from './data';
import type { Product } from './types';
import logoSemFundo from './assets/logo doce mimo.png';
import logoDoce from './assets/logo-doce-mimo.png';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

// Navbar Component
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="logo-nav">
          <img src={logoSemFundo} alt="Logo" className="logo-image" />
          <span>Doce Mimo</span>
        </div>
        <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#produtos" className="nav-link" onClick={() => setIsMenuOpen(false)}>Produtos</a></li>
          <li><a href="#contato" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contato</a></li>
        </ul>
      </div>
    </nav>
  );
}

// Hero Component
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <img src={logoDoce} alt="Logo" className="hero-logo" />
        <h1 className="hero-title">Doces Artesanais Premium</h1>
        <p className="hero-subtitle">Palha Italiana Gourmet que conquistam paladares</p>
        <a href="#produtos" className="cta-button">Ver Nossos Produtos</a>
      </div>
    </section>
  );
}

// About Component
function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <h2>Bem-vindo à Doce Mimo</h2>
          <p>
            Especializada em palha italiana de qualidade premium, criamos doces gourmet que combinam 
            tradição italiana com sabor irresistível. Cada produção é feita com ingredientes selecionados 
            e muito carinho.
          </p>
          <div className="about-features">
            {features.map((feature, index) => (
              <div key={index} className="feature">
                <i className={`fas fa-${feature.icon}`}></i>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Products Component
function Products() {
  return (
    <section id="produtos" className="products-section">
      <div className="container">
        <div className="section-header">
          <h2>Nossos Produtos</h2>
          <p>Seleção de palha italiana artesanal</p>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ProductCard Component
interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleWhatsApp = () => {
    const deliveryFee = 5.00;
    const totalWithDelivery = product.price + deliveryFee;
    const message = `Olá! Gostaria de encomendar: *${product.name}*\n\nValor do produto: R$ ${product.price.toFixed(2)}\nTaxa de entrega: R$ ${deliveryFee.toFixed(2)}\n*Total: R$ ${totalWithDelivery.toFixed(2)}*\n\nPoderia me passar mais informações?`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <div className="image-carousel">
          <img src={product.images[currentImageIndex]} alt={product.name} className="carousel-img active" />
        </div>
        {product.badge && (
          <span className="badge" style={{ background: product.badgeColor }}>{product.badge}</span>
        )}
        {product.images.length > 1 && (
          <>
            <button className="carousel-btn prev" onClick={handlePrevImage}>❮</button>
            <button className="carousel-btn next" onClick={handleNextImage}>❯</button>
            <div className="carousel-dots">
              {product.images.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-pricing">
          <div className="price-row">
            <span className="price-label">Produto:</span>
            <span className="product-price">R$ {product.price.toFixed(2)}</span>
          </div>
          <div className="price-row delivery-row">
            <span className="price-label">
              <i className="fas fa-truck"></i> Entrega:
            </span>
            <span className="delivery-fee">R$ 5,00</span>
          </div>
        </div>
        <div className="product-footer">
          <button className="whatsapp-button" onClick={handleWhatsApp}>
            <i className="fab fa-whatsapp"></i> Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

// Contact Component
function Contact() {
  return (
    <section id="contato" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2>Entre em Contato</h2>
          <p>Estamos prontos para atender você</p>
        </div>
        <div className="contact-content">
          {contactInfo.map((contact, index) => (
            <div key={index} className="contact-item">
              <i className={contact.type === 'location' ? 'fas fa-map-marker-alt' : `fab fa-${contact.icon}`}></i>
              <h3>{contact.title}</h3>
              <p>{contact.description}</p>
              <a href={contact.link} target="_blank" rel="noopener noreferrer" className="contact-link">
                {contact.value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Doce Mimo</h4>
            <p>Especializados em palha italiana gourmet artesanal.</p>
          </div>
          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#produtos">Produtos</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Redes Sociais</h4>
            <div className="social-links">
              <a href="https://www.instagram.com/doce.mimo.arenapolis" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://api.whatsapp.com/send/?phone=5565996186393" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Doce Mimo. Todos os direitos reservados.</p>
          <p>Feito e desenvolvido por <a href="https://instagram.com/dev.luanna" target="_blank" rel="noopener noreferrer" className="dev-link">Luanna</a></p>
        </div>
      </div>
    </footer>
  );
}

export default App;
