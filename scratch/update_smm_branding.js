const fs = require('fs');

let content = fs.readFileSync('smm-branding.html', 'utf8');

const target = `<a href="agape-case-study.html" class="back-link"><i class="fas fa-arrow-left"></i> Back to SMM Portal</a>`;
const replacement = `<div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 25px;">
            <a href="agape-case-study.html" class="back-link" style="margin-bottom: 0;"><i class="fas fa-arrow-left"></i> Back to SMM Portal</a>
            <a href="case-study-brand-system.html" class="category-tag" style="background: var(--brand-accent); color: #fff; margin-bottom: 0; text-decoration: none;">
                <i class="fas fa-file-alt"></i> View Full Case Study B &bull; Strategy &amp; Brand System
            </a>
        </div>`;

if (content.includes(target)) {
    content = content.replace(target, replacement);
    fs.writeFileSync('smm-branding.html', content, 'utf8');
    console.log('Successfully updated smm-branding.html');
} else {
    console.log('Target not found in smm-branding.html');
}
