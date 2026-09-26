import { portfolioData } from '../data/portfolioData.js';

export function renderContactSection(container) {
  const p = portfolioData.personal;

  container.innerHTML = `
    <div class="section-header">
      <div class="section-label">// 06 — contact</div>
      <h2 class="section-title">Get in Touch</h2>
      <p class="section-sub">Open for Cloud & Infrastructure Engineering roles and technical opportunities.</p>
    </div>

    <div class="contact-box">
      <p class="contact-desc">
        Whether you are building multi-cloud storage infrastructure, configuring VoIP telephony networks, executing server migrations, or looking for a dedicated Cloud Engineer, my inbox is always open.
      </p>

      <div class="contact-links">
        <a href="mailto:${p.email}" class="contact-link">
          <span>📧 ${p.email}</span>
        </a>
        <a href="tel:${p.phone.replace(/\s+/g, '')}" class="contact-link">
          <span>📞 ${p.phone}</span>
        </a>
        <a href="${p.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-link">
          <span>🔗 LinkedIn</span>
        </a>
        <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="contact-link">
          <span>🐙 GitHub</span>
        </a>
      </div>

      <div style="margin-top: 2rem;">
        <button onclick="window.openHireModal()" class="btn-primary">
          <span>Instant Quick Contact / Hire Me</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  `;
}
