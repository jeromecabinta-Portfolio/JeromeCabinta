const fs = require('fs');
const path = require('path');

// ========================================================
// 1. UPDATE index.html
// ========================================================
const indexPath = path.join(__dirname, '..', 'index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');

// Brand pill tag
indexHtml = indexHtml.replace(
  /<span class="hero-brand-pill-tag">[\s\S]*?<\/span>/,
  '<span class="hero-brand-pill-tag"><i class="fas fa-map-marker-alt"></i> PHILIPPINES &bull; AVAILABLE FOR US REMOTE HOURS (EST / PST)</span>'
);

// Hero value statement hook
const oldHeroValueStatement = `<p class="hero-value-statement">
              I am a Social Media Manager and Graphic Designer with 3+ years of professional experience in the Philippines, specializing in social media content creation, graphic design, branding, marketing campaigns, and website design. I help organizations strengthen their online presence through engaging visual content, consistent branding, and strategic content planning.
            </p>`;

const newHeroValueStatement = `<p class="hero-value-statement">
              I am a <strong>Social Media VA and Graphic Designer</strong> with 3+ years of hands-on professional experience in the Philippines. I help busy business owners, founders, and marketing teams save 10+ hours a week by taking full ownership of their social media execution—creating scroll-stopping Canva graphics, organizing content calendars, and scheduling posts consistently on US remote hours (EST/PST).
            </p>`;

if (indexHtml.includes(oldHeroValueStatement)) {
  indexHtml = indexHtml.replace(oldHeroValueStatement, newHeroValueStatement);
  console.log('Updated hero-value-statement with client hook.');
} else {
  console.log('Warning: oldHeroValueStatement not found');
}

// Hero floating badge
indexHtml = indexHtml.replace(
  /<div class="hero-badge-title">AVAILABLE FOR US REMOTE \(EST \/ PST\)<\/div>/,
  '<div class="hero-badge-title">PHILIPPINES BASED &bull; US HOURS (EST/PST)</div>'
);

// About section subtitle
indexHtml = indexHtml.replace(
  /<span class="behance-subtitle-lime" style="margin-bottom: 14px;">Social Media Manager &amp; Graphic\s+Designer\s+&bull; 3\+ Years Experience &bull; DTC &amp; Lifestyle Brands &bull; Available for US Remote<\/span>/,
  '<span class="behance-subtitle-lime" style="margin-bottom: 14px;">Social Media VA &amp; Graphic Designer &bull; 3+ Years Professional Experience in the Philippines &bull; Dedicated to US Remote Hours (EST / PST)</span>'
);

// About 5 paragraphs
const oldAboutP1 = `<p class="about-story-p">
              I am a <strong>Social Media Manager and Graphic Designer</strong> with 3+ years of professional experience in the Philippines, specializing in social media content creation, graphic design, branding, marketing campaigns, and website design. I help organizations strengthen their online presence through engaging visual content, consistent branding, and strategic content planning.
            </p>`;

const newAboutP1 = `<p class="about-story-p">
              I am a <strong>Social Media VA and Graphic Designer</strong> with 3+ years of hands-on professional experience in the Philippines. I specialize in turning ideas into high-engagement social media content, eye-catching Canva graphics, and organized posting schedules that help businesses stay top-of-mind without the stress of daily content management.
            </p>`;

indexHtml = indexHtml.replace(oldAboutP1, newAboutP1);

const oldAboutP2 = `<p class="about-story-p">
              At <strong>Agape Reaching People Ministries (2024–2026)</strong>, I created social media content, managed content calendars, and supported audience engagement through consistent content strategies and campaigns.
            </p>`;

const newAboutP2 = `<p class="about-story-p">
              At <strong>Agape Reaching People Ministries (2024–2026)</strong> in the Philippines, I managed weekly content calendars, created engaging visual assets, and helped grow social media engagement by an estimated <strong>20%</strong> through consistent, structured posting strategies.
            </p>`;

