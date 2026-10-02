import { FormEvent, useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  CalendarDays,
  Camera,
  Check,
  ChevronDown,
  Clock3,
  ExternalLink,
  Globe,
  Heart,
  Mail,
  MapPin,
  Menu,
  PawPrint,
  Phone,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from 'lucide-react';
import { addOns, faqs, hours, navItems, site } from './data/siteData';

const assets = {
  hero: 'https://aka.doubaocdn.com/s/wCgHacIUBM',
  team: 'https://aka.doubaocdn.com/s/iU3IbNQSJz',
  salon: 'https://aka.doubaocdn.com/s/Rm6DkjDzv5',
  groom: 'https://aka.doubaocdn.com/s/VBdRaqcqOp',
  pets: 'https://aka.doubaocdn.com/s/VZ0hMWsz3i',
};

function Wordmark() {
  return (
    <Link className="wordmark" to="/" aria-label={`${site.fullName} home`}>
      <img src={`${import.meta.env.BASE_URL}sage-suds-mark.svg`} alt="" />
      <span><b>Sunset</b> Groomers<small>Pet Grooming</small></span>
    </Link>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setIsOpen(false), [location.pathname]);

  return (
    <header className="site-header">
      <div className="header-shell">
        <Wordmark />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => <NavLink key={item.to} to={item.to} end={item.to === '/'}>{item.label}</NavLink>)}
        </nav>
        <Link className="button button-small header-cta" to="/book">Book now <ArrowRight size={15} /></Link>
        <button className="menu-toggle" aria-label={isOpen ? 'Close navigation' : 'Open navigation'} aria-controls="mobile-navigation" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      <div id="mobile-navigation" className={`mobile-panel ${isOpen ? 'is-open' : ''}`}>
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => <NavLink key={item.to} to={item.to} end={item.to === '/'}>{item.label}<ArrowRight size={16} /></NavLink>)}
        </nav>
        <div className="mobile-contact"><Phone size={15} /> {site.phone}</div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand"><Wordmark /><p>Gentle care, clear communication, and a calmer grooming day for every pet.</p><p className="demo-inline">Demo business information — replace before launch.</p></div>
        <div><h4>Visit</h4><Link to="/contact"><MapPin size={15} /> {site.address}<br />{site.postal}</Link><a href={`tel:${site.phone.replace(/\D/g, '')}`}><Phone size={15} /> {site.phone}</a><a href={`mailto:${site.email}`}><Mail size={15} /> {site.email}</a></div>
        <div><h4>Salon hours</h4><div className="hours-mini">{hours.map(([day, time]) => <p key={day}><span>{day}</span><b>{time}</b></p>)}</div></div>
        <div><h4>Follow along</h4><a href="#instagram"><Camera size={16} /> Instagram</a><a href="#facebook"><Globe size={16} /> Facebook</a><h4 className="footer-links-title">Explore</h4><Link to="/services">Services</Link><Link to="/faq">FAQ</Link></div>
      </div>
      <div className="footer-bottom"><span>© 2026 {site.fullName}. Demo design.</span><span><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms &amp; Booking Policy</Link></span></div>
    </footer>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);
  return <><Header /><main>{children}</main><Link className="floating-book" to="/book"><CalendarDays size={17} /> Book now</Link><Footer /></>;
}

function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow"><span></span>{children}</p>; }
function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="page-hero"><div><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p>{description}</p></div><div className="hero-paw"><PawPrint size={88} strokeWidth={1.15} /></div></section>;
}
function DemoNote() { return <p className="demo-note"><Sparkles size={15} /> This is a launch-ready demo. Replace the salon details, map and booking link with your live information; gallery visuals are original brand concept assets, not client photos.</p>; }
function SectionIntro({ eyebrow, title, body, centered = false }: { eyebrow: string; title: string; body?: string; centered?: boolean }) {
  return <div className={`section-intro ${centered ? 'centered' : ''}`}><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{body && <p>{body}</p>}</div>;
}

