/**
 * Nikhil Bonigala - Portfolio Reactive Interactivity Engine
 * =========================================================
 * Full dynamic reactivity:
 * 1. Direct Resume PDF Download triggers across all buttons
 * 2. Web Audio API Morse Code Synthesizer with Optical Strobe
 * 3. Interactive RIDEX Real-Time Ride Dispatch Simulator
 * 4. Interactive Quantitative Stock ML Timeframe Engine
 * 5. Interactive DaVinci Resolve Color Grade Split-Screen
 * 6. Interactive Hero Ambient Particle Mesh Canvas
 * 7. Spotlight Mouse Coordinates Follower on Cards
 * 8. Dynamic Filter Tabs with Item Count Badges
 * 9. Certificate Verification Inspector with 1-Click Code Copy
 * 10. Lightbox with EXIF metadata & Case Study Modal Dialog
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.portfolioData || {};
  const certsData = window.certificationsData || { items: [] };
  const videoEditingData = window.videoEditingData || { items: [] };
  const cinematographyData = window.cinematographyData || { items: [] };
  const photographyData = window.photographyData || { items: [] };

  // ==========================================
  // 1. DYNAMIC DATA HYDRATION & RENDERING
  // ==========================================
  initPersonalData(data.personal);
  initMetrics(data.metrics);
  initProjects(data.projects);
  initCertifications(certsData);
  initAchievements(data.achievements);
  initVideoEditing(videoEditingData);
  initCinematography(cinematographyData);
  initPhotography(photographyData);
  initSkills(data.skills);
  initExperience(data.experience);
  initServices(data.services);

  // ==========================================
  // 2. CORE NAVIGATION & REACTIVE SHELL
  // ==========================================
  initNavigation();
  initMobileDrawer();
  initHeroEmailCapsule();
  initTimezoneTicker();
  initHeroParticleCanvas();
  initSpotlightFollower();

  // ==========================================
  // 3. DIRECT RESUME DOWNLOAD ENGINE
  // ==========================================
  initResumeDownloadEngine(data.personal?.resumeDownloadUrl);

  // ==========================================
  // 4. INTERACTIVE SIMULATORS & PLAYGROUNDS
  // ==========================================
  initProjectFiltering(data.projects);
  initCaseStudyModal(data.projects);
  initPhotographyLightbox(photographyData.items || []);
  initEmailCopy(data.personal?.email);
  initContactForm();
  initCertVerificationInspector(certsData.items || []);

  // ==========================================
  // 5. CINEMATIC SCROLL-CONTROLLED BACKGROUND VIDEO
  // ==========================================
  initScrollVideoBackground();
});

/* ==========================================
   RESUME DOWNLOAD ENGINE (ALWAYS LATEST VERSION)
   ========================================== */
