import { portfolioData } from '../data/portfolioData.js';

export function renderSkillsMatrix(container) {
  container.innerHTML = `
    <div class="section-header">
      <div class="section-label">// 02 — skills</div>
      <h2 class="section-title">Technical Stack</h2>
      <p class="section-sub">Production-tested tools, cloud platforms, networking protocols, and development stacks.</p>
    </div>

    <div class="skills-grid">
      <div class="skill-cat">
        <div class="sc-header">
          <div class="sc-icon">☁</div>
          <div class="sc-name">Cloud & Multi-Cloud Storage</div>
        </div>
        <div class="sc-tags">
          <span class="tag">AWS EC2</span>
          <span class="tag">AWS S3</span>
          <span class="tag">AWS CloudWatch</span>
          <span class="tag">Azure Blob Storage</span>
          <span class="tag">Google Cloud Storage</span>
          <span class="tag">Cloud Cost Optimization</span>
          <span class="tag">Egress Cost Reduction</span>
          <span class="tag">Server Migration</span>
          <span class="tag">Cloud Architecture</span>
        </div>
      </div>

      <div class="skill-cat">
        <div class="sc-header">
          <div class="sc-icon">📡</div>
          <div class="sc-name">Networking & Telecom</div>
        </div>
        <div class="sc-tags">
          <span class="tag">IPv4 / IPv6 Subnetting</span>
          <span class="tag">VLAN QoS</span>
          <span class="tag">Switch Configuration</span>
          <span class="tag">Firewalls & NAT</span>
          <span class="tag">VoIP & SIP Protocol</span>
          <span class="tag">Yealink IP Phones</span>
          <span class="tag">DHCP Option 66</span>
          <span class="tag">IP Conflict Resolution</span>
        </div>
      </div>

      <div class="skill-cat">
        <div class="sc-header">
          <div class="sc-icon">💻</div>
          <div class="sc-name">Programming & Web</div>
        </div>
        <div class="sc-tags">
          <span class="tag">Python</span>
          <span class="tag">C</span>
          <span class="tag">Java</span>
          <span class="tag">SQL & Relational DBs</span>
          <span class="tag">HTML5 & CSS3</span>
          <span class="tag">JavaScript (ES6+)</span>
          <span class="tag">React.js</span>
          <span class="tag">Swift (iOS)</span>
        </div>
      </div>

      <div class="skill-cat">
        <div class="sc-header">
          <div class="sc-icon">🤖</div>
          <div class="sc-name">AI, Machine Learning & Tools</div>
        </div>
        <div class="sc-tags">
          <span class="tag">YOLOv5 Defect Detection</span>
          <span class="tag">Computer Vision</span>
          <span class="tag">TensorFlow NLP</span>
          <span class="tag">Power BI</span>
          <span class="tag">Git & GitHub</span>
          <span class="tag">GitLab CI</span>
          <span class="tag">Ubuntu / RHEL Linux</span>
          <span class="tag">LaTeX & Blender</span>
        </div>
      </div>

      <div class="skill-cat">
        <div class="sc-header">
          <div class="sc-icon">⚙️</div>
          <div class="sc-name">Operations & Documentation</div>
        </div>
        <div class="sc-tags">
          <span class="tag">Server Hardening</span>
          <span class="tag">Client Email Management</span>
          <span class="tag">System Architecture Diagrams</span>
          <span class="tag">Technical Deployment Reports</span>
          <span class="tag">Client Requirements Gathering</span>
        </div>
      </div>

      <div class="skill-cat">
        <div class="sc-header">
          <div class="sc-icon">🏢</div>
          <div class="sc-name">Academic & Credentials</div>
        </div>
        <div class="sc-tags">
          <span class="tag">B.Tech CS & Design (FISAT)</span>
          <span class="tag">HSE Science 90.75%</span>
          <span class="tag">AISSE 83.4%</span>
          <span class="tag">Project Management</span>
        </div>
      </div>
    </div>
  `;
}
