/* ============================================================
   India Outbound — Main JavaScript
   Shared header/footer, templates, interactions and SEO helpers
   ============================================================ */

/* --- Navigation configuration --- */
const NAV = [
  ["Home", "index.html", "home"],
  ["Trade News", "trade-news.html", "category-trade"],
  ["IO Exclusive", "io-exclusive.html", "category-exclusive"],
  ["Market Analysis", "market-analysis.html", "category-analysis"],
  ["Experiences", "experiences.html", "category-experiences"],
  ["Aviation", "aviation.html", "category-aviation"],
  ["Hotels", "hotels.html", "category-hotels"],
  ["Cruise", "cruise.html", "category-cruise"],
  ["MICE", "mice.html", "category-mice"],
  ["Technology", "technology.html", "category-technology"],
  ["Films", "films.html", "category-films"],
  ["Events", "events.html", "category-events"],
  ["The Green Corner", "green-corner.html", "green"]
];

/* --- Demo images (Unsplash, replace with licensed IO media for production) --- */
const IMG = {
  plane: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
  city: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=80",
  hotel: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
  coast: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80",
  cruise: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=900&q=80",
  airport: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
  green: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
  food: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
  tech: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  city2: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=900&q=80",
  resort: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=80"
};

/* --- Demo editorial stories --- */
const STORIES = [
  {
    cat: "Aviation",
    title: "Air connectivity takes centre stage as travel markets look ahead",
    date: "23 October 2026",
    author: "India Outbound Desk",
    img: IMG.plane,
    summary: "Airlines and destinations are reshaping routes, partnerships and visitor access across key markets.",
    slug: "air-connectivity-travel-markets"
  },
  {
    cat: "Hotels",
    title: "Hospitality leaders rethink the guest experience for a changing traveller",
    date: "22 October 2026",
    author: "Priya Sharma",
    img: IMG.hotel,
    summary: "Hotels are balancing technology, personal service and sustainability in a competitive market.",
    slug: "hospitality-guest-experience"
  },
  {
    cat: "Experiences",
    title: "New destination experiences put local culture in the spotlight",
    date: "21 October 2026",
    author: "Rahul Nair",
    img: IMG.coast,
    summary: "Travel brands are building more meaningful itineraries around community, nature and heritage.",
    slug: "destination-experiences-local-culture"
  },
  {
    cat: "Cruise",
    title: "Cruise operators expand itineraries across emerging ports",
    date: "20 October 2026",
    author: "India Outbound Desk",
    img: IMG.cruise,
    summary: "New port calls and shore experiences are widening options for regional travel trade.",
    slug: "cruise-operators-emerging-ports"
  },
  {
    cat: "Market Analysis",
    title: "What changing traveller expectations mean for the travel trade",
    date: "19 October 2026",
    author: "Sanjay Mehta",
    img: IMG.city,
    summary: "A closer look at the trends influencing product design, distribution and destination marketing.",
    slug: "changing-traveller-expectations"
  },
  {
    cat: "Technology",
    title: "Travel technology moves from back-office tool to guest-facing advantage",
    date: "18 October 2026",
    author: "Anita Desai",
    img: IMG.tech,
    summary: "Connected systems and useful automation are changing the way travel businesses operate.",
    slug: "travel-technology-guest-facing"
  },
  {
    cat: "MICE",
    title: "Business events build new bridges between destinations and industries",
    date: "17 October 2026",
    author: "India Outbound Desk",
    img: IMG.city2,
    summary: "Meetings and exhibitions continue to create opportunities for destination partnerships.",
    slug: "business-events-destinations"
  },
  {
    cat: "The Green Corner",
    title: "Nature-positive tourism puts conservation and communities together",
    date: "16 October 2026",
    author: "Kavita Rao",
    img: IMG.green,
    summary: "Responsible travel models can help protect ecosystems while supporting local livelihoods.",
    slug: "nature-positive-tourism"
  },
  {
    cat: "Hotels",
    title: "Resorts explore slower stays and more place-led itineraries",
    date: "15 October 2026",
    author: "Priya Sharma",
    img: IMG.resort,
    summary: "Longer stays and locally rooted experiences are influencing resort programming.",
    slug: "resorts-slower-stays"
  },
  {
    cat: "Films",
    title: "On screen and on location: film tourism finds new audiences",
    date: "14 October 2026",
    author: "Deepak Verma",
    img: IMG.coast,
    summary: "Film-inspired travel continues to connect storytelling with destination discovery.",
    slug: "film-tourism-new-audiences"
  }
];

/* --- Category configuration --- */
const CATEGORIES = {
  "category-trade": {
    title: "Trade News",
    intro: "The latest developments, partnerships and announcements shaping the global travel trade.",
    filter: null,
    metaDesc: "Trade news covering partnerships, developments and announcements in the global travel trade industry."
  },
  "category-exclusive": {
    title: "IO Exclusive",
    intro: "Original interviews, perspectives and stories from across the travel and tourism industry.",
    filter: "exclusive",
    metaDesc: "Exclusive interviews and original stories from across the travel and tourism industry."
  },
  "category-analysis": {
    title: "Market Analysis",
    intro: "Industry intelligence, trends and analysis for travel professionals and decision-makers.",
    filter: "Market Analysis",
    metaDesc: "Market analysis, industry intelligence and trends for travel professionals."
  },
  "category-experiences": {
    title: "Experiences / Destinations",
    intro: "Destination inspiration, local experiences and travel features from around the world.",
    filter: "Experiences",
    metaDesc: "Destination inspiration, local experiences and travel features from around the world."
  },
  "category-aviation": {
    title: "Aviation",
    intro: "Airline news, route developments, airports and the business of air travel.",
    filter: "Aviation",
    metaDesc: "Aviation news including airline routes, airports and air travel business developments."
  },
  "category-hotels": {
    title: "Hotels",
    intro: "Hotel openings, hospitality trends, brands and developments from the accommodation sector.",
    filter: "Hotels",
    metaDesc: "Hotel openings, hospitality trends and accommodation sector developments."
  },
  "category-cruise": {
    title: "Cruise",
    intro: "Cruise industry news, new itineraries, ports and destination experiences.",
    filter: "Cruise",
    metaDesc: "Cruise industry news, itineraries, ports and cruise destination experiences."
  },
  "category-mice": {
    title: "MICE",
    intro: "Meetings, incentives, conferences and exhibitions across the business events sector.",
    filter: "MICE",
    metaDesc: "MICE sector news covering meetings, incentives, conferences and exhibitions."
  },
  "category-technology": {
    title: "Technology",
    intro: "Travel technology, digital transformation, platforms and innovation across tourism.",
    filter: "Technology",
    metaDesc: "Travel technology news including digital transformation and innovation across tourism."
  },
  "category-films": {
    title: "Films",
    intro: "Film, screen tourism and visual storytelling connected to destinations and culture.",
    filter: "Films",
    metaDesc: "Film tourism, screen tourism and visual storytelling connected to destinations."
  },
  "category-events": {
    title: "Events",
    intro: "Industry events, trade shows, destination showcases and important dates for travel professionals.",
    filter: "MICE",
    metaDesc: "Industry events, trade shows and important dates for travel professionals."
  }
};


