import { portfolioData } from '../data/portfolioData.js';

export function renderProjectsShowcase(container) {
  const projects = portfolioData.projects;

  container.innerHTML = `
    <div class="section-header">
      <div class="section-label">// 04 — projects</div>
      <h2 class="section-title">Featured Projects</h2>
      <p class="section-sub">Infrastructure built, multi-cloud storage shipped, AI inspection models trained.</p>
    </div>

    <div class="projects-grid">
      ${projects.map((proj, idx) => `
        <a href="/project.html?id=${proj.id}" class="project-card" data-proj-id="${proj.id}" style="text-decoration: none; color: inherit; display: flex; flex-direction: column;">
          <div class="pc-image-wrapper">
            <img src="${proj.image}" alt="${proj.title}" class="pc-image" />
          </div>
          <div class="pc-body">
            <div class="pc-top">
              <div class="pc-icon">${idx === 0 ? '☁️' : idx === 1 ? '🤖' : idx === 2 ? '💬' : '📡'}</div>
              <div class="pc-status">${idx === 0 ? 'PRODUCTION' : idx === 1 ? 'DEPLOYED (94.8%)' : idx === 2 ? 'ACTIVE' : 'LIVE'}</div>
            </div>
            <div class="pc-title">${proj.title}</div>
            <p class="pc-desc">${proj.summary}</p>
            <div class="pc-stack">
              ${proj.tech.slice(0, 4).map(t => `<span class="stack-tag">${t}</span>`).join('')}
            </div>
            <div class="pc-footer-link">
              <span>View Case Study & Photos →</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </div>
        </a>
      `).join('')}
    </div>
  `;
}
