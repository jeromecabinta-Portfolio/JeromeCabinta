const fs = require('fs');
const path = require('path');

function checkFile(htmlFile) {
  console.log('=== Checking', htmlFile, '===');
  const html = fs.readFileSync(htmlFile, 'utf8');
  
  // Check img src
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/g;
  let m;
  const missingImages = [];
  while ((m = imgRegex.exec(html)) !== null) {
    const src = m[1].split('?')[0];
    if (!src.startsWith('http') && !src.startsWith('data:') && !src.startsWith('#') && src !== '') {
      if (!fs.existsSync(src)) {
        missingImages.push(src);
      }
    }
  }
  console.log('Missing images:', missingImages);

  // Check link href
  const linkRegex = /<link[^>]+href=["']([^"']+)["']/g;
  const missingLinks = [];
  while ((m = linkRegex.exec(html)) !== null) {
    const href = m[1].split('?')[0];
    if (!href.startsWith('http') && !href.startsWith('data:') && !href.startsWith('#') && href !== '') {
      if (!fs.existsSync(href)) {
        missingLinks.push(href);
      }
    }
  }
  console.log('Missing stylesheet/links:', missingLinks);

  // Check local a href
  const aRegex = /<a[^>]+href=["']([^"']+)["']/g;
  const missingPages = [];
  while ((m = aRegex.exec(html)) !== null) {
    const href = m[1].split('?')[0];
    if (!href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('tel:') && !href.startsWith('#') && !href.startsWith('data:') && href !== '') {
      if (!fs.existsSync(href)) {
        missingPages.push(href);
      }
    }
  }
  console.log('Missing local page links:', missingPages);

  // Check data-img
  const dataImgRegex = /data-img=["']([^"']+)["']/g;
  const missingDataImgs = [];
  while ((m = dataImgRegex.exec(html)) !== null) {
    const src = m[1].split('?')[0];
    if (!src.startsWith('http') && !src.startsWith('data:') && src !== '') {
      if (!fs.existsSync(src)) {
        missingDataImgs.push(src);
      }
    }
  }
  console.log('Missing data-img references:', missingDataImgs);
}

checkFile('index.html');
checkFile('resume.html');
checkFile('story.html');