/* --- Utility helpers --- */
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => root.querySelectorAll(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const currentYear = new Date().getFullYear();


/* ============================================================
   Shared Header
   ============================================================ */
function header(page) {
  const navItems = NAV.map(([label, url, key]) => {
    const isCurrent = page === key;
    const isGreen = key === "green";
    return `<li><a href="${url}" class="${isGreen ? "green-tab" : ""}" ${isCurrent ? 'aria-current="page"' : ""}>${esc(label)}</a></li>`;
  }).join("");

  return `<header role="banner">
  <div class="topbar">
    <div class="container topbar-inner">
      <nav class="regional-links" aria-label="Regional editions">
        <a href="trade-news.html">Eye on Africa</a>
        <a href="trade-news.html">America</a>
        <a href="trade-news.html">Asia</a>
        <a href="trade-news.html">Europe</a>
        <a href="trade-news.html">Middle East</a>
        <a href="trade-news.html">Oceania</a>
      </nav>
      <div class="topbar-right">
        <a class="abu-dhabi" href="events.html">Abu Dhabi Live</a>
        <nav class="social-links" aria-label="Social media links">
          <a href="https://www.linkedin.com/" aria-label="Follow India Outbound on LinkedIn" rel="noopener noreferrer" target="_blank">in</a>
          <a href="https://www.facebook.com/" aria-label="Follow India Outbound on Facebook" rel="noopener noreferrer" target="_blank">f</a>
          <a href="https://www.instagram.com/" aria-label="Follow India Outbound on Instagram" rel="noopener noreferrer" target="_blank">ig</a>
          <a href="https://www.youtube.com/" aria-label="Watch India Outbound on YouTube" rel="noopener noreferrer" target="_blank">yt</a>
        </nav>
      </div>
    </div>
  </div>
  <div class="container brand-row">
    <a class="brand-logo" href="index.html" aria-label="India Outbound — home">
      <img src="https://indiaoutbound.info/wp-content/themes/urbanmag-child/images/new_logo/IO_Header_log.svg" alt="India Outbound" width="230" height="78">
    </a>
    <div class="ad-banner" role="complementary" aria-label="Header advertisement placeholder">Advertisement · 728 × 90</div>
  </div>
  <div class="primary-nav">
    <div class="container nav-inner">
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-menu" id="menu-toggle-btn">
        <span class="menu-icon" aria-hidden="true">☰</span> Menu
      </button>
      <nav aria-label="Primary navigation" class="nav-list-wrap">
        <ul class="nav-list" id="primary-menu" role="menubar">${navItems}</ul>
      </nav>
      <div class="nav-actions">
        <a href="films.html">IO TV</a>
        <button type="button" class="search-toggle" aria-expanded="false" aria-controls="search-panel" id="search-toggle-btn">Search</button>
      </div>
    </div>
    <div class="search-panel" id="search-panel" role="search">
      <div class="container">
        <form class="search-form" action="search.html" method="get" role="search">
          <label class="sr-only" for="site-search">Search India Outbound</label>
          <input id="site-search" name="q" type="search" placeholder="Search travel trade news…" required autocomplete="off">
          <button class="button" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</header>`;
}


/* ============================================================
   Shared Footer
   ============================================================ */
function footer() {
  const exploreLinks = NAV.slice(1, 7).map(n => `<li><a href="${n[1]}">${n[0]}</a></li>`).join("");

  return `<footer class="site-footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <section>
        <div class="footer-brand">India Outbound</div>
        <p>Travel trade news, analysis and destination intelligence for a connected industry.</p>
        <nav class="social-links" aria-label="Footer social media links">
          <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
          <a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank">Instagram</a>
          <a href="https://www.youtube.com/" rel="noopener noreferrer" target="_blank">YouTube</a>
        </nav>
      </section>
      <section>
        <h3>Explore</h3>
        <ul>${exploreLinks}</ul>
      </section>
      <section>
        <h3>About IO</h3>
        <ul>
          <li><a href="about.html">About Us</a></li>
          <li><a href="magazine.html">Our Magazine</a></li>
          <li><a href="advertise.html">Advertise / Partner</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="newsletter.html">Newsletter</a></li>
        </ul>
      </section>
      <section>
        <h3>Newsletter</h3>
        <p>Get selected travel trade updates in your inbox.</p>
        <form class="footer-newsletter js-demo-form" id="footer-newsletter-form">
          <label class="sr-only" for="footer-email">Email address</label>
          <input id="footer-email" name="email" type="email" placeholder="Email address" required autocomplete="email">
          <button class="button" type="submit">Join</button>
        </form>
        <p class="form-message" aria-live="polite"></p>
      </section>
    </div>
    <div class="footer-bottom">
      <span>© ${currentYear} India Outbound. All rights reserved.</span>
      <span><a href="about.html">Privacy</a> · <a href="about.html">Terms</a> · <a href="about.html">Editorial policy</a></span>
    </div>
  </div>
</footer>`;
}


/* ============================================================
   Reusable Components
   ============================================================ */
function ad(label = "Advertisement") {
  return `<div class="ad-slot" role="complementary" aria-label="${esc(label)}">${esc(label)} · Reserved placement</div>`;
}

function card(s, index) {
  const loadAttr = (index !== undefined && index < 3) ? '' : ' loading="lazy"';
  return `<article class="story-card">
  <a class="card-image-link" href="article.html" aria-label="Read: ${esc(s.title)}">
    <img src="${s.img}" alt="" width="400" height="250"${loadAttr}>
  </a>
  <div class="category-label">${esc(s.cat)}</div>
  <h3><a href="article.html">${esc(s.title)}</a></h3>
  <div class="meta">${esc(s.date)} · 4 min read</div>
  <p>${esc(s.summary)}</p>
</article>`;
}

function listCard(s) {
  return `<article class="list-card">
  <a href="article.html" aria-label="Read: ${esc(s.title)}">
    <img src="${s.img}" alt="" width="230" height="144" loading="lazy">
  </a>
  <div>
    <div class="category-label">${esc(s.cat)}</div>
    <h2><a href="article.html">${esc(s.title)}</a></h2>
    <div class="meta">${esc(s.date)} · ${esc(s.author || "India Outbound Desk")}</div>
    <p>${esc(s.summary)}</p>
    <a href="article.html" class="text-link">Read story →</a>
  </div>
</article>`;
}

function section(title, items, href = "trade-news.html") {
  return `<section>
  <div class="section-heading">
    <h2>${title}</h2>
    <a href="${href}">View all →</a>
  </div>
  <div class="story-grid">${items.map((s, i) => card(s, i)).join("")}</div>
</section>`;
}

function pagination(current = 1, total = 3) {
  let links = '';
  links += `<a href="#" aria-label="Previous page" ${current <= 1 ? 'aria-disabled="true"' : ''}>‹</a>`;
  for (let i = 1; i <= total; i++) {
    if (i === current) {
      links += `<span class="current" aria-current="page">${i}</span>`;
    } else {
      links += `<a href="?page=${i}">${i}</a>`;
    }
  }
  links += `<a href="?page=${Math.min(current + 1, total)}" aria-label="Next page" ${current >= total ? 'aria-disabled="true"' : ''}>›</a>`;
  return `<nav class="pagination" aria-label="Pagination">${links}</nav>`;
}

function breadcrumb(items) {
  const crumbs = items.map((item, i) => {
    const isLast = i === items.length - 1;
    if (isLast) {
      return `<li aria-current="page">${esc(item.name)}</li>`;
    }
    return `<li><a href="${item.url}">${esc(item.name)}</a></li>`;
  }).join('<li aria-hidden="true"> / </li>');
  return `<nav class="breadcrumb" aria-label="Breadcrumb"><ol>${crumbs}</ol></nav>`;
}


/* ============================================================
   Structured Data Helpers (JSON-LD)
   ============================================================ */
function injectStructuredData(data) {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

function addOrganizationSD() {
  injectStructuredData({
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    "name": "India Outbound",
    "url": "https://indiaoutbound.info/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://indiaoutbound.info/wp-content/themes/urbanmag-child/images/new_logo/IO_Header_log.svg"
    },
    "sameAs": [
      "https://www.linkedin.com/",
      "https://www.facebook.com/",
      "https://www.instagram.com/",
      "https://www.youtube.com/"
    ],
    "description": "Travel trade news, analysis, destinations and industry insight."
  });
}

function addWebSiteSD() {
  injectStructuredData({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "India Outbound",
    "url": "https://indiaoutbound.info/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://indiaoutbound.info/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  });
}

function addBreadcrumbSD(items) {
  injectStructuredData({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": item.url ? `https://indiaoutbound.info/${item.url}` : undefined
    }))
  });
}

