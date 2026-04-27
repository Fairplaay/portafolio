export const aboutMe = {
  en: {
    name: 'Jesus Garcia',
    profession: 'Full Stack Developer',
    description: '"Anyone can talk. Show me the code" - Linus Torvalds',
    birthDate: 'January 16, 1988',
    nationality: 'Venezuelan',
    location: 'Barquisimeto, Venezuela',
    bio: {
      paragraphs: [
        'Frontend Developer with 7+ years of experience specialized in Vue.js and React.',
        'I have worked on applications for sectors such as health, finance, and logistics, creating intuitive interfaces and scalable systems.',
        'Available for remote work, on-site or relocation. Interested in challenging projects.'
      ]
    },
    skills: ['JavaScript', 'Vue.js', 'React', 'Node.js', 'MongoDB', 'Mongoose', 'Vue Router', 'Vuex', 'Pinia', 'Redux', 'Express', 'Docker', 'TypeScript', 'ESLint', 'Prettier'],
    hobbies: ['Creativity', 'Clean Code', 'Documentation', 'Team Work', 'Continuous Learning'],
    certifications: [
      {
        name: 'Full Stack Web Development',
        issuer: 'Platzi',
        year: '2018',
        url: 'https://platzi.com'
      },
      {
        name: 'Frontend Development with Vue.js',
        issuer: 'Platzi',
        year: '2019',
        url: 'https://platzi.com'
      },
      {
        name: 'React.js Professional',
        issuer: 'Platzi',
        year: '2020',
        url: 'https://platzi.com'
      },
      {
        name: 'Docker for Developers',
        issuer: 'Platzi',
        year: '2021',
        url: 'https://platzi.com'
      }
    ],
    profile: {
      picture: '/profile.jpeg',
      altText: "Profile picture of Jesus Garcia",
    },
    banner: {
      image: 'https://picsum.photos/id/4/750/200',
      altText: 'Tech banner',
    },
    contact: {
      email: 'fairplaay16@gmail.com',
      phone: '+58 424 5792214',
    },
    socialMedia: {
      linkedin: 'https://www.linkedin.com/in/fairplaay',
      github: 'https://github.com/Fairplaay',
      website: 'https://portafolio-2c5.pages.dev/',
    },
    languages: {
      native: 'Spanish',
      foreign: 'Basic written English'
    },
    education: [
      {
        institution: 'Platzi',
        year: '2018',
        description: 'Full Stack Web Development - JavaScript, PHP, React JS, Vue JS, Webpack, SQL, MySQL, Git, Github, Bootstrap, Foundation, CSS Grid'
      },
      {
        institution: 'CADIF1',
        year: '2017',
        description: 'Software Academy - JavaScript, PHP'
      }
    ]
  },
  es: {
    name: 'Jesus Garcia',
    profession: 'Desarrollador Full Stack',
    description: '"Cualquiera puede hablar. Enséñame el código" - Linus Torvalds',
    birthDate: 'Enero 16, 1988',
    nationality: 'Venezolano',
    location: 'Barquisimeto, Venezuela',
    bio: {
      paragraphs: [
        'Desarrollador Frontend con 7+ años de experiencia especializado en Vue.js y React.',
        'He trabajado en aplicaciones para sectores como salud, finanzas y logística, creando interfaces intuitivas y sistemas escalables.',
        'Disponible para trabajo remoto, presential o reubicación. Interesado en proyectos desafiantes.'
      ]
    },
    skills: ['JavaScript', 'Vue.js','React', 'Node.js', 'MongoDB','Mongoose', 'Vue Router', 'Vuex','Pinia', 'Redux', 'Express', 'Docker', 'TypeScript', 'ESLint', 'Prettier'],
    hobbies: ['Creatividad', 'Código limpio', 'Documentación', 'Trabajo en equipo', 'Aprendizaje continuo'],
    certifications: [
      {
        name: 'Desarrollo Web Full Stack',
        issuer: 'Platzi',
        year: '2018',
        url: 'https://platzi.com'
      },
      {
        name: 'Desarrollo Frontend con Vue.js',
        issuer: 'Platzi',
        year: '2019',
        url: 'https://platzi.com'
      },
      {
        name: 'React.js Profesional',
        issuer: 'Platzi',
        year: '2020',
        url: 'https://platzi.com'
      },
      {
        name: 'Docker para Desarrolladores',
        issuer: 'Platzi',
        year: '2021',
        url: 'https://platzi.com'
      }
    ],
    profile: {
      picture: '/profile.jpeg',
      altText: "Foto de perfil de Jesus Garcia",
    },
    banner: {
      image: 'https://picsum.photos/id/4/750/200',
      altText: 'Banner tecnológico',
    },
    contact: {
      email: 'fairplaay16@gmail.com',
      phone: '+58 424 5792214',
    },
    socialMedia: {
      linkedin: 'https://www.linkedin.com/in/fairplaay',
      github: 'https://github.com/Fairplaay',
      website: 'https://portafolio-2c5.pages.dev/',
    },
    languages: {
      native: 'Español',
      foreign: 'Inglés básico escrito'
    },
    education: [
      {
        institution: 'Platzi',
        year: '2018',
        description: 'Desarrollo Web Full Stack - JavaScript, PHP, React JS, Vue JS, Webpack, SQL, MySQL, Git, Github, Bootstrap, Foundation, CSS Grid'
      },
      {
        institution: 'CADIF1',
        year: '2017',
        description: 'Academia de software - JavaScript, PHP'
      }
    ]
  }
};

