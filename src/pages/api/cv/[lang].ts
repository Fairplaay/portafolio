import type { APIRoute } from 'astro';
import puppeteer from 'puppeteer';
import { aboutMe } from '../../../data/aboutMe';
import { experience } from '../../../data/experience';
import { ui } from '../../../i18n/ui';

export const prerender = false;

export function getStaticPaths() {
  return [
    { params: { lang: 'es' } },
    { params: { lang: 'en' } },
  ];
}

const translations = ui;

function generateCVHtml(lang: 'es' | 'en') {
  const t = translations[lang];
  const isEs = lang === 'es';

  const experienceRows = experience.map(exp => {
    const positionLabel = isEs ? (exp as any).positionEs : exp.position;
    const responsibilities = isEs ? (exp as any).responsibilitiesEs : exp.responsibilities;
    return `
      <div class="exp-item">
        <div class="exp-header">
          <h3>${positionLabel}</h3>
          <span class="company">${exp.company}</span>
        </div>
        <div class="exp-meta">
          <span class="duration">${exp.duration}</span>
          <span class="location">${exp.location}</span>
        </div>
        <ul class="exp-list">
          ${responsibilities.map((r: string) => `<li>${r}</li>`).join('')}
        </ul>
      </div>
    `;
  }).join('');

  return `
<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', Arial, sans-serif;
      font-size: 10px;
      line-height: 1.5;
      color: #f2f2f2;
      background: #ffffff;
    }

    .cv-container {
      display: grid;
      grid-template-columns: 260px 1fr;
    }

    .sidebar {
      background: #242633;
      color: #fff;
      padding: 25px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .profile-section {
      text-align: center;
      padding-bottom: 18px;
      border-bottom: 1px solid rgba(219, 196, 4, 0.15);
    }

    .profile-photo {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      border: 3px solid #dbc404;
      margin-bottom: 12px;
      object-fit: cover;
    }

    .profile-name {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 4px;
      color: #ffffff;
    }

    .profile-title {
      font-size: 10px;
      color: #dbc404;
      font-weight: 600;
      margin-bottom: 8px;
      letter-spacing: 0.5px;
    }

    .profile-quote {
      font-size: 8px;
      font-style: italic;
      opacity: 0.5;
      color: #c0cef3;
    }

    .sidebar-section h4 {
      font-size: 9px;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: #dbc404;
      margin-bottom: 10px;
      padding-bottom: 6px;
      border-bottom: 1px solid rgba(219, 196, 4, 0.2);
    }

    .contact-info p {
      font-size: 9px;
      margin-bottom: 6px;
      display: flex;
      align-items: center;
      gap: 6px;
      color: #c0cef3;
    }

    .contact-info a {
      color: #dbc404;
      text-decoration: none;
    }

    .skills-list {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
    }

    .skill-tag {
      background: rgba(219, 196, 4, 0.12);
      color: #dbc404;
      padding: 2px 7px;
      border-radius: 10px;
      font-size: 8px;
    }

    .languages-list {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .lang-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 9px;
      color: #c0cef3;
    }

    .lang-bar {
      width: 60px;
      height: 3px;
      background: rgba(255,255,255,0.1);
      border-radius: 2px;
    }

    .lang-bar span {
      display: block;
      height: 100%;
      background: #dbc404;
      border-radius: 2px;
    }

    .main-content {
      padding: 25px 30px;
      background: #ffffff;
    }

    .section {
      margin-bottom: 18px;
    }

    .section h2 {
      font-size: 12px;
      color: #242633;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 10px;
      padding-bottom: 5px;
      border-bottom: 2px solid #dbc404;
    }

    .about-text {
      color: #4a5568;
      font-size: 9px;
      line-height: 1.6;
      margin-bottom: 6px;
    }

    .exp-item {
      margin-bottom: 15px;
      padding-left: 10px;
      border-left: 2px solid #dbc404;
      page-break-inside: avoid;
    }

    .exp-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 4px;
    }

    .exp-header h3 {
      font-size: 11px;
      color: #242633;
      font-weight: 600;
    }

    .company {
      font-size: 10px;
      color: #2e78c7;
      font-weight: 500;
    }

    .exp-meta {
      display: flex;
      gap: 12px;
      margin-bottom: 6px;
      font-size: 8px;
      color: #718096;
    }

    .exp-list {
      margin: 0;
      padding-left: 14px;
      color: #4a5568;
      font-size: 9px;
    }

    .exp-list li {
      margin-bottom: 3px;
    }

    @page {
      size: A4;
      margin: 10mm;
    }
  </style>
</head>
<body>
  <div class="cv-container">
    <aside class="sidebar">
      <div class="profile-section">
        <img src="https://portafolio-2c5.pages.dev${aboutMe.profile.picture}" alt="${aboutMe.profile.altText}" class="profile-photo" />
        <h1 class="profile-name">${aboutMe.name}</h1>
        <p class="profile-title">${aboutMe.profession}</p>
        <p class="profile-quote">"${aboutMe.description.replace(/"/g, '')}"</p>
      </div>

      <div class="sidebar-section">
        <h4>${isEs ? 'Contacto' : 'Contact'}</h4>
        <div class="contact-info">
          <p>📍 ${aboutMe.location}</p>
          <p>📧 <a href="mailto:${aboutMe.contact.email}">${aboutMe.contact.email}</a></p>
          <p>📱 ${aboutMe.contact.phone}</p>
          <p>🔗 <a href="${aboutMe.socialMedia.linkedin}">LinkedIn</a></p>
          <p>💻 <a href="${aboutMe.socialMedia.github}">GitHub</a></p>
        </div>
      </div>

      <div class="sidebar-section">
        <h4>${t['skills.title']}</h4>
        <div class="skills-list">
          ${aboutMe.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
        </div>
      </div>

      <div class="sidebar-section">
        <h4>${isEs ? 'Idiomas' : 'Languages'}</h4>
        <div class="languages-list">
          <div class="lang-item">
            <span>${aboutMe.languages.native}</span>
            <div class="lang-bar"><span style="width: 100%"></span></div>
          </div>
          <div class="lang-item">
            <span>${aboutMe.languages.foreign}</span>
            <div class="lang-bar"><span style="width: 40%"></span></div>
          </div>
        </div>
      </div>
    </aside>

    <main class="main-content">
      <div class="section">
        <h2>${t['about.title']}</h2>
        <p class="about-text">${t['about.bio1']}</p>
        <p class="about-text">${t['about.bio2']}</p>
        <p class="about-text">${t['about.bio3']}</p>
      </div>

      <div class="section">
        <h2>${t['experience.title']}</h2>
        ${experienceRows}
      </div>
    </main>
  </div>
</body>
</html>
  `;
}

export const GET: APIRoute = async ({ params }) => {
  const lang = (params.lang === 'en' ? 'en' : 'es') as 'es' | 'en';
  const html = generateCVHtml(lang);

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '10mm', bottom: '10mm', left: '10mm', right: '10mm' }
    });

    await browser.close();

    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="CV_${lang === 'es' ? 'Jesus_Garcia_ES' : 'Jesus_Garcia_EN'}.pdf"`
      }
    });
  } catch (error) {
    console.error('PDF generation error:', error);
    return new Response(JSON.stringify({ error: 'Failed to generate PDF' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};