const fs = require('fs');

let css = fs.readFileSync('style.css', 'utf8');

// 1. Root variables
const rootOld = `:root {
  --bg: #070d08;
  --surface: #0e1610;
  --surface-1: #121c14;
  --surface-2: #18241b;
  --text: #ffffff;
  --text-light: #9ea9a0;
  --border: rgba(195, 255, 56, 0.16);
  --shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  --radius: 24px;
  --container: 1440px;
  --accent: #c3ff38;
  --agape-orange: #f39200;

  /* Behance 2026 Signature Palette */
  --behance-lime: #c3ff38;
  --behance-lime-hover: #d4ff5e;
  --behance-lime-glow: rgba(195, 255, 56, 0.45);
  --behance-lime-dim: rgba(195, 255, 56, 0.12);
  --behance-blue: #0d52ff;
  --behance-blue-glow: rgba(13, 82, 255, 0.4);
  --canvas-obsidian: #070d08;
  --canvas-obsidian-2: #0e1610;
  --canvas-card: #111a13;
  --canvas-card-hover: #162419;
  --canvas-border: rgba(195, 255, 56, 0.18);
  --canvas-border-hover: rgba(195, 255, 56, 0.5);
  --checkerboard-c1: #ffffff;
  --checkerboard-c2: #e4e8ed;

  /* Typography */
  --font-condensed: 'Bebas Neue', 'Syne', sans-serif;
  --font-display: 'Syne', 'Plus Jakarta Sans', sans-serif;
  --font-body: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'Space Mono', monospace;
}`;

const rootNew = `:root {
  --bg: #0b0908;
  --surface: #110f0d;
  --surface-1: #171411;
  --surface-2: #1f1a16;
  --text: #ffffff;
  --text-light: #a8a29e;
  --border: rgba(249, 158, 26, 0.18);
  --shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  --radius: 24px;
  --container: 1440px;
  --accent: #f99e1a;
  --accent-gradient: linear-gradient(135deg, #fcb117 0%, #f88e1e 50%, #f47b20 100%);
  --agape-orange: #f39200;

  /* Brand Signature Palette - Radiant Golden Amber & Warm Sunset Orange */
  --behance-lime: #f99e1a;
  --behance-lime-hover: #ffb42e;
  --behance-lime-glow: rgba(249, 158, 26, 0.45);
  --behance-lime-dim: rgba(249, 158, 26, 0.14);
  --behance-blue: #0d52ff;
  --behance-blue-glow: rgba(13, 82, 255, 0.4);
  --canvas-obsidian: #0b0908;
  --canvas-obsidian-2: #110f0d;
  --canvas-card: #14110e;
  --canvas-card-hover: #1c1813;
  --canvas-border: rgba(249, 158, 26, 0.18);
  --canvas-border-hover: rgba(249, 158, 26, 0.5);
  --checkerboard-c1: #ffffff;
  --checkerboard-c2: #e4e8ed;

  /* Typography */
  --font-condensed: 'Bebas Neue', 'Syne', sans-serif;
  --font-display: 'Syne', 'Plus Jakarta Sans', sans-serif;
  --font-body: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'Space Mono', monospace;
}`;

css = css.replace(rootOld, rootNew);

const darkOld = `body.dark {
  --bg: #070d08;
  --surface: #0e1610;
  --surface-1: #121c14;
  --surface-2: #18241b;
  --text: #ffffff;
  --text-light: #9ea9a0;
  --border: rgba(195, 255, 56, 0.16);
  --shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
  --canvas-obsidian: #070d08;
  --canvas-obsidian-2: #0e1610;
  --canvas-card: #111a13;
  --canvas-card-hover: #162419;
  --canvas-border: rgba(195, 255, 56, 0.18);
  --canvas-border-hover: rgba(195, 255, 56, 0.5);
  --behance-lime: #c3ff38;
  --behance-lime-hover: #d4ff5e;
  --behance-lime-glow: rgba(195, 255, 56, 0.45);
  --behance-lime-dim: rgba(195, 255, 56, 0.12);
}`;

