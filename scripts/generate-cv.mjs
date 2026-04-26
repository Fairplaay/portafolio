import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pdfmakeModule = await import('pdfmake/build/pdfmake.js');
const pdfMake = pdfmakeModule.default || pdfmakeModule;

const Helvetica = (await import('pdfmake/build/standard-fonts/Helvetica.js')).default;
const Times = (await import('pdfmake/build/standard-fonts/Times.js')).default;

pdfMake.vfs = { ...(pdfMake.vfs || {}), ...Helvetica.vfs, ...Times.vfs };

pdfMake.addFonts(Helvetica.fonts);
pdfMake.addFonts(Times.fonts);

const aboutMe = {
  name: 'Jesus Garcia',
  profession: 'Full Stack Developer',
  description: '"Cualquiera puede hablar. Enséñame el código" - Linus Torvalds',
  location: 'Barquisimeto, Venezuela',
  contact: {
    email: 'fairplaay16@gmail.com',
    phone: '+58 424 5792214',
  },
  socialMedia: {
    linkedin: 'https://www.linkedin.com/in/fairplaay',
    github: 'https://github.com/Fairplaay',
  },
  skills: ['JavaScript', 'Vue.js', 'React', 'Node.js', 'MongoDB', 'Mongoose', 'Vue Router', 'Vuex', 'Pinia', 'Redux', 'Express', 'Docker', 'TypeScript', 'ESLint', 'Prettier'],
  languages: {
    native: 'Español',
    foreign: 'Inglés básico escrito',
  },
};