indexHtml = indexHtml.replace(oldAboutP2, newAboutP2);

const oldAboutP3 = `<p class="about-story-p">
              Previously, I worked as <strong>Marketing Head, Web Designer &amp; Graphic Designer</strong> at <strong>Northridge Institute of Business and Technology (2021–2024)</strong>, where I supported marketing initiatives, designed promotional materials, and developed responsive Wix websites to improve brand presentation and user experience.
            </p>`;

const newAboutP3 = `<p class="about-story-p">
              Previously at <strong>Northridge Institute of Business and Technology (2021–2024)</strong> in the Philippines as Marketing Head, Web Designer &amp; Graphic Designer, I supported marketing initiatives, designed promotional materials, and developed <strong>2+ responsive Wix websites</strong> to improve brand presentation and user experience.
            </p>`;

indexHtml = indexHtml.replace(oldAboutP3, newAboutP3);

const oldAboutP5 = `<p class="about-story-p">
              Although my professional experience has been based in the Philippines, I am eager to expand my experience by working with US-based clients, learning their brand standards and workflows, and adapting to their needs. I value clear communication, constructive feedback, teamwork, and continuous improvement. I am open to full-time remote opportunities and willing to learn new tools and processes as needed.
            </p>`;

const newAboutP5 = `<p class="about-story-p">
              While my professional foundation was built working with organizations in the Philippines, I am dedicated to supporting US-based founders, agencies, and businesses looking for dependable, high-quality remote talent. I work directly on <strong>US remote hours (EST/PST)</strong>, provide clear and transparent communication via Slack and Zoom, and pride myself on being receptive to feedback and quick to adapt to your brand's unique voice and standards.
            </p>`;

indexHtml = indexHtml.replace(oldAboutP5, newAboutP5);

// Work Experience header subtitle and badge
indexHtml = indexHtml.replace(
  `<span class="experience-sub-title">3+ Years Professional Track Record &bull; DTC, Ministry &amp;\n                    Global</span>`,
  `<span class="experience-sub-title">3+ Years Hands-On Experience in the Philippines &bull; Ready for US Remote Collaboration</span>`
);

indexHtml = indexHtml.replace(
  `<span class="experience-badge-count">2 ROLES + US REMOTE</span>`,
  `<span class="experience-badge-count">2 PH ROLES + US TIMEZONE READY</span>`
);

// Work experience Card 1 location
indexHtml = indexHtml.replace(
  `<i class="fas fa-church" style="margin-right: 5px;"></i> Agape Reaching People Ministries`,
  `<i class="fas fa-church" style="margin-right: 5px;"></i> Agape Reaching People Ministries &bull; Benguet, Philippines`
);

// Work experience Card 2 location
indexHtml = indexHtml.replace(
  `<i class="fas fa-building-columns" style="margin-right: 5px;"></i> Northridge Institute of Business\n                  and Technology`,
  `<i class="fas fa-building-columns" style="margin-right: 5px;"></i> Northridge Institute of Business and Technology &bull; Philippines`
);

// Work experience Card 3: Reframe into Client Collaboration & US Remote Hook
const oldCard3 = `<!-- Experience Card 3: US Remote Ready (Resume Additional Information) -->
              <div class="timeline-behance-card timeline-exp-card" style="border-left-color: #00e5ff;">
                <div class="timeline-card-header">
                  <h3 style="font-size: 1.12rem; font-weight: 800; margin: 0;">US Remote &amp; Contract Work</h3>
                  <span class="timeline-year-tag" style="background: rgba(0, 229, 255, 0.15); color: #00e5ff;">ACTIVE /
                    READY</span>
                </div>
                <p style="font-size: 0.88rem; font-weight: 700; color: var(--behance-lime); margin-bottom: 6px;">
                  <i class="fas fa-globe" style="margin-right: 5px;"></i> Available for US Remote Hours (EST / PST)
                </p>
                <ul class="timeline-bullet-list">
                  <li>Open to full-time or contract Social Media Management &amp; Graphic Design</li>
                  <li>Proficient with Slack, Zoom, Google Workspace, and AI creative tools</li>
                  <li>Ready to start with a trial project to demonstrate direct business ROI</li>
                </ul>
              </div>`;