function HomePage() {
  return <>
    <section className="home-hero">
      <div className="hero-copy"><div className="hero-kicker"><PawPrint size={17} /> Calm grooming starts here</div><h1>Stress-Free Pet<br />Grooming in <em>Santa Cruz.</em></h1><p>We treat every dog and cat like our own. Gentle, transparent grooming with pet-safe, hypoallergenic products.</p><div className="hero-actions"><Link className="button" to="/book">Book appointment <ArrowRight size={17} /></Link><Link className="text-link" to="/services">View our services <ArrowRight size={17} /></Link></div><p className="location-caption"><MapPin size={15} /> Santa Cruz, California <span>•</span> By appointment</p></div>
      <div className="hero-image-wrap"><div className="hero-arc"></div><img src={assets.hero} alt="A calm poodle at a pet grooming salon" /><div className="hero-image-label"><span>Tailored care</span><b>Dogs &amp; cats welcome</b></div></div>
    </section>

    <section className="trust-strip"><p><ShieldCheck size={19} /> Pet CPR &amp; First Aid certified</p><p><Heart size={19} /> Low-stress handling</p><p><Sparkles size={19} /> Hypoallergenic products</p><p><Scissors size={19} /> Clear starting prices</p></section>

    <section className="section values-section"><SectionIntro eyebrow="The Sunset Groomers difference" title="Grooming that feels a little more human." body="For pets, grooming is personal. We slow down, communicate clearly, and tailor the experience to the animal in front of us." />
      <div className="value-list">
        <article className="value-card"><span className="number">01</span><div className="card-icon"><Heart /></div><h3>Low-stress environment</h3><p>Calm salon space with limited cage time. We take time for anxious, senior and first-time pets.</p></article>
        <article className="value-card"><span className="number">02</span><div className="card-icon"><ShieldCheck /></div><h3>Transparent pricing</h3><p>No hidden fees. We explain coat, size and matting considerations before the service begins.</p></article>
        <article className="value-card"><span className="number">03</span><div className="card-icon"><Sparkles /></div><h3>Pet-safe products</h3><p>Paraben-free, hypoallergenic shampoos and conditioners selected for sensitive skin.</p></article>
      </div>
    </section>

    <section className="offer-band"><div className="offer-stamp"><span>15%</span><small>off</small></div><div><Eyebrow>Grand opening special</Eyebrow><h2>Your pet’s first full groom, <em>15% off.</em></h2><p>For new clients only. Mention this offer when booking — a limited number of spots are available.</p></div><Link className="button button-cream" to="/book">Claim your spot <ArrowRight size={17} /></Link></section>

    <section className="section split-about"><div className="image-frame team-frame"><img src={assets.team} alt="A groomer with a dog and cat in a calm salon" /><span className="photo-caption">Gentle hands. Individual attention.</span></div><div className="split-copy"><SectionIntro eyebrow="A kinder kind of clean" title="For the wigglers, the wise ones &amp; everyone in between." body={`${site.fullName} is a new local salon built for puppies, kittens, senior pets and nervous animals. We offer breed-specific trims, custom cuts and full bath packages — always at your pet’s pace.`} /><div className="check-list"><p><Check size={18} /> Limited cage time &amp; one-on-one attention</p><p><Check size={18} /> Pet CPR &amp; First Aid certified care</p><p><Check size={18} /> Bring a reference photo for your dream trim</p></div><Link className="text-link" to="/about">More about our approach <ArrowRight size={17} /></Link></div></section>

    <section className="section services-preview"><SectionIntro eyebrow="Simple, thoughtful services" title="A fresh start for every coat." body="Every appointment begins with a conversation about your pet, their coat, and what will help them feel their best." centered />
      <div className="service-teasers"><article><div className="service-line"><PawPrint /><span>01</span></div><h3>Basic Bath</h3><p>Brush-out, hypoallergenic bath, blow dry, nails, ears and tidy-up trims.</p><b>Dogs from $48 <span>·</span> Cats from $55</b></article><article className="featured-teaser"><div className="service-line"><Scissors /><span>02</span></div><h3>Full Groom</h3><p>Everything in our Basic Bath, plus a breed-specific haircut or custom style.</p><b>Dogs from $65 <span>·</span> Cats from $70</b></article><article><div className="service-line"><Sparkles /><span>03</span></div><h3>A La Carte</h3><p>Targeted coat care, teeth brushing, flea baths and gentle introduction sessions.</p><b>Thoughtful extras from $12</b></article></div><div className="center-action"><Link className="button button-outline" to="/services">See full service menu <ArrowRight size={17} /></Link></div></section>

    <section className="testimonial-section"><div className="quote-mark">“</div><div><Eyebrow>Kind words, coming soon</Eyebrow><blockquote>“We’re saving this space for the lovely things our first Sunset Groomers families have to say.”</blockquote><p>— A future neighbor &amp; their very good dog</p></div><div className="stars">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={18} fill="currentColor" />)}</div></section>

    <section className="contact-cta" id="contact"><div><Eyebrow>Come say hello</Eyebrow><h2>Find your pet’s new favorite place.</h2><p>{site.address} <span>·</span> {site.postal}</p><p><Clock3 size={17} /> Mon–Fri 8:30AM–6:30PM <span>·</span> Sat 9AM–4PM</p></div><Link className="button" to="/contact">Contact the salon <ArrowRight size={17} /></Link></section>
  </>;
}