const experience = [
  {
    company: 'Nextstation',
    position: 'Frontend Developer',
    positionEs: 'Desarrollador Frontend',
    duration: '6 meses',
    location: 'Chile - Remoto',
    responsibilities: ['Con esta startup realizamos para Copecflux una Automatización de la plataforma con interconexiones SEC chile.', 'Creacion de formularios F3, TE4 y F5 con vue js, tailwind y chadcn UI.'],
    responsibilitiesEs: ['Con esta startup realizamos para Copecflux una Automatización de la plataforma con interconexiones SEC chile.', 'Creacion de formularios F3, TE4 y F5 con vue js, tailwind y chadcn UI.'],
  },
  {
    company: 'Plhain',
    position: 'Full Stack Developer',
    positionEs: 'Desarrollador Full stack',
    duration: '4 años',
    location: 'Chile - Remoto',
    responsibilitiesEs: ['Desarrollo de app web para gestión de proyectos en Vue js con vuetify y Node.js con mongodb.', 'El mejor ASISTENTE para controladores de plagas, con funcionalidades de gestión de clientes, control de inventario, generación de informes y más.', 'Creacion desde cero de la aplicación, incluyendo diseño de arquitectura, desarrollo frontend y backend, y despliegue en producción.', 'Cloud functions google cloud para automatización de tareas y procesamiento de datos.', 'Cron jobs para tareas programadas, como generación de informes y mantenimiento de la base de datos.', 'Twilio y nodemailer para notificaciones por SMS y correo electrónico a los usuarios.', 'Maps API para geolocalización de clientes y rutas de controladores de plagas.', 'Integración de pasarelas de pago para procesamiento de pagos en línea.', 'Implementación de autenticación y autorización para garantizar la seguridad de los datos de los usuarios.', 'Mongodb para almacenamiento de datos, con diseño de esquemas eficientes y consultas optimizadas.', 'Google cloud para almacenamiento de archivos, como imágenes y documentos relacionados con los clientes y proyectos.', 'Diseños responsivos y adaptativos para garantizar una experiencia de usuario óptima en dispositivos móviles y de escritorio.', 'Diseño de landing page para promoción de la aplicación, con enfoque en conversión de visitantes a usuarios.', 'Diseño de landing page a los usuarios como parte de la estrategia de marketing digital para atraer nuevos clientes.'],
    responsibilities: ['Web app development for project management in Vue.js with Vuetify and Node.js with MongoDB.', 'The best ASSISTANT for pest controllers, with client management, inventory control, report generation features and more.', 'Creation of the application from scratch, including architecture design, frontend and backend development, and production deployment.', 'Google Cloud functions for task automation and data processing.', 'Cron jobs for scheduled tasks, such as report generation and database maintenance.', 'Twilio and Nodemailer for SMS and email notifications to users.', 'Maps API for geolocation of clients and routes for pest controllers.', 'Payment gateway integration for online payment processing.', 'Authentication and authorization implementation to guarantee user data security.', 'MongoDB for data storage, with efficient schema design and optimized queries.', 'Google Cloud for file storage, such as images and documents related to clients and projects.', 'Responsive and adaptive designs to guarantee optimal user experience on mobile and desktop devices.', 'Landing page design for application promotion, with focus on visitor to user conversion.', 'Landing page design for users as part of the digital marketing strategy to attract new clients.'],
  },
  {
    company: 'Hablaquí',
    position: 'Full Stack Developer',
    positionEs: 'Desarrollador Full stack',
    duration: '1 año',
    location: 'Chile - Remoto',
    responsibilitiesEs: ['Applicacion para psicologos, gestion, atencion de citas y control de pacientes.', 'Creacion desde cero de la aplicación, incluyendo diseño de arquitectura, desarrollo frontend y backend, y despliegue en producción.', 'Desarrollo de app web para gestión de proyectos en nuxt js y Node.js con mongodb.', 'Google Calendar API para sincronización de citas y eventos entre la aplicación y los calendarios de los usuarios.', 'Twilio para notificaciones por SMS a los usuarios sobre citas y recordatorios.', 'Mongodb para almacenamiento de datos, con diseño de esquemas eficientes y consultas optimizadas.', 'Google cloud para almacenamiento de archivos, como imágenes y documentos relacionados con los pacientes y citas.', 'Diseños responsivos y adaptativos para garantizar una experiencia de usuario óptima en dispositivos móviles y de escritorio.'],
    responsibilities: ['Application for psychologists, management, appointment handling and patient control.', 'Creation of the application from scratch, including architecture design, frontend and backend development, and production deployment.', 'Web app development for project management in Nuxt.js and Node.js with MongoDB.', 'Google Calendar API for synchronization of appointments and events between the application and user calendars.', 'Twilio for SMS notifications to users about appointments and reminders.', 'MongoDB for data storage, with efficient schema design and optimized queries.', 'Google Cloud for file storage, such as images and documents related to patients and appointments.', 'Responsive and adaptive designs to guarantee optimal user experience on mobile and desktop devices.'],
  },
  {
    company: 'app R/R Chicago',
    position: 'Frontend Developer',
    positionEs: 'Desarrollador Frontend',
    duration: '1 mes',
    location: 'Chicago - Remoto',
    responsibilitiesEs: ['Desarrollo de plantilla frontend en React.js para aplicación R/R Chicago.'],
    responsibilities: ['Frontend template development in React.js for R/R Chicago application.'],
  },
  {
    company: 'Hulihealth',
    position: 'Frontend Developer',
    positionEs: 'Desarrollador Frontend',
    duration: '1 año',
    location: 'Costa Rica - Remoto',
    responsibilitiesEs: ['Desarrollo en Vue.js de la sección de facturación móvil.', 'Desarrollo del sistema para imprimir recetas médicas.', 'Migración a Vue Router de la aplicación.', 'Migración de la aplicación AMD a ESM con Webpack.', 'Colaboración activa con el equipo de desarrollo.'],
    responsibilities: ['Vue.js development of the mobile billing section.', 'Development of the system to print medical prescriptions.', 'Migration to Vue Router of the application.', 'Migration of the application from AMD to ESM with Webpack.', 'Active collaboration with the development team.'],
  },
  {
    company: 'Shareable',
    position: 'Frontend Developer',
    positionEs: 'Desarrollador Frontend',
    duration: '2 meses',
    location: 'Chile - Remoto',
    responsibilitiesEs: ['Desarrollo de plantilla frontend en Vue.js para sistema de votaciones.', 'Implementación de funcionalidades colaborativas para el equipo.', 'Integración de componentes reutilizables.'],
    responsibilities: ['Frontend template development in Vue.js for voting system.', 'Implementation of collaborative functionalities for the team.', 'Integration of reusable components.'],
  },
];

