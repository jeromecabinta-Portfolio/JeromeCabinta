const fs = require('fs');

const titles = [
  'In Christ — Sunday Service (April 26)',
  'In Christ — John 3:16 (April 19)',
  'Join Us Worship Services (May 2-3)',
  'Worship With Us (May 23-24)',
  'Worship With Us (May 30-31)',
  'Sunday Worship Invitation',
  'Youth & Family Fellowship',
  'Midweek Prayer & Study',
  'Ministry Outreach Event',
  'Worship & Fellowship Poster',
  'Grace & Truth Sermon Series',
  'Kingdom Living Gathering',
  'Faith & Community Assembly',
  'Praise & Thanksgiving Night',
  'Spiritual Renewal Weekend',
  'Sunday Celebration Service',
  'Living Hope Ministry Campaign',
  'Discipleship & Leadership Night',
  'Harvest & Blessing Service',
  'Gospel Outreach Campaign',
  'Family & Faith Sunday',
  'Youth Ministry Night',
  'Community Thanksgiving Poster',
  'Weekend Revival Service',
  'Prayer & Fasting Gathering',
  'Sunday Praise & Worship',
  'Biblical Foundation Series',
  'Cross & Resurrection Banner',
  'Walking by Faith Assembly',
  'Grace Revealed Ministry Ad',
  'Annual Church Jubilee Poster',
  'Divine Fellowship Gathering'
];

let html = '';
for (let i = 1; i <= 32; i++) {
  const t = titles[i - 1] || ('Church Ad Project #' + i);
  html += `        <!-- Church Ad ${i} -->
        <div class="post-card-behance" data-category="event-ads" data-img="Assets/Social Media Ads/calvary baptist church/${i}.png" data-title="${t}" data-category-name="Event &amp; Church Ads" data-desc="Official social media ad design for community outreach, ministry campaigns, and worship services." data-link="social-media-ads.html">
          <div class="post-card-img-wrap">
            <img src="Assets/Social Media Ads/calvary baptist church/${i}.png" alt="${t}" loading="lazy" />
            <div class="post-card-overlay">
              <div class="glass-play-btn"><i class="fas fa-magnifying-glass-plus"></i></div>
            </div>
          </div>
          <div class="post-card-info">
            <span class="post-card-category">EVENT &amp; CHURCH ADS</span>
            <h3 class="post-card-title">${t}</h3>
          </div>
        </div>\n\n`;
}

fs.writeFileSync('scratch/church_cards.html', html);
console.log('Saved 32 church cards to scratch/church_cards.html');
