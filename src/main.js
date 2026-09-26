import { createIcons, icons } from 'lucide';
import { portfolioData } from './data/portfolioData.js';
import { renderNavbar } from './components/Navbar.js';
import { renderHero } from './components/Hero.js';
import { renderAboutSection } from './components/AboutSection.js';
import { renderSkillsMatrix } from './components/SkillsMatrix.js';
import { renderExperienceTimeline } from './components/ExperienceTimeline.js';
import { renderProjectsShowcase } from './components/ProjectsShowcase.js';
import { renderCertificationsDocs } from './components/CertificationsDocs.js';
import { renderContactSection } from './components/ContactSection.js';
import { renderFooter } from './components/Footer.js';

// Initialize Lucide icons globally
window.lucide = { createIcons, icons };

// Smooth Scroll helper
window.smoothTo = (event, sectionId) => {
  if (event) event.preventDefault();
  const target = document.getElementById(sectionId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Render Components
  const navbarContainer = document.getElementById('navbar-container');
  const heroSection = document.getElementById('hero');
  const aboutSection = document.getElementById('about');
  const skillsSection = document.getElementById('skills');
  const expSection = document.getElementById('experience');
  const projectsSection = document.getElementById('projects');
  const certsDocsSection = document.getElementById('certifications-docs');
  const contactSection = document.getElementById('contact');
  const footerContainer = document.getElementById('footer-container');

  renderNavbar(navbarContainer);
  renderHero(heroSection);
  if (aboutSection) renderAboutSection(aboutSection);
  renderSkillsMatrix(skillsSection);
  renderExperienceTimeline(expSection);
  renderProjectsShowcase(projectsSection);
  renderCertificationsDocs(certsDocsSection);
  renderContactSection(contactSection);
  renderFooter(footerContainer);

  createIcons();

  // Setup Modal Root & Triggers
  const modalOverlay = document.getElementById('modal-root');
  const modalClose = document.getElementById('modal-close');
  const modalContent = document.getElementById('modal-content');

  function openModal(htmlContent) {
    modalContent.innerHTML = htmlContent;
    modalOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    createIcons();
  }

  function closeModal() {
    modalOverlay.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Global Hire Me / Quick Contact Modal
  window.openHireModal = () => {
    const p = portfolioData.personal;
    const content = `
      <div>
        <div class="modal-eyebrow">Available for Opportunities</div>
        <h2 class="modal-title">Get in Touch with Ashhad</h2>
        <p class="modal-subtitle">Choose your preferred channel below to discuss cloud infrastructure, VoIP networks, or engineering roles.</p>
        
        <div class="modal-options">
          <a href="mailto:${p.email}" class="modal-option mo-email">
            <div class="mo-icon">✉️</div>
            <div class="mo-label">
              <strong>Send Email</strong>
              <span>${p.email}</span>
            </div>
            <span class="mo-arrow">→</span>
          </a>

          <a href="https://wa.me/918896" target="_blank" rel="noopener noreferrer" class="modal-option mo-whatsapp">
            <div class="mo-icon">💬</div>
            <div class="mo-label">
              <strong>WhatsApp Message</strong>
              <span>Instant Messaging</span>
            </div>
            <span class="mo-arrow">→</span>
          </a>

          <a href="tel:${p.phone.replace(/\s+/g, '')}" class="modal-option mo-phone">
            <div class="mo-icon">📞</div>
            <div class="mo-label">
              <strong>Direct Phone Call</strong>
              <span>${p.phone}</span>
            </div>
            <span class="mo-arrow">→</span>
          </a>

          <a href="${p.linkedin}" target="_blank" rel="noopener noreferrer" class="modal-option mo-linkedin">
            <div class="mo-icon">🔗</div>
            <div class="mo-label">
              <strong>LinkedIn Profile</strong>
              <span>linkedin.com/in/ashh6</span>
            </div>
            <span class="mo-arrow">→</span>
          </a>

          <button onclick="window.openModalForResume()" class="modal-option mo-cv">
            <div class="mo-icon">📄</div>
            <div class="mo-label">
              <strong>View / Print Resume</strong>
              <span>Full Technical CV</span>
            </div>
            <span class="mo-arrow">→</span>
          </button>
        </div>
      </div>
    `;
    openModal(content);
  };

  // Global Project Architecture & Image Gallery Modal
  window.openModalForProject = (proj) => {
    const galleryImages = proj.galleryImages || [proj.image];
    const content = `
      <div style="font-family: var(--font-body); color: var(--text);">
        <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--blue); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem; font-weight: 700;">${proj.badge}</div>
        <h2 style="font-family: var(--font-display); font-size: 1.75rem; margin-bottom: 0.4rem; color: var(--heading);">${proj.title}</h2>
        <div style="font-family: var(--font-mono); font-size: 0.82rem; color: var(--cyan); margin-bottom: 1.5rem; font-weight: 600;">${proj.period} • ${proj.categoryName}</div>

        <div style="margin-bottom: 1.5rem; overflow: hidden; border-radius: 10px; border: 1px solid var(--border);">
          <img id="main-gallery-preview" src="${galleryImages[0]}" alt="${proj.title}" style="width: 100%; max-height: 340px; object-fit: cover; display: block;" />
        </div>

        <h4 style="font-family: var(--font-display); font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--heading);">Project Overview</h4>
        <p style="color: var(--muted); margin-bottom: 1.5rem; line-height: 1.7; font-size: 0.92rem;">${proj.summary}</p>

        <h4 style="font-family: var(--font-display); font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--heading);">Key Technical Achievements</h4>
        <ul style="list-style-type: disc; padding-left: 1.25rem; color: var(--muted); margin-bottom: 1.5rem; line-height: 1.7; font-size: 0.9rem;">
          ${proj.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>

        <h4 style="font-family: var(--font-display); font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--heading);">System Architecture Diagram</h4>
        <pre style="background: #0A0A14; color: #00D4FF; padding: 1.25rem; border-radius: 8px; font-family: var(--font-mono); font-size: 0.82rem; overflow-x: auto; border: 1px solid var(--border); margin-bottom: 1.5rem;"><code>${proj.architecture}</code></pre>

        <h4 style="font-family: var(--font-display); font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--heading);">Project UI & Screenshots Gallery</h4>
        <div class="project-gallery-grid">
          ${galleryImages.map((img, i) => `
            <img src="${img}" alt="Project Image ${i+1}" class="gallery-thumb" onclick="document.getElementById('main-gallery-preview').src='${img}'" />
          `).join('')}
        </div>

        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1.5rem;">
          ${proj.tech.map(t => `<span class="stack-tag">${t}</span>`).join('')}
        </div>
      </div>
    `;
    openModal(content);
  };

  // Global Technical Document Modal
  window.openModalForDoc = (docItem) => {
    let docBody = '';
    if (docItem.id === 'doc-multicloud') {
      docBody = `
        <p>Designing a multi-cloud storage system with high availability involves 3 pillars:</p>
        <ol style="margin-left: 1.25rem; margin-top: 0.8rem; line-height: 1.8; color: var(--muted);">
          <li><strong>Cross-Cloud Bucket Mirroring:</strong> Object uploads to AWS S3 trigger asynchronous replication workers to Azure Blob Storage and Google Cloud Storage.</li>
          <li><strong>Access Control & Security Scoping:</strong> Utilizing IAM Roles for AWS, SAS Tokens for Azure Blob, and Service Account Keys for GCP.</li>
          <li><strong>Cost Tiering & Egress Mitigation:</strong> Hot active uploads in AWS S3 Standard, cold backups in Azure Cool Blob, and archives in GCP Coldline.</li>
        </ol>
      `;
    } else if (docItem.id === 'doc-voip') {
      docBody = `
        <p>Recommended diagnostic sequence when resolving SIP registration drops or audio packet loss:</p>
        <ol style="margin-left: 1.25rem; margin-top: 0.8rem; line-height: 1.8; color: var(--muted);">
          <li><strong>NAT Traversal & STUN/TURN:</strong> Verify SIP ALG is disabled on perimeter firewalls to prevent header corruption.</li>
          <li><strong>IP Addressing & Option 66:</strong> Ensure Yealink IP phones receive valid DHCP options for automated provisioning.</li>
          <li><strong>VLAN QoS Prioritization:</strong> Configure DSCP (EF 46) on switch ports to prioritize VoIP voice frames over general data.</li>
        </ol>
      `;
    } else {
      docBody = `
        <p>Best practices for deep learning anomaly inspection on micro PCBs:</p>
        <ol style="margin-left: 1.25rem; margin-top: 0.8rem; line-height: 1.8; color: var(--muted);">
          <li><strong>Dataset Preparation:</strong> Annotated 1,386 high-res PCB images with bounding boxes for missing components, solder bridges, and trace cracks.</li>
          <li><strong>Hyperparameter Tuning:</strong> Trained YOLOv5s model for 75 epochs with mosaic augmentation and SGD optimizer.</li>
          <li><strong>Inference Pipeline:</strong> Optimized PyTorch model using TensorRT for real-time inspection output.</li>
        </ol>
      `;
    }

    const content = `
      <div style="font-family: var(--font-body);">
        <div style="font-family: var(--font-mono); color: var(--cyan); font-size: 0.8rem; margin-bottom: 0.5rem;">${docItem.category} • ${docItem.readTime}</div>
        <h2 style="font-family: var(--font-display); font-size: 1.75rem; margin-bottom: 1rem; color: var(--heading);">${docItem.title}</h2>
        <div style="padding: 1.5rem; background: var(--surface); border-radius: 10px; border: 1px solid var(--border); margin-bottom: 1.5rem;">
          ${docBody}
        </div>
        <button onclick="window.print()" class="btn-ghost">
          <span>Print Technical Document</span>
        </button>
      </div>
    `;
    openModal(content);
  };

  // Global Resume View Modal
  window.openModalForResume = () => {
    const p = portfolioData.personal;
    const content = `
      <div style="font-family: var(--font-body); color: var(--text); max-width: 720px; margin: 0 auto;">
        <div style="text-align: center; border-bottom: 1px solid var(--border); padding-bottom: 1.25rem; margin-bottom: 1.5rem;">
          <h1 style="font-family: var(--font-display); font-size: 2rem; margin-bottom: 0.25rem; color: var(--heading);">${p.name}</h1>
          <div style="font-size: 0.92rem; color: var(--blue); margin-bottom: 0.5rem; font-weight: 600;">${p.title}</div>
          <div style="font-size: 0.82rem; color: var(--muted); display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; font-family: var(--font-mono);">
            <span>${p.email}</span> | <span>${p.phone}</span> | <span>${p.location}</span>
          </div>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <h3 style="font-family: var(--font-display); font-size: 1.1rem; border-bottom: 1px solid var(--border); padding-bottom: 0.25rem; margin-bottom: 0.5rem; color: var(--blue);">PROFESSIONAL SUMMARY</h3>
          <p style="font-size: 0.9rem; color: var(--muted); line-height: 1.6;">${p.summary}</p>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <h3 style="font-family: var(--font-display); font-size: 1.1rem; border-bottom: 1px solid var(--border); padding-bottom: 0.25rem; margin-bottom: 0.5rem; color: var(--blue);">WORK EXPERIENCE</h3>
          ${portfolioData.experience.map(e => `
            <div style="margin-bottom: 1rem;">
              <div style="display: flex; justify-content: space-between; font-weight: 700; font-size: 0.92rem; color: var(--heading);">
                <span>${e.role} — ${e.company}</span>
                <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--blue);">${e.period}</span>
              </div>
              <ul style="padding-left: 1.25rem; font-size: 0.85rem; color: var(--muted); margin-top: 0.35rem;">
                ${e.bullets.map(b => `<li>${b}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>

        <div style="margin-bottom: 1.5rem;">
          <h3 style="font-family: var(--font-display); font-size: 1.1rem; border-bottom: 1px solid var(--border); padding-bottom: 0.25rem; margin-bottom: 0.5rem; color: var(--blue);">ACADEMIC CREDENTIALS</h3>
          ${portfolioData.education.map(edu => `
            <div style="display: flex; justify-content: space-between; font-size: 0.88rem; margin-bottom: 0.35rem; color: var(--muted);">
              <span><strong style="color: var(--heading);">${edu.degree}</strong> — ${edu.institution}</span>
              <span style="font-family: var(--font-mono); color: var(--blue);">${edu.year}</span>
            </div>
          `).join('')}
        </div>

        <div style="margin-bottom: 1.5rem;">
          <h3 style="font-family: var(--font-display); font-size: 1.1rem; border-bottom: 1px solid var(--border); padding-bottom: 0.25rem; margin-bottom: 0.5rem; color: var(--blue);">CERTIFICATIONS</h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; font-size: 0.85rem; color: var(--muted);">
            ${portfolioData.certifications.map(c => `<div>• <strong style="color: var(--heading);">${c.title}</strong> (${c.issuer})</div>`).join('')}
          </div>
        </div>

        <div style="text-align: center; margin-top: 2rem;">
          <button onclick="window.print()" class="btn-primary">
            <span>Print / Save PDF Resume</span>
          </button>
        </div>
      </div>
    `;
    openModal(content);
  };
});
