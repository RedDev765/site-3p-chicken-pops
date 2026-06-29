import { useState } from 'react'
import { useScrollReveal, useCountUp } from './useScrollReveal'
import './App.css'

const menuCategories = [
  {
    name: '3P Crusty',
    items: [
      { name: '3P Crusty', desc: 'Riz basmati, filet de poulet crispy, oignon crispy, persil, sauce fromagère crémeuse, sauce maison', price: '67 DH' },
      { name: '3P Bowl', desc: 'Sauce Maison, Base au Choix, Sauce Cheesy, Viande au Choix, Sauce de Base au Choix, Oignon Crispy, Dinde Fumée, Cornichons', price: '88 DH' },
      { name: 'Nouveau Cheezy Crunch', desc: 'Buns briochés, tendre crispy, double cheddar, sauce cheesy, servis avec potatoes et boisson au choix', price: '78 DH' },
    ]
  },
  {
    name: 'Menu Duplex',
    items: [
      { name: 'Menu Duplex Classique', desc: 'Potato buns, 2 pièces poulet frit, sauce maison, cornichons, potatoes, boisson au choix', price: '110 DH' },
      { name: 'Menu Duplex Barbecue', desc: 'Potato buns, 2 pièces poulet frit, sauce barbecue, cornichons, potatoes, boisson au choix', price: '110 DH' },
      { name: 'Menu Duplex Buffalo Honey', desc: 'Potato buns, 2 pièces poulet frit, sauce buffalo honey, cornichons, potatoes, boisson au choix', price: '110 DH' },
      { name: 'Menu Duplex Hot Chicken', desc: 'Potato buns, 2 pièces poulet frit, sauce hot chicken, cornichons, potatoes, boisson au choix', price: '110 DH' },
    ]
  },
  {
    name: 'Crunchy',
    items: [
      { name: 'The Smokey Crunch', desc: 'Buns briochés, tendre crispy, double cheddar, double jambon, sauce fumée, servis avec frites au cheddar et onions crispy et boisson 33cl au choix', price: '78 DH' },
      { name: 'The Mega Crunch', desc: 'Buns briochés, Crispy strips, Laitue, Cornichons, Cheddar, Sauce Barbecue', price: '54 DH' },
      { name: 'The Crunch', desc: 'Buns Briochés, Crispy Strips, Laitue, Cornichons, Cheddar, Sauce Maison, Sauce au choix', price: '36 DH' },
    ]
  },
  {
    name: 'Chicken Pops',
    items: [
      { name: 'Classique Chick\'n Pop\'s', desc: 'Bouchées de poulet frit, cornichons, sauce maison', price: '57 DH' },
      { name: 'BBQ Chick\'n Pop\'s', desc: 'Bouchées de poulet frit, sauce barbecue, sésame, sauce maison', price: '57 DH' },
      { name: 'Buffalo Honey Chick\'n Pop\'s', desc: 'Bouchées de poulet frit, sauce miel buffalo, sauce maison', price: '57 DH' },
      { name: 'Sweet Chili Chick\'n Pop\'s', desc: 'Bouchées de poulet frit, sauce piment doux, sauce maison', price: '57 DH' },
    ]
  },
  {
    name: 'Wrap & Twister',
    items: [
      { name: 'Wrap Harissa', desc: 'Wrap Blé Complet + 3 Strips + Dinde Fumée + Cheddar + Laitue + Sauce Harissa', price: '57 DH' },
      { name: 'Wrap\'n Roll', desc: 'Wrap Blé Complet, poulet frit, salade, sauce maison', price: '55 DH' },
      { name: 'Twister Harissa', desc: 'Wrap Blé Complet + 3 Strips + Dinde Fumée + Cheddar + Laitue + Sauce Harissa', price: '50 DH' },
      { name: 'Twist Storm', desc: 'Tortilla, poulet croustillant, salade, sauce maison', price: '48 DH' },
    ]
  },
  {
    name: 'Sliders',
    items: [
      { name: 'Slider Classique', desc: 'Potato Buns, poulet frit, sauce maison, cornichons, sauce séparée au choix', price: '60 DH' },
      { name: 'Slider Barbecue', desc: 'Potato Buns, poulet frit, sauce Barbecue, cornichons, sauce séparée au choix', price: '60 DH' },
      { name: 'Slider Buffalo Honey', desc: 'Potato Buns, poulet frit, sauce Buffalo Honey, cornichons, sauce séparée au choix', price: '60 DH' },
      { name: 'Slider Hot Chicken', desc: 'Potato Buns, poulet frit, Sauce Hot Chicken, cornichons, sauce séparée au choix', price: '60 DH' },
    ]
  },
  {
    name: 'Boxes & Combos',
    items: [
      { name: 'Super Family', desc: '6Pcs Crispy + 6Pcs Poulet + 2 Grandes Barquettes Riz Mariné + 1L Boisson Au Choix + Grande Frite + 4 Pain + Sauce Maison', price: '252 DH' },
      { name: 'Golden Family', desc: '9 Pcs Poulet + 2 Grandes Barquettes Riz Mariné + 1L Boisson Au Choix + Grande Frites + 4 Pain + Sauce Maison', price: '232 DH' },
      { name: 'Classique Family', desc: '10Pcs Strips + 2 Grandes Barquettes Riz Mariné + 1L Boisson Au Choix + Grande Frite + 4 Pain + Sauce Maison', price: '187 DH' },
      { name: 'Duo Box', desc: '4 Pièces Crispy + 2 Pièces Poulet + 2 Barquettes Riz + 2 Pain + 1L Boisson Au Choix + Frites', price: '118 DH' },
      { name: 'Super Box', desc: '2 Pièces Crispy + 2 Pièces Poulet + Barquette riz basmati Mariné + Pain + Sauce Maison', price: '72 DH' },
      { name: 'Golden Box', desc: '2 Pièces Poulet + Riz Basmati Mariné + Pain + Sauce Maison', price: '57 DH' },
      { name: 'Classique Box', desc: '3 Pièces Crispy + Barquette Riz Basmati Mariné + Pain + Sauce Maison', price: '57 DH' },
    ]
  },
  {
    name: 'Combos Meal',
    items: [
      { name: 'Mix Combo Slider', desc: '2x Sliders Au Choix + Frites + Boisson 33cl + Sauce Au Choix', price: '118 DH' },
      { name: 'The Mega Combo', desc: 'The Mega Crunch + (2 Strips ou Mac\'n Cheese) + Frite + Boisson 25cl', price: '112 DH' },
      { name: 'The Crunch Combo', desc: 'The Crunch + (2 Strips ou Mac\'n Cheese) + Frite + Boisson 25cl', price: '85 DH' },
      { name: 'Wrap\'n Roll Combo', desc: 'Wrap\'n Roll + (2 Strips ou Mac\'n Cheese) + Boisson 33cl + Frite', price: '85 DH' },
      { name: 'Twist Storm Combo', desc: 'Twist Storm + (2 Strips ou Mac\'n Cheese) + Boisson 33cl + Frite', price: '82 DH' },
    ]
  },
  {
    name: 'Sides',
    items: [
      { name: 'Chicken Strips (9 pièces)', desc: '9 filets de poulet tendres et panés', price: '90 DH' },
      { name: 'Chicken Strips (6 pièces)', desc: '6 filets de poulet tendres et panés', price: '64 DH' },
      { name: 'Chicken Strips (4 pièces)', desc: '4 filets de poulet tendres et panés', price: '45 DH' },
      { name: 'Chicken Nuggets (9 pièces)', desc: '9 bouchées de poulet croustillantes', price: '48 DH' },
      { name: 'Chicken Nuggets (6 pièces)', desc: '6 bouchées de poulet croustillantes', price: '34 DH' },
      { name: 'Chicken Nuggets (4 pièces)', desc: '4 bouchées de poulet croustillantes', price: '24 DH' },
      { name: 'Chili Cheese Nuggets (9 pièces)', desc: '9 bouchées au fromage fondu et piment', price: '90 DH' },
      { name: 'Chili Cheese Nuggets (6 pièces)', desc: '6 bouchées au fromage fondu et piment', price: '45 DH' },
      { name: 'Chili Cheese Nuggets (4 pièces)', desc: '4 bouchées au fromage fondu et piment', price: '30 DH' },
      { name: 'Onion Rings (9 pièces)', desc: '9 rondelles d\'oignons frites', price: '30 DH' },
      { name: 'Onion Rings (6 pièces)', desc: '6 rondelles d\'oignons frites', price: '22 DH' },
      { name: 'Onion Rings (4 pièces)', desc: '4 rondelles d\'oignons frites', price: '15 DH' },
    ]
  },
  {
    name: 'Accompagnements',
    items: [
      { name: 'Mac\'n Cheese', desc: 'Barquette de pâtes crémeuses au fromage', price: '37 DH' },
      { name: 'Cheesy Frites', desc: 'Frites au cheddar et oignons crispy', price: '37 DH' },
      { name: 'Riz Basmati Mariné', desc: 'Barquette de riz Basmati mariné', price: '30 DH' },
      { name: 'Riz Basmati', desc: 'Barquette de riz Basmati blanc', price: '30 DH' },
      { name: 'Potatoes', desc: '1 portion de potatoes', price: '22 DH' },
      { name: 'Frites', desc: '1 portion de frites', price: '15 DH' },
      { name: 'Pièce Poulet', desc: '1 pièce de poulet frit', price: '15 DH' },
      { name: 'Pièce Crispy', desc: '1 strip de poulet frit', price: '12 DH' },
    ]
  },
  {
    name: 'Dessert',
    items: [
      { name: 'Tiramisu', desc: 'Dessert au mascarpone, café et cacao', price: '28 DH' },
    ]
  },
  {
    name: 'Boissons',
    items: [
      { name: 'Coca Cola 25Cl', desc: 'Boisson gazeuse', price: '12 DH' },
      { name: 'Coca Cola Zéro 25Cl', desc: 'Boisson gazeuse', price: '12 DH' },
      { name: 'Fanta 25Cl', desc: 'Boisson gazeuse', price: '12 DH' },
      { name: 'Hawai Tropical 25Cl', desc: 'Boisson gazeuse', price: '12 DH' },
      { name: 'Sprite 25Cl', desc: 'Boisson gazeuse', price: '12 DH' },
    ]
  },
]

