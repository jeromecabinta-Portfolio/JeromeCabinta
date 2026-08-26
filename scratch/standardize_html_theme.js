const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const correctScript = `  <script>
    (function () {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "light") {
        document.body.classList.remove("dark");
      } else {
        document.body.classList.add("dark");
      }
    })();
  </script>`;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  
  // Find any inline script at start of body that checks localStorage theme
  // Example matches:
  // <script>[\s\S]*?localStorage\.getItem\(["']theme["']\)[\s\S]*?<\/script>
  const scriptRegex = /<script>[\s\S]*?localStorage\.getItem\(["']theme["']\)[\s\S]*?<\/script>/;
  
  if (scriptRegex.test(content)) {
    content = content.replace(scriptRegex, correctScript.trim());
    console.log(`Updated inline theme script in ${f}`);
  } else {
    // If no existing theme script, insert right after <body> or <body ...>
    content = content.replace(/<body([^>]*)>/i, `<body$1>\n${correctScript}`);
    console.log(`Inserted inline theme script in ${f}`);
  }

  // Also make sure if themeToggle button exists, it has title and aria-label
  fs.writeFileSync(f, content, 'utf8');
});

console.log('All HTML files standardized!');