export const experience = [
  {
    en: {
      company: 'Nextstation',
      position: 'Frontend Developer',
      duration: '6 months',
      location: 'Chile - Remote',
      responsibilities: [
        'With this startup we performed automation of the Copecflux platform with SEC Chile interconnections.',
        'Creation of forms with Vue.js, Tailwind and Chadcn UI.',
      ],
    },
    es: {
      company: 'Nextstation',
      position: 'Desarrollador Frontend',
      duration: '6 meses',
      location: 'Chile - Remoto',
      responsibilities: [
        'Con esta startup realizamos para Copecflux una Automatización de la plataforma con interconexiones SEC chile.',
        'Creacion de formularios con vue js, tailwind y chadcn UI.',
      ],
    },
  },
  {
    en: {
      company: 'Plhain',
      position: 'Full Stack Developer',
      duration: '4 years',
      location: 'Chile - Remote',
      responsibilities: [
        'Web app development for project management in Vue.js with Vuetify and Node.js with MongoDB.',
        'The best ASSISTANT for pest controllers, with client management, inventory control, report generation features and more.',
        'Creation of the application from scratch, including architecture design, frontend and backend development, and production deployment.',
        'Google Cloud functions for task automation and data processing.',
        'Cron jobs for scheduled tasks, such as report generation and database maintenance.',
        'Twilio and Nodemailer for SMS and email notifications to users.',
        'Maps API for geolocation of clients and routes for pest controllers.',
        'Payment gateway integration for online payment processing.',
        'Authentication and authorization implementation to guarantee user data security.',
        'MongoDB for data storage, with efficient schema design and optimized queries.',
        'Google Cloud for file storage, such as images and documents related to clients and projects.',
        'Responsive and adaptive designs to guarantee optimal user experience on mobile and desktop devices.',
        'Landing page design for application promotion, with focus on visitor to user conversion.',
        'Landing page design for users as part of the digital marketing strategy to attract new clients.',
      ],
    },
    es: {
      company: 'Plhain',
      position: 'Desarrollador Full stack',
      duration: '4 años',
      location: 'Chile - Remoto',
      responsibilities: [
        'Desarrollo de app web para gestión de proyectos en Vue js con vuetify y Node.js con mongodb.',
        'El mejor ASISTENTE para controladores de plagas, con funcionalidades de gestión de clientes, control de inventario, generación de informes y más.',
        'Creacion desde cero de la aplicación, incluyendo diseño de arquitectura, desarrollo frontend y backend, y despliegue en producción.',
        'Cloud functions google cloud para automatización de tareas y procesamiento de datos.',
        'Cron jobs para tareas programadas, como generación de informes y mantenimiento de la base de datos.',
        'twilio y nodemailer para notificaciones por SMS y correo electrónico a los usuarios.',
        'Maps API para geolocalización de clientes y rutas de controladores de plagas.',
        'Integración de pasarelas de pago para procesamiento de pagos en línea.',
        'Implementación de autenticación y autorización para garantizar la seguridad de los datos de los usuarios.',
        'Mongodb para almacenamiento de datos, con diseño de esquemas eficientes y consultas optimizadas.',
        'Google cloud para almacenamiento de archivos, como imágenes y documentos relacionados con los clientes y proyectos.',
        'Diseños responsivos y adaptativos para garantizar una experiencia de usuario óptima en dispositivos móviles y de escritorio.',
        'Diseño de landing page para promoción de la aplicación, con enfoque en conversión de visitantes a usuarios.',
        'Diseño de landing page a los usuarios como parte de la estrategia de marketing digital para atraer nuevos clientes.',
      ],
    },
  },
  {
    en: {
      company: 'Hablaquí',
      position: 'Full Stack Developer',
      duration: '1 year',
      location: 'Chile - Remote',
      responsibilities: [
        'Application for psychologists, management, appointment handling and patient control.',
        'Creation of the application from scratch, including architecture design, frontend and backend development, and production deployment.',
        'Web app development for project management in Nuxt.js and Node.js with MongoDB.',
        'Google Calendar API for synchronization of appointments and events between the application and user calendars.',
        'Twilio for SMS notifications to users about appointments and reminders.',
        'MongoDB for data storage, with efficient schema design and optimized queries.',
        'Google Cloud for file storage, such as images and documents related to patients and appointments.',
        'Responsive and adaptive designs to guarantee optimal user experience on mobile and desktop devices.',
      ],
    },
    es: {
      company: 'Hablaquí',
      position: 'Desarrollador Full stack',
      duration: '1 año',
      location: 'Chile - Remoto',
      responsibilities: [
        'Applicacion para psicologos, gestion, atencion de citas y control de pacientes.',
        'Creacion desde cero de la aplicación, incluyendo diseño de arquitectura, desarrollo frontend y backend, y despliegue en producción.',
        'Desarrollo de app web para gestión de proyectos en nuxt js y Node.js con mongodb.',
        'Google Calendar API para sincronización de citas y eventos entre la aplicación y los calendarios de los usuarios.',
        'Twilio para notificaciones por SMS a los usuarios sobre citas y recordatorios.',
        'Mongodb para almacenamiento de datos, con diseño de esquemas eficientes y consultas optimizadas.',
        'Google cloud para almacenamiento de archivos, como imágenes y documentos relacionados con los pacientes y citas.',
        'Diseños responsivos y adaptativos para garantizar una experiencia de usuario óptima en dispositivos móviles y de escritorio.',
      ],
    },
  },
  {
    en: {
      company: 'app R/R Chicago',
      position: 'Frontend Developer',
      duration: '1 month',
      location: 'Chicago - Remote',
      responsibilities: [
        'Frontend template development in React.js for R/R Chicago application.',
      ],
    },
    es: {
      company: 'app R/R Chicago',
      position: 'Desarrollador Frontend',
      duration: '1 mes',
      location: 'Chicago - Remoto',
      responsibilities: [
        'Desarrollo de plantilla frontend en React.js para aplicación R/R Chicago.',
      ],
    },
  },
  {
    en: {
      company: 'Hulihealth',
      position: 'Frontend Developer',
      duration: '1 year',
      location: 'Costa Rica - Remote',
      responsibilities: [
        'Vue.js development of the mobile billing section.',
        'Development of the system to print medical prescriptions.',
        'Migration to Vue Router of the application.',
        'Migration of the application from AMD to ESM with Webpack.',
        'Active collaboration with the development team.',
      ],
    },
    es: {
      company: 'Hulihealth',
      position: 'Desarrollador Frontend',
      duration: '1 año',
      location: 'Costa Rica - Remoto',
      responsibilities: [
        'Desarrollo en Vue.js de la sección de facturación móvil.',
        'Desarrollo del sistema para imprimir recetas médicas.',
        'Migración a Vue Router de la aplicación.',
        'Migración de la aplicación AMD a ESM con Webpack.',
        'Colaboración activa con el equipo de desarrollo.',
      ],
    },
  },
  {
    en: {
      company: 'Shareable',
      position: 'Frontend Developer',
      duration: '2 months',
      location: 'Chile - Remote',
      responsibilities: [
        'Frontend template development in Vue.js for voting system.',
        'Implementation of collaborative functionalities for the team.',
        'Integration of reusable components.',
      ],
    },
    es: {
      company: 'Shareable',
      position: 'Desarrollador Frontend',
      duration: '2 meses',
      location: 'Chile - Remoto',
      responsibilities: [
        'Desarrollo de plantilla frontend en Vue.js para sistema de votaciones.',
        'Implementación de funcionalidades colaborativas para el equipo.',
        'Integración de componentes reutilizables.',
      ],
    },
  },
];