function ServicesPage() {
  return <><PageHero eyebrow="Services & pricing" title="Fresh coats. Clear expectations." description="Every pet and every coat is different. Our starting prices keep things transparent, and we will always talk through any change before we begin." />
    <section className="section pricing-section"><div className="price-disclaimer"><ShieldCheck size={24} /><p><b>A note on starting prices.</b> Final price depends on pet weight, coat condition, temperament and matting. Severe matting may incur extra fees — we will discuss options with you before starting work.</p></div>
      <div className="package-grid"><article className="package-card"><div className="package-heading"><span className="package-icon"><PawPrint /></span><span>Essential care</span><h2>Basic Bath</h2><p>All the fresh-and-clean essentials for a happy, comfortable pet.</p></div><ul><li>Full brush-out</li><li>Hypoallergenic bath</li><li>Blow dry</li><li>Nail trim &amp; file</li><li>Ear cleaning</li><li>Sanitary &amp; paw trim</li></ul><div className="price-pair"><p><span>Dog</span><b>from $48</b></p><p><span>Cat</span><b>from $55</b></p></div><Link className="button button-outline" to="/book">Book a bath <ArrowRight size={17} /></Link></article>
        <article className="package-card package-featured"><div className="popular-tag">Most loved</div><div className="package-heading"><span className="package-icon"><Scissors /></span><span>Tailored style</span><h2>Full Groom</h2><p>Everything in the Basic Bath, with the cut that makes them feel like themselves.</p></div><ul><li>Everything in Basic Bath</li><li>Breed-specific haircut</li><li>Custom style or seasonal trim</li><li>Bring your reference photos</li><li>Finishing spritz &amp; bandana</li><li>Personal coat-care advice</li></ul><div className="price-pair"><p><span>Dog</span><b>from $65</b></p><p><span>Cat</span><b>from $70</b></p></div><Link className="button" to="/book">Book a full groom <ArrowRight size={17} /></Link></article></div>
    </section>
    <section className="section add-on-section"><div><SectionIntro eyebrow="Make it their own" title="A little extra care, right where it counts." body="Add-ons can be selected when booking or discussed at drop-off." /><p className="little-note"><Heart size={16} /> Puppy / Kitten Introductory Groom is a short, gentle first session designed to build a positive association. Senior Gentle Groom includes a slower pace and frequent breaks.</p></div><div className="addon-list">{addOns.map(([name, price]) => <p key={name}><span>{name}</span><b>{price}</b></p>)}</div></section>
    <section className="retail-band"><Sparkles size={32} /><div><h3>Thoughtful things for the in-between.</h3><p>We carry a small selection of premium pet shampoos, brushes and treats in the salon. Retail is available in-salon only — no online ordering.</p></div></section>
  </>;
}