const translations = {
  es: {
    'about.title': 'Acerca de Mí',
    'experience.title': 'Experiencia',
    'skills.title': 'Habilidades',
    'contact': 'Contacto',
    'languages': 'Idiomas',
    'about.bio1': 'Desarrollador Frontend con 7+ años de experiencia especializado en Vue.js y React.',
    'about.bio2': 'He trabajado en aplicaciones para sectores como salud, finanzas y logística, creando interfaces intuitivas y sistemas escalables.',
    'about.bio3': 'Venezolano radicado en Barquisimeto, disponible para trabajo remoto, presential o reubicación.',
  },
  en: {
    'about.title': 'About Me',
    'experience.title': 'Experience',
    'skills.title': 'Skills',
    'contact': 'Contact',
    'languages': 'Languages',
    'about.bio1': 'Frontend Developer with 7+ years of experience specialized in Vue.js and React.',
    'about.bio2': 'I have worked on applications for health, finance, and logistics sectors, creating intuitive interfaces and scalable systems.',
    'about.bio3': 'Venezuelan based in Barquisimeto, available for remote, on-site work or relocation.',
  },
};

const ACCENT = '#dbc404';
const SIDEBAR_BG = '#242633';
const TEXT_LIGHT = '#c0cef3';
const TEXT_DARK = '#4a5568';
const WHITE = '#ffffff';