const reviews = [
  { name: 'Youssef A.', text: 'Les meilleurs crispy d\'Agadir ! La sauce maison est incroyable. Je recommande le 3P Crusty, c\'est un délice.', rating: 5 },
  { name: 'Fatima Z.', text: 'J\'ai commandé la Super Family pour un anniversaire, tout le monde était ravi. Rapport qualité-prix imbattable !', rating: 5 },
  { name: 'Amine B.', text: 'Le Buffalo Honey Chick\'n Pop\'s est une tuerie. La sauce est parfaitement équilibrée. Je commande au moins une fois par semaine.', rating: 5 },
  { name: 'Sara M.', text: 'Livraison rapide sur Glovo et la nourriture est toujours chaude. Les Sliders sont mes préférés. Top !', rating: 4 },
  { name: 'Omar K.', text: 'Rien à dire, c\'est toujours aussi bon. Le Cheezy Crunch est un must. Service rapide et personnel très sympathique.', rating: 5 },
  { name: 'Nadia H.', text: 'Ambiance cool, nourriture délicieuse et prix corrects. Le Twist Storm est super pour un repas lécher. Je recommande vivement !', rating: 5 },
]

function StatCard({ number, suffix, label, delay }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.3 })
  const count = useCountUp(parseInt(number), 2000, isVisible)

  return (
    <div ref={ref} className={`stat card-hover reveal delay-${delay} ${isVisible ? 'visible' : ''}`}>
      <span className="stat-number">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

function App() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [heroRef, heroVisible] = useScrollReveal({ threshold: 0.1 })
  const [aboutTitleRef, aboutTitleVisible] = useScrollReveal()
  const [aboutTextRef, aboutTextVisible] = useScrollReveal()
  const [menuTitleRef, menuTitleVisible] = useScrollReveal()
  const [menuCatRef, menuCatVisible] = useScrollReveal()
  const [menuItemsRef, menuItemsVisible] = useScrollReveal()
  const [reviewsTitleRef, reviewsTitleVisible] = useScrollReveal()
  const [contactTitleRef, contactTitleVisible] = useScrollReveal()
  const [contactInfoRef, contactInfoVisible] = useScrollReveal({ threshold: 0.2 })
  const [contactMapRef, contactMapVisible] = useScrollReveal({ threshold: 0.2 })
  const [footerRef, footerVisible] = useScrollReveal({ threshold: 0.1 })

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="container nav-content">
          <a href="#accueil" className="nav-logo">
            <span className="logo-3p">3P</span>
            <span className="logo-text">CHICKEN POPS</span>
          </a>
          <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#accueil" onClick={() => setMobileMenuOpen(false)}>Accueil</a></li>
            <li><a href="#apropos" onClick={() => setMobileMenuOpen(false)}>À propos</a></li>
            <li><a href="#menu" onClick={() => setMobileMenuOpen(false)}>Menu</a></li>
            <li><a href="#avis" onClick={() => setMobileMenuOpen(false)}>Avis</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section id="accueil" className="hero">
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}></div>
          ))}
        </div>
        <div className="container hero-content" ref={heroRef}>
          <div className={`hero-logo-wrapper reveal-scale ${heroVisible ? 'visible' : ''}`}>
            <span className="hero-3p">3P</span>
          </div>
          <h1 className="hero-title">
            <span className={`hero-name reveal delay-2 ${heroVisible ? 'visible' : ''}`}>CHICKEN POPS</span>
          </h1>
          <p className={`hero-tagline reveal delay-3 ${heroVisible ? 'visible' : ''}`}>Le goût du poulet croustillant, revisité</p>
          <p className={`hero-address reveal delay-4 ${heroVisible ? 'visible' : ''}`}>19 Rue Iligh, Agadir 80000</p>
          <div className={`hero-buttons reveal delay-5 ${heroVisible ? 'visible' : ''}`}>
            <a href="#menu" className="btn btn-primary">Voir le Menu</a>
            <a href="#contact" className="btn btn-outline">Nous Contacter</a>
          </div>
          <div className={`hero-info reveal delay-6 ${heroVisible ? 'visible' : ''}`}>
            <div className="hero-info-item">
              <span className="hero-info-icon">&#128337;</span>
              <span>Tous les jours 11h - 3h</span>
            </div>
            <div className="hero-info-item">
              <span className="hero-info-icon">&#128222;</span>
              <span>07 25 86 49 55</span>
            </div>
            <div className="hero-info-item">
              <span className="hero-info-icon">&#9733;</span>
              <span>97% recommandé</span>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span>Scroll</span>
        </div>
      </section>

      {/* ABOUT */}
      <section id="apropos" className="about section">
        <div className="container">
          <div ref={aboutTitleRef} className={`reveal ${aboutTitleVisible ? 'visible' : ''}`}>
            <h2 className="section-title">Notre Histoire</h2>
            <div className="accent-line"></div>
          </div>
          <div className="about-grid">
            <div ref={aboutTextRef} className={`about-text reveal-left ${aboutTextVisible ? 'visible' : ''}`}>
              <p>
                Née dans le coeur d'Agadir, <strong>3P Chicken Pops</strong> est née d'une passion simple :
                offrir le meilleur poulet croustillant de la ville. Notre secret ? Des recettes maison
                transmises avec amour, des ingrédients frais sélectionnés chaque jour, et une sauce maison
                qui fait toute la différence.
              </p>
              <p>
                Que vous veniez pour un rapide déjeuner ou un repas en famille, nous avons quelque chose
                pour vous. Nos Chicken Pops, nos Crustys, nos Bowls et nos Sliders sont préparés à la commande
                pour vous garantir une expérience gustative inoubliable.
              </p>
              <p>
                Avec <strong>97% de clients satisfaits</strong> et disponible sur Glovo pour la livraison,
                3P Chicken Pops est devenu la référence du poulet croustillant à Agadir.
              </p>
            </div>
            <div className="about-stats">
              <StatCard number="97" suffix="%" label="Clients satisfaits" delay={1} />
              <StatCard number="100" suffix="%" label="Sauce maison" delay={2} />
              <StatCard number="7" suffix="j/7" label="Ouvert tous les jours" delay={3} />
              <StatCard number="16" suffix="h" label="De service non-stop" delay={4} />
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="menu section">
        <div className="container">
          <div ref={menuTitleRef} className={`reveal ${menuTitleVisible ? 'visible' : ''}`}>
            <h2 className="section-title">Notre Menu</h2>
            <div className="accent-line"></div>
            <p className="section-subtitle">Des saveurs explosives pour tous les goûts</p>
          </div>

          <div ref={menuCatRef} className={`menu-categories reveal ${menuCatVisible ? 'visible' : ''}`}>
            {menuCategories.map((cat, i) => (
              <button
                key={i}
                className={`menu-cat-btn ${activeCategory === i ? 'active' : ''}`}
                onClick={() => setActiveCategory(i)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div ref={menuItemsRef} className={`menu-items reveal ${menuItemsVisible ? 'visible' : ''}`}>
            {menuCategories[activeCategory].items.map((item, i) => (
              <div key={`${activeCategory}-${i}`} className="menu-item" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="menu-item-info">
                  <h3 className="menu-item-name">{item.name}</h3>
                  <p className="menu-item-desc">{item.desc}</p>
                </div>
                <span className="menu-item-price">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="avis" className="reviews section">
        <div className="container">
          <div ref={reviewsTitleRef} className={`reveal ${reviewsTitleVisible ? 'visible' : ''}`}>
            <h2 className="section-title">Ce que disent nos clients</h2>
            <div className="accent-line"></div>
            <p className="section-subtitle">97% de nos clients nous recommandent</p>
          </div>

          <div className="reviews-grid">
            {reviews.map((review, i) => (
              <ReviewCard key={i} review={review} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact section">
        <div className="container">
          <div ref={contactTitleRef} className={`reveal ${contactTitleVisible ? 'visible' : ''}`}>
            <h2 className="section-title">Nous Trouver</h2>
            <div className="accent-line"></div>
          </div>
          <div className="contact-grid">
            <div ref={contactInfoRef} className={`contact-info reveal-left ${contactInfoVisible ? 'visible' : ''}`}>
              <div className="contact-item">
                <span className="contact-icon">&#128205;</span>
                <div>
                  <h3>Adresse</h3>
                  <p>19 Rue Iligh<br/>Agadir 80000, Maroc</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">&#128222;</span>
                <div>
                  <h3>Téléphone</h3>
                  <a href="tel:+212725864955">07 25 86 49 55</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">&#128337;</span>
                <div>
                  <h3>Horaires</h3>
                  <p>Tous les jours : 11h00 - 03h00</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">&#128247;</span>
                <div>
                  <h3>Instagram</h3>
                  <a href="https://www.instagram.com/3p_chickenpops/" target="_blank" rel="noopener noreferrer">@3p_chickenpops</a>
                </div>
              </div>
            </div>
            <div ref={contactMapRef} className={`contact-map reveal-right ${contactMapVisible ? 'visible' : ''}`}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.85!2d-9.57!3d30.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s19+Rue+Iligh%2C+Agadir!5e0!3m2!1sfr!2sma!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation 3P Chicken Pops"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer ref={footerRef} className={`footer reveal ${footerVisible ? 'visible' : ''}`}>
        <div className="container footer-content">
          <div className="footer-brand">
            <img src="/logo.png" alt="3P Chicken Pops" className="footer-logo" />
            <p className="footer-tagline">Le goût du poulet croustillant, revisité</p>
          </div>
          <div className="footer-links">
            <h4>Navigation</h4>
            <a href="#accueil">Accueil</a>
            <a href="#apropos">À propos</a>
            <a href="#menu">Menu</a>
            <a href="#avis">Avis</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-links">
            <h4>Horaires</h4>
            <p>Tous les jours</p>
            <p>11h00 - 03h00</p>
            <p className="footer-delivery">Disponible sur Glovo</p>
          </div>
          <div className="footer-links">
            <h4>Contact</h4>
            <a href="tel:+212725864955">07 25 86 49 55</a>
            <a href="https://www.instagram.com/3p_chickenpops/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 3P Chicken Pops. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}

function ReviewCard({ review, index }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={`review-card card-hover reveal delay-${(index % 3) + 1} ${isVisible ? 'visible' : ''}`}
    >
      <div className="review-stars">
        {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
      </div>
      <p className="review-text">"{review.text}"</p>
      <span className="review-author">{review.name}</span>
    </div>
  )
}

export default App