function initResumeDownloadEngine(resumeUrl) {
  const rawUrl = resumeUrl || (typeof portfolioData !== 'undefined' && portfolioData.personal?.resumeDownloadUrl) || 'assets/docs/Nikhil_Bonigala_Resume.pdf';
  const downloadTriggers = document.querySelectorAll('[data-action="download-resume"], .btn-header-resume, .btn-download-resume');

  // Convert Google Drive view or sharing links to direct download links if user configured Drive
  function getDirectDownloadUrl(url) {
    if (!url) return 'assets/docs/Nikhil_Bonigala_Resume.pdf?t=' + Date.now();
    
    // Google Drive share link -> direct export/download URL
    const gDriveMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (gDriveMatch && gDriveMatch[1]) {
      return `https://drive.google.com/uc?export=download&id=${gDriveMatch[1]}`;
    }

    // Google Docs link -> direct PDF export
    const gDocsMatch = url.match(/\/document\/d\/([a-zA-Z0-9_-]+)/);
    if (gDocsMatch && gDocsMatch[1]) {
      return `https://docs.google.com/document/d/${gDocsMatch[1]}/export?format=pdf`;
    }

    // Local / static file -> append dynamic timestamp to bypass browser cache
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}_t=${Date.now()}`;
  }

  downloadTriggers.forEach(btn => {
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener noreferrer');

    btn.addEventListener('click', (e) => {
      e.preventDefault();

      // Always generate fresh URL with current timestamp or direct cloud sync
      const freshUrl = getDirectDownloadUrl(rawUrl);

      showToast('Fetching latest resume version...');

      // Trigger immediate download without relying on stale cached file
      const link = document.createElement('a');
      link.href = freshUrl;
      link.download = 'Nikhil_Bonigala_Resume.pdf';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        if (link.parentNode) link.parentNode.removeChild(link);
      }, 300);
    });
  });
}

/* ==========================================
   PERSONAL BRANDING HYDRATION
   ========================================== */
function initPersonalData(personal) {
  if (!personal) return;

  document.querySelectorAll('[data-bind="email"]').forEach(el => {
    el.textContent = personal.email;
    if (el.tagName === 'A') el.href = `mailto:${personal.email}`;
  });

  document.querySelectorAll('[data-bind="phone"]').forEach(el => {
    el.textContent = personal.phone;
    if (el.tagName === 'A') el.href = `tel:${personal.phone.replace(/[^0-9+]/g, '')}`;
  });

  document.querySelectorAll('[data-bind="github"]').forEach(link => { link.href = personal.github; });
  document.querySelectorAll('[data-bind="linkedin"]').forEach(link => { link.href = personal.linkedin; });
}

/* ==========================================
   METRICS BANNER
   ========================================== */
function initMetrics(metrics) {
  const container = document.getElementById('metricsContainer');
  if (!container || !metrics || !metrics.length) return;

  container.innerHTML = metrics.map(m => `
    <div class="metric-card spotlight-target">
      <div class="metric-value">${escapeHtml(m.value)}</div>
      <div class="metric-label">${escapeHtml(m.label)}</div>
      <div class="metric-subtext">${escapeHtml(m.subtext)}</div>
    </div>
  `).join('');
}

/* ==========================================
   PROJECTS SECTION & CARDS
   ========================================== */
function initProjects(projects) {
  const grid = document.getElementById('projectsGrid');
  if (!grid || !projects || !projects.length) return;

  grid.innerHTML = projects.map(proj => {
    let interactivePill = '';
    if (proj.id === 'text-to-morse-engine') {
      interactivePill = `<button class="btn-interactive-pill" data-action="launch-morse-synth"><span>🔊 Live Morse Audio Synth</span></button>`;
    } else if (proj.id === 'ridex-bike-taxi') {
      interactivePill = `<button class="btn-interactive-pill" data-action="launch-ridex-sim"><span>⚡ Live Ride Simulator</span></button>`;
    } else if (proj.id === 'stock-market-prediction-ml') {
      interactivePill = `<button class="btn-interactive-pill" data-action="launch-stock-sim"><span>📈 Live Strategy Backtester</span></button>`;
    } else if (proj.id === 'cinematic-brand-film') {
      interactivePill = `<button class="btn-interactive-pill" data-action="launch-grade-toggle"><span>🎨 Toggle Color Grade</span></button>`;
    }

    return `
      <article class="project-card spotlight-target" data-category="${escapeHtml(proj.category)}" data-id="${escapeHtml(proj.id)}">
        <div class="project-thumbnail-wrapper" id="thumb-${escapeHtml(proj.id)}">
          <img src="${escapeHtml(proj.thumbnail)}" alt="${escapeHtml(proj.title)}" loading="lazy">
          <span class="project-badge-overlay">${escapeHtml(proj.badge || proj.categoryLabel)}</span>
          <span class="project-year-overlay">${escapeHtml(proj.year)}</span>
        </div>
        <div class="project-body">
          <div class="project-category-tag">${escapeHtml(proj.categoryLabel)}</div>
          <h3 class="project-title">${escapeHtml(proj.title)}</h3>
          <p class="project-description">${escapeHtml(proj.shortDescription)}</p>
          
          ${interactivePill ? `<div class="card-interactive-action-box">${interactivePill}</div>` : ''}

          <div class="project-tech-tags">
            ${(proj.tags || []).map(tag => `<span class="tech-tag">${escapeHtml(tag)}</span>`).join('')}
          </div>
          
          <div class="project-footer">
            <button class="btn-case-study" data-action="open-case-study" data-project-id="${escapeHtml(proj.id)}" aria-label="View case study for ${escapeHtml(proj.title)}">
              <span>Explore Case Study</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
            
            <div class="project-external-links">
              ${proj.githubUrl ? `
                <a href="${escapeHtml(proj.githubUrl)}" target="_blank" rel="noopener noreferrer" class="icon-btn-link" title="View Source on GitHub" aria-label="GitHub Repository">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/* ==========================================
   CERTIFICATIONS SECTION
   ========================================== */
function initCertifications(certsData) {
  const container = document.getElementById('certGrid');
  const vaultBtn = document.getElementById('certificationsVaultBtn');
  
  if (vaultBtn && certsData?.driveVaultUrl) {
    vaultBtn.href = certsData.driveVaultUrl;
  }

  if (!container) return;

  const items = (certsData?.items || []).filter(c => c.featured !== false);

  if (!items.length) {
    const driveUrl = certsData?.driveVaultUrl || '#';
    container.innerHTML = `
      <div class="vault-empty-card cert-vault-card spotlight-target" style="grid-column: 1 / -1;">
        <div class="vault-empty-icon cert-vault-icon">📜</div>
        <div class="vault-empty-content">
          <div class="vault-tag cert-tag">Credentials Archive</div>
          <h3>Verified Credentials in Google Drive</h3>
          <p>Accredited technical certifications, virtual internship evaluations, and verified completion credentials are consolidated in master PDF resolution within the Google Drive vault.</p>
          <a href="${escapeHtml(driveUrl)}" target="_blank" rel="noopener noreferrer" class="btn-vault-cta cert-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
            <span>Open Credentials Drive Folder ↗</span>
          </a>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(c => `
    <div class="cert-card spotlight-target" data-action="inspect-cert" data-cert-id="${escapeHtml(c.id)}">
      <div class="cert-preview-wrapper">
        <img src="${escapeHtml(c.previewImage || c.thumbnail || 'assets/images/project-cv.svg')}" alt="${escapeHtml(c.title)} - ${escapeHtml(c.issuer)}" loading="lazy">
      </div>
      <div class="cert-body">
        <div class="cert-issuer-badge">${escapeHtml(c.issuer)} • ${escapeHtml(c.year || 'Verified')}</div>
        <h3 class="cert-title">${escapeHtml(c.title)}</h3>
        <p class="cert-desc">${escapeHtml(c.description || '')}</p>
        
        <div class="cert-skills-pill-group">
          ${(c.skills || c.skillsGained || []).map(s => `<span class="cert-skill-pill">${escapeHtml(s)}</span>`).join('')}
        </div>
        
        <div class="cert-footer-box">
          <span class="cert-verified-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <span>${c.credentialCode ? `Code: ${escapeHtml(c.credentialCode)}` : 'Verified Credential'}</span>
          </span>
        </div>

        <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
          ${c.driveLink ? `<a href="${escapeHtml(c.driveLink)}" target="_blank" rel="noopener noreferrer" class="btn-vault-inline"><span>Open PDF on Drive ↗</span></a>` : ''}
          ${c.verificationUrl ? `<a href="${escapeHtml(c.verificationUrl)}" target="_blank" rel="noopener noreferrer" class="btn-vault-inline" style="color: #38bdf8;"><span>Verify Credential ↗</span></a>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================
   ACHIEVEMENTS & AWARDS SECTION
   ========================================== */
function initAchievements(achievements) {
  const container = document.getElementById('achievementsGrid');
  if (!container || !achievements || !achievements.length) return;

  container.innerHTML = achievements.map(a => `
    <div class="achievement-card spotlight-target">
      <div class="achievement-header">
        <div class="achievement-icon-box">🏆</div>
        <span class="achievement-badge">${escapeHtml(a.badge)}</span>
      </div>
      <h3 class="achievement-title">${escapeHtml(a.title)}</h3>
      <div class="achievement-org">${escapeHtml(a.organization)} (${escapeHtml(a.year)})</div>
      <p class="achievement-desc">${escapeHtml(a.description)}</p>
    </div>
  `).join('');
}

/* ==========================================
   VIDEO EDITING SHOWCASE
   ========================================== */
function initVideoEditing(videoEditingData) {
  const container = document.getElementById('videoEditingGrid');
  const vaultBtn = document.getElementById('videoEditingVaultBtn');

  if (vaultBtn && videoEditingData?.driveVaultUrl) {
    vaultBtn.href = videoEditingData.driveVaultUrl;
  }

  if (!container) return;

  const items = (videoEditingData?.items || []).filter(v => v.featured !== false);

  if (!items.length) {
    const driveUrl = videoEditingData?.driveVaultUrl || '#';
    container.innerHTML = `
      <div class="vault-empty-card video-vault-card spotlight-target" style="grid-column: 1 / -1;">
        <div class="vault-empty-icon video-vault-icon">🎬</div>
        <div class="vault-empty-content">
          <div class="vault-tag video-tag">Video Archive</div>
          <h3>Master Video Archive in Google Drive</h3>
          <p>Commercial brand cuts, dynamic showreels, and color-graded exports are hosted in full 4K high-bitrate quality within the dedicated Google Drive archive.</p>
          <a href="${escapeHtml(driveUrl)}" target="_blank" rel="noopener noreferrer" class="btn-vault-cta video-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <span>Open Video Drive Archive ↗</span>
          </a>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(vid => `
    <div class="video-card spotlight-target">
      <div class="video-player-preview" title="Video preview for ${escapeHtml(vid.title)}">
        <img src="${escapeHtml(vid.thumbnail || 'assets/images/video-thumb-1.svg')}" alt="${escapeHtml(vid.title)}" loading="lazy">
      </div>
      <div class="video-body">
        <div class="video-genre">${escapeHtml(vid.category || 'Video Post-Production')} • ${escapeHtml(vid.year || '2026')}</div>
        <h3 class="video-title">${escapeHtml(vid.title)}</h3>
        <p class="video-desc">${escapeHtml(vid.description || '')}</p>
        
        <div class="video-pillars-list">
          ${(vid.software || []).map(s => `<span class="pillar-pill">${escapeHtml(s)}</span>`).join('')}
        </div>

        <div style="margin-top: 18px; padding-top: 14px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center;">
          ${vid.driveLink ? `<a href="${escapeHtml(vid.driveLink)}" target="_blank" rel="noopener noreferrer" class="btn-vault-inline"><span>Watch on Drive ↗</span></a>` : ''}
          ${vid.videoUrl ? `<a href="${escapeHtml(vid.videoUrl)}" target="_blank" rel="noopener noreferrer" class="btn-vault-inline" style="color: #38bdf8;"><span>Stream Video ↗</span></a>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================
   CINEMATOGRAPHY SHOWCASE
   ========================================== */
function initCinematography(cinematographyData) {
  const container = document.getElementById('cinematographyGrid');
  const vaultBtn = document.getElementById('cinematographyVaultBtn');

  if (vaultBtn && cinematographyData?.driveVaultUrl) {
    vaultBtn.href = cinematographyData.driveVaultUrl;
  }

  if (!container) return;

  const items = (cinematographyData?.items || []).filter(c => c.featured !== false);

  if (!items.length) {
    const driveUrl = cinematographyData?.driveVaultUrl || '#';
    container.innerHTML = `
      <div class="vault-empty-card cinema-vault-card spotlight-target" style="grid-column: 1 / -1;">
        <div class="vault-empty-icon cinema-vault-icon">🎥</div>
        <div class="vault-empty-content">
          <div class="vault-tag cinema-tag">Cinematography Vault</div>
          <h3>Cinematography Archive in Google Drive</h3>
          <p>Uncompressed camera tests, lighting studies, narrative short sequences, and aerial reels are preserved in pristine master fidelity in the Google Drive vault.</p>
          <a href="${escapeHtml(driveUrl)}" target="_blank" rel="noopener noreferrer" class="btn-vault-cta cinema-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
            <span>Open Cinematography Vault ↗</span>
          </a>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(cinema => `
    <div class="video-card spotlight-target">
      <div class="video-player-preview" title="Cinematography Preview for ${escapeHtml(cinema.title)}">
        <img src="${escapeHtml(cinema.thumbnail || 'assets/images/video-thumb-2.svg')}" alt="${escapeHtml(cinema.title)}" loading="lazy">
      </div>
      <div class="video-body">
        <div class="video-genre">${escapeHtml(cinema.category || 'Cinematography')} • ${escapeHtml(cinema.year || '2026')}</div>
        <h3 class="video-title">${escapeHtml(cinema.title)}</h3>
        <p class="video-desc">${escapeHtml(cinema.description || '')}</p>
        
        <div class="video-pillars-list">
          ${(cinema.cameraGear || []).map(g => `<span class="pillar-pill" style="background: rgba(6, 182, 212, 0.15); border-color: rgba(6, 182, 212, 0.35); color: #a5f3fc;">${escapeHtml(g)}</span>`).join('')}
        </div>

        <div style="margin-top: 18px; padding-top: 14px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center;">
          ${cinema.driveLink ? `<a href="${escapeHtml(cinema.driveLink)}" target="_blank" rel="noopener noreferrer" class="btn-vault-inline"><span>Watch Master on Drive ↗</span></a>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================
   PHOTOGRAPHY GALLERY
   ========================================== */
function initPhotography(photographyData) {
  const grid = document.getElementById('photoGrid');
  const vaultBtn = document.getElementById('photographyVaultBtn');

  if (vaultBtn && photographyData?.driveVaultUrl) {
    vaultBtn.href = photographyData.driveVaultUrl;
  }

  if (!grid) return;

  const photos = (photographyData?.items || []).filter(p => p.featured !== false);

  if (!photos.length) {
    const driveUrl = photographyData?.driveVaultUrl || '#';
    grid.innerHTML = `
      <div class="vault-empty-card photo-vault-card spotlight-target" style="grid-column: 1 / -1;">
        <div class="vault-empty-icon photo-vault-icon">📷</div>
        <div class="vault-empty-content">
          <div class="vault-tag photo-tag">Photography Vault</div>
          <h3>RAW Photography in Google Drive</h3>
          <p>High-resolution portraiture, architectural series, and natural light studies are curated in uncompressed RAW formats in the master Google Drive collection.</p>
          <a href="${escapeHtml(driveUrl)}" target="_blank" rel="noopener noreferrer" class="btn-vault-cta photo-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
            <span>Open RAW Photography Drive ↗</span>
          </a>
        </div>
      </div>
    `;
    return;
  }

  grid.innerHTML = photos.map((photo, index) => {
    let aspectClass = 'aspect-4-3';
    if (photo.aspect === '3:4') aspectClass = 'aspect-3-4';
    if (photo.aspect === '16:9') aspectClass = 'aspect-16-9';

    const exifSummary = photo.exif ? `${escapeHtml(photo.exif.lens || '')} • ${escapeHtml(photo.exif.aperture || '')} • ${escapeHtml(photo.exif.shutter || '')}` : (photo.location || '');

    return `
      <div class="photo-item spotlight-target" data-category="${escapeHtml(photo.category || 'all')}" data-index="${index}">
        <div class="photo-thumb-container ${aspectClass}">
          <img src="${escapeHtml(photo.image)}" alt="${escapeHtml(photo.title)}" loading="lazy">
          <div class="photo-overlay-info">
            <span class="photo-category-badge">${escapeHtml(photo.category || 'Photography')}</span>
            <h4 class="photo-title">${escapeHtml(photo.title)}</h4>
            <div class="photo-exif-preview">${exifSummary}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/* ==========================================
   SKILLS MATRIX
   ========================================== */
function initSkills(skills) {
  const container = document.getElementById('skillsMatrixContainer');
  if (!container || !skills) return;

  const renderSkillList = (items) => (items || []).map(s => `
    <div class="skill-item">
      <div class="skill-meta">
        <span class="skill-name">${escapeHtml(s.name)}</span>
        <span class="skill-level-badge">${escapeHtml(s.level)}</span>
      </div>
      <div class="skill-desc">${escapeHtml(s.desc)}</div>
    </div>
  `).join('');

  container.innerHTML = `
    <!-- Category 1: Programming Languages -->
    <div class="skills-category-card spotlight-target">
      <div class="category-header">
        <div class="category-icon dev">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
        </div>
        <h3 class="category-title">Programming Languages</h3>
      </div>
      <div class="skill-items-list">
        ${renderSkillList(skills.programming)}
      </div>
    </div>

    <!-- Category 2: Web & Cloud Engineering -->
    <div class="skills-category-card spotlight-target">
      <div class="category-header">
        <div class="category-icon web">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
        </div>
        <h3 class="category-title">Web &amp; Cloud Database</h3>
      </div>
      <div class="skill-items-list">
        ${renderSkillList(skills.webAndCloud)}
      </div>
    </div>

    <!-- Category 3: AI, Machine Learning & Vision -->
    <div class="skills-category-card spotlight-target">
      <div class="category-header">
        <div class="category-icon aiml">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
        </div>
        <h3 class="category-title">AI / Machine Learning</h3>
      </div>
      <div class="skill-items-list">
        ${renderSkillList(skills.aimlAndVision)}
      </div>
    </div>

    <!-- Category 4: Creative & Instrumental -->
    <div class="skills-category-card spotlight-target">
      <div class="category-header">
        <div class="category-icon creative">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
        </div>
        <h3 class="category-title">Creative &amp; Instrumental</h3>
      </div>
      <div class="skill-items-list">
        ${renderSkillList(skills.creativeMedia)}
      </div>
    </div>
  `;
}

/* ==========================================
   EXPERIENCE & TIMELINE
   ========================================== */
function initExperience(experience) {
  const container = document.getElementById('timelineContainer');
  if (!container || !experience || !experience.length) return;

  container.innerHTML = `
    <div class="timeline-line"></div>
    ${experience.map(item => `
      <div class="timeline-item">
        <div class="timeline-node"></div>
        <div class="timeline-card spotlight-target">
          <div class="timeline-header">
            <div>
              <h4 class="timeline-role">${escapeHtml(item.role)}</h4>
              <div class="timeline-org">${escapeHtml(item.organization)}</div>
            </div>
            <span class="timeline-period">${escapeHtml(item.period)}</span>
          </div>
          <p class="timeline-desc">${escapeHtml(item.description)}</p>
          <ul class="timeline-highlights">
            ${(item.highlights || []).map(h => `<li>${escapeHtml(h)}</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('')}
  `;
}

/* ==========================================
   SERVICES & VALUE PROPOSITION
   ========================================== */
function initServices(services) {
  const container = document.getElementById('servicesGrid');
  if (!container || !services || !services.length) return;

  const iconMap = {
    code: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
    cpu: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>',
    video: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>',
    camera: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>'
  };

  container.innerHTML = services.map(s => `
    <div class="service-card spotlight-target">
      <div class="service-icon-box">
        ${iconMap[s.icon] || iconMap.code}
      </div>
      <h3 class="service-title">${escapeHtml(s.title)}</h3>
      <p class="service-desc">${escapeHtml(s.description)}</p>
      
      <div class="service-deliverables-title">Key Capabilities</div>
      <ul class="service-deliverables">
        ${(s.deliverables || []).map(d => `<li>${escapeHtml(d)}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

/* ==========================================
   NAVIGATION, SCROLLSPY & HEADER
   ========================================== */
function initNavigation() {
  const header = document.querySelector('.site-header, .nexum-header');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link, .nexum-nav-item, .nexum-drawer-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${currentId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* ==========================================
   MOBILE MENU DRAWER & MORPH TOGGLE
   ========================================== */
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobileToggle');
  const drawer = document.getElementById('mobileDrawer');
  const backdrop = document.getElementById('mobileBackdrop');
  const closeBtn = document.getElementById('mobileDrawerClose');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .nexum-drawer-link');

  const openDrawer = () => {
    drawer?.classList.add('open');
    backdrop?.classList.add('open');
    toggleBtn?.classList.add('active');
    toggleBtn?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer?.classList.remove('open');
    backdrop?.classList.remove('open');
    toggleBtn?.classList.remove('active');
    toggleBtn?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  const toggleDrawer = () => {
    if (drawer?.classList.contains('open')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  };

  toggleBtn?.addEventListener('click', toggleDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  backdrop?.addEventListener('click', closeDrawer);
  mobileLinks.forEach(link => link.addEventListener('click', closeDrawer));
}

/* ==========================================
   NEXUM HERO EMAIL CAPSULE FORM
   ========================================== */
function initHeroEmailCapsule() {
  const form = document.getElementById('heroEmailForm');
  const input = document.getElementById('heroEmailInput');
  if (!form || !input) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailVal = input.value.trim();
    if (!emailVal) return;

    // Pre-fill contact form email field if available
    const contactEmail = document.getElementById('contactEmail') || document.querySelector('input[name="email"]');
    if (contactEmail) {
      contactEmail.value = emailVal;
    }

    showToast(`Thanks for connecting! Directing you to Nikhil's contact portal...`);

    // Smooth scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

/* ==========================================
   TIMEZONE TICKER
   ========================================== */
function initTimezoneTicker() {
  const ticker = document.getElementById('localTimeTicker');
  if (!ticker) return;

  const updateTime = () => {
    const now = new Date();
    const options = {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
    ticker.textContent = `Local Time (IST / UTC+5:30): ${timeString}`;
  };

  updateTime();
  setInterval(updateTime, 1000);
}

/* ==========================================
   PROJECT FILTERING & COUNTERS
   ========================================== */
function initProjectFiltering(projects) {
  const filterBtns = document.querySelectorAll('.work-filter-bar .filter-btn');
  const projectCards = document.querySelectorAll('.projects-grid .project-card');

  // Calculate dynamic counts
  const counts = { all: (projects || []).length };
  (projects || []).forEach(p => {
    counts[p.category] = (counts[p.category] || 0) + 1;
  });

  filterBtns.forEach(btn => {
    const filter = btn.getAttribute('data-filter');
    const count = counts[filter] || 0;
    const countSpan = btn.querySelector('.filter-count');
    if (countSpan) countSpan.textContent = `(${count})`;

    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => { card.style.opacity = '1'; }, 10);
        } else {
          card.style.opacity = '0';
          setTimeout(() => { card.style.display = 'none'; }, 200);
        }
      });
    });
  });
}

/* ==========================================
   HERO AMBIENT PARTICLE WEB CANVAS
   ========================================== */
function initHeroParticleCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight || window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = canvas.parentElement.offsetHeight || window.innerHeight;
  });

  const particles = [];
  const count = Math.min(Math.floor(width / 22), 45);

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2 + 1
    });
  }

  let mouse = { x: -1000, y: -1000 };
  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      // Mouse repulsion
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        p.x -= (dx / dist) * 1.5;
        p.y -= (dy / dist) * 1.5;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(99, 102, 241, 0.4)';
      ctx.fill();

      // Connect near particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist2 < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - dist2 / 120)})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================
   SPOTLIGHT MOUSE FOLLOW COORDINATES
   ========================================== */
function initSpotlightFollower() {
  document.addEventListener('mousemove', (e) => {
    const targets = document.querySelectorAll('.spotlight-target');
    targets.forEach(el => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty('--mouse-x', `${x}px`);
      el.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* ==========================================
   CASE STUDY MODAL & INTERACTIVE PLAYGROUNDS
   ========================================== */
function initCaseStudyModal(projects) {
  const modal = document.getElementById('caseStudyModal');
  const container = document.getElementById('caseStudyContent');
  const closeBtn = document.getElementById('caseStudyCloseBtn');
  let previouslyFocusedElement = null;

  if (!modal || !projects) return;

  const openModal = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    if (!project || !project.caseStudy) return;

    previouslyFocusedElement = document.activeElement;
    const cs = project.caseStudy;

    // Build playground container if interactive demo exists
    let playgroundHtml = '';
    if (project.id === 'text-to-morse-engine') {
      playgroundHtml = `
        <div class="interactive-playground">
          <div class="playground-header">
            <span>⚡ REAL-TIME WEB AUDIO MORSE SYNTHESIZER</span>
            <div class="synth-led-indicator" id="modalMorseLed" title="Optical Flash Strobe"></div>
          </div>
          <div class="playground-controls">
            <input type="text" id="modalMorseInput" class="synth-input" value="NIT GOA" placeholder="Type text to synthesize..." />
            <button class="btn-synth-play" id="modalMorsePlayBtn">
              <span>🔊 Play Morse Audio &amp; Light</span>
            </button>
          </div>
          <div id="modalMorseEncoded" style="font-family: var(--font-mono); font-size: 0.85rem; color: #fbbf24; word-break: break-all;">
            Encoded: -. .. - / --. --- .-
          </div>
        </div>
      `;
    } else if (project.id === 'ridex-bike-taxi') {
      playgroundHtml = `
        <div class="interactive-playground">
          <div class="playground-header">
            <span>⚡ RIDEX DISPATCH &amp; FIRESTORE STATE SIMULATOR</span>
            <span id="modalRideStatusBadge" style="color: #34d399; font-weight: 700;">STATUS: READY</span>
          </div>
          <div class="ridex-sim-box">
            <div class="ridex-step-trail" id="modalRideSteps">
              <div class="ridex-step done">1. Booking</div>
              <div class="ridex-step active">2. Driver Search</div>
              <div class="ridex-step">3. In-Transit</div>
              <div class="ridex-step">4. Completed</div>
            </div>
            <button class="btn-primary" id="modalSimulateRideBtn" style="padding: 10px 20px; align-self: flex-start;">
              <span>▶ Run Live Ride Simulation</span>
            </button>
          </div>
        </div>
      `;
    } else if (project.id === 'stock-market-prediction-ml') {
      playgroundHtml = `
        <div class="interactive-playground">
          <div class="playground-header">
            <span>📈 QUANTITATIVE BACKTESTING METRICS ENGINE</span>
            <div class="timeframe-bar" id="modalTimeframeBar">
              <button class="tf-btn" data-tf="1D">1D</button>
              <button class="tf-btn" data-tf="1W">1W</button>
              <button class="tf-btn active" data-tf="1M">1M</button>
              <button class="tf-btn" data-tf="1Y">1Y</button>
            </div>
          </div>
          <div class="case-study-grid-2col" style="margin-top: 10px;">
            <div class="case-study-feature-box">
              <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">SHARPE RATIO</div>
              <div id="modalSharpeVal" style="font-size: 1.6rem; font-weight: 800; color: #34d399;">2.14</div>
              <div style="font-size: 0.78rem; color: #94a3b8;">High Risk-Adjusted Alpha</div>
            </div>
            <div class="case-study-feature-box">
              <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">WIN RATE &amp; P&amp;L</div>
              <div id="modalWinRateVal" style="font-size: 1.6rem; font-weight: 800; color: #fbbf24;">68.4%</div>
              <div style="font-size: 0.78rem; color: #94a3b8;">Automated Buy/Sell Indicators</div>
            </div>
          </div>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="case-study-header">
        <div class="case-study-meta-row">
          <span class="project-category-tag">${escapeHtml(project.categoryLabel)}</span>
          <span class="tech-tag">${escapeHtml(project.year)}</span>
          <span class="tech-tag">Role: ${escapeHtml(cs.role)}</span>
          <span class="tech-tag">Timeline: ${escapeHtml(cs.timeline)}</span>
        </div>
        <h2 class="case-study-modal-title">${escapeHtml(project.title)}</h2>
        <p class="case-study-modal-headline">${escapeHtml(cs.headline)}</p>
      </div>

      <div class="case-study-body">
        ${playgroundHtml}

        <!-- Overview -->
        <div class="case-study-section-block">
          <h4>Project Context &amp; Objective</h4>
          <p>${escapeHtml(cs.overview)}</p>
        </div>

        <!-- Problem & Solution Grid -->
        <div class="case-study-grid-2col">
          <div class="case-study-feature-box">
            <h5 style="color: #fb7185;">The Core Challenge</h5>
            <p>${escapeHtml(cs.problem)}</p>
          </div>
          <div class="case-study-feature-box">
            <h5 style="color: #34d399;">The Architectural Solution</h5>
            <p>${escapeHtml(cs.solution)}</p>
          </div>
        </div>

        <!-- Architecture Breakdown -->
        <div class="case-study-section-block">
          <h4>Technical Architecture &amp; System Flow</h4>
          <ul class="case-study-architecture-list">
            ${(cs.architecture || []).map(step => `<li>${escapeHtml(step)}</li>`).join('')}
          </ul>
        </div>

        <!-- Key Features -->
        <div class="case-study-section-block">
          <h4>Key Engineering Deliverables</h4>
          <div class="case-study-grid-2col">
            ${(cs.keyFeatures || []).map(f => `
              <div class="case-study-feature-box">
                <p style="color: #f8fafc; font-weight: 500;">✓ ${escapeHtml(f)}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Key Learnings -->
        <div class="case-study-section-block">
          <h4>Key Learnings &amp; Impact</h4>
          <p>${escapeHtml(cs.learnings)}</p>
        </div>
      </div>

      <div class="case-study-footer">
        <div class="project-tech-tags">
          ${(cs.technologies || []).map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join('')}
        </div>
        ${project.githubUrl ? `
          <a href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="padding: 10px 20px; font-size: 0.88rem;">
            <span>View on GitHub</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        ` : ''}
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();

    // Bind inside-modal simulator events
    attachModalSimulatorEvents(project.id);
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    if (previouslyFocusedElement) previouslyFocusedElement.focus();
  };

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action="open-case-study"]');
    if (btn) {
      const id = btn.getAttribute('data-project-id');
      if (id) openModal(id);
    }
  });

  // Direct pill buttons from cards
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-action="launch-morse-synth"]')) openModal('text-to-morse-engine');
    if (e.target.closest('[data-action="launch-ridex-sim"]')) openModal('ridex-bike-taxi');
    if (e.target.closest('[data-action="launch-stock-sim"]')) openModal('stock-market-prediction-ml');
    if (e.target.closest('[data-action="launch-grade-toggle"]')) openModal('cinematic-brand-film');
  });

  closeBtn?.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });
}