const darkNew = `body.dark {
  --bg: #0b0908;
  --surface: #110f0d;
  --surface-1: #171411;
  --surface-2: #1f1a16;
  --text: #ffffff;
  --text-light: #a8a29e;
  --border: rgba(249, 158, 26, 0.18);
  --shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
  --canvas-obsidian: #0b0908;
  --canvas-obsidian-2: #110f0d;
  --canvas-card: #14110e;
  --canvas-card-hover: #1c1813;
  --canvas-border: rgba(249, 158, 26, 0.18);
  --canvas-border-hover: rgba(249, 158, 26, 0.5);
  --behance-lime: #f99e1a;
  --behance-lime-hover: #ffb42e;
  --behance-lime-glow: rgba(249, 158, 26, 0.45);
  --behance-lime-dim: rgba(249, 158, 26, 0.14);
}`;

css = css.replace(darkOld, darkNew);

const lightOld = `body:not(.dark) {
  --bg: #f5f8f5;
  --surface: #ffffff;
  --surface-1: #edf3ed;
  --surface-2: #e1eae1;
  --text: #0d150e;
  --text-light: #4c5d50;
  --border: rgba(13, 21, 14, 0.12);
  --shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  --canvas-obsidian: #f5f8f5;
  --canvas-obsidian-2: #edf3ed;
  --canvas-card: #ffffff;
  --canvas-card-hover: #f0f6f0;
  --canvas-border: rgba(13, 21, 14, 0.12);
  --canvas-border-hover: rgba(13, 82, 255, 0.45);
  --behance-lime: #0e8c00;
  --behance-lime-hover: #0a6d00;
  --behance-lime-glow: rgba(14, 140, 0, 0.3);
  --behance-lime-dim: rgba(14, 140, 0, 0.1);
}`;

const lightNew = `body:not(.dark) {
  --bg: #faf8f5;
  --surface: #ffffff;
  --surface-1: #f5efe8;
  --surface-2: #ebdccf;
  --text: #181512;
  --text-light: #635c55;
  --border: rgba(24, 21, 18, 0.12);
  --shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  --canvas-obsidian: #faf8f5;
  --canvas-obsidian-2: #f5efe8;
  --canvas-card: #ffffff;
  --canvas-card-hover: #fcf9f5;
  --canvas-border: rgba(24, 21, 18, 0.12);
  --canvas-border-hover: rgba(217, 98, 0, 0.45);
  --behance-lime: #d96200;
  --behance-lime-hover: #b84e00;
  --behance-lime-glow: rgba(217, 98, 0, 0.3);
  --behance-lime-dim: rgba(217, 98, 0, 0.1);
}`;

css = css.replace(lightOld, lightNew);

// Specific replacements:
css = css.replace(`linear-gradient(to right, #c3ff38, #417dfc)`, `linear-gradient(to right, #fcb117, #f88e1e, #f47b20)`);
css = css.replace(`background: rgba(14, 22, 16, 0.95);`, `background: rgba(17, 15, 13, 0.95);`);
css = css.replace(`background: rgba(14, 22, 16, 0.95);`, `background: rgba(17, 15, 13, 0.95);`); // 2nd occurrence for caret
css = css.replace(`box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), 0 0 20px rgba(195, 255, 56, 0.12);`, `box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), 0 0 20px rgba(249, 158, 26, 0.14);`);
css = css.replace(`border: 1px solid rgba(13, 21, 14, 0.12);`, `border: 1px solid rgba(24, 21, 18, 0.12);`);
css = css.replace(`border-left: 1px solid rgba(13, 21, 14, 0.12);`, `border-left: 1px solid rgba(24, 21, 18, 0.12);`);
css = css.replace(`border-top: 1px solid rgba(13, 21, 14, 0.12);`, `border-top: 1px solid rgba(24, 21, 18, 0.12);`);
css = css.replace(`background: rgba(195, 255, 56, 0.12);`, `background: rgba(249, 158, 26, 0.14);`);
css = css.replace(`background: rgba(14, 140, 0, 0.08);`, `background: rgba(217, 98, 0, 0.08);`);
css = css.replace(`box-shadow: 0 6px 20px rgba(195, 255, 56, 0.35);`, `box-shadow: 0 6px 20px rgba(249, 158, 26, 0.35);`);