const newCard3 = `<!-- Collaboration Spotlight: How I Support US & Global Clients -->
              <div class="timeline-behance-card timeline-exp-card" style="border-left-color: #00e5ff; background: rgba(0, 229, 255, 0.04);">
                <div class="timeline-card-header">
                  <h3 style="font-size: 1.15rem; font-weight: 800; margin: 0; color: #00e5ff;"><i class="fas fa-handshake" style="margin-right: 6px;"></i> How I Support US &amp; Global Clients</h3>
                  <span class="timeline-year-tag" style="background: rgba(0, 229, 255, 0.15); color: #00e5ff;">US TIMEZONE READY</span>
                </div>
                <p style="font-size: 0.88rem; font-weight: 700; color: var(--behance-lime); margin-bottom: 8px;">
                  <i class="fas fa-clock" style="margin-right: 5px;"></i> Full EST / PST Working Overlap &bull; Proactive Daily Communication
                </p>
                <ul class="timeline-bullet-list">
                  <li><strong>Timezone Alignment:</strong> Fully available to work live on US schedules (EST / PST) for instant Slack messaging and fast turnarounds.</li>
                  <li><strong>Save 10+ Hours Every Week:</strong> Free up your time by letting me handle daily Canva graphics, caption drafts, and cross-platform scheduling.</li>
                  <li><strong>Clear English Communication:</strong> Fast, dependable updates via Slack, Google Meet, Zoom, and Loom video walkthroughs.</li>
                  <li><strong>Low-Risk Onboarding:</strong> Willing to complete a paid trial task so you can experience my design quality and work ethic firsthand before committing.</li>
                </ul>
              </div>`;

if (indexHtml.includes(oldCard3)) {
  indexHtml = indexHtml.replace(oldCard3, newCard3);
  console.log('Replaced Card 3 with high-converting Client Collaboration Hook.');
} else {
  console.log('Warning: oldCard3 exact match not found');
}

fs.writeFileSync(indexPath, indexHtml, 'utf8');
console.log('Updated index.html successfully!');


// ========================================================
// 2. UPDATE resume.html
// ========================================================
const resumePath = path.join(__dirname, '..', 'resume.html');
let resumeHtml = fs.readFileSync(resumePath, 'utf8');

const oldResumeSummary = `<p class="summary-text">
        Social Media VA and Content Specialist with 3+ years of professional experience in the Philippines, specializing in social media content creation, Canva graphic design, content scheduling, and visual branding. Skilled in developing multi-week content calendars, producing engaging promotional and community graphics, managing daily social engagement, and maintaining consistent brand standards. Proficient in Canva, Figma, Adobe Photoshop, Meta Business Suite, Google Workspace, Slack, AI creative tools, and Wix.
      </p>`;

const newResumeSummary = `<p class="summary-text">
        Social Media VA and Content Specialist with 3+ years of hands-on professional experience in the Philippines, helping businesses save time through reliable content creation, Canva graphic design, and social media scheduling. Skilled in building multi-week content calendars, producing high-engagement promotional graphics, and scheduling posts consistently across platforms. Fully available on US remote hours (EST/PST) with clear English communication, proactive daily updates, and high dependability on Slack, Zoom, and Google Workspace.
      </p>`;

if (resumeHtml.includes(oldResumeSummary)) {
  resumeHtml = resumeHtml.replace(oldResumeSummary, newResumeSummary);
  console.log('Updated resume.html summary with client hook.');
}

const oldResumeAddInfo = `<section>
      <h2 class="section-title">ADDITIONAL INFORMATION</h2>
      <ul class="resume-list">
        <li>Available for US remote hours (EST/PST)</li>
        <li>Comfortable with Slack, Zoom, Google Meet</li>
        <li>Open to full-time or contract work; willing to start with a trial project</li>
      </ul>
    </section>`;