function addNewsArticleSD(story) {
  injectStructuredData({
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": story.title,
    "description": story.summary,
    "image": story.img,
    "datePublished": "2026-10-23",
    "dateModified": "2026-10-23",
    "author": {
      "@type": "Person",
      "name": story.author || "India Outbound Desk"
    },
    "publisher": {
      "@type": "Organization",
      "name": "India Outbound",
      "logo": {
        "@type": "ImageObject",
        "url": "https://indiaoutbound.info/wp-content/themes/urbanmag-child/images/new_logo/IO_Header_log.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://indiaoutbound.info/article.html"
    }
  });
}


/* ============================================================
   SEO Metadata Helpers
   ============================================================ */
function setMetaTag(name, content) {
  let meta = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    if (name.startsWith("og:") || name.startsWith("article:")) {
      meta.setAttribute("property", name);
    } else {
      meta.setAttribute("name", name);
    }
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

function setCanonical(url) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

function setPageSEO(config) {
  document.title = config.title;
  setMetaTag("description", config.description);
  setCanonical(config.canonical || `https://indiaoutbound.info/${config.slug || ""}`);

  // Open Graph
  setMetaTag("og:title", config.ogTitle || config.title);
  setMetaTag("og:description", config.ogDescription || config.description);
  setMetaTag("og:url", config.canonical || `https://indiaoutbound.info/${config.slug || ""}`);
  setMetaTag("og:type", config.ogType || "website");
  setMetaTag("og:site_name", "India Outbound");
  if (config.ogImage) {
    setMetaTag("og:image", config.ogImage);
  }

  // Twitter Card
  setMetaTag("twitter:card", "summary_large_image");
  setMetaTag("twitter:title", config.ogTitle || config.title);
  setMetaTag("twitter:description", config.ogDescription || config.description);
  if (config.ogImage) {
    setMetaTag("twitter:image", config.ogImage);
  }

  // Robots
  if (config.robots) {
    setMetaTag("robots", config.robots);
  }
}


/* ============================================================
   PAGE: Homepage
   ============================================================ */
function homepage() {
  setPageSEO({
    title: "India Outbound | Travel Trade News, Analysis & Destinations",
    description: "India Outbound covers travel trade news, market analysis, aviation, hotels, cruise, MICE, destinations and industry insight for travel professionals.",
    slug: "",
    ogImage: IMG.plane
  });

  addOrganizationSD();
  addWebSiteSD();

  return `${ad("Homepage leaderboard advertisement")}
<div class="breaking-strip" role="alert">
  <strong>Latest</strong>
  <a href="article.html">Travel industry leaders look to stronger partnerships and more connected journeys</a>
  <span class="meta">Updated today</span>
</div>

<section class="hero-grid" aria-label="Featured stories">
  <article class="hero-feature">
    <img src="${IMG.plane}" alt="Commercial aircraft flying above the clouds" width="1200" height="600">
    <div class="hero-copy">
      <div class="category-label">In Focus · Aviation</div>
      <h1><a href="article.html">The next chapter of global travel: routes, relationships and new opportunities</a></h1>
      <div class="meta">23 October 2026 · India Outbound Desk</div>
    </div>
  </article>
  <div class="hero-side">
    ${STORIES.slice(1, 3).map(s => `<article class="side-story">
      <a href="article.html" aria-label="Read: ${esc(s.title)}"><img src="${s.img}" alt="" width="280" height="140" loading="lazy"></a>
      <div>
        <div class="category-label">${esc(s.cat)}</div>
        <h3><a href="article.html">${esc(s.title)}</a></h3>
        <div class="meta">${esc(s.date)}</div>
      </div>
    </article>`).join("")}
  </div>
</section>

${section("Latest News", STORIES.slice(3, 6))}

${ad("In-content advertisement")}

${section("In Focus", STORIES.slice(0, 3), "market-analysis.html")}

<section class="magazine-promo" aria-label="Magazine promotion">
  <div>
    <span class="eyebrow">Read the latest issue</span>
    <h2 class="page-title">India Outbound Magazine</h2>
    <p class="page-intro">Features, interviews and industry perspectives in one curated edition.</p>
    <a class="button button-dark" href="magazine.html">Explore the magazine</a>
  </div>
  <img src="${IMG.coast}" alt="Coastal destination featured in the latest magazine issue" width="600" height="280" loading="lazy">
</section>

${section("Destinations & Experiences", STORIES.slice(6, 9), "experiences.html")}

<section class="newsletter-band" aria-label="Newsletter subscription">
  <h2>Travel trade insights, delivered.</h2>
  <p>Sign up for the India Outbound newsletter.</p>
  <form class="inline-form js-demo-form" id="home-newsletter-form">
    <label class="sr-only" for="home-email">Email address</label>
    <input id="home-email" type="email" name="email" placeholder="Your email address" required autocomplete="email">
    <button class="button" type="submit">Subscribe</button>
  </form>
  <p class="form-message" aria-live="polite"></p>
</section>`;
}


/* ============================================================
   PAGE: Category
   ============================================================ */
/* ============================================================
   SHARED EDITORIAL SIDEBAR
   Consistent across Homepage, All Category Pages & All Article Pages
   ============================================================ */
function sharedSidebar() {
  return `<aside class="homepage-sidebar" aria-label="Editorial Sidebar">

  <!-- 1. Read Our Magazine -->
  <div class="sidebar-widget widget-magazine">
    <div class="sidebar-widget-header">
      <h3 class="sidebar-widget-title">Read our Magazine</h3>
    </div>
    <div class="sidebar-magazine-content">
      <div class="sidebar-mag-cover-media">
        <a href="magazine-detail.html" aria-label="Read India Outbound Sep - Oct 2026 Issue">
          <img src="https://indiaoutbound.info/wp-content/uploads/2026/09/Cover-India-Outbound-Sep-Oct-2026-1-scaled-300x424.jpg" alt="India Outbound Sep - Oct 2026" width="300" height="424" loading="lazy">
        </a>
      </div>
      <p class="sidebar-mag-desc">
         
      </p>
      <a href="magazine-detail.html" class="btn-sidebar-magazine">Read Latest Issue &rarr;</a>
    </div>
  </div>

  <!-- 2. Special Feature -->
  <div class="sidebar-widget widget-special-feature">
    <div class="sidebar-widget-header">
      <h3 class="sidebar-widget-title">Special Feature</h3>
    </div>
    <div class="sidebar-compact-list">
      <article class="sidebar-compact-item">
        <div class="sidebar-compact-thumb">
          <a href="https://indiaoutbound.info/special-feature/diwali-in-abudhabi-turning-festival-of-lights-into-a-memorable-family-vacation/" tabindex="-1" aria-hidden="true">
            <img src="https://indiaoutbound.info/wp-content/uploads/2026/09/Yas-island-150x150.jpg" alt="Diwali in Abu Dhabi: Turning Festival of Lights into a memorable family vacation" width="75" height="56" loading="lazy">
          </a>
        </div>
        <div class="sidebar-compact-details">
          <h4 class="sidebar-compact-title">
            <a href="https://indiaoutbound.info/special-feature/diwali-in-abudhabi-turning-festival-of-lights-into-a-memorable-family-vacation/">Diwali in Abu Dhabi: Turning Festival of Lights into a memorable family vacation</a>
          </h4>
          <div class="sidebar-compact-meta">
            <time datetime="2026-10-22">October 2026</time>
          </div>
        </div>
      </article>

      <article class="sidebar-compact-item">
        <div class="sidebar-compact-thumb">
          <a href="https://indiaoutbound.info/special-feature/kuching-puts-sarawaks-unique-vegetarian-flavours-on-the-plate/" tabindex="-1" aria-hidden="true">
            <img src="https://indiaoutbound.info/wp-content/uploads/2026/09/Midin-150x150.jpg" alt="Kuching puts Sarawak’s unique vegetarian flavours on the plate" width="75" height="56" loading="lazy">
          </a>
        </div>
        <div class="sidebar-compact-details">
          <h4 class="sidebar-compact-title">
            <a href="https://indiaoutbound.info/special-feature/kuching-puts-sarawaks-unique-vegetarian-flavours-on-the-plate/">Kuching puts Sarawak’s unique vegetarian flavours on the plate</a>
          </h4>
          <div class="sidebar-compact-meta">
            <time datetime="2026-09-01">September 2026</time>
          </div>
        </div>
      </article>
    </div>
  </div>

  <!-- 3. Cruise -->
  <div class="sidebar-widget widget-cruise">
    <div class="sidebar-widget-header">
      <h3 class="sidebar-widget-title">Cruise</h3>
      <a href="cruise.html" class="sidebar-view-all">View All &rarr;</a>
    </div>
    <div class="sidebar-compact-list">
      <article class="sidebar-compact-item">
        <div class="sidebar-compact-thumb">
          <a href="https://indiaoutbound.info/cruise/royal-caribbean-group-takes-50-pc-stake-in-jv-with-sandals-resorts/" tabindex="-1" aria-hidden="true">
            <img src="https://indiaoutbound.info/wp-content/uploads/2026/09/Royal-Caribbean-1024x576.jpg" alt="Royal Caribbean Group takes 50 pc stake in JV with Sandals Resorts" width="75" height="56" loading="lazy">
          </a>
        </div>
        <div class="sidebar-compact-details">
          <h4 class="sidebar-compact-title">
            <a href="https://indiaoutbound.info/cruise/royal-caribbean-group-takes-50-pc-stake-in-jv-with-sandals-resorts/">Royal Caribbean Group takes 50 pc stake in JV with Sandals Resorts</a>
          </h4>
          <div class="sidebar-compact-meta">
            <time datetime="2026-09-01">September 2026</time>
          </div>
        </div>
      </article>

      <article class="sidebar-compact-item">
        <div class="sidebar-compact-thumb">
          <a href="https://indiaoutbound.info/cruise/67-pc-off-indian-travellers-favour-cruising-across-europe-royal-caribbean/" tabindex="-1" aria-hidden="true">
            <img src="https://indiaoutbound.info/wp-content/uploads/2026/09/‘Legend-of-the-Seas-1-150x150.jpg" alt="67 pc of Indian travellers favour cruising across Europe: Royal Caribbean" width="75" height="56" loading="lazy">
          </a>
        </div>
        <div class="sidebar-compact-details">
          <h4 class="sidebar-compact-title">
            <a href="https://indiaoutbound.info/cruise/67-pc-off-indian-travellers-favour-cruising-across-europe-royal-caribbean/">67 pc of Indian travellers favour cruising across Europe: Royal Caribbean</a>
          </h4>
          <div class="sidebar-compact-meta">
            <time datetime="2026-09-01">September 2026</time>
          </div>
        </div>
      </article>
    </div>
  </div>

  <!-- 4. About Us -->
  <div class="sidebar-widget widget-about">
    <div class="sidebar-widget-header">
      <h3 class="sidebar-widget-title">ABOUT US</h3>
    </div>
    <div class="sidebar-about-content">
      <p>India Outbound is India’s only B2B travel media platform, encompassing a print magazine, a website, an online TV channel and dynamic social media platforms, entirely dedicated to the promotion of foreign destinations and products in India.</p>
      <a href="about.html" class="sidebar-about-link">Read more &rarr;</a>
    </div>
  </div>

  <!-- 5. Subscribe to Our Newsletters -->
  <div class="sidebar-widget widget-newsletter">
    <div class="sidebar-widget-header">
      <h3 class="sidebar-widget-title">Subscribe to our newsletters</h3>
    </div>
    <form class="sidebar-newsletter-form" action="newsletter.html" method="get">
      <div class="newsletter-checkboxes">
        <label class="newsletter-checkbox-item">
          <input type="checkbox" name="topic_daily" checked>
          <span>Daily Trade Wire</span>
        </label>
        <label class="newsletter-checkbox-item">
          <input type="checkbox" name="topic_weekly" checked>
          <span>Weekly Outbound Digest</span>
        </label>
      </div>
      <div class="newsletter-input-group">
        <input type="email" name="email" placeholder="Your email address" required autocomplete="email">
        <button type="submit" class="newsletter-go-btn">GO</button>
      </div>
    </form>
  </div>

  <!-- 6. Advertisement Space -->
  <div class="sidebar-widget widget-ad" role="complementary" aria-label="Sidebar Advertisement">
    <div class="sidebar-ad-box">
      <div class="sidebar-ad-labels">
        <span class="sidebar-ad-title">AD</span>
        <span class="sidebar-ad-subtitle">ADVERTISEMENT SPACE</span>
      </div>
      <div class="sidebar-ad-media">
        <a href="advertise.html" rel="nofollow noopener" aria-label="Advertise with India Outbound">
          <img src="https://indiaoutbound.info/wp-content/uploads/2026/09/SquareSize_EN.webp" alt="India Outbound Advertisement Space" width="300" height="250" loading="lazy">
        </a>
      </div>
    </div>
  </div>

</aside>`;
}


function categoryPage(page) {
  const c = CATEGORIES[page] || CATEGORIES["category-trade"];
  let items = STORIES;
  if (c.filter === "exclusive") items = STORIES.slice(0, 6);
  else if (c.filter) items = STORIES.filter(s => s.cat === c.filter || s.cat === "Market Analysis");
  if (items.length < 3) items = items.concat(STORIES).slice(0, 7);

  setPageSEO({
    title: `${c.title} | India Outbound`,
    description: c.metaDesc || c.intro,
    slug: NAV.find(n => n[2] === page)?.[1] || "trade-news.html",
    ogImage: items[0]?.img
  });

  addBreadcrumbSD([
    { name: "Home", url: "index.html" },
    { name: c.title }
  ]);

  return `${ad()}
<header class="category-head">
  <span class="eyebrow">India Outbound / Sections</span>
  <h1 class="page-title">${c.title}</h1>
  <p class="page-intro">${c.intro}</p>
</header>

<div class="two-col">
  <div class="category-main-content">
    <article class="hero-feature" style="min-height:320px;margin-bottom:28px">
      <img src="${items[0].img}" alt="" width="800" height="400" loading="lazy">
      <div class="hero-copy">
        <div class="category-label">${esc(items[0].cat)}</div>
        <h2><a href="article.html">${esc(items[0].title)}</a></h2>
        <div class="meta">${esc(items[0].date)}</div>
      </div>
    </article>
    <div class="story-list">
      ${items.slice(1).map(listCard).join("")}
    </div>
    ${pagination()}
  </div>
  ${sharedSidebar()}
</div>`;
}


/* ============================================================
   PAGE: Article
   ============================================================ */
function articlePage() {
  const s = STORIES[0];

  setPageSEO({
    title: `${s.title} | India Outbound`,
    description: s.summary,
    slug: "article.html",
    ogType: "article",
    ogImage: s.img
  });

  addNewsArticleSD(s);
  addBreadcrumbSD([
    { name: "Home", url: "index.html" },
    { name: s.cat, url: "trade-news.html" },
    { name: s.title }
  ]);

  const shareUrl = encodeURIComponent("https://indiaoutbound.info/article.html");
  const shareTitle = encodeURIComponent(s.title);

  return `${ad()}
<article itemscope itemtype="https://schema.org/NewsArticle">
  <header class="article-header">
    <div class="category-label" itemprop="articleSection">${esc(s.cat)}</div>
    <h1 itemprop="headline">${esc(s.title)}</h1>
    <p class="article-deck" itemprop="description">${esc(s.summary)}</p>
    <div class="meta">
      By <span itemprop="author">${esc(s.author || "India Outbound Desk")}</span> ·
      <time itemprop="datePublished" datetime="2026-10-23">${esc(s.date)}</time> · 4 min read
    </div>
  </header>

  <img class="article-hero" src="${s.img}" alt="Aircraft in flight representing aviation industry developments" width="1200" height="675" itemprop="image">
  <div class="image-caption">Image for editorial illustration.</div>

  <div class="two-col article-layout-wrapper">
    <div class="article-main-content">
      <div class="article-body" itemprop="articleBody">
        <p><strong>Travel markets continue to evolve as destinations, airlines and tourism businesses respond to changing expectations.</strong> Partnerships, connectivity and useful information remain central to building resilient travel experiences.</p>
        <p>For travel professionals, the opportunity is to understand how these shifts connect across the visitor journey. From the first point of inspiration to booking, arrival and the on-ground experience, each stage influences how travellers choose and remember a destination.</p>
        <h2>Building stronger connections</h2>
        <p>Industry collaboration can help businesses respond to new demand, improve access to information and create products that reflect local strengths. Clear communication between partners is particularly important as markets diversify and traveller needs become more specific.</p>
        <p>As developments continue, travel trade organisations will be watching for practical opportunities to build new relationships and make travel easier to plan.</p>
        <h2>What comes next</h2>
        <p>Further updates, market data and expert perspectives will help put these developments in context. India Outbound will continue to follow the stories that matter to travel professionals.</p>
      </div>

      <div class="author-bio-box" style="background:#f8fafc;border:1px solid #e2e8f0;padding:16px;margin:24px 0;">
        <h4 style="margin:0 0 6px;font-size:0.95rem;font-weight:700;">About the author</h4>
        <p style="margin:0 0 8px;font-size:0.875rem;color:#555;">${esc(s.author || "India Outbound Desk")} covers news and developments across travel, tourism and hospitality.</p>
        <a href="author.html" class="text-link" style="font-size:0.8125rem;font-weight:600;">More from this author &rarr;</a>
      </div>

      <div class="share-row">
        <strong>Share:</strong>
        <a href="https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}" rel="noopener noreferrer" target="_blank">LinkedIn</a>
        <a href="https://www.facebook.com/sharer/sharer.php?u=${shareUrl}" rel="noopener noreferrer" target="_blank">Facebook</a>
        <a href="https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}" rel="noopener noreferrer" target="_blank">X / Twitter</a>
        <a href="mailto:?subject=${shareTitle}&body=${shareUrl}">Email</a>
        <button class="button button-outline" type="button" data-copy-url>Copy link</button>
      </div>

      <div class="tag-row">
        <strong>Tags:</strong>
        <a href="tag.html">Travel Trade</a>
        <a href="tag.html">Aviation</a>
        <a href="tag.html">Industry Insight</a>
      </div>
    </div>

    ${sharedSidebar()}
  </div>
</article>

${section("Related Stories", STORIES.slice(1, 4))}`;
}


/* ============================================================
   PAGE: Search
   ============================================================ */
function searchPage() {
  const q = new URLSearchParams(location.search).get("q") || "";
  const matches = STORIES.filter(s =>
    (s.title + " " + s.cat + " " + s.summary).toLowerCase().includes(q.toLowerCase())
  );

  setPageSEO({
    title: q ? `Search results for "${q}" | India Outbound` : "Search | India Outbound",
    description: "Search India Outbound for travel trade news, destination features, market analysis and industry insight.",
    slug: "search.html",
    robots: "noindex, follow"
  });

  return `<h1 class="page-title">Search India Outbound</h1>
<form class="search-form" action="search.html" method="get" role="search">
  <label class="sr-only" for="results-search">Search terms</label>
  <input id="results-search" name="q" type="search" value="${esc(q)}" placeholder="Search stories…" required autocomplete="off">
  <button class="button" type="submit">Search</button>
</form>
<p class="page-intro">${q ? `Results for \u201c${esc(q)}\u201d` : "Enter a topic, destination or industry keyword to find stories."}</p>
${q ? (matches.length
      ? `<div class="story-list">${matches.map(listCard).join("")}</div>${pagination()}`
      : `<div class="empty-state">
      <h2>No results found</h2>
      <p>Try a broader keyword or browse our latest stories.</p>
      <a class="button" href="index.html">Back to homepage</a>
    </div>`)
      : section("Popular stories", STORIES.slice(0, 3))
    }`;
}


/* ============================================================
   PAGE: Magazine archive
   ============================================================ */
function magazinePage() {
  setPageSEO({
    title: "Magazine Archive | India Outbound",
    description: "Explore the India Outbound magazine archive, featuring destination reports, interviews and travel trade insight.",
    slug: "magazine.html",
    ogImage: IMG.coast
  });

  addBreadcrumbSD([
    { name: "Home", url: "index.html" },
    { name: "Magazine" }
  ]);

  const issues = [1, 2, 3, 4, 5, 6, 7, 8].map(n => {
    const coverImg = [IMG.coast, IMG.city, IMG.hotel, IMG.cruise][(n - 1) % 4];
    const year = 2026 - Math.floor((n - 1) / 4);
    return `<article>
      <a href="magazine-detail.html" aria-label="View Issue ${String(n).padStart(2, "0")}">
        <img class="magazine-cover" src="${coverImg}" alt="India Outbound magazine issue ${n} cover" width="300" height="400" loading="lazy">
      </a>
      <h3><a href="magazine-detail.html">Issue ${String(n).padStart(2, "0")} · Travel & Trade</a></h3>
      <p class="meta">${year} · Digital edition</p>
      <a href="magazine-detail.html" class="text-link">View issue →</a>
    </article>`;
  }).join("");

  return `<h1 class="page-title">Our Magazine</h1>
<p class="page-intro">Explore the India Outbound magazine archive, featuring destination reports, interviews and travel trade insight.</p>
${ad()}
<div class="magazine-grid">${issues}</div>
${pagination()}`;
}


/* ============================================================
   PAGE: Magazine detail
   ============================================================ */
function magazineDetail() {
  setPageSEO({
    title: "India Outbound Magazine — Latest Issue",
    description: "A curated collection of destination features, industry interviews and travel trade analysis from India Outbound.",
    slug: "magazine-detail.html",
    ogImage: IMG.coast
  });

  addBreadcrumbSD([
    { name: "Home", url: "index.html" },
    { name: "Magazine", url: "magazine.html" },
    { name: "Latest Issue" }
  ]);

  return `<div class="two-col">
  <div class="magazine-main-content">
    <span class="eyebrow">Digital edition</span>
    <h1 class="page-title">India Outbound — Latest Issue</h1>
    <p class="page-intro">A curated collection of destination features, industry interviews and travel trade analysis.</p>
    <img class="article-hero" src="${IMG.coast}" alt="Featured destination from the latest India Outbound magazine issue" width="800" height="450">
    <p style="margin:16px 0;">Issue information and a link to the authorised reader can be connected here when the publication URL is available.</p>
    <a class="button button-dark" href="#" data-reader-placeholder style="display:inline-block;padding:10px 20px;background:#111;color:#fff;font-weight:600;">Open digital reader</a>
    <p class="form-message" aria-live="polite"></p>
  </div>
  ${sharedSidebar()}
</div>`;
}


/* ============================================================
   PAGE: Forms (contact, advertise, newsletter)
   ============================================================ */
function formPage(kind) {
  const configs = {
    contact: [
      "Contact Us",
      "Send the India Outbound team a message. For production use, connect this form to a secure server-side handler.",
      "Contact India Outbound for editorial enquiries, advertising information and partnership opportunities."
    ],
    advertise: [
      "Advertise / Partner With Us",
      "Explore advertising, editorial partnership and campaign opportunities with India Outbound.",
      "Advertise with India Outbound — reach travel trade professionals through digital, magazine and event campaigns."
    ],
    newsletter: [
      "Newsletter",
      "Subscribe to selected travel trade news and editorial updates.",
      "Subscribe to the India Outbound newsletter for travel trade news, analysis and destination updates."
    ]
  };

  const [title, intro, metaDesc] = configs[kind];

  setPageSEO({
    title: `${title} | India Outbound`,
    description: metaDesc,
    slug: `${kind}.html`
  });

  addBreadcrumbSD([
    { name: "Home", url: "index.html" },
    { name: title }
  ]);

  let fields = "";
  if (kind === "newsletter") {
    fields = `
      <div class="field full">
        <label for="nl-email">Email address <span aria-hidden="true">*</span></label>
        <input id="nl-email" name="email" type="email" required autocomplete="email" aria-required="true">
      </div>
      <div class="field full">
        <label><input type="checkbox" required aria-required="true"> I agree to receive the newsletter and understand I can unsubscribe.</label>
      </div>`;
  } else {
    fields = `
      <div class="field">
        <label for="${kind}-name">Name <span aria-hidden="true">*</span></label>
        <input id="${kind}-name" name="name" required autocomplete="name" aria-required="true">
      </div>
      <div class="field">
        <label for="${kind}-email">Work email <span aria-hidden="true">*</span></label>
        <input id="${kind}-email" name="email" type="email" required autocomplete="email" aria-required="true">
      </div>`;

    if (kind === "advertise") {
      fields += `
      <div class="field">
        <label for="adv-company">Company <span aria-hidden="true">*</span></label>
        <input id="adv-company" name="company" required autocomplete="organization" aria-required="true">
      </div>
      <div class="field">
        <label for="adv-interest">Area of interest</label>
        <select id="adv-interest" name="interest">
          <option>Digital advertising</option>
          <option>Magazine advertising</option>
          <option>Editorial partnership</option>
          <option>Event partnership</option>
        </select>
      </div>`;
    } else {
      fields += `
      <div class="field full">
        <label for="contact-subject">Subject <span aria-hidden="true">*</span></label>
        <input id="contact-subject" name="subject" required aria-required="true">
      </div>`;
    }

    fields += `
      <div class="field full">
        <label for="${kind}-message">Message <span aria-hidden="true">*</span></label>
        <textarea id="${kind}-message" name="message" required aria-required="true"></textarea>
      </div>
      <div class="field full">
        <label><input type="checkbox" required aria-required="true"> I consent to being contacted about this enquiry.</label>
      </div>`;
  }

  return `<h1 class="page-title">${title}</h1>
<p class="page-intro">${intro}</p>
<div class="form-card">
  <form class="js-demo-form" id="${kind}-form">
    <div class="form-grid">${fields}</div>
    <button class="button" type="submit">${kind === "newsletter" ? "Subscribe" : "Send enquiry"}</button>
    <p class="form-message" aria-live="polite"></p>
  </form>
</div>
${kind === "contact" ? `
<div class="sidebar-box" style="margin-top:24px;max-width:720px">
  <h3>Editorial and general enquiries</h3>
  <p>Use the form above to route your enquiry to the appropriate team. Add verified office address, phone and email details before launch.</p>
</div>` : ""}`;
}


/* ============================================================
   PAGE: Static (about, author, tag, green corner, 404)
   ============================================================ */
function staticPage(page) {
  const data = {
    about: {
      title: "About India Outbound",
      intro: "India’s only multi-channel B2B travel media platform entirely dedicated to the promotion of foreign destinations, hospitality, aviation and travel trade intelligence.",
      body: "Published by Media India Group (est. 2004), India Outbound encompasses a bi-monthly luxury print magazine, 24/7 web portal, IO TV online broadcasts, and curated trade newsletters. We bridge international tourism boards and suppliers with India's high-growth travel trade ecosystem.",
      metaDesc: "About India Outbound — India’s only B2B travel media platform dedicated to promoting foreign destinations, hospitality, aviation and travel trade intelligence."
    },
    author: {
      title: "India Outbound Desk",
      intro: "Stories and reporting from the India Outbound editorial team.",
      body: "Browse the latest reporting, interviews and updates from our editorial desk.",
      metaDesc: "Articles and stories by the India Outbound editorial team.",
      robots: null
    },
    tag: {
      title: "Travel Trade",
      intro: "Stories tagged with travel trade, tourism business and industry developments.",
      body: "Browse related reporting and analysis from across India Outbound.",
      metaDesc: "Stories tagged with travel trade news, tourism business and industry developments.",
      robots: null
    },
    green: {
      title: "The Green Corner",
      intro: "Sustainability, conservation and responsible tourism.",
      body: "Explore stories about nature-positive travel, community-led experiences and practical sustainability across tourism.",
      metaDesc: "The Green Corner — sustainability, conservation and responsible tourism coverage from India Outbound."
    },
    "not-found": {
      title: "Page not found",
      intro: "The page may have moved or the address may be incorrect.",
      body: "Use the links below to return to the homepage or explore our latest coverage.",
      metaDesc: "Page not found on India Outbound.",
      robots: "noindex, follow"
    }
  };

  const config = data[page] || data.about;

  setPageSEO({
    title: `${config.title} | India Outbound`,
    description: config.metaDesc,
    slug: `${page === "not-found" ? "404" : page}.html`,
    robots: config.robots
  });

  if (page !== "not-found") {
    addBreadcrumbSD([
      { name: "Home", url: "index.html" },
      { name: config.title }
    ]);
  }

  let items = page === "green"
    ? STORIES.filter(s => s.cat === "The Green Corner").concat(STORIES.slice(2, 5))
    : STORIES.slice(0, 6);

  if (page === "not-found") {
    return `<div class="empty-state" style="margin-top:32px">
      <h1 class="page-title" style="font-size:4rem;margin-bottom:16px">404</h1>
      <h2>${config.title}</h2>
      <p>${config.intro}</p>
      <p>${config.body}</p>
      <a class="button" href="index.html">Go to homepage</a>
      <a class="button button-dark" href="trade-news.html">Browse Trade News</a>
    </div>`;
  }

  return `<div class="${page === "green" ? "green-page" : ""}">
  <span class="eyebrow">India Outbound</span>
  <h1 class="page-title">${config.title}</h1>
  <p class="page-intro">${config.intro}</p>
  <div class="two-col">
    <div>
      <p>${config.body}</p>
      ${page === "about" ? `<h2 style="font:700 1.375rem/1.25 var(--font-editorial);margin:24px 0 12px">What we cover</h2>
      <p>Travel trade news, destination features, market analysis, aviation, hotels, cruise, MICE and travel technology.</p>` : ""}
      ${section(
    page === "green" ? "Latest from The Green Corner" : "Latest stories",
    items,
    page === "green" ? "green-corner.html" : "trade-news.html"
  )}
    </div>
    ${sharedSidebar()}
  </div>
</div>`;
}


/* ============================================================
   Render — page routing
   ============================================================ */
function render() {
  const page = document.body.dataset.page || "home";

  // Inject header and footer
  const headerEl = document.getElementById("site-header");
  const footerEl = document.getElementById("site-footer");
  if (headerEl) headerEl.innerHTML = header(page);
  if (footerEl) footerEl.innerHTML = footer();

  // Route to page template
  let html = "";
  if (page === "home") html = homepage();
  else if (CATEGORIES[page]) html = categoryPage(page);
  else if (page === "article") html = articlePage();
  else if (page === "search") html = searchPage();
  else if (page === "magazine") html = magazinePage();
  else if (page === "magazine-detail") html = magazineDetail();
  else if (["contact", "advertise", "newsletter"].includes(page)) html = formPage(page);
  else if (["about", "author", "tag", "green", "not-found"].includes(page)) html = staticPage(page);

  const contentEl = document.getElementById("page-content");
  if (contentEl) contentEl.innerHTML = html;

  // Bind all interactions
  bindInteractions();
}


/* ============================================================
   Interactions
   ============================================================ */
function bindInteractions() {
  // Mobile menu toggle
  const menuBtn = document.getElementById("menu-toggle-btn");
  const navList = document.getElementById("primary-menu");
  if (menuBtn && navList) {
    menuBtn.addEventListener("click", () => {
      const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!isOpen));
      navList.classList.toggle("is-open", !isOpen);

      // Update menu icon
      const icon = menuBtn.querySelector(".menu-icon");
      if (icon) icon.textContent = isOpen ? "☰" : "✕";
    });
  }

  // Search toggle
  const searchBtn = document.getElementById("search-toggle-btn");
  const searchPanel = document.getElementById("search-panel");
  if (searchBtn && searchPanel) {
    searchBtn.addEventListener("click", () => {
      const isOpen = searchBtn.getAttribute("aria-expanded") === "true";
      searchBtn.setAttribute("aria-expanded", String(!isOpen));
      searchPanel.classList.toggle("is-open", !isOpen);

      // Focus search input when opening
      if (!isOpen) {
        const input = document.getElementById("site-search");
        if (input) input.focus();
      }
    });
  }

  // Close mobile menu when pressing Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      // Close menu
      if (menuBtn && menuBtn.getAttribute("aria-expanded") === "true") {
        menuBtn.setAttribute("aria-expanded", "false");
        navList?.classList.remove("is-open");
        const icon = menuBtn.querySelector(".menu-icon");
        if (icon) icon.textContent = "☰";
        menuBtn.focus();
      }
      // Close search
      if (searchBtn && searchBtn.getAttribute("aria-expanded") === "true") {
        searchBtn.setAttribute("aria-expanded", "false");
        searchPanel?.classList.remove("is-open");
        searchBtn.focus();
      }
    }
  });

  // Form demo handling
  document.querySelectorAll(".js-demo-form").forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;

      const msg = form.querySelector(".form-message") ||
        form.parentElement?.querySelector(".form-message");
      if (msg) {
        msg.textContent = "Form validation passed. Connect this form to WordPress, an email platform or a secure backend to submit data.";
      }
      form.reset();
    });
  });

  // Copy URL button
  document.querySelectorAll("[data-copy-url]").forEach(btn => {
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(location.href);
        btn.textContent = "Copied!";
        setTimeout(() => { btn.textContent = "Copy link"; }, 2000);
      } catch {
        btn.textContent = "Copy from address bar";
        setTimeout(() => { btn.textContent = "Copy link"; }, 3000);
      }
    });
  });

  // Magazine reader placeholder
  document.querySelectorAll("[data-reader-placeholder]").forEach(a => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const msg = a.parentElement?.querySelector(".form-message");
      if (msg) {
        msg.textContent = "Connect the approved magazine reader URL to enable access.";
      }
    });
  });

  // Smooth scroll for anchor links (only in-page)
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        target.focus({ preventScroll: true });
      }
    });
  });
}


/* ============================================================
   Initialise
   ============================================================ */
document.addEventListener("DOMContentLoaded", render);
