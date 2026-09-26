import { portfolioData } from '../data/portfolioData.js';

export function renderCertificationsDocs(container) {
  const docs = portfolioData.docs;
  const certs = portfolioData.certifications;

  container.innerHTML = `
    <div class="section-header">
      <div class="section-label">// 05 — docs & certs</div>
      <h2 class="section-title">Technical Documentation & Certifications</h2>
      <p class="section-sub">System architecture guides, network diagnostic checklists, and professional engineering credentials.</p>
    </div>

    <h3 style="font-family: var(--font-display); font-size: 1.3rem; margin-bottom: 1.5rem; color: #ffffff;">Technical Engineering Documents</h3>
    <div class="docs-grid" style="margin-bottom: 3.5rem;">
      ${docs.map(doc => `
        <div class="doc-card" data-doc-id="${doc.id}">
          <div class="doc-meta">${doc.category} • ${doc.readTime}</div>
          <div class="doc-title">${doc.title}</div>
          <p class="doc-desc">${doc.snippet}</p>
        </div>
      `).join('')}
    </div>

    <h3 style="font-family: var(--font-display); font-size: 1.3rem; margin-bottom: 1.5rem; color: #ffffff;">Certifications & Credentials</h3>
    <div class="skills-grid" style="grid-template-columns: repeat(3, 1fr);">
      ${certs.slice(0, 6).map(c => `
        <div class="about-card">
          <div class="ac-icon">📜</div>
          <div class="ac-title">${c.title}</div>
          <div class="ac-desc" style="color: var(--cyan); margin-bottom: 0.4rem; font-family: var(--font-mono); font-size: 0.72rem;">${c.issuer}</div>
          <div class="ac-desc">${c.description}</div>
        </div>
      `).join('')}
    </div>
  `;

  // Attach click listener for technical document modal
  const docCards = container.querySelectorAll('.doc-card');
  docCards.forEach(card => {
    card.addEventListener('click', () => {
      const docId = card.getAttribute('data-doc-id');
      const docItem = docs.find(d => d.id === docId) || docs[0];
      if (window.openModalForDoc) {
        window.openModalForDoc(docItem);
      }
    });
  });
}
