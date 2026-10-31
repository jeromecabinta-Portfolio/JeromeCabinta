const fs = require('fs');

const cssRules = `
/* ==========================================================================
   ENHANCED PORTFOLIO SECTIONS (PRIORITY 2, 3, 4 ARCHITECTURE)
   ========================================================================== */

/* 1. FEATURED CASE STUDIES SECTION */
.featured-cs-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-top: 30px;
}

@media (max-width: 900px) {
  .featured-cs-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}

.featured-cs-card {
  background: var(--surface-1);
  border: 1px solid var(--border);
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.4);
}

.featured-cs-card:hover {
  transform: translateY(-6px);
  border-color: var(--accent);
  box-shadow: 0 20px 50px rgba(0, 102, 255, 0.25);
}

.featured-cs-banner {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #000;
}

.featured-cs-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.featured-cs-card:hover .featured-cs-banner img {
  transform: scale(1.04);
}

.featured-cs-tag {
  position: absolute;
  top: 14px;
  left: 14px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 800;
  padding: 5px 12px;
  border-radius: 999px;
  letter-spacing: 0.05em;
  z-index: 2;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.featured-cs-tag.campaign {
  background: #f39200;
  color: #111;
}

.featured-cs-tag.brand {
  background: #c5a059;
  color: #111;
}

.featured-cs-body {
  padding: 28px 24px 24px 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.featured-cs-category {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.featured-cs-title {
  font-size: 1.35rem;
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: 12px;
  color: var(--text);
}

.featured-cs-desc {
  font-size: 0.88rem;
  line-height: 1.6;
  color: var(--text-light);
  margin-bottom: 20px;
}

.featured-cs-highlights {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  border-radius: 14px;
  margin-bottom: 22px;
  font-size: 0.82rem;
  color: var(--text);
}

.featured-cs-highlights div {
  display: flex;
  align-items: center;
  gap: 8px;
}

.featured-cs-cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 22px;
  border-radius: 999px;
  font-size: 0.88rem;
  font-weight: 700;
  text-decoration: none;
  color: #111 !important;
  margin-top: auto;
  transition: all 0.25s ease;
}

.featured-cs-cta-btn:hover {
  transform: translateY(-2px);
  filter: brightness(1.1);
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.4);
}

/* 2. TOP 6 SOCIAL MEDIA WORK SPOTLIGHT */
.top-smm-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 24px;
}

@media (max-width: 1024px) {
  .top-smm-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .top-smm-grid {
    grid-template-columns: 1fr;
  }
}

/* Archive Accordion / Expander */
.archive-expand-box {
  margin-top: 36px;
  text-align: center;
  padding: 24px;
  background: var(--surface-1);
  border: 1px solid var(--border);
  border-radius: 20px;
}

.btn-toggle-archive {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 28px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: 999px;
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-toggle-archive:hover {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
  transform: translateY(-2px);
}

/* 3. WORKFLOW & EXECUTION HUB (CALENDARS, CAPTIONS, SCHEDULING) */
.workflow-section-wrap {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.calendar-preview-card {
  background: var(--surface-1);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 30px;
  overflow: hidden;
}

.calendar-table-responsive {
  width: 100%;
  overflow-x: auto;
  margin-top: 20px;
}

.smm-calendar-table {
  width: 100%;
  min-width: 720px;
  border-collapse: collapse;
  text-align: left;
  font-size: 0.85rem;
}

.smm-calendar-table th {
  background: rgba(0, 102, 255, 0.08);
  color: #00e5ff;
  font-family: var(--font-mono);
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 14px 16px;
  border-bottom: 1px solid var(--border);
}

.smm-calendar-table td {
  padding: 14px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  color: var(--text);
  vertical-align: middle;
}

.smm-calendar-table tr:hover td {
  background: rgba(255, 255, 255, 0.03);
}

.pillar-badge {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  font-family: var(--font-mono);
}

.pillar-badge.inspiration { background: rgba(0, 229, 255, 0.15); color: #00e5ff; border: 1px solid rgba(0, 229, 255, 0.3); }
.pillar-badge.community { background: rgba(0, 255, 136, 0.15); color: #00ff88; border: 1px solid rgba(0, 255, 136, 0.3); }
.pillar-badge.bts { background: rgba(255, 170, 0, 0.15); color: #ffaa00; border: 1px solid rgba(255, 170, 0, 0.3); }
.pillar-badge.education { background: rgba(168, 85, 247, 0.15); color: #c084fc; border: 1px solid rgba(168, 85, 247, 0.3); }

/* Caption & Workflow Grid */
.caption-workflow-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
}

@media (max-width: 900px) {
  .caption-workflow-grid {
    grid-template-columns: 1fr;
  }
}

.caption-anatomy-card {
  background: var(--surface-1);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 28px;
  display: flex;
  flex-direction: column;
}

.caption-anatomy-block {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.caption-part-item {
  padding: 12px 14px;
  background: rgba(255, 255, 255, 0.03);
  border-left: 3px solid #00e5ff;
  border-radius: 0 10px 10px 0;
  font-size: 0.82rem;
  line-height: 1.5;
}

.caption-part-label {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 800;
  color: #00e5ff;
  text-transform: uppercase;
  margin-bottom: 4px;
}

.workflow-steps-box {
  background: var(--surface-1);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.workflow-step-row {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.workflow-step-num {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(0, 229, 255, 0.15);
  border: 1px solid #00e5ff;
  color: #00e5ff;
  font-family: var(--font-mono);
  font-weight: 800;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.workflow-step-text h4 {
  font-size: 0.95rem;
  font-weight: 700;
  margin: 0 0 4px;
  color: var(--text);
}

.workflow-step-text p {
  font-size: 0.82rem;
  color: var(--text-light);
  line-height: 1.45;
  margin: 0;
}

/* 4. ACCOUNTABLE ANALYTICS & REPORTING SECTION */
.analytics-grid-wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 24px;
}

@media (max-width: 1024px) {
  .analytics-grid-wrap {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 550px) {
  .analytics-grid-wrap {
    grid-template-columns: 1fr;
  }
}

.analytics-card {
  background: var(--surface-1);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}

.analytics-card:hover {
  transform: translateY(-4px);
  border-color: #00ff88;
}

.analytics-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(0, 255, 136, 0.12);
  border: 1px solid rgba(0, 255, 136, 0.3);
  color: #00ff88;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  margin-bottom: 16px;
}

.analytics-card h4 {
  font-size: 1rem;
  font-weight: 800;
  margin: 0 0 8px;
  color: var(--text);
}

.analytics-card p {
  font-size: 0.82rem;
  color: var(--text-light);
  line-height: 1.5;
  margin: 0 0 14px;
}

.analytics-formula {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: #00ff88;
  background: rgba(0, 255, 136, 0.08);
  border: 1px solid rgba(0, 255, 136, 0.2);
  padding: 6px 10px;
  border-radius: 8px;
  margin-top: auto;
}

/* 5. EXACT CONTRIBUTION ON WEBSITES */
.exact-contribution-box {
  margin-top: 18px;
  padding: 16px;
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(0, 229, 255, 0.2);
  border-radius: 14px;
  font-size: 0.82rem;
}

.exact-contribution-title {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 800;
  color: #00e5ff;
  text-transform: uppercase;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.exact-contribution-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.exact-contribution-list li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  color: var(--text-light);
  line-height: 1.45;
}

.exact-contribution-list li i {
  color: #00ff88;
  font-size: 0.75rem;
  margin-top: 4px;
  flex-shrink: 0;
}

.exact-contribution-list li strong {
  color: var(--text);
}

/* 6. SECONDARY CREATIVE ARCHIVE SECTION */
.archive-tabs-container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 24px 0 32px 0;
}

.archive-tab-btn {
  padding: 8px 18px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  color: var(--text-light);
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s ease;
}

.archive-tab-btn:hover {
  border-color: var(--accent);
  color: var(--text);
}

.archive-tab-btn.active {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
  box-shadow: 0 4px 14px rgba(0, 102, 255, 0.35);
}
`;

fs.appendFileSync('style.css', cssRules, 'utf8');
console.log('Successfully appended enhanced portfolio CSS to style.css');

