import { portfolioData } from '../data/portfolioData.js';

export function renderInteractiveTerminal(container) {
  container.innerHTML = `
    <div class="container">
      <div class="section-header">
        <span class="section-tag">
          <i data-lucide="terminal"></i> Developer Shell
        </span>
        <h2 class="section-title">Interactive <span class="text-gradient">Cloud CLI</span></h2>
        <p class="section-subtitle">
          Type commands or click quick action buttons below to inspect Ashhad's system profile, skills, and background.
        </p>
      </div>

      <div class="terminal-window">
        <div class="terminal-header">
          <div class="terminal-dots">
            <span class="terminal-dot dot-red"></span>
            <span class="terminal-dot dot-yellow"></span>
            <span class="terminal-dot dot-green"></span>
          </div>
          <span class="terminal-title">bash - ashhad@cloud-node-01: ~ (zsh)</span>
          <span style="font-size: 0.75rem; color: #58a6ff;">● Online</span>
        </div>

        <div class="terminal-body" id="terminal-body">
          <div class="terminal-output" id="terminal-output">
            <p style="color: #79c0ff; font-weight: 600;">Welcome to Ashhad Ali M P's Cloud Infrastructure Shell v2.4</p>
            <p style="color: #8b949e;">Type <span style="color: #d2a8ff; font-weight: 600;">help</span> to see available commands or click quick action chips below.</p>
            <br />
          </div>

          <div class="terminal-prompt-line">
            <span class="prompt-usr">ashhad@cloud-node-01</span>
            <span class="prompt-sep">:</span>
            <span class="prompt-dir">~</span>
            <span class="prompt-sign">$</span>
            <input type="text" id="terminal-input" class="terminal-input" placeholder="type a command..." autocomplete="off" spellcheck="false" />
          </div>
        </div>

        <div class="terminal-quick-cmds">
          <span style="font-size: 0.75rem; color: #8b949e; font-weight: 600; margin-right: 0.25rem;">Quick Commands:</span>
          <button class="quick-cmd-btn" data-cmd="help">help</button>
          <button class="quick-cmd-btn" data-cmd="about">about</button>
          <button class="quick-cmd-btn" data-cmd="skills">skills</button>
          <button class="quick-cmd-btn" data-cmd="exp">exp</button>
          <button class="quick-cmd-btn" data-cmd="projects">projects</button>
          <button class="quick-cmd-btn" data-cmd="cat resume.txt">cat resume.txt</button>
          <button class="quick-cmd-btn" data-cmd="sudo hire">sudo hire</button>
          <button class="quick-cmd-btn" data-cmd="clear">clear</button>
        </div>
      </div>
    </div>
  `;

  const inputEl = container.querySelector('#terminal-input');
  const outputEl = container.querySelector('#terminal-output');
  const bodyEl = container.querySelector('#terminal-body');

  function appendLine(text, color = '#c9d1d9') {
    const p = document.createElement('div');
    p.style.color = color;
    p.style.lineHeight = '1.6';
    p.style.marginBottom = '0.25rem';
    p.innerHTML = text;
    outputEl.appendChild(p);
    bodyEl.scrollTop = bodyEl.scrollHeight;
  }

  function executeCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    // Append user input line
    appendLine(`
      <span style="color: #58a6ff;">ashhad@cloud-node-01</span>:<span style="color: #7ee787;">~</span>$ <span style="color: #f0f6fc; font-weight: 600;">${rawCmd}</span>
    `);

    switch (cmd) {
      case 'help':
        appendLine(`
          <span style="color: #d2a8ff; font-weight: 700;">Available Commands:</span><br/>
          • <span style="color: #79c0ff;">about</span>          - Short bio & engineering overview<br/>
          • <span style="color: #79c0ff;">skills</span>         - Cloud, Networking & Programming skills<br/>
          • <span style="color: #79c0ff;">exp</span>            - Work experience & internships<br/>
          • <span style="color: #79c0ff;">projects</span>       - Summary of key technical projects<br/>
          • <span style="color: #79c0ff;">cat resume.txt</span> - Output full text resume<br/>
          • <span style="color: #79c0ff;">contact</span>        - View email, phone, and social links<br/>
          • <span style="color: #79c0ff;">sudo hire</span>      - Execute instant candidate hire protocol!<br/>
          • <span style="color: #79c0ff;">clear</span>          - Clear terminal logs
        `, '#c9d1d9');
        break;

      case 'about':
        appendLine(`
          <span style="color: #79c0ff; font-weight: 700;">${portfolioData.personal.name}</span> - ${portfolioData.personal.title}<br/>
          📍 Location: ${portfolioData.personal.location}<br/>
          🎓 Degree: B.Tech in CS & Design Engineering (FISAT, 2021-2025)<br/>
          💼 Current Role: Project Engineer @ RGB Broadcasting Pvt Ltd<br/>
          ⚡ Focus: AWS Infrastructure, Multi-Cloud Redundancy, Network Troubleshooting, VoIP/SIP Systems.
        `, '#e6edf3');
        break;

      case 'skills':
        appendLine(`
          <span style="color: #7ee787; font-weight: 700;">Technical Skill Breakdown:</span><br/>
          ☁️ <span style="color: #d2a8ff;">Cloud & Storage:</span> AWS (EC2, S3, CloudWatch), Azure Blob, Google Cloud Storage, Cost Optimization<br/>
          🌐 <span style="color: #d2a8ff;">Networking:</span> IPv4/v6, Switch Config, NAT, Firewalls, VoIP, SIP (Yealink)<br/>
          💻 <span style="color: #d2a8ff;">Programming:</span> Python, C, SQL, Java, JavaScript, React.js, Swift<br/>
          🤖 <span style="color: #d2a8ff;">AI & Tools:</span> YOLOv5 (94.8% mAP), TensorFlow, Power BI, Linux, Git
        `, '#e6edf3');
        break;

      case 'exp':
        appendLine(`
          <span style="color: #ffa657; font-weight: 700;">Professional Experience:</span><br/>
          1. <span style="color: #79c0ff; font-weight: 600;">Project Engineer</span> @ RGB Broadcasting Pvt Ltd (June 2025 – Present)<br/>
             - AWS Cloud management, Multi-Cloud storage setup, Linux server migration & VoIP troubleshooting.<br/>
          2. <span style="color: #79c0ff; font-weight: 600;">iOS Development Intern</span> @ iPlanet Education (2022)<br/>
          3. <span style="color: #79c0ff; font-weight: 600;">ML & AI Intern</span> @ Keltron Knowledge Centre (2023)
        `, '#e6edf3');
        break;

      case 'projects':
        appendLine(`
          <span style="color: #d2a8ff; font-weight: 700;">Featured Projects:</span><br/>
          1. <span style="color: #79c0ff;">Multi-Cloud Storage System</span> (AWS S3 + Azure Blob + GCS redundancy & failover)<br/>
          2. <span style="color: #79c0ff;">PCB Anomaly Detection Using ML</span> (YOLOv5 model with 94.8% defect detection accuracy)<br/>
          3. <span style="color: #79c0ff;">Mental Health Virtual Assistant Chatbot</span> (TensorFlow NLP emotion detection & SQLite)
        `, '#e6edf3');
        break;

      case 'contact':
        appendLine(`
          <span style="color: #7ee787; font-weight: 700;">Contact Details:</span><br/>
          📧 Email: <a href="mailto:${portfolioData.personal.email}" style="color: #58a6ff;">${portfolioData.personal.email}</a><br/>
          📞 Phone: ${portfolioData.personal.phone}<br/>
          🔗 LinkedIn: <a href="${portfolioData.personal.linkedin}" target="_blank" style="color: #58a6ff;">linkedin.com/in/ashh6</a><br/>
          🐙 GitHub: <a href="${portfolioData.personal.github}" target="_blank" style="color: #58a6ff;">github.com/ashxdali</a>
        `, '#e6edf3');
        break;

      case 'cat resume.txt':
        appendLine(`
          <span style="color: #79c0ff; font-weight: bold;">--- RESUME SUMMARY: ASHHAD ALI M P ---</span><br/>
          Computer Science & Design Engineering graduate and Project Engineer at RGB Broadcasting Pvt Ltd.<br/>
          Hands-on expertise in AWS, Azure Blob, GCS, VoIP SIP telephony, network troubleshooting, and ML systems.<br/>
          <span style="color: #7ee787;">[Click the "Resume" button in navbar to preview/print official document]</span>
        `, '#e6edf3');
        break;

      case 'sudo hire':
        appendLine(`
          <span style="color: #7ee787; font-weight: bold;">[SUCCESS] Root privileges granted! 🎉</span><br/>
          Initializing candidate onboarding pipeline for Ashhad Ali M P...<br/>
          <span style="color: #ffa657;">Navigating to contact section now!</span>
        `, '#7ee787');
        setTimeout(() => {
          const contactSec = document.querySelector('#contact');
          if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
        }, 800);
        break;

      case 'clear':
        outputEl.innerHTML = '';
        break;

      default:
        appendLine(`zsh: command not found: <span style="color: #ff7b72;">${cmd}</span>. Type <span style="color: #79c0ff;">help</span> for commands.`, '#ff7b72');
        break;
    }

    inputEl.value = '';
  }

  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputEl.value);
    }
  });

  // Quick command buttons
  const quickBtns = container.querySelectorAll('.quick-cmd-btn');
  quickBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      executeCommand(cmd);
      inputEl.focus();
    });
  });
}