function generatePDF(lang) {
  const t = translations[lang];
  const isEs = lang === 'es';

  const experienceRows = experience.map(exp => {
    const positionLabel = isEs ? exp.positionEs : exp.position;
    const responsibilities = isEs ? exp.responsibilitiesEs : exp.responsibilities;
    return {
      stack: [
        {
          columns: [
            { text: positionLabel, bold: true, color: '#242633', fontSize: 11 },
            { text: exp.company, color: '#2e78c7', fontSize: 10, italics: true },
          ],
          margin: [0, 0, 0, 2],
        },
        {
          columns: [
            { text: exp.duration, color: '#718096', fontSize: 8 },
            { text: exp.location, color: '#718096', fontSize: 8 },
          ],
          margin: [0, 0, 0, 4],
        },
        {
          ul: responsibilities,
          margin: [10, 0, 0, 0],
          fontSize: 9,
          color: TEXT_DARK,
        },
      ],
      margin: [0, 0, 0, 12],
    };
  });

  const docDefinition = {
    pageSize: 'A4',
    pageMargins: [10, 10, 10, 10],
    defaultStyle: {
      font: 'Helvetica',
      fontSize: 10,
    },
    content: [
      {
        table: {
          widths: [260, '*'],
          body: [
            [
              {
                stack: [
                  { text: '', width: 90 },
                  { text: aboutMe.name, fontSize: 16, bold: true, color: WHITE, alignment: 'center', margin: [0, 12, 0, 4] },
                  { text: aboutMe.profession, fontSize: 10, color: ACCENT, bold: true, alignment: 'center', margin: [0, 0, 0, 8] },
                  { text: aboutMe.description.replace(/"/g, ''), fontSize: 8, italics: true, color: TEXT_LIGHT, alignment: 'center', margin: [0, 0, 0, 20] },
                ],
                fillColor: SIDEBAR_BG,
              },
              { text: '' },
            ],
            [
              {
                stack: [
                  { text: (isEs ? 'Contacto' : 'Contact').toUpperCase(), fontSize: 9, bold: true, color: ACCENT, margin: [0, 20, 0, 10] },
                  { fontSize: 9, color: TEXT_LIGHT, stack: [
                    { text: '📍 ' + aboutMe.location, margin: [0, 0, 0, 6] },
                    { text: '📧 ' + aboutMe.contact.email, margin: [0, 0, 0, 6] },
                    { text: '📱 ' + aboutMe.contact.phone, margin: [0, 0, 0, 6] },
                    { text: '🔗 ' + aboutMe.socialMedia.linkedin, margin: [0, 0, 0, 6] },
                    { text: '💻 ' + aboutMe.socialMedia.github, margin: [0, 0, 0, 6] },
                  ]},
                  { text: t['skills.title'].toUpperCase(), fontSize: 9, bold: true, color: ACCENT, margin: [0, 20, 0, 10] },
                  { text: aboutMe.skills.join('  '), fontSize: 8, color: ACCENT },
                  { text: t['languages'].toUpperCase(), fontSize: 9, bold: true, color: ACCENT, margin: [0, 20, 0, 10] },
                  {
                    stack: [
                      { columns: [{ text: aboutMe.languages.native, fontSize: 9, color: TEXT_LIGHT }, { canvas: [{ type: 'rect', x: 0, y: 0, w: 60, h: 3, color: 'rgba(255,255,255,0.1)' }, { type: 'rect', x: 0, y: 0, w: 60, h: 3, color: ACCENT }], width: 60 }], margin: [0, 0, 0, 6] },
                      { columns: [{ text: aboutMe.languages.foreign, fontSize: 9, color: TEXT_LIGHT }, { canvas: [{ type: 'rect', x: 0, y: 0, w: 60, h: 3, color: 'rgba(255,255,255,0.1)' }, { type: 'rect', x: 0, y: 0, w: 24, h: 3, color: ACCENT }], width: 60 }] },
                    ],
                  },
                ],
                fillColor: SIDEBAR_BG,
                margin: [25, 0, 25, 0],
              },
              {
                stack: [
                  { text: t['about.title'].toUpperCase(), fontSize: 12, bold: true, color: SIDEBAR_BG, margin: [0, 0, 0, 5] },
                  { canvas: [{ type: 'rect', x: 0, y: 17, w: 300, h: 2, color: ACCENT }], margin: [0, 0, 0, 10] },
                  { text: t['about.bio1'], fontSize: 9, color: TEXT_DARK, margin: [0, 0, 0, 6], lineHeight: 14 },
                  { text: t['about.bio2'], fontSize: 9, color: TEXT_DARK, margin: [0, 0, 0, 6], lineHeight: 14 },
                  { text: t['about.bio3'], fontSize: 9, color: TEXT_DARK, margin: [0, 0, 0, 18], lineHeight: 14 },
                  { text: t['experience.title'].toUpperCase(), fontSize: 12, bold: true, color: SIDEBAR_BG, margin: [0, 0, 0, 5] },
                  { canvas: [{ type: 'rect', x: 0, y: 17, w: 300, h: 2, color: ACCENT }], margin: [0, 0, 0, 10] },
                  ...experienceRows,
                ],
                margin: [30, 25, 25, 0],
              },
            ],
          ],
        },
        layout: 'noBorders',
      },
    ],
  };

  return docDefinition;
}

async function main() {
  const publicDir = path.join(__dirname, '..', 'public');

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  console.log('Generando PDFs...');

  for (const lang of ['es', 'en']) {
    const docDefinition = generatePDF(lang);
    const pdfDoc = pdfMake.createPdf(docDefinition);
    const filepath = path.join(publicDir, lang === 'es' ? 'cv-es.pdf' : 'cv-en.pdf');

    try {
      const buffer = await pdfDoc.getBuffer();
      fs.writeFileSync(filepath, buffer);
      console.log('Generado: ' + filepath);
    } catch (err) {
      console.error('Error generando PDF:', err);
    }
  }

  console.log('\nPDFs generados exitosamente!');
  console.log('  - public/cv-es.pdf');
  console.log('  - public/cv-en.pdf');
}

main().catch(console.error);