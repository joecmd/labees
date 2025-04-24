import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Assuming react-router-dom is set up correctly in your project
// If not, replace Link with standard <a> tags
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ShoppingBag, Search } from 'lucide-react'; // Removed Moon, Sun

// Assume these paths are correct or handled by your build setup
// For this example, using placeholder strings if imports fail.
// import MiniLogo from "./images/LB.png"; 
// import FullLogo from "./images/LBFULL.png";
import MiniLogo from "./images/LB.png"
import FullLogo from "./images/LBFULL.png"


// --- Modified Navbar (Permanently Dark) ---
const ModifiedNavbar = () => {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState('ENG');
  // Removed 'dark' state
  const [scrolled, setScrolled] = useState(false);

  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Removed toggleDark function
  // Removed useEffect for initial theme setting (moved to App)

  const labels = {
    ENG: ['Brands', 'About', 'How it Works', 'Pricing'],
    AR: ['الشركات', 'من نحن', 'كيف يعمل', 'الأسعار'],
  };
  
  const routes = ['#our-brands', '#about', '#how-it-works', '#pricing']; // Use hash for sections or actual paths

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      // Always use dark mode background styles
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/90 shadow-lg backdrop-blur-md py-2' : 'bg-transparent py-6' 
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-8"
            >
              <img 
                src={MiniLogo} // Using Full Logo as per previous example
                alt="Labees" 
                className="h-full w-auto text-white text-bold" 
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
             {/* Nav Links */}
            <div className="flex space-x-6 lg:space-x-8">
              {labels[lang].map((label, i) => (
                <Link 
                  key={label}
                  to={routes[i]}
                  // Always use dark mode text colors
                  className={`relative font-medium text-sm ${
                    scrolled ? 'text-gray-300' : 'text-white' 
                  } hover:text-blue-400 transition-colors duration-200 group`}
                >
                  <span>{label}</span>
                  {/* Underline - uses dark color */}
                  <span className="absolute left-0 -bottom-1 block h-0.5 w-full origin-left scale-x-0 transform bg-blue-400 transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              ))}
            </div>

            {/* Action Buttons Container */}
            <div className="flex items-center space-x-2">
              {/* Search Button */}
              <button className={`p-2 rounded-full transition-colors duration-200 ${
                // Always use dark mode styles
                scrolled ? 'text-gray-300 hover:bg-gray-700' : 'text-white hover:bg-white/10'
              }`}>
                <Search className="w-5 h-5" />
              </button>
            
              {/* Shopping Bag */}


              {/* Language Toggle */}
               <div className="relative">
                 <button
                   onClick={() => setLang(lang === 'ENG' ? 'AR' : 'ENG')}
                   className={`flex items-center font-medium text-sm px-2 py-1 rounded-md transition-colors duration-200 ${
                    // Always use dark mode styles
                     scrolled ? 'text-gray-300 hover:bg-gray-700' : 'text-white hover:bg-white/10'
                   }`}
                 >
                   {lang}
                   <ChevronDown className="w-4 h-4 ml-1" />
                 </button>
               </div>

              {/* Dark Mode Toggle Button REMOVED */}
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
             
              
            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                // Always use dark mode styles
                scrolled ? 'text-gray-300 hover:bg-gray-700' : 'text-white hover:bg-white/10'
              }`}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            // Always use dark mode background/border
            className="md:hidden absolute top-full left-0 right-0 bg-gray-900 shadow-lg border-t border-gray-700" 
            style={{ width: '100%'}} 
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {labels[lang].map((label, i) => (
                <Link
                  key={label}
                  to={routes[i]}
                  onClick={() => setOpen(false)}
                  // Always use dark mode text/hover styles
                  className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
              
              {/* Mobile controls divider */}
              <div className="border-t border-gray-700 my-2"></div> 

              <div className="flex items-center justify-between px-3 py-3">
                {/* Mobile Language Toggle */}
                 <button
                   onClick={() => setLang(lang === 'ENG' ? 'AR' : 'ENG')}
                    // Always use dark mode text/hover styles
                   className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-800 transition-colors duration-200"
                 >
                   {lang === 'ENG' ? 'العربية' : 'English'}
                 </button>
                
                {/* Mobile Dark Mode Toggle Button REMOVED */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};


// --- Hero Section (No changes needed as it didn't depend on dark state) ---
const Hero = () => {
  // Assuming Hero section uses colors suitable for dark mode or uses Tailwind's dark: prefixes correctly
  const [lang, setLang] = useState('ENG'); // Keep language state if needed
  
  const content = {
    ENG: { /* ... */ },
    AR: { /* ... */ }
  };
  content.ENG = {
      headline: "Qatar's First Curated Fashion Marketplace",
      subheadline: "Shop bold, curated fashion from Qatar's top Gen Z designers.",
      cta: "Join the Waitlist",
      forBrands: "Apply as a Vendor",
      trusted: "Trusted by brands like"
    };
  content.AR = {
      headline: "أول سوق أزياء مختارة في قطر",
      subheadline: "تسوق أزياء جريئة ومختارة من أفضل مصممي الجيل Z في قطر",
      cta: "انضم إلى قائمة الانتظار",
      forBrands: "قدم كبائع",
      trusted: "موثوق به من قبل علامات تجارية مثل"
    };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-blue-600 to-blue-800" /> 
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5" // Reduced opacity slightly for dark bg
            initial={{ /* ... */ }}
            animate={{ /* ... */ }}
            transition={{ /* ... */ }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 flex flex-col md:flex-row items-center">
        {/* Hero Text (Ensure text colors contrast with dark background) */}
        <motion.div 
          className="text-center md:text-left md:w-1/2 z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            {content[lang].headline}
          </h1>
          
          <motion.p 
            className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {content[lang].subheadline}
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="mt-10 max-w-sm mx-auto md:mx-0 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link
              to="/waitlist" // Ensure these routes exist
              className="inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-lg text-blue-700 bg-white hover:bg-blue-50 shadow-lg transform transition duration-200 hover:scale-105"
            >
              {content[lang].cta}
            </Link>
            
            <Link
              to="/vendors" // Ensure these routes exist
              className="inline-flex items-center justify-center px-6 py-4 border border-white text-base font-medium rounded-lg text-white hover:bg-white/10 transition duration-200"
            >
              {content[lang].forBrands}
            </Link>
          </motion.div>
          
          {/* Trusted By */}
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <p className="text-blue-100 font-medium">{content[lang].trusted}</p>
            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-8 w-24 bg-white/10 rounded-md flex items-center justify-center text-xs text-white/50">
                  Coming Soon
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        {/* Hero Image Placeholder (using dark compatible styles) */}
        <motion.div 
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center items-center z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
           <div className="relative w-full max-w-md">
            <div className="aspect-w-4 aspect-h-6 relative z-10">
              {/* Use dark background for the "window" */}
              <div className="absolute inset-0 bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/10">
                {/* Use darker "window bar" */}
                <div className="absolute top-0 left-0 right-0 h-10 bg-gray-900/70 flex items-center px-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/70 mr-2" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70 mr-2" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                
              </div>
            </div>
            
            
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator (white contrasts well) */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-1 h-12 rounded-full bg-white/30 relative">
          <div className="absolute top-0 w-full bg-white rounded-full h-3 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};


// --- Featured Section (Hardcoded Dark) ---
const FeaturedSection = () => {
  const collections = [ /* ... same data ... */ ];
  collections[0] = { name: "Minimalist Streetwear", brand: "By Ayah", price: "QAR 249" };
  collections[1] = { name: "Ramadan 2025 Edit", brand: "Studio Nawa", price: "QAR 329" };
  collections[2] = { name: "Summer Resort Collection", brand: "Doha Designs", price: "QAR 199" };

  return (
    // Always use dark background
    <section id="featured" className="py-20 bg-gray-900"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
           {/* Always use dark mode text */}
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Exclusive Drops You Can't Find Anywhere Else
          </h2>
           {/* Always use dark mode text */}
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Discover the latest trends from Qatar's top fashion brands
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative"
            >
               {/* Always use dark placeholder background */}
              <div className="w-full min-h-80 bg-gray-800 aspect-w-3 aspect-h-4 rounded-lg overflow-hidden group-hover:opacity-90 transition-opacity">
                {/* You might want a subtle dark gradient or image here */}
                <div className="w-full h-full bg-gradient-to-br from-blue-700 to-blue-900 opacity-50" /> 
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                   {/* Always use dark mode text */}
                  <h3 className="text-lg font-medium text-gray-100">
                    {collection.name}
                  </h3>
                   {/* Always use dark mode text */}
                  <p className="mt-1 text-sm text-gray-400">{collection.brand}</p>
                </div>
                 {/* Always use dark mode text */}
                <p className="text-lg font-medium text-gray-100">{collection.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Button styles assumed ok for dark */}
        <div className="mt-12 text-center">
          <Link
            to="/collections" // Ensure this route exists
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
};


// --- Brand Section (Hardcoded Dark) ---
const BrandSection = () => {
  const brands = [ /* ... same data ... */ ];
  brands[0] = { id: 1, name: "Brand 1" };
  brands[1] = { id: 2, name: "Brand 2" };
  // ... add rest of brand data

  return (
    // Always use dark background
    <section id="our-brands" className="py-20 bg-gray-800"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
           {/* Always use dark mode text */}
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Meet Our Curated Creators
          </h2>
           {/* Always use dark mode text */}
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            From homegrown ateliers to rising Gen Z streetwear labels
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <motion.div
              key={brand.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex justify-center"
            >
              {/* Always use dark mode background/text */}
              <div className="h-20 w-20 bg-gray-700 rounded-full shadow-md flex items-center justify-center">
                <span className="text-lg font-bold text-gray-300">{brand.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


// --- About Section (Hardcoded Dark) ---
const UpdatedAboutSection = () => { // Renamed to match usage in App
  return (
    // Always use dark background
    <section id="about" className="py-20 bg-gray-900"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
           {/* Always use dark mode text */}
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Lost Among Endless Instagram Shops?
          </h2>
          {/* Always use dark mode text */}
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            We're solving Qatar's fashion discovery problem—one local brand at a time.
          </p>
        </div>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div
              whileHover={{ y: -5 }}
              // Always use dark mode background/text
              className="bg-gray-800 p-8 rounded-xl shadow-md" 
            >
              <div className="text-2xl text-blue-400 mb-4">😵</div>
              <h3 className="text-xl font-bold text-white mb-2">Too Many Choices</h3>
              <p className="text-gray-400">
                How many Instagram shops do you follow? And how many times have you gotten lost among them?
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              // Always use dark mode background/text
              className="bg-gray-800 p-8 rounded-xl shadow-md"
            >
              <div className="text-2xl text-blue-400 mb-4">🤔</div>
              <h3 className="text-xl font-bold text-white mb-2">Lack of Trust</h3>
              <p className="text-gray-400">
                They all look good... but where should you order from? How can you trust them?
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              // Always use dark mode background/text
              className="bg-gray-800 p-8 rounded-xl shadow-md"
            >
              <div className="text-2xl text-blue-400 mb-4">💡</div>
              <h3 className="text-xl font-bold text-white mb-2">Our Solution</h3>
              <p className="text-gray-400">
                Labees: A Qatari platform that supports every small local project and presents it to the right people.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};


// --- How It Works Section (Hardcoded Dark) ---
const HowItWorks = () => {
  const steps = [ /* ... same data ... */ ];
  steps[0] = { id: 1, title: "Discover", description: "Browse curated pieces from Qatar's most creative designers."};
  steps[1] = { id: 2, title: "Choose", description: "Pick the look that fits your vibe and values — modest, bold, or trending."};
  steps[2] = { id: 3, title: "Purchase", description: "Seamless checkout with card, cash-on-delivery, or Apple Pay."};
  steps[3] = { id: 4, title: "Deliver", description: "Fast, reliable delivery anywhere in Qatar within 48 hours."};


  return (
    // Always use dark background
    <section id="how-it-works" className="py-20 bg-gray-800"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Always use dark mode text */}
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Fashion Discovery, Simplified
          </h2>
          {/* Always use dark mode text */}
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Shopping for fashion has never been easier
          </p>
        </div>
        
        <div className="mt-16">
          <div className="relative">
            {/* Connector Line - dark version */}
            <div className="hidden md:block absolute top-1/2 w-full h-0.5 bg-gray-700 transform -translate-y-1/2" />
            
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col items-center text-center"
                >
                   {/* Circle style assumed ok */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                    {step.id}
                  </div>
                  {/* Always use dark mode text */}
                  <h3 className="mt-6 text-xl font-bold text-white">{step.title}</h3>
                  {/* Always use dark mode text */}
                  <p className="mt-2 text-base text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// --- Newsletter Section (Styles are already suitable for dark) ---
const Newsletter = () => {
  return (
    <section className="py-16 bg-blue-600"> {/* Base color is dark */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="max-w-xl">
             {/* Text is white, contrasts well */}
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Be First to Know About New Drops
            </h2>
            <p className="mt-3 text-lg text-blue-100">
              Early access to exclusive drops, discounts, and designer edits.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:flex-shrink-0">
            {/* Form uses white background, contrasts well */}
            <div className="inline-flex rounded-md shadow">
              <div className="flex flex-col sm:flex-row max-w-md w-full">
                <input
                  type="email"
                  // Added dark text placeholder color for better visibility if input is empty
                  className="flex-grow px-4 py-3 rounded-l-md border-0 focus:ring-2 focus:ring-white placeholder-gray-500" 
                  placeholder="Enter your email"
                />
                <button
                  type="button"
                  className="mt-3 sm:mt-0 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-r-md text-blue-600 bg-white hover:bg-blue-50"
                >
                  Join the Movement
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// --- Footer Section (Already dark by design) ---
const Footer = () => {
  const categories = { /* ... same data ... */ };
  categories.Products = ["Style Bundles", "Abayas", "Modest Streetwear", "Accessories"];
  categories.Company = ["About Us", "Careers (coming soon)", "Press", "Join Waitlist"];
  categories.Support = ["Contact", "Shipping Info", "Vendor FAQ", "Return Policy"];


  return (
    // Already uses dark background and text colors
    <footer className="bg-gray-900 text-white pt-16 pb-8"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 gap-x-8">
          <div className="space-y-4">
            <div className="h-8">
              <img 
                src={FullLogo} // Use the correct logo path
                alt="Labees" 
                className="h-8 w-auto" 
              />
            </div>
            <p className="text-gray-400 mt-2">
              Qatar's premier marketplace for local fashion brands and designers. Bringing the best of Qatar's fashion scene to your doorstep.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              {/* Instagram */}
              <a href="#" className="text-gray-400 hover:text-white"> <span className="sr-only">Instagram</span> <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> {/* SVG Path */} </svg> </a>
              {/* Twitter */}
              <a href="#" className="text-gray-400 hover:text-white"> <span className="sr-only">Twitter</span> <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> {/* SVG Path */} </svg> </a>
              {/* TikTok */}
              <a href="#" className="text-gray-400 hover:text-white"> <span className="sr-only">TikTok</span> <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> {/* SVG Path */} </svg> </a>
             </div>
          </div>

          {/* Footer Links Sections */}
          {Object.entries(categories).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase"> {category} </h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link}> <a href="#" className="text-base text-gray-400 hover:text-white"> {link} </a> </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase"> Legal </h3>
            <ul className="mt-4 space-y-2">
              {["Privacy Policy", "Terms", "Cookies"].map((link) => (
                <li key={link}> <a href="#" className="text-base text-gray-400 hover:text-white"> {link} </a> </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-400"> © 2025 Labees. All rights reserved. </p>
          <div className="mt-4 md:mt-0"> <a href="#" className="text-sm text-gray-400 hover:text-white"> Made in Qatar with ❤️ </a> </div>
        </div>
      </div>
    </footer>
  );
};


// --- Main App Component ---
const App = () => {
  
  // ADD 'dark' class to HTML tag when the app mounts
  useEffect(() => {
    document.documentElement.classList.add('dark');
    // Optional: Remove class if App unmounts (usually not needed for root App)
    // return () => document.documentElement.classList.remove('dark');
  }, []); // Empty dependency array ensures this runs only once

  return (
    // Ensure the root div ALWAYS has the dark background
    <div className="min-h-screen bg-gray-900"> 
      <ModifiedNavbar /> {/* Use the navbar modified for permanent dark mode */}
      <Hero />
      <FeaturedSection />
      <BrandSection />
      <UpdatedAboutSection /> {/* Use the correct component name */}
      <HowItWorks />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;