function BookingPage() {
  return <><PageHero eyebrow="Book an appointment" title="A calmer appointment begins with a little planning." description="Choose a time that works for you, tell us a little about your pet, and we’ll take care of the rest." />
    <section className="section booking-layout"><div className="booking-card" id="booking-demo"><div className="booking-card-top"><span><CalendarDays size={25} /></span><div><p className="eyebrow">Acuity Scheduling</p><h2>Your booking portal goes here.</h2></div></div><p>Connect your live Acuity Scheduling link or embed here to let pet families select a date and time.</p><button className="button" type="button" onClick={() => alert('Demo only: replace this button with your live Acuity Scheduling URL.')}>Open booking portal <ExternalLink size={17} /></button><small><Sparkles size={14} /> Demonstration booking module — no appointment is created.</small></div>
      <div className="booking-help"><Eyebrow>Before your visit</Eyebrow><h2>Let’s make it easy on them.</h2><p>Have vaccine records handy and let us know about anxiety, allergies, medications, arthritis or other special needs at booking.</p><div className="booking-details"><p><Mail size={18} /><span>Questions first?</span><a href={`mailto:${site.email}`}>{site.email}</a></p><p><Phone size={18} /><span>Prefer a quick chat?</span><a href={`tel:${site.phone.replace(/\D/g, '')}`}>{site.phone}</a></p></div></div></section>
    <section className="section policy-section"><SectionIntro eyebrow="Booking requirements & policies" title="Clear care, from check-in to pick-up." centered /><div className="policy-grid"><article><span className="policy-num">01</span><h3>Vaccine records</h3><p>Dogs: <b>Rabies, DHPP</b><br />Cats: <b>Rabies, FVRCP</b></p><p>You may upload records during booking or bring physical copies. We cannot service pets without valid proof.</p></article><article><span className="policy-num">02</span><h3>Cancellation policy</h3><p>A 24-hour advance notice is required to cancel or reschedule. Late cancellations or no-shows are charged a <b>$35 fee.</b></p></article><article><span className="policy-num">03</span><h3>Matting policy</h3><p>Tightly matted fur is painful. We will discuss careful de-matting or a short shave-down — never force painful brushing.</p></article><article><span className="policy-num">04</span><h3>Pet health notice</h3><p>Please tell us during booking if your pet has anxiety, arthritis, skin allergies, medication or special needs.</p></article></div></section><DemoNote />
  </>;
}

function TeamPage() {
  return <><PageHero eyebrow="Meet our groomer" title="The hands behind the happy tails." description="A steady voice, patient pace and honest communication make all the difference." />
    <section className="section team-layout"><div className="team-image-block"><img src={assets.team} alt="Demonstration portrait of a lead pet groomer with pets" /><span className="demo-photo-label">Demo profile photo</span></div><div className="team-copy"><div className="cert-badge"><ShieldCheck size={20} /> Pet CPR &amp; First Aid Certified</div><p className="role">LEAD PET GROOMER · DEMO PROFILE</p><h2>Jordan Ellis</h2><p className="lead">A certified professional groomer with multi-year experience working with dogs and cats of all sizes, breeds and temperaments.</p><p>Jordan specializes in low-stress handling for nervous pets, puppies and senior animals. Their goal is always the same: to make grooming a calm, positive experience instead of a scary one.</p><blockquote className="personal-quote">“Every pet gets individual attention. We listen to their body language and make room for a slower day when they need it.”</blockquote><p className="demo-copy">This is a replaceable demonstration staff profile. Add separate profile cards here as your team grows.</p></div></section>
    <section className="care-credo"><Heart size={31} /><p>Care that respects the animal in front of us.</p><span>Safe · patient · individual</span></section>
  </>;
}

function GalleryPage() {
  const [active, setActive] = useState('All');
  const images = [
    { cat: 'Salon Space', src: assets.salon, title: 'A calm place to land', alt: 'Clean salon bathing station' },
    { cat: 'Before & After', src: assets.groom, title: 'Gentle coat care', alt: 'A dog being gently brushed' },
    { cat: 'Happy Pets', src: assets.pets, title: 'Feeling fresh', alt: 'A groomed dog and cat together' },
  ];
  const shown = active === 'All' ? images : images.filter((image) => image.cat === active);
  return <><PageHero eyebrow="Our work · demo visual system" title="A little peek inside the salon." description="This page is staged with original brand concept imagery. Before launch, replace it with your salon scenes and client pet photos that have written permission." />
    <section className="section gallery-section"><div className="gallery-tabs" role="tablist" aria-label="Gallery categories">{['All', 'Salon Space', 'Before & After', 'Happy Pets'].map((tab) => <button type="button" role="tab" aria-selected={active === tab} className={active === tab ? 'active' : ''} key={tab} onClick={() => setActive(tab)}>{tab}</button>)}</div><div className="gallery-grid">{shown.map((image, index) => <figure className={`gallery-item item-${index + 1}`} key={image.cat}><img src={image.src} alt={image.alt} /><figcaption><span>{image.cat} · Demo asset</span><b>{image.title}</b></figcaption></figure>)}</div><div className="gallery-notice"><Heart size={22} /><div><b>Before launch: replace our demo visuals.</b><p>These are original brand concept assets, not client photos. We require written permission from pet owners before posting any real client image.</p></div></div></section><DemoNote />
  </>;
}

