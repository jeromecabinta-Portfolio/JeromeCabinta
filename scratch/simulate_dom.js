const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const js = fs.readFileSync('script.js', 'utf8');

// Simple DOM mock
const elements = {};
// Extract all IDs from HTML
const idRegex = /id=["']([^"']+)["']/g;
let m;
while ((m = idRegex.exec(html)) !== null) {
  elements[m[1]] = {
    addEventListener: () => {},
    classList: { add: () => {}, remove: () => {}, contains: () => false, toggle: () => {} },
    style: {},
    setAttribute: () => {},
    getAttribute: () => '',
    children: [],
    querySelectorAll: () => [],
    querySelector: () => null,
    innerHTML: '',
    textContent: ''
  };
}

const mockDoc = {
  getElementById: (id) => elements[id] || null,
  querySelector: () => null,
  querySelectorAll: () => [],
  addEventListener: () => {},
  body: { classList: { add: () => {}, remove: () => {} } },
  documentElement: { scrollTop: 0, scrollHeight: 1000, clientHeight: 500 }
};

const mockWin = {
  document: mockDoc,
  addEventListener: () => {},
  localStorage: { getItem: () => null, setItem: () => {} },
  navigator: { clipboard: { writeText: () => Promise.resolve() } },
  requestAnimationFrame: (cb) => cb(),
  setTimeout: (cb) => cb(),
  setInterval: () => 1,
  IntersectionObserver: class { observe() {} unobserve() {} }
};

try {
  const fn = new Function('window', 'document', 'localStorage', 'navigator', 'requestAnimationFrame', 'setTimeout', 'setInterval', 'IntersectionObserver', js);
  fn(mockWin, mockDoc, mockWin.localStorage, mockWin.navigator, mockWin.requestAnimationFrame, mockWin.setTimeout, mockWin.setInterval, mockWin.IntersectionObserver);
  console.log('Mock DOM execution completed successfully with NO uncaught exceptions!');
} catch (e) {
  console.error('CRASH IN script.js:', e);
}