/* ==========================================
   MODAL SIMULATOR LOGIC & WEB AUDIO ENGINE
   ========================================== */
function attachModalSimulatorEvents(projectId) {
  if (projectId === 'text-to-morse-engine') {
    const input = document.getElementById('modalMorseInput');
    const playBtn = document.getElementById('modalMorsePlayBtn');
    const led = document.getElementById('modalMorseLed');
    const encodedView = document.getElementById('modalMorseEncoded');

    const morseMap = {
      A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.", G: "--.",
      H: "....", I: "..", J: ".---", K: "-.-", L: ".-..", M: "--", N: "-.",
      O: "---", P: ".--.", Q: "--.-", R: ".-.", S: "...", T: "-", U: "..-",
      V: "...-", W: ".--", X: "-..-", Y: "-.--", Z: "--..",
      1: ".----", 2: "..---", 3: "...--", 4: "....-", 5: ".....",
      6: "-....", 7: "--...", 8: "---..", 9: "----.", 0: "-----",
      " ": "/"
    };

    const updateEncoding = () => {
      const text = (input?.value || '').toUpperCase();
      const code = text.split('').map(ch => morseMap[ch] || '').join(' ');
      if (encodedView) encodedView.textContent = `Encoded: ${code || '(empty)'}`;
      return code;
    };

    input?.addEventListener('input', updateEncoding);

    playBtn?.addEventListener('click', async () => {
      const code = updateEncoding();
      if (!code) return;

      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const dotTime = 0.08;

      let time = audioCtx.currentTime;

      for (let i = 0; i < code.length; i++) {
        const symbol = code[i];
        if (symbol === '.' || symbol === '-') {
          const duration = symbol === '.' ? dotTime : dotTime * 3;
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(750, time);

          gain.gain.setValueAtTime(0.15, time);
          gain.gain.setValueAtTime(0, time + duration);

          osc.connect(gain);
          gain.connect(audioCtx.destination);

          osc.start(time);
          osc.stop(time + duration);

          // Trigger LED flash
          const delayMs = (time - audioCtx.currentTime) * 1000;
          setTimeout(() => {
            led?.classList.add('flashing');
            setTimeout(() => { led?.classList.remove('flashing'); }, duration * 1000);
          }, Math.max(0, delayMs));

          time += duration + dotTime;
        } else if (symbol === ' ') {
          time += dotTime * 2;
        } else if (symbol === '/') {
          time += dotTime * 4;
        }
      }
    });
  } else if (projectId === 'ridex-bike-taxi') {
    const simBtn = document.getElementById('modalSimulateRideBtn');
    const statusBadge = document.getElementById('modalRideStatusBadge');
    const stepsContainer = document.getElementById('modalRideSteps');

    simBtn?.addEventListener('click', () => {
      simBtn.disabled = true;
      if (statusBadge) statusBadge.textContent = 'STATUS: MATCHING DRIVER...';

      const updateStep = (idx, statusText) => {
        if (stepsContainer) {
          const steps = stepsContainer.querySelectorAll('.ridex-step');
          steps.forEach((s, i) => {
            s.className = 'ridex-step';
            if (i < idx) s.classList.add('done');
            if (i === idx) s.classList.add('active');
          });
        }
        if (statusBadge) statusBadge.textContent = `STATUS: ${statusText}`;
      };

      updateStep(1, 'DRIVER MATCHED (ETA 2 MIN)');
      showToast('RIDEX: Driver Nikhil B. assigned! Real-time telemetry streaming...');

      setTimeout(() => {
        updateStep(2, 'IN TRANSIT (LIVE FIRESTORE GPS)');
        showToast('RIDEX: In-transit speed: 38 km/h. Route optimal.');
      }, 1500);

      setTimeout(() => {
        updateStep(3, 'COMPLETED & WALLET DEDUCTED');
        if (statusBadge) statusBadge.textContent = 'STATUS: TRIP COMPLETED ($4.50)';
        showToast('RIDEX: Ride completed! Invoice generated and synced.');
        simBtn.disabled = false;
      }, 3000);
    });
  } else if (projectId === 'stock-market-prediction-ml') {
    const tfBar = document.getElementById('modalTimeframeBar');
    const sharpeVal = document.getElementById('modalSharpeVal');
    const winRateVal = document.getElementById('modalWinRateVal');

    const tfData = {
      '1D': { sharpe: '2.45', win: '72.1%' },
      '1W': { sharpe: '2.28', win: '70.4%' },
      '1M': { sharpe: '2.14', win: '68.4%' },
      '1Y': { sharpe: '1.95', win: '65.2%' }
    };

    tfBar?.addEventListener('click', (e) => {
      const btn = e.target.closest('.tf-btn');
      if (!btn) return;
      tfBar.querySelectorAll('.tf-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const tf = btn.getAttribute('data-tf');
      if (tfData[tf]) {
        if (sharpeVal) sharpeVal.textContent = tfData[tf].sharpe;
        if (winRateVal) winRateVal.textContent = tfData[tf].win;
      }
    });
  }
}

/* ==========================================
   CERTIFICATION INSPECTOR MODAL
   ========================================== */
function initCertVerificationInspector(certs) {
  document.addEventListener('click', (e) => {
    const card = e.target.closest('[data-action="inspect-cert"]');
    if (!card) return;

    const certId = card.getAttribute('data-cert-id');
    const cert = (certs || []).find(c => c.id === certId);
    if (!cert) return;

    navigator.clipboard.writeText(cert.credentialCode).then(() => {
      showToast(`Copied ${cert.issuer} verification code: ${cert.credentialCode}`);
    }).catch(() => {
      showToast(`Verification code: ${cert.credentialCode}`);
    });
  });
}

/* ==========================================
   PHOTOGRAPHY LIGHTBOX & EXIF VIEWER
   ========================================== */
function initPhotographyLightbox(photos) {
  const lightbox = document.getElementById('photoLightbox');
  const imgElement = document.getElementById('lightboxImg');
  const titleEl = document.getElementById('lightboxTitle');
  const storyEl = document.getElementById('lightboxStory');
  const exifEl = document.getElementById('lightboxExif');
  const counterEl = document.getElementById('lightboxCounter');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  let currentIndex = 0;
  if (!lightbox || !photos || !photos.length) return;

  const updateLightbox = (index) => {
    currentIndex = (index + photos.length) % photos.length;
    const photo = photos[currentIndex];

    imgElement.src = photo.image;
    imgElement.alt = photo.title;
    titleEl.textContent = photo.title;
    storyEl.textContent = `${photo.categoryName} • ${photo.location} (${photo.year}) — ${photo.story}`;
    
    exifEl.innerHTML = `
      <span>Camera: ${escapeHtml(photo.exif.camera)}</span>
      <span>Lens: ${escapeHtml(photo.exif.lens)}</span>
      <span>Aperture: ${escapeHtml(photo.exif.aperture)}</span>
      <span>Shutter: ${escapeHtml(photo.exif.shutter)}</span>
      <span>ISO: ${escapeHtml(photo.exif.iso)}</span>
    `;

    counterEl.textContent = `${currentIndex + 1} / ${photos.length}`;
  };

  const openLightbox = (index) => {
    updateLightbox(index);
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  document.addEventListener('click', (e) => {
    const item = e.target.closest('.photo-item');
    if (item) {
      const idx = parseInt(item.getAttribute('data-index'), 10);
      if (!isNaN(idx)) openLightbox(idx);
    }
  });

  closeBtn?.addEventListener('click', closeLightbox);
  prevBtn?.addEventListener('click', () => updateLightbox(currentIndex - 1));
  nextBtn?.addEventListener('click', () => updateLightbox(currentIndex + 1));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') updateLightbox(currentIndex - 1);
    if (e.key === 'ArrowRight') updateLightbox(currentIndex + 1);
  });
}