function AboutPage() {
  return <><PageHero eyebrow="About Sunset Groomers" title="A neighborhood salon with a softer side." description="We believe a grooming appointment can be clear, calm and genuinely good for your pet." />
    <section className="section about-story"><div className="story-copy"><SectionIntro eyebrow="Our story" title="Good grooming begins with trust." /><p>We are a brand-new local pet salon located in <b>Santa Cruz, California</b>. Our mission is simple: provide gentle, transparent and stress-free pet grooming for dogs and cats in our community.</p><p>Many pets feel anxious during grooming. We keep our salon calm, limit cage time and adjust our pace for each individual animal. We only use carefully selected hypoallergenic grooming products.</p><p>We are proud to serve local families, puppies, kittens and senior pets. Come visit us and meet our team.</p><Link className="button button-outline" to="/book">Meet us at booking <ArrowRight size={17} /></Link></div><div className="about-photo-stack"><img src={assets.salon} alt="Warm and tidy pet salon space" /><div><ShieldCheck /><p><b>Peace of mind, built in.</b> Our demo salon carries business liability insurance for your confidence.</p></div></div></section>
    <section className="principles-row"><article><PawPrint /><h3>At their pace</h3><p>We make time for wiggles, breaks and a calmer approach.</p></article><article><Sparkles /><h3>Thoughtfully chosen</h3><p>Hypoallergenic, paraben-free staples for sensitive skin.</p></article><article><ShieldCheck /><h3>Open from the start</h3><p>We explain pricing and coat needs before we begin.</p></article></section>
  </>;
}

function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return <><PageHero eyebrow="Frequently asked questions" title="The little things that make a big difference." description="Straightforward answers, so you can feel good before you walk through the door." />
    <section className="section faq-layout"><aside><Eyebrow>Need something else?</Eyebrow><h2>We’re happy to help.</h2><p>If you have a question about your pet’s particular coat, temperament or needs, get in touch before booking.</p><Link className="text-link" to="/contact">Contact the salon <ArrowRight size={17} /></Link></aside><div className="accordion">{faqs.map(([question, answer], index) => <div className={`accordion-item ${openIndex === index ? 'open' : ''}`} key={question}><button type="button" aria-expanded={openIndex === index} onClick={() => setOpenIndex(openIndex === index ? null : index)}><span>{question}</span><ChevronDown /></button><div className="accordion-content"><p>{answer}</p></div></div>)}</div></section>
  </>;
}

function ContactPage() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); (event.currentTarget as HTMLFormElement).reset(); };
  return <><PageHero eyebrow="Contact us" title="A warm hello is only a pawprint away." description="For the fastest way to schedule, please use our Book Appointment portal. For everything else, we’re right here." />
    <section className="section contact-layout"><div className="contact-details"><div className="map-card"><div className="map-pin"><MapPin size={31} /></div><div className="map-roads r1"></div><div className="map-roads r2"></div><div className="map-roads r3"></div><p>Map placeholder</p><b>{site.address}</b><span>{site.postal}</span></div><div className="contact-info-row"><div><MapPin size={19} /><p><b>Visit</b>{site.address}<br />{site.postal}</p></div><div><Phone size={19} /><p><b>Call</b><a href={`tel:${site.phone.replace(/\D/g, '')}`}>{site.phone}</a></p></div><div><Mail size={19} /><p><b>Email</b><a href={`mailto:${site.email}`}>{site.email}</a></p></div></div><div className="hours-card"><h3>Salon hours</h3>{hours.map(([day, time]) => <p key={day}><span>{day}</span><b>{time}</b></p>)}</div></div>
      <div className="contact-form-wrap"><Eyebrow>Send a note</Eyebrow><h2>Tell us how we can help.</h2><p>Questions are welcome. Appointment requests receive the quickest response through the booking portal.</p><form onSubmit={handleSubmit}><label>Name<input required name="name" placeholder="Your name" /></label><div className="form-pair"><label>Pet name<input name="petName" placeholder="Pet name" /></label><label>Pet type<select name="petType" defaultValue=""><option value="" disabled>Select one</option><option>Dog</option><option>Cat</option><option>Other</option></select></label></div><div className="form-pair"><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label><label>Phone<input type="tel" name="phone" placeholder="(000) 000-0000" /></label></div><label>Message<textarea required name="message" rows={4} placeholder="How can we help you and your pet?" /></label><button className="button" type="submit">Send demo message <ArrowRight size={17} /></button>{sent && <p className="form-success"><Check size={17} /> Thanks! This is a demo form, so no message was sent.</p>}</form></div></section><DemoNote />
  </>;
}

