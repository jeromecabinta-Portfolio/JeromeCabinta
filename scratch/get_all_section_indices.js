const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const heroIdx = html.indexOf('<section id="hero"');
const postsIdx = html.indexOf('<section id="posts"');
const reelsIdx = html.indexOf('<section id="reels"');
const carouselsIdx = html.indexOf('<section id="carousels"');
const aboutIdx = html.indexOf('<section id="about"');
const thumbnailsIdx = html.indexOf('<section id="thumbnails"');
const websitesIdx = html.indexOf('<section id="websites"');
const skillsIdx = html.indexOf('<section id="skills"');
const servicesIdx = html.indexOf('<section id="services"');
const certsIdx = html.indexOf('<section id="certificates"');
const testimonialsIdx = html.indexOf('<section id="testimonials"');
const contactIdx = html.indexOf('<section id="contact"');

console.log({
  heroIdx,
  postsIdx,
  reelsIdx,
  carouselsIdx,
  aboutIdx,
  thumbnailsIdx,
  websitesIdx,
  skillsIdx,
  servicesIdx,
  certsIdx,
  testimonialsIdx,
  contactIdx
});

