import{s as a}from"./portfolioData-D7PaftXn-PeISaGUB.js";/* empty css                      */function n(){return new URLSearchParams(window.location.search).get("id")||"multicloud-storage"}document.addEventListener("DOMContentLoaded",()=>{const o=n(),e=a.projects.find(t=>t.id===o)||a.projects[0],s=document.getElementById("project-app");document.title=`${e.title} — Ashhad Ali M P`;const r=e.galleryImages||[e.image];s.innerHTML=`
        <div class="project-hero">
          <div class="project-badge">${e.badge}</div>
          <h1 class="project-title">${e.title}</h1>
          <div class="project-meta">Category: <strong>${e.categoryName}</strong> • Timeline: <strong>${e.period}</strong></div>
          <p style="font-size: 1.05rem; line-height: 1.7; color: var(--muted); margin-bottom: 1.5rem;">${e.summary}</p>
          
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            ${e.tech.map(t=>`<span class="stack-tag" style="font-size: 0.82rem; padding: 0.3rem 0.75rem;">${t}</span>`).join("")}
          </div>
        </div>

        <h3 style="font-family: var(--font-display); font-size: 1.4rem; margin-bottom: 1rem; color: var(--heading);">📸 Project UI & Architecture Photo Gallery</h3>
        <div class="gallery-main-container">
          <img id="main-preview-img" src="${r[0]}" alt="${e.title}" class="gallery-main-img" />
        </div>

        <div class="gallery-thumbs-row">
          ${r.map((t,i)=>`
            <div class="thumb-card ${i===0?"active":""}" onclick="selectGalleryImage(this, '${t}')">
              <img src="${t}" alt="Thumbnail ${i+1}" />
            </div>
          `).join("")}
        </div>

        <h3 style="font-family: var(--font-display); font-size: 1.4rem; margin-bottom: 1rem; color: var(--heading);">🚀 Key Engineering Achievements</h3>
        <div class="highlights-grid">
          ${e.highlights.map(t=>`
            <div class="highlight-card">
              <div style="color: var(--cyan); font-size: 1.2rem; margin-bottom: 0.5rem;">⚙️</div>
              <p style="font-size: 0.92rem; color: var(--muted); line-height: 1.6;">${t}</p>
            </div>
          `).join("")}
        </div>

        <h3 style="font-family: var(--font-display); font-size: 1.4rem; margin-bottom: 1rem; color: var(--heading);">🏗️ System Architecture & Workflow Diagram</h3>
        <pre class="arch-block"><code>${e.architecture}</code></pre>

        <div style="text-align: center; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--border);">
          <h3 style="font-family: var(--font-display); font-size: 1.3rem; margin-bottom: 0.5rem;">Interested in this Cloud Solution?</h3>
          <p style="color: var(--muted); margin-bottom: 1.5rem;">Get in touch with Ashhad to discuss implementation, deployment, or infrastructure roles.</p>
          <a href="/#contact" class="btn-primary">
            <span>Contact Ashhad Ali</span>
          </a>
        </div>
      `,window.selectGalleryImage=(t,i)=>{document.getElementById("main-preview-img").src=i,document.querySelectorAll(".thumb-card").forEach(l=>l.classList.remove("active")),t.classList.add("active")}});
