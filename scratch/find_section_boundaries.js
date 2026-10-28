const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

function findTagRange(id) {
  const openTag = `<section id="${id}"`;
  const startIdx = html.indexOf(openTag);
  if (startIdx === -1) {
    console.log(`Could not find ${id}`);
    return null;
  }
  const endTag = '</section>';
  const endIdx = html.indexOf(endTag, startIdx) + endTag.length;
  const startLine = html.slice(0, startIdx).split('\n').length;
  const endLine = html.slice(0, endIdx).split('\n').length;
  console.log(`${id}: startLine=${startLine}, endLine=${endLine}, len=${endIdx - startIdx}`);
  return { id, startIdx, endIdx, startLine, endLine };
}

findTagRange('about');
findTagRange('posts');
findTagRange('reels');
findTagRange('carousels');
findTagRange('thumbnails');
findTagRange('websites');
findTagRange('skills');
