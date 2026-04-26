import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import data from centralized content
import { aboutMe, experience } from '../src/data/content.ts';

const translations = {
  es: {
    'about.title': 'PERFIL PROFESIONAL',
    'experience.title': 'EXPERIENCIA LABORAL',
    'skills.title': 'HABILIDADES',
    'languages.title': 'IDIOMAS',
    'contact.title': 'CONTACTO',
    'social.title': 'REDES',
    'native.label': 'Nativo',
    'foreign.label': 'Básico',
  },
  en: {
    'about.title': 'PROFESSIONAL PROFILE',
    'experience.title': 'WORK EXPERIENCE',
    'skills.title': 'TECHNICAL SKILLS',
    'languages.title': 'LANGUAGES',
    'contact.title': 'CONTACT',
    'social.title': 'SOCIAL',
    'native.label': 'Native',
    'foreign.label': 'Basic',
  },
};

async function generateCVHTML(lang) {
  const t = translations[lang];
  const aboutData = aboutMe[lang];
  const experiences = experience.map((exp) => exp[lang]);

  const html = `
<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CV - ${aboutData.name}</title>
  <style>
    @page {
      size: A4;
      margin: 0;
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
      font-size: 10.5px;
      line-height: 1.5;
      color: #242633;
      background: #fff;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    /* ===== SOLUCIÓN PARA FONDO MULTI-PÁGINA ===== */
    .sidebar-bg {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      width: 32%;
      background: #242633;
      z-index: 0;
    }

    /* ===== SOLUCIÓN PARA MÁRGENES ENTRE PÁGINAS ===== */
    .layout-table {
      width: 100%;
      border-collapse: collapse;
      position: relative;
      z-index: 1;
    }
    .layout-table thead th,
    .layout-table tfoot td {
      height: 22mm; /* Esto crea un margen superior e inferior consistente en TODAS las páginas */
      padding: 0;
    }
    .layout-table tbody td {
      padding: 0;
      vertical-align: top;
    }

    .cv-container {
      display: flex;
      align-items: flex-start;
      width: 100%;
    }

    /* ===== SIDEBAR ===== */
    .sidebar {
      width: 32%;
      color: #f8f9fa;
      padding: 0 12mm; /* El padding vertical lo maneja la tabla */
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .profile-img {
      width: 85px;
      height: 85px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 18px;
      border: 3px solid #dbc404;
      box-shadow: 0 0 0 4px rgba(219, 196, 4, 0.15);
    }
    .sidebar-section {
      width: 100%;
      margin-bottom: 18px;
    }
    .sidebar-title {
      color: #dbc404;
      font-size: 11px;
      font-weight: 700;
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      border-bottom: 1px solid rgba(219, 196, 4, 0.3);
      padding-bottom: 6px;
    }
    .sidebar p, .sidebar a {
      color: #e2e8f0;
      font-size: 10px;
      margin: 6px 0;
      text-decoration: none;
      display: block;
      word-break: break-word;
    }
    .sidebar a:hover {
      color: #dbc404;
    }
    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }
    .skill {
      background: rgba(219, 196, 4, 0.12);
      color: #f8f9fa;
      padding: 4px 10px;
      border-radius: 4px;
      font-size: 9px;
      border: 1px solid rgba(219, 196, 4, 0.25);
    }
    .languages {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .language {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .language-name {
      font-size: 10px;
      font-weight: 600;
    }
    .language-level {
      font-size: 9px;
      color: #dbc404;
      background: rgba(219, 196, 4, 0.12);
      padding: 2px 8px;
      border-radius: 10px;
    }

    /* ===== MAIN CONTENT ===== */
    .main-content {
      width: 68%;
      padding: 0 18mm; /* El padding vertical lo maneja la tabla */
    }
    .header {
      margin-bottom: 18px;
      padding-bottom: 14px;
      border-bottom: 3px solid #2e78c7;
      break-inside: avoid;
    }
    .header h1 {
      font-size: 26px;
      color: #242633;
      margin-bottom: 4px;
      font-weight: 800;
      letter-spacing: -0.5px;
    }
    .header h2 {
      font-size: 14px;
      color: #2e78c7;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .section {
      margin-bottom: 16px;
    }
    .section-title {
      font-size: 13px;
      color: #242633;
      margin-bottom: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      display: flex;
      align-items: center;
      gap: 8px;
      break-after: avoid;
      page-break-after: avoid; /* Evita que el título se imprima solo al final de la página */
    }
    .section-title::before {
      content: '';
      display: inline-block;
      width: 6px;
      height: 6px;
      background: #dbc404;
      border-radius: 50%;
    }
    .section-title::after {
      content: '';
      flex: 1;
      height: 1px;
      background: #e2e8f0;
      margin-left: 4px;
    }
    .bio-text {
      color: #475569;
      font-size: 10.5px;
      margin-bottom: 6px;
      text-align: justify;
    }
    .experience-item {
      margin-bottom: 14px;
      padding-bottom: 10px;
      border-bottom: 1px solid #f1f5f9;
      break-inside: avoid;
      page-break-inside: avoid;
    }
    .experience-item:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }
    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 4px;
    }
    .job-title {
      font-size: 12px;
      font-weight: 700;
      color: #242633;
    }
    .job-duration {
      font-size: 9.5px;
      color: #2e78c7;
      font-weight: 600;
      background: rgba(46, 120, 199, 0.08);
      padding: 2px 8px;
      border-radius: 4px;
      white-space: nowrap;
    }
    .job-company {
      font-size: 11px;
      color: #64748b;
      font-style: italic;
      margin-bottom: 6px;
    }
    .responsibilities {
      padding-left: 16px;
      margin: 0;
    }
    .responsibilities li {
      margin-bottom: 3px;
      font-size: 10px;
      color: #475569;
      line-height: 1.4;
    }
  </style>
</head>
<body>
  <div class="sidebar-bg"></div>
  
  <table class="layout-table">
    <thead>
      <tr><th></th></tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="cv-container">
            <div class="sidebar">
              <img src="https://portafolio-2c5.pages.dev/profile.jpeg" alt="Profile" class="profile-img">

              <div class="sidebar-section">
                <div class="sidebar-title">${t['contact.title']}</div>
                <p>${aboutData.contact.email}</p>
                <p>${aboutData.contact.phone}</p>
                <p>${aboutData.location}</p>
              </div>

              <div class="sidebar-section">
                <div class="sidebar-title">${t['social.title']}</div>
                <a href="${aboutData.socialMedia.linkedin}">LinkedIn</a>
                <a href="${aboutData.socialMedia.github}">GitHub</a>
                <a href="${aboutData.socialMedia.website}">Website</a>
              </div>

              <div class="sidebar-section">
                <div class="sidebar-title">${t['skills.title']}</div>
                <div class="skills">
                  ${aboutData.skills.map((skill) => `<span class="skill">${skill}</span>`).join('')}
                </div>
              </div>

              <div class="sidebar-section">
                <div class="sidebar-title">${t['languages.title']}</div>
                <div class="languages">
                  <div class="language">
                    <span class="language-name">${aboutData.languages.native}</span>
                    <span class="language-level">${t['native.label']}</span>
                  </div>
                  <div class="language">
                    <span class="language-name">${aboutData.languages.foreign}</span>
                    <span class="language-level">${t['foreign.label']}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="main-content">
              <div class="header">
                <h1>${aboutData.name}</h1>
                <h2>${aboutData.profession}</h2>
              </div>

              <div class="section">
                <div class="section-title">${t['about.title']}</div>
                ${aboutData.bio.paragraphs.map((p) => `<p class="bio-text">${p}</p>`).join('')}
              </div>

              <div class="section">
                <div class="section-title">${t['experience.title']}</div>
                ${experiences
                  .map(
                    (exp) => `
                  <div class="experience-item">
                    <div class="job-header">
                      <div class="job-title">${exp.position}</div>
                      <div class="job-duration">${exp.duration}</div>
                    </div>
                    <div class="job-company">${exp.company} — ${exp.location}</div>
                    <ul class="responsibilities">
                      ${exp.responsibilities.map((r) => `<li>${r}</li>`).join('')}
                    </ul>
                  </div>
                `,
                  )
                  .join('')}
              </div>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr><td></td></tr>
    </tfoot>
  </table>
</body>
</html>
  `;

  return html;
}

async function generatePDF(html, outputPath) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '0mm', right: '0mm', bottom: '0mm', left: '0mm' }, // Mantenlo en 0. La tabla se encarga de los márgenes
    preferCSSPageSize: true,
  });
  await browser.close();
}

async function main() {
  const publicDir = path.join(__dirname, '..', 'public');

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  console.log('Generando PDFs...\n');

  for (const lang of ['es', 'en']) {
    console.log(`🛠️ Procesando versión [${lang.toUpperCase()}]...`);

    try {
      const html = await generateCVHTML(lang);
      const outputPath = path.join(publicDir, `cv-${lang}.pdf`);
      await generatePDF(html, outputPath);

      console.log(`✅ Éxito: cv-${lang}.pdf`);
    } catch (err) {
      console.error(`❌ Error en versión ${lang}:`, err);
    }
  }

  console.log('\n✨ Proceso finalizado.');
}

main().catch(console.error);