css = css.replace(`radial-gradient(rgba(195, 255, 56, 0.14) 1.2px, transparent 1.2px)`, `radial-gradient(rgba(249, 158, 26, 0.14) 1.2px, transparent 1.2px)`);
css = css.replace(`radial-gradient(rgba(14, 140, 0, 0.1) 1.2px, transparent 1.2px)`, `radial-gradient(rgba(217, 98, 0, 0.1) 1.2px, transparent 1.2px)`);

css = css.replace(`color: #0c120e;`, `color: #181512;`);
css = css.replace(`background-color: #121914;`, `background-color: #14110e;`);
css = css.replaceAll(`#18221b`, `#1c1813`);
css = css.replace(`border: 1px solid rgba(195, 255, 56, 0.2);`, `border: 1px solid rgba(249, 158, 26, 0.2);`);

css = css.replace(`color: #0c120e;`, `color: #181512;`);
css = css.replace(`color: #1e7e00;`, `color: #d96200;`);

css = css.replace(`background: rgba(195, 255, 56, 0.08);`, `background: rgba(249, 158, 26, 0.1);`);
css = css.replace(`border: 1px solid rgba(195, 255, 56, 0.3);`, `border: 1px solid rgba(249, 158, 26, 0.3);`);

css = css.replace(`text-shadow: 0 0 30px rgba(195, 255, 56, 0.35);`, `text-shadow: 0 0 30px rgba(249, 158, 26, 0.35);`);
css = css.replace(`box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4), 0 0 15px rgba(195, 255, 56, 0.15);`, `box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4), 0 0 15px rgba(249, 158, 26, 0.18);`);

css = css.replace(`background: rgba(10, 16, 11, 0.88);`, `background: rgba(14, 12, 10, 0.88);`);
css = css.replace(`border: 1px solid rgba(195, 255, 56, 0.3);`, `border: 1px solid rgba(249, 158, 26, 0.3);`);
css = css.replace(`border: 1px solid rgba(13, 21, 14, 0.14);`, `border: 1px solid rgba(24, 21, 18, 0.14);`);
css = css.replace(`color: #0d150e;`, `color: #181512;`);
css = css.replace(`color: #0e8c00;`, `color: #d96200;`);
css = css.replace(`background: rgba(14, 140, 0, 0.08);`, `background: rgba(217, 98, 0, 0.08);`);
css = css.replace(`border: 1px solid rgba(14, 140, 0, 0.22);`, `border: 1px solid rgba(217, 98, 0, 0.22);`);
css = css.replace(`color: #0d150e;`, `color: #181512;`);
css = css.replace(`color: #0e8c00;`, `color: #d96200;`);

css = css.replace(`box-shadow: 0 0 0 0 rgba(195, 255, 56, 0.7);`, `box-shadow: 0 0 0 0 rgba(249, 158, 26, 0.7);`);
css = css.replace(`box-shadow: 0 0 0 8px rgba(195, 255, 56, 0);`, `box-shadow: 0 0 0 8px rgba(249, 158, 26, 0);`);
css = css.replace(`box-shadow: 0 0 0 0 rgba(195, 255, 56, 0);`, `box-shadow: 0 0 0 0 rgba(249, 158, 26, 0);`);

css = css.replace(`background: rgba(18, 28, 20, 0.8);`, `background: rgba(23, 20, 17, 0.85);`);
css = css.replace(`border: 1px solid rgba(195, 255, 56, 0.15);`, `border: 1px solid rgba(249, 158, 26, 0.15);`);
css = css.replace(`background: rgba(195, 255, 56, 0.25);`, `background: rgba(249, 158, 26, 0.25);`);
css = css.replace(`background: #111b13;`, `background: #171411;`);
css = css.replace(`border: 1px solid rgba(195, 255, 56, 0.18);`, `border: 1px solid rgba(249, 158, 26, 0.18);`);

css = css.replace(`box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(195, 255, 56, 0.2);`, `box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(249, 158, 26, 0.2);`);
css = css.replaceAll(`#080d09`, `#0f0d0a`);
css = css.replace(`background: rgba(7, 13, 8, 0.7);`, `background: rgba(11, 9, 8, 0.7);`);

