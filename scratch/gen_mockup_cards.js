const fs = require('fs');

const mockupProjects = [
  {
    num: 1,
    file: '1.png',
    title: 'Product Packaging & Box Mockup',
    category: 'mockups',
    categoryName: 'Mockups & Products',
    desc: 'Photorealistic product mockup and 3D packaging layout for DTC client presentation.'
  },
  {
    num: 2,
    file: '2.png',
    title: 'App & Digital Device Screen Mockup',
    category: 'mockups',
    categoryName: 'Mockups & Products',
    desc: 'High-resolution digital device mockup demonstrating multi-screen mobile responsiveness.'
  },
  {
    num: 3,
    file: '3.png',
    title: 'Brand Identity & Stationery Mockup',
    category: 'mockups',
    categoryName: 'Mockups & Products',
    desc: 'Premium corporate stationery, business cards, and brand asset mockup layout.'
  },
  {
    num: 4,
    file: '4.png',
    title: 'Cosmetic & Beauty Bottle Mockup',
    category: 'mockups',
    categoryName: 'Mockups & Products',
    desc: 'Clean, elegant cosmetic bottle packaging mockup with custom lighting and reflections.'
  },
  {
    num: 5,
    file: '5.png',
    title: 'Beverage Can & Bottle Mockup',
    category: 'mockups',
    categoryName: 'Mockups & Products',
    desc: '3D beverage container mockup designed for social media ad testing and product visualization.'
  },
  {
    num: 6,
    file: '6.png',
    title: 'Apparel & T-Shirt Lifestyle Mockup',
    category: 'mockups',
    categoryName: 'Mockups & Products',
    desc: 'Streetwear apparel and fabric mockup showcasing print placement and realistic textile drape.'
  },
  {
    num: 7,
    file: '7.png',
    title: 'Minimalist Clean Device Showcase',
    category: 'mockups',
    categoryName: 'Mockups & Products',
    desc: 'Contemporary minimalist gadget screen mockup for UI/UX applications and website previews.'
  },
  {
    num: 8,
    file: '8.png',
    title: 'DTC Retail Box & Bag Presentation',
    category: 'mockups',
    categoryName: 'Mockups & Products',
    desc: 'E-commerce unboxing experience mockup including custom shipping boxes and retail bags.'
  },
  {
    num: 9,
    file: '9.png',
    title: 'Modern Tech Hardware Mockup',
    category: 'mockups',
    categoryName: 'Mockups & Products',
    desc: 'Cutting-edge electronics and smart device presentation mockup with sleek dark-mode lighting.'
  },
  {
    num: 10,
    file: '10.png',
    title: 'Commercial Editorial & Magazine Layout',
    category: 'mockups',
    categoryName: 'Mockups & Products',
    desc: 'Print publication and editorial spread mockup for lookbooks, portfolios, and catalogues.'
  },
  {
    num: 11,
    file: '11.png',
    title: 'Outdoor & Activewear Apparel Mockup',
    category: 'mockups',
    categoryName: 'Mockups & Products',
    desc: 'Technical sportswear and hoodie mockup demonstrating athletic graphics and brand badge detailing.'
  },
  {
    num: 12,
    file: '12.png',
    title: 'Premium Luxury Packaging Presentation',
    category: 'mockups',
    categoryName: 'Mockups & Products',
    desc: 'High-end embossed packaging and luxury retail box presentation mockup with gold foil accents.'
  }
];

let html = '';
mockupProjects.forEach(p => {
  html += `        <!-- Mockup Post ${p.num} -->
        <div class="post-card-behance" data-category="mockups" data-img="Assets/Mock ups/${p.file}" data-title="${p.title}" data-category-name="${p.categoryName}" data-desc="${p.desc}" data-link="smm-mockup.html">
          <div class="post-card-img-wrap">
            <img src="Assets/Mock ups/${p.file}" alt="${p.title}" loading="lazy" />
            <div class="post-card-overlay">
              <div class="glass-play-btn"><i class="fas fa-magnifying-glass-plus"></i></div>
            </div>
          </div>
          <div class="post-card-info">
            <span class="post-card-category">MOCKUPS &amp; PRODUCTS</span>
            <h3 class="post-card-title">${p.title}</h3>
          </div>
        </div>\n\n`;
});

fs.writeFileSync('scratch/mockup_cards.html', html);
console.log('Saved 12 mockup cards to scratch/mockup_cards.html');