/* ==========================================
   1-CLICK EMAIL COPY & TOAST NOTIFICATION
   ========================================== */
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  if (!toast) return;
  const msgEl = toast.querySelector('.toast-text');
  if (msgEl) msgEl.textContent = message;
  toast.classList.add('show');
  setTimeout(() => { toast.classList.remove('show'); }, 3400);
}

function initEmailCopy(emailAddress) {
  const copyBtn = document.getElementById('copyEmailBtn');
  const email = emailAddress || 'bonigalanikhil2@gmail.com';

  if (!copyBtn) return;

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(email);
      showToast('Email address copied to clipboard!');
    } catch (err) {
      const tempInput = document.createElement('input');
      tempInput.value = email;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      showToast('Email address copied to clipboard!');
    }
  });
}

/* ==========================================
   CONTACT FORM HANDLER (UNIVERSAL EMAIL DISPATCH)
   ========================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('contactSubmitBtn');
  const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = form.querySelector('[name="name"]');
    const emailInput = form.querySelector('[name="email"]');
    const subjectInput = form.querySelector('[name="subject"]');
    const messageInput = form.querySelector('[name="message"]');

    const name = nameInput?.value.trim() || '';
    const email = emailInput?.value.trim() || '';
    const subject = subjectInput?.value.trim() || 'Freelance / Software Role Inquiry';
    const message = messageInput?.value.trim() || '';

    // Validation
    if (!name || !email || !message) {
      if (!name && nameInput) nameInput.focus();
      else if (!email && emailInput) emailInput.focus();
      else if (!message && messageInput) messageInput.focus();

      if (feedback) {
        feedback.innerHTML = '⚠️ Please fill out all required fields: Name, Email Address, and Message.';
        feedback.className = 'form-feedback error';
        feedback.style.display = 'block';
      }
      showToast('Please fill out all required fields.');
      return;
    }

    // Build structured email body with standard line breaks for universal mail client compatibility
    const formattedSubject = `[Opportunity / Project] ${subject} - from ${name}`;
    const formattedBody = `Hello Nikhil,\r\n\r\n${message}\r\n\r\n==================================================\r\nSENDER INFORMATION:\r\nName / Company: ${name}\r\nEmail Address: ${email}\r\nInquiry Type: ${subject}\r\n==================================================\r\n(Sent via Nikhil Bonigala's Portfolio Website)`;

    // Construct Universal Mail URLs
    const encodedSubject = encodeURIComponent(formattedSubject);
    const encodedBody = encodeURIComponent(formattedBody);

    const mailtoUrl = `mailto:bonigalanikhil2@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=bonigalanikhil2@gmail.com&su=${encodedSubject}&body=${encodedBody}`;
    const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=bonigalanikhil2@gmail.com&subject=${encodedSubject}&body=${encodedBody}`;

    // Update button visual state
    if (submitBtn) {
      submitBtn.classList.add('sending');
      if (btnText) btnText.textContent = 'Opening Email Client...';
    }

    // Render interactive dispatch confirmation
    if (feedback) {
      feedback.className = 'form-feedback success';
      feedback.style.display = 'block';
      feedback.innerHTML = `
        <div class="feedback-dispatch-card">
          <div class="feedback-dispatch-header">
            <span>✓ Email draft ready for <strong>bonigalanikhil2@gmail.com</strong></span>
          </div>
          <div style="font-size: 0.84rem; color: #cbd5e1;">
            If your email app does not open automatically, choose an option below to send instantly:
          </div>
          <div class="feedback-btn-group">
            <a href="${escapeHtml(mailtoUrl)}" class="feedback-action-btn primary-mail">
              <span>✉️ Send via Default Mail App</span>
            </a>
            <a href="${escapeHtml(gmailUrl)}" target="_blank" rel="noopener noreferrer" class="feedback-action-btn gmail-btn">
              <span>🌐 Open in Gmail (Web)</span>
            </a>
            <button type="button" class="feedback-action-btn copy-btn" id="copyFormDetailsBtn">
              <span>📋 Copy Email Text</span>
            </button>
          </div>
        </div>
      `;

      // Attach copy button inside feedback card
      const copyDetailsBtn = document.getElementById('copyFormDetailsBtn');
      copyDetailsBtn?.addEventListener('click', async () => {
        const fullCopyText = `Subject: ${formattedSubject}\nTo: bonigalanikhil2@gmail.com\n\n${formattedBody}`;
        try {
          await navigator.clipboard.writeText(fullCopyText);
          showToast('Email details copied to clipboard!');
        } catch (err) {
          showToast('Failed to copy to clipboard.');
        }
      });
    }

    showToast('Opening email app to send message to Nikhil...');

    // Programmatic click on hidden anchor tag for maximum cross-browser reliability
    const mailLink = document.createElement('a');
    mailLink.href = mailtoUrl;
    mailLink.target = '_blank';
    document.body.appendChild(mailLink);
    mailLink.click();
    document.body.removeChild(mailLink);

    // Reset button after delay
    setTimeout(() => {
      if (submitBtn) {
        submitBtn.classList.remove('sending');
        if (btnText) btnText.textContent = 'Send Message via Email';
      }
    }, 2800);
  });
}

/* ==========================================
   UTILITY: ESCAPE HTML
   ========================================== */
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ==========================================
   NEXUM CINEMATIC BACKGROUND VIDEO & SCROLL CONTROLLER
   ========================================== */