css = css.replace(`box-shadow: 0 20px 45px rgba(0, 0, 0, 0.6), 0 0 25px rgba(195, 255, 56, 0.25);`, `box-shadow: 0 20px 45px rgba(0, 0, 0, 0.6), 0 0 25px rgba(249, 158, 26, 0.25);`);
css = css.replaceAll(`#0a0f0b`, `#0f0d0a`);
css = css.replace(`background: rgba(195, 255, 56, 0.1);`, `background: rgba(249, 158, 26, 0.1);`);
css = css.replace(`border: 1px solid rgba(195, 255, 56, 0.25);`, `border: 1px solid rgba(249, 158, 26, 0.25);`);

css = css.replace(`background: rgba(195, 255, 56, 0.1);`, `background: rgba(249, 158, 26, 0.1);`);
css = css.replace(`border: 1px solid rgba(195, 255, 56, 0.25);`, `border: 1px solid rgba(249, 158, 26, 0.25);`);
css = css.replaceAll(`#090e0a`, `#0f0d0a`);
css = css.replaceAll(`--behance-lime, #c3ff38`, `var(--behance-lime)`);

css = css.replace(`box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(195, 255, 56, 0.2);`, `box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(249, 158, 26, 0.2);`);
css = css.replace(`box-shadow: 0 18px 45px rgba(0, 0, 0, 0.5), 0 0 22px rgba(195, 255, 56, 0.2);`, `box-shadow: 0 18px 45px rgba(0, 0, 0, 0.5), 0 0 22px rgba(249, 158, 26, 0.2);`);
css = css.replace(`box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), 0 0 25px rgba(195, 255, 56, 0.3);`, `box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), 0 0 25px rgba(249, 158, 26, 0.3);`);

css = css.replace(`box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(195, 255, 56, 0.15);`, `box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(249, 158, 26, 0.15);`);
css = css.replace(`background: rgba(195, 255, 56, 0.08);`, `background: rgba(249, 158, 26, 0.1);`);
css = css.replace(`border: 1px solid rgba(195, 255, 56, 0.18);`, `border: 1px solid rgba(249, 158, 26, 0.2);`);

css = css.replace(`background: rgba(195, 255, 56, 0.12);`, `background: rgba(249, 158, 26, 0.12);`);
css = css.replace(`box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5), 0 0 20px rgba(195, 255, 56, 0.2);`, `box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5), 0 0 20px rgba(249, 158, 26, 0.2);`);
css = css.replace(`box-shadow: 0 0 16px rgba(195, 255, 56, 0.2);`, `box-shadow: 0 0 16px rgba(249, 158, 26, 0.2);`);
css = css.replaceAll(`#152217`, `#1a1510`);

css = css.replace(`border-color: rgba(195, 255, 56, 0.4);`, `border-color: rgba(249, 158, 26, 0.4);`);
css = css.replace(`box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 25px rgba(195, 255, 56, 0.1);`, `box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 25px rgba(249, 158, 26, 0.1);`);
css = css.replace(`box-shadow: 0 14px 35px rgba(0, 0, 0, 0.6), 0 0 20px rgba(195, 255, 56, 0.25);`, `box-shadow: 0 14px 35px rgba(0, 0, 0, 0.6), 0 0 20px rgba(249, 158, 26, 0.25);`);
css = css.replaceAll(`#142017`, `#1a1510`);
css = css.replaceAll(`background: rgba(195, 255, 56, 0.14);`, `background: rgba(249, 158, 26, 0.14);`);

css = css.replace(`border-color: rgba(195, 255, 56, 0.5);`, `border-color: rgba(249, 158, 26, 0.5);`);

fs.writeFileSync('style.css', css);
console.log('style.css successfully updated!');

// Update index.html line with #070d08
let idx = fs.readFileSync('index.html', 'utf8');
idx = idx.replaceAll(`background: #070d08;`, `background: #0b0908;`);
fs.writeFileSync('index.html', idx);
console.log('index.html successfully updated!');
