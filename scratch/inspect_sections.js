const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const sections = [...html.matchAll(/<section\s+id="([^"]+)"[^>]*>/g)].map(m => ({ id: m[1], index: m.index }));
sections.forEach((s, i) => {
  const next = sections[i + 1] ? sections[i + 1].index : html.length;
  console.log(`Section: #${s.id} (chars ${s.index} - ${next}, length ${next - s.index})`);
});

