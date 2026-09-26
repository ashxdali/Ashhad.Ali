import { portfolioData } from '../data/portfolioData.js';

export function renderAboutSection(container) {
  const p = portfolioData.personal;

  container.innerHTML = `
    <div class="section-header">
      <div class="section-label">// 01 — about</div>
      <h2 class="section-title">The Engineer Behind<br>the Infrastructure</h2>
    </div>

    <div class="about-grid">
      <div class="about-text">
        <p>
          I'm a <strong>Cloud & Infrastructure Engineer</strong> based in Kerala, India, holding a B.Tech in Computer Science & Design Engineering from Federal Institute of Science and Technology (FISAT).
        </p>
        <p>
          Currently working as a <strong>Project Engineer at RGB Broadcasting Pvt Ltd</strong>, I manage enterprise AWS infrastructure (EC2, S3, CloudWatch), design multi-cloud storage architectures (AWS S3, Azure Blob, Google Cloud Storage), and perform seamless Linux server migrations with zero downtime.
        </p>
        <p>
          My expertise extends to <strong>VoIP and SIP telephony systems</strong> — configuring Yealink IP phones, VLAN QoS prioritization, firewalls, and NAT rules. I also apply machine learning models (YOLOv5 defect detection with 94.8% accuracy) and perform rigorous cloud cost optimization.
        </p>
      </div>

      <div class="about-cards">
        <div class="about-card">
          <div class="ac-icon">☁️</div>
          <div class="ac-title">Multi-Cloud Storage</div>
          <div class="ac-desc">AWS S3, Azure Blob & GCP Storage redundancy & cost tiering</div>
        </div>
        <div class="about-card">
          <div class="ac-icon">⚙️</div>
          <div class="ac-title">VoIP & Network Ops</div>
          <div class="ac-desc">Yealink IP Phones, SIP ALG, VLANs, NAT & firewall rules</div>
        </div>
        <div class="about-card">
          <div class="ac-icon">🖥️</div>
          <div class="ac-title">Linux & Migration</div>
          <div class="ac-desc">Ubuntu/RHEL administration, server migration & security</div>
        </div>
        <div class="about-card">
          <div class="ac-icon">📊</div>
          <div class="ac-title">Cost Opt & AI ML</div>
          <div class="ac-desc">Egress cost reduction, CloudWatch alarms & YOLOv5 ML (94.8%)</div>
        </div>
      </div>
    </div>
  `;
}
