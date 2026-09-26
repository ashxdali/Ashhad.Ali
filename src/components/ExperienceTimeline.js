import { portfolioData } from '../data/portfolioData.js';

export function renderExperienceTimeline(container) {
  container.innerHTML = `
    <div class="section-header">
      <div class="section-label">// 03 — experience</div>
      <h2 class="section-title">Professional Experience</h2>
      <p class="section-sub">Production environments, enterprise infrastructure, live multi-cloud systems.</p>
    </div>

    <div class="exp-timeline">
      <div class="exp-item">
        <div class="exp-meta">
          <div class="exp-role">Project Engineer</div>
          <span class="exp-company">RGB Broadcasting Pvt Ltd</span>
          <span class="exp-date">June 2025 – Present</span>
        </div>
        <p class="exp-desc">
          Managing enterprise cloud infrastructure, multi-cloud storage architectures, Linux server migrations, and broadcast network communications. Responsible for AWS operations (EC2, CloudWatch, S3), VoIP telephony provisioning, and cloud cost optimization.
        </p>
        <div class="exp-bullets">
          <div class="exp-bullet">Managing AWS EC2, S3 & CloudWatch infrastructure</div>
          <div class="exp-bullet">Designing multi-cloud storage (AWS, Azure, GCP)</div>
          <div class="exp-bullet">Analyzing storage tiers & egress cost optimization</div>
          <div class="exp-bullet">Configuring VoIP & SIP telephony (Yealink IP phones)</div>
          <div class="exp-bullet">Implementing NAT rules, firewalls & VLAN QoS</div>
          <div class="exp-bullet">Resolving IP conflicts & subnet routing issues</div>
          <div class="exp-bullet">Executing Linux server installation & migration</div>
          <div class="exp-bullet">Client communication & system architecture docs</div>
        </div>
      </div>

      <div class="exp-item">
        <div class="exp-meta">
          <div class="exp-role">Machine Learning & AI Intern</div>
          <span class="exp-company">Keltron Knowledge Centre</span>
          <span class="exp-date">2023</span>
        </div>
        <p class="exp-desc">
          Practical training on artificial intelligence algorithms, computer vision pipelines, dataset preparation, and model accuracy evaluation metrics.
        </p>
        <div class="exp-bullets">
          <div class="exp-bullet">Developed data preprocessing pipelines</div>
          <div class="exp-bullet">Evaluated predictive model accuracy metrics</div>
          <div class="exp-bullet">Applied supervised learning algorithms in Python</div>
          <div class="exp-bullet">Prepared technical evaluation reports</div>
        </div>
      </div>

      <div class="exp-item">
        <div class="exp-meta">
          <div class="exp-role">iOS Development Intern</div>
          <span class="exp-company">iPlanet Education</span>
          <span class="exp-date">2022</span>
        </div>
        <p class="exp-desc">
          Hands-on iOS mobile application development internship covering Swift programming language fundamentals and Xcode layout design.
        </p>
        <div class="exp-bullets">
          <div class="exp-bullet">Mastered Swift programming fundamentals</div>
          <div class="exp-bullet">Designed mobile UIs using Xcode storyboard</div>
          <div class="exp-bullet">Implemented Apple HIG design standards</div>
          <div class="exp-bullet">Tested sample iOS application builds</div>
        </div>
      </div>
    </div>
  `;
}