const newResumeAddInfo = `<section>
      <h2 class="section-title">REMOTE WORK READINESS &amp; COLLABORATION</h2>
      <ul class="resume-list">
        <li><strong>Philippine Based &bull; US Hours Ready:</strong> Available to work live during EST / PST business hours with fast turnarounds</li>
        <li><strong>Seamless Communication:</strong> Fluent English; proactive daily check-ins via Slack, Zoom, Google Meet, and Loom</li>
        <li><strong>Low-Risk Onboarding:</strong> Open to contract or full-time roles; willing to start with a paid trial task to prove reliability</li>
      </ul>
    </section>`;

if (resumeHtml.includes(oldResumeAddInfo)) {
  resumeHtml = resumeHtml.replace(oldResumeAddInfo, newResumeAddInfo);
  console.log('Updated resume.html additional info with client hook.');
}

fs.writeFileSync(resumePath, resumeHtml, 'utf8');
console.log('Updated resume.html successfully!');


// ========================================================
// 3. UPDATE resume-design.html
// ========================================================
const designResumePath = path.join(__dirname, '..', 'resume-design.html');
let designResumeHtml = fs.readFileSync(designResumePath, 'utf8');

const oldDesignSummary = `<p class="summary-text">
        Versatile Graphic Designer and Web Designer with 3+ years of professional experience in the Philippines, delivering high-impact brand identities, marketing collateral, social media visuals, and responsive client websites. Proficient in Adobe Photoshop, Figma, Canva, and Wix, combining refined visual aesthetics with structured, conversion-driven design hierarchy. Proven track record delivering cohesive brand packages, high-converting promotional assets, and 2+ responsive Wix websites. Available for US remote hours (EST/PST).
      </p>`;

const newDesignSummary = `<p class="summary-text">
        Creative Graphic Designer and Web Designer with 3+ years of professional experience in the Philippines, delivering high-impact visual branding, marketing collateral, social media assets, and responsive client websites. Proficient in Adobe Photoshop, Figma, Canva, and Wix, translating client goals into clean, conversion-focused design. Available on US remote hours (EST/PST) to support marketing teams, agencies, and founders with agency-quality visual assets and dependable turnarounds.
      </p>`;

if (designResumeHtml.includes(oldDesignSummary)) {
  designResumeHtml = designResumeHtml.replace(oldDesignSummary, newDesignSummary);
  console.log('Updated resume-design.html summary with client hook.');
}

const oldDesignAddInfo = `<section>
      <h2 class="section-title">WORK READINESS &amp; COLLABORATION</h2>
      <ul class="resume-list">
        <li>Available for US remote hours (EST / PST schedules)</li>
        <li>Seamless communication via Slack, Zoom, Google Meet &amp; Figma collaboration</li>
        <li>Strong attention to detail, receptive to feedback, and committed to visual quality standards</li>
      </ul>
    </section>`;

const newDesignAddInfo = `<section>
      <h2 class="section-title">REMOTE WORK READINESS &amp; CLIENT COLLABORATION</h2>
      <ul class="resume-list">
        <li><strong>Timezone Alignment:</strong> Available for US remote business hours (EST / PST) for live design reviews and fast turnaround</li>
        <li><strong>Flawless Communication:</strong> Proactive English collaboration via Slack, Zoom, Google Meet, and Figma comments</li>
        <li><strong>Fast &amp; Receptive:</strong> Low-friction onboarding with a focus on quick turnaround times and receptive adaptation to brand guides</li>
      </ul>
    </section>`;

if (designResumeHtml.includes(oldDesignAddInfo)) {
  designResumeHtml = designResumeHtml.replace(oldDesignAddInfo, newDesignAddInfo);
  console.log('Updated resume-design.html additional info with client hook.');
}

fs.writeFileSync(designResumePath, designResumeHtml, 'utf8');
console.log('Updated resume-design.html successfully!');