function LegalPage({ type }: { type: 'privacy' | 'terms' }) {
  const isPrivacy = type === 'privacy';
  return <><PageHero eyebrow={isPrivacy ? 'Your information' : 'Before your appointment'} title={isPrivacy ? 'Privacy policy' : 'Terms & booking policy'} description={isPrivacy ? 'A short, clear overview of how a small local salon uses your information.' : 'A few important policies that help us provide safe, thoughtful care.'} />
    <section className="section legal-copy"><p className="legal-updated">DEMONSTRATION TEMPLATE · UPDATE WITH YOUR FINAL BUSINESS DETAILS BEFORE LAUNCH</p>{isPrivacy ? <><h2>Your privacy matters to us.</h2><p>{site.fullName} respects your privacy. We collect your name, contact information and pet details only for appointment booking and service communication.</p><h3>How we use information</h3><p>We do not sell your personal data to third parties. Your information is stored securely within our scheduling system and used to coordinate care, reminders and service communication.</p><h3>Photos &amp; consent</h3><p>Client photos will never be shared online unless you provide written consent. We require written permission from pet owners before posting any client pet photo.</p><h3>Your choices</h3><p>You may request deletion of your personal records by emailing <a href={`mailto:${site.email}`}>{site.email}</a>. This page is a short small-business template and should be reviewed with your final operating practices before launch.</p></> : <><h2>Booking with Sunset Groomers.</h2><p>By booking an appointment with {site.fullName}, you agree to our cancellation, vaccine and matting policies. You confirm that all pet health information you provide is accurate.</p><h3>Vaccine &amp; health requirements</h3><p>We require current proof of Rabies and DHPP for dogs, and Rabies and FVRCP for cats. Please tell us about anxiety, arthritis, skin allergies, medication or special needs before your appointment.</p><h3>Cancellation &amp; matting</h3><p>A 24-hour advance notice is required to cancel or reschedule. Late cancellations or no-shows will be charged a $35 fee. Tightly matted fur can be painful; we will discuss careful de-matting or a short shave-down before proceeding and will never force painful brushing.</p><h3>Care &amp; liability</h3><p>Our groomers will make reasonable care decisions for your pet’s safety. The salon carries business liability insurance, but cannot be responsible for pre-existing health conditions, skin reactions or pet temperament risks.</p></>}</section>
  </>;
}

function NotFound() { return <PageHero eyebrow="Lost a little?" title="Let’s get you back to the salon." description="The page you were looking for has wandered off. Try our home page or book an appointment." />; }

function App() {
  return <Layout><Routes><Route path="/" element={<HomePage />} /><Route path="/services" element={<ServicesPage />} /><Route path="/book" element={<BookingPage />} /><Route path="/team" element={<TeamPage />} /><Route path="/gallery" element={<GalleryPage />} /><Route path="/about" element={<AboutPage />} /><Route path="/faq" element={<FAQPage />} /><Route path="/contact" element={<ContactPage />} /><Route path="/privacy" element={<LegalPage type="privacy" />} /><Route path="/terms" element={<LegalPage type="terms" />} /><Route path="*" element={<NotFound />} /></Routes></Layout>;
}

export default App;
