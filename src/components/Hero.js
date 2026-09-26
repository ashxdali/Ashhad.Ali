import { portfolioData } from '../data/portfolioData.js';

export function renderHero(container) {
  const p = portfolioData.personal;

  container.innerHTML = `
    <div class="hero-glow"></div>

    <div class="hero-left">
      <div class="hero-badge">${p.status}</div>
      <h1 class="hero-name">
        Ashhad<br><span class="accent">Ali M P</span>
      </h1>
      <div class="hero-role">
        <span id="hero-typing"></span><span class="cursor"></span>
      </div>
      <p class="hero-desc">
        ${p.summary}
      </p>
      <div class="hero-actions">
        <a href="./assets/Ashhad_Ali_Resume.pdf" download="Ashhad_Ali_Resume.pdf" class="btn-primary" style="background: linear-gradient(135deg, #00D4FF 0%, #0072FF 100%); border: none;">
          <span>📥 Download Resume (PDF)</span>
        </a>
        <a href="#projects" onclick="window.smoothTo(event,'projects')" class="btn-ghost">
          <span>View Projects</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <a href="#contact" onclick="window.smoothTo(event,'contact')" class="btn-ghost">
          <span>Get in Touch</span>
        </a>
      </div>

      <div class="cloud-badges">
        <span class="cloud-badge cb-aws">☁ AWS</span>
        <span class="cloud-badge cb-azure">⬡ Azure</span>
        <span class="cloud-badge cb-gcp">◎ GCP / Multi-Cloud</span>
      </div>

      <div class="hero-stats">
        <div class="stat-item">
          <div class="stat-num">3<span>+</span></div>
          <div class="stat-label">Cloud Platforms</div>
        </div>
        <div class="stat-item">
          <div class="stat-num">94.8<span>%</span></div>
          <div class="stat-label">ML Accuracy</div>
        </div>
        <div class="stat-item">
          <div class="stat-num">90.75<span>%</span></div>
          <div class="stat-label">HSE Marks</div>
        </div>
      </div>
    </div>

    <!-- EMBEDDED INTERACTIVE TERMINAL -->
    <div class="hero-terminal">
      <div class="terminal-window">
        <div class="terminal-bar">
          <div class="tb-dot red"></div>
          <div class="tb-dot yellow"></div>
          <div class="tb-dot green"></div>
          <div class="tb-title">bash — ashhad@cloud-server</div>
        </div>
        <div class="terminal-body" id="termOutput">
          <div class="t-line"><span class="t-prompt">ashhad@cloud:~$</span><span class="t-cmd">&nbsp;whoami</span></div>
          <div class="t-output success">Ashhad Ali M P</div>
          <div class="t-output">Cloud &amp; Infrastructure Engineer | Ernakulam / Kozhikode, India</div>
          <br>
          <div class="t-line"><span class="t-prompt">ashhad@cloud:~$</span><span class="t-cmd">&nbsp;cat expertise.txt</span></div>
          <div class="t-output info">[ AWS ] [ Azure Blob ] [ Google Cloud Storage ]</div>
          <div class="t-output info">[ VoIP / SIP ] [ Yealink IP Phones ] [ Switch Config ]</div>
          <div class="t-output info">[ Linux Server Migration ] [ YOLOv5 ML ] [ Python ]</div>
          <br>
          <div class="t-line"><span class="t-prompt">ashhad@cloud:~$</span><span class="t-cmd">&nbsp;systemctl status production</span></div>
          <div class="t-output success">● production.service - ACTIVE (running)</div>
          <div class="t-output">   Loaded: enabled; vendor preset: enabled</div>
          <div class="t-output">   Uptime: continuously monitored</div>
          <br>
          <div class="t-output warn">Type a command below. Try: help, skills, projects, contact</div>
        </div>
        <div class="terminal-input-line">
          <span class="t-input-prompt">ashhad@cloud:~$</span>
          <input type="text" id="termInput" placeholder="type a command..." autocomplete="off" spellcheck="false">
        </div>
        <div class="t-hint">Commands: help · whoami · skills · projects · exp · contact · clear</div>
      </div>
    </div>
  `;

  // Typing animation
  const roles = [
    "Cloud & Infrastructure Engineer",
    "Project Engineer @ RGB Broadcasting",
    "AWS, Azure & GCP Storage Specialist",
    "VoIP & IP Telephony Specialist",
    "CS & Design Engineering Graduate"
  ];
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const target = container.querySelector('#hero-typing');

  function typeEffect() {
    if (!target) return;
    const currentRole = roles[roleIdx];
    if (isDeleting) {
      target.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
    } else {
      target.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIdx === currentRole.length) {
      speed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      speed = 400;
    }

    setTimeout(typeEffect, speed);
  }

  typeEffect();

  // Terminal Handler
  const termInput = container.querySelector('#termInput');
  const termOutput = container.querySelector('#termOutput');

  function appendTermLine(htmlContent) {
    const div = document.createElement('div');
    div.innerHTML = htmlContent;
    termOutput.appendChild(div);
    termOutput.scrollTop = termOutput.scrollHeight;
  }

  function handleCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    appendTermLine(`<div class="t-line"><span class="t-prompt">ashhad@cloud:~$</span><span class="t-cmd">&nbsp;${rawCmd}</span></div>`);

    switch (cmd) {
      case 'help':
        appendTermLine(`
          <div class="t-output info">Available Commands:</div>
          <div class="t-output">• <span style="color: var(--cyan);">whoami</span> - Brief profile summary</div>
          <div class="t-output">• <span style="color: var(--cyan);">skills</span> - Technical skills breakdown</div>
          <div class="t-output">• <span style="color: var(--cyan);">projects</span> - Featured cloud & ML projects</div>
          <div class="t-output">• <span style="color: var(--cyan);">exp</span> - Work experience & internships</div>
          <div class="t-output">• <span style="color: var(--cyan);">contact</span> - Contact info & social links</div>
          <div class="t-output">• <span style="color: var(--cyan);">hire</span> - Trigger direct quick contact modal</div>
          <div class="t-output">• <span style="color: var(--cyan);">clear</span> - Clear terminal logs</div>
        `);
        break;

      case 'whoami':
        appendTermLine(`
          <div class="t-output success">${p.name}</div>
          <div class="t-output">${p.title}</div>
          <div class="t-output">📍 ${p.location}</div>
        `);
        break;

      case 'skills':
        appendTermLine(`
          <div class="t-output info">[ Cloud ] AWS EC2, S3, CloudWatch, Azure Blob, GCS</div>
          <div class="t-output info">[ Telephony ] VoIP SIP, Yealink IP Phones, VLANs</div>
          <div class="t-output info">[ Code & AI ] Python, SQL, React, YOLOv5 ML (94.8% Acc)</div>
        `);
        break;

      case 'projects':
        appendTermLine(`
          <div class="t-output success">1. Multi-Cloud Storage Engine (AWS + Azure + GCP)</div>
          <div class="t-output success">2. VoIP Telephony & Network Infrastructure</div>
          <div class="t-output success">3. PCB Defect Detection AI (YOLOv5 Model)</div>
        `);
        break;

      case 'exp':
        appendTermLine(`
          <div class="t-output info">● Project Engineer @ RGB Broadcasting Pvt Ltd (2025-Present)</div>
          <div class="t-output info">● iOS Development Intern @ iPlanet Education (2022)</div>
          <div class="t-output info">● ML & AI Intern @ Keltron Knowledge Centre (2023)</div>
        `);
        break;

      case 'contact':
        appendTermLine(`
          <div class="t-output info">📧 Email: ${p.email}</div>
          <div class="t-output info">📞 Phone: ${p.phone}</div>
          <div class="t-output info">🔗 LinkedIn: ${p.linkedin}</div>
          <div class="t-output info">🐙 GitHub: ${p.github}</div>
        `);
        break;

      case 'hire':
      case 'sudo hire':
        appendTermLine(`<div class="t-output success">[SUCCESS] Opening hire contact modal...</div>`);
        if (window.openHireModal) window.openHireModal();
        break;

      case 'clear':
        termOutput.innerHTML = '';
        break;

      default:
        appendTermLine(`<div class="t-output warn">Command not found: ${cmd}. Type "help" for options.</div>`);
        break;
    }

    termInput.value = '';
  }

  if (termInput) {
    termInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleCommand(termInput.value);
    });
  }
}
