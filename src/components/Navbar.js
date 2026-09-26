export function renderNavbar(container) {
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);

  container.innerHTML = `
    <nav id="navbar">
      <a href="#hero" class="nav-logo">ashhad<span>@cloud</span>:~$</a>
      <ul class="nav-links">
        <li><a href="#about" onclick="window.smoothTo(event,'about')">About</a></li>
        <li><a href="#skills" onclick="window.smoothTo(event,'skills')">Skills</a></li>
        <li><a href="#experience" onclick="window.smoothTo(event,'experience')">Experience</a></li>
        <li><a href="#projects" onclick="window.smoothTo(event,'projects')">Projects</a></li>
        <li><a href="#certifications-docs" onclick="window.smoothTo(event,'certifications-docs')">Docs & Certs</a></li>
        <li><a href="/assets/Ashhad_Ali_Resume.pdf" download="Ashhad_Ali_Resume.pdf" style="color: var(--cyan); font-weight: 600;">📥 Resume PDF</a></li>
        <li><a href="#contact" onclick="window.smoothTo(event,'contact')">Contact</a></li>
      </ul>
      <div class="nav-right-actions">
        <button id="theme-toggle" class="theme-toggle-btn" aria-label="Toggle Light/Dark Theme" title="Toggle Theme">
          <i data-lucide="${currentTheme === 'dark' ? 'sun' : 'moon'}"></i>
        </button>
        <button onclick="window.openHireModal()" class="nav-cta">hire me</button>
      </div>
    </nav>
  `;

  const themeBtn = container.querySelector('#theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const nextTheme = activeTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('theme', nextTheme);
      themeBtn.innerHTML = `<i data-lucide="${nextTheme === 'dark' ? 'sun' : 'moon'}"></i>`;
      if (window.lucide) window.lucide.createIcons();
    });
  }
}
