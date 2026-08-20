const fs = require('fs');

const brandProjects = [
  {
    num: 1,
    file: '1.png',
    title: 'Apex Outdoors Brand Campaign',
    category: 'branding',
    categoryName: 'Brand Campaign',
    desc: 'Complete visual identity and social campaign developed for Apex Outdoors, focusing on rugged outdoor storytelling.'
  },
  {
    num: 2,
    file: '2.png',
    title: 'Wilderness Adventure Social Poster',
    category: 'branding',
    categoryName: 'Brand Campaign',
    desc: 'High-impact visual banner highlighting outdoor expeditions and trail equipment.'
  },
  {
    num: 3,
    file: '3.png',
    title: 'DTC Product Showcase',
    category: 'branding',
    categoryName: 'Brand Campaign',
    desc: 'Clean product showcase optimized for Instagram feed engagement and click-throughs.'
  },
  {
    num: 4,
    file: '4.png',
    title: 'Apex Visual Identity System',
    category: 'branding',
    categoryName: 'Brand Campaign',
    desc: 'Comprehensive visual system establishing brand guidelines, color palettes, and asset architecture.'
  },
  {
    num: 5,
    file: '5.png',
    title: 'Brand Typography & Layout Guidelines',
    category: 'branding',
    categoryName: 'Brand Campaign',
    desc: 'Design hierarchy and typographic scale engineered for high retention across digital channels.'
  },
  {
    num: 6,
    file: '6.png',
    title: 'Modern Apparel & Streetwear Promo',
    category: 'branding',
    categoryName: 'Brand Campaign',
    desc: 'Contemporary lifestyle campaign visual tailored for modern DTC streetwear and apparel brands.'
  },
  {
    num: 7,
    file: '7.png',
    title: 'Cyber Visual Manipulation',
    category: 'branding ai-art',
    categoryName: 'Brand Campaign &bull; AI Visuals',
    desc: 'AI-generated and Photoshop-composited digital commercial artwork with advanced lighting effects.'
  },
  {
    num: 8,
    file: '8.png',
    title: 'Commercial Concept Art',
    category: 'branding ai-art',
    categoryName: 'Brand Campaign &bull; AI Visuals',
    desc: 'Vibrant splash and product photo-manipulation designed for high CTR commercial social ads.'
  },
  {
    num: 9,
    file: '9.png',
    title: 'Activewear E-Commerce Visual',
    category: 'branding',
    categoryName: 'Brand Campaign',
    desc: 'High-conversion product creative highlighting premium athletic fabric and movement performance.'
  },
  {
    num: 10,
    file: '10.png',
    title: 'Outdoor Expedition Social Banner',
    category: 'branding',
    categoryName: 'Brand Campaign',
    desc: 'Social banner layout crafted for seasonal collection drops and adventure community promotions.'
  },
  {
    num: 11,
    file: '11.png',
    title: 'Urban Lifestyle Commercial Artwork',
    category: 'branding',
    categoryName: 'Brand Campaign',
    desc: 'Vibrant urban lifestyle visual combining photographic elements and stylized vector branding.'
  },
  {
    num: 12,
    file: '12.png',
    title: 'Futuristic Lifestyle Visual',
    category: 'branding ai-art',
    categoryName: 'Brand Campaign &bull; AI Visuals',
    desc: 'Stylized concept combining AI rendering with typography and modern commercial branding overlays.'
  },
  {
    num: 13,
    file: '13.png',
    title: 'Minimalist Brand Identity Showcase',
    category: 'branding',
    categoryName: 'Brand Campaign',
    desc: 'Clean, minimalist brand layout designed for high-end aesthetic presentation and client pitch decks.'
  },
  {
    num: 14,
    file: '14.jpg',
    title: 'Footwear E-Commerce Visual',
    category: 'branding',
    categoryName: 'Brand Campaign',
    desc: 'Dynamic sneaker promotional creative engineered for high Instagram engagement and conversions.'
  },
  {
    num: 15,
    file: '15.jpg',
    title: 'Performance Gear Campaign Art',
    category: 'branding',
    categoryName: 'Brand Campaign',
    desc: 'Bold commercial artwork highlighting durability, technical performance, and outdoor exploration.'
  },
  {
    num: 16,
    file: '16.jpg',
    title: 'Technical Apparel Product Banner',
    category: 'branding',
    categoryName: 'Brand Campaign',
    desc: 'High-impact product banner designed for seasonal DTC fashion launches and social advertising.'
  }
];

let html = '';
brandProjects.forEach((p, idx) => {
  html += `        <!-- Brand Campaign Post ${p.num} -->
        <div class="post-card-behance" data-category="${p.category}" data-img="Assets/Brand Campaign/${p.file}" data-title="${p.title}" data-category-name="${p.categoryName}" data-desc="${p.desc}">
          <div class="post-card-img-wrap">
            <img src="Assets/Brand Campaign/${p.file}" alt="${p.title}" loading="lazy" />
            <div class="post-card-overlay">
              <div class="glass-play-btn"><i class="fas fa-magnifying-glass-plus"></i></div>
            </div>
          </div>
          <div class="post-card-info">
            <span class="post-card-category">${p.category.includes('ai-art') ? 'BRAND &bull; AI VISUALS' : 'BRAND CAMPAIGN'}</span>
            <h3 class="post-card-title">${p.title}</h3>
          </div>
        </div>\n\n`;
});

fs.writeFileSync('scratch/brand_cards.html', html);
console.log('Saved 16 brand campaign cards to scratch/brand_cards.html');
