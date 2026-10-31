const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const regex = /<!-- Brand Campaign Post \d+ -->[\s\S]*?(?=(?:<!-- Brand Campaign Post \d+ -->|<!-- Church Ad 1 -->))/g;
const brandCampaigns = html.match(regex);
console.log('Total brand campaigns matched:', brandCampaigns ? brandCampaigns.length : 0);

