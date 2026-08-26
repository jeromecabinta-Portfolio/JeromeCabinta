const fs = require('fs');
const indexHtml = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('style.css', 'utf8');

// Extract all classes from index.html
const classRegex = /class=["']([^"']+)["']/g;
const classes = new Set();
let match;
while ((match = classRegex.exec(indexHtml)) !== null) {
  match[1].split(/\s+/).forEach(c => {
    if (c.trim()) classes.add(c.trim());
  });
}

console.log(`Total unique classes in index.html: ${classes.size}`);

// Check how each class is styled in style.css
const styledClasses = [];
const missingClasses = [];
classes.forEach(c => {
  if (css.includes('.' + c)) {
    styledClasses.push(c);
  } else {
    missingClasses.push(c);
  }
});

console.log(`Classes styled in style.css: ${styledClasses.length}`);
console.log(`Classes missing direct styles (might be utility/font-awesome): ${missingClasses.length}`);
console.log('Sample missing classes (checking if any are our components):', missingClasses.filter(c => !c.startsWith('fa-') && !c.startsWith('fa') && !c.startsWith('fab') && !c.startsWith('fas')).slice(0, 30));
