const fs = require('fs');

const html = fs.readFileSync('case-study-campaign.html', 'utf8');
const matches = [...html.matchAll(/<!-- Post \d+ -->[\s\S]*?<img src="([^"]+)"[\s\S]*?<h3 class="cs-post-title">([\s\S]*?)<\/h3>/g)];
matches.forEach((m, i) => {
  console.log(`Post ${i + 1}: ${m[2].trim()} | Img: ${m[1]}`);
});