function initScrollVideoBackground() {
  const video = document.getElementById('globalBgVideo');
  const overlay = document.getElementById('globalBgOverlay');

  if (video) {
    // Ensure video plays smoothly across all modern browsers
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay policy fallback: unpause on first user interaction
        const startVideoOnInteraction = () => {
          video.play().catch(() => {});
          window.removeEventListener('click', startVideoOnInteraction);
          window.removeEventListener('scroll', startVideoOnInteraction);
          window.removeEventListener('touchstart', startVideoOnInteraction);
        };
        window.addEventListener('click', startVideoOnInteraction, { once: true });
        window.addEventListener('scroll', startVideoOnInteraction, { once: true });
        window.addEventListener('touchstart', startVideoOnInteraction, { once: true });
      });
    }
  }

  if (overlay) {
    let ticking = false;

    function updateOverlayOnScroll() {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      const vh = window.innerHeight || 800;

      // At hero top (scrollY = 0), overlay is light (0.2).
      // As user scrolls past hero (scrollY reaches ~0.8 * vh), overlay smoothly darkens to ~0.78
      // for optimal readability of cards, text, and code while preserving motion behind frosted cards.
      const scrollRatio = Math.min(1, Math.max(0, scrollY / (vh * 0.75)));
      const targetOpacity = 0.2 + (scrollRatio * 0.58); // 0.2 -> 0.78

      overlay.style.opacity = targetOpacity.toFixed(3);
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateOverlayOnScroll);
        ticking = true;
      }
    }, { passive: true });

    // Initial calculation
    updateOverlayOnScroll();
  }
}


