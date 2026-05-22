import { EXPERIENCE } from '../years-of-experience';

export const ABOUT_DATA = {
  en: {
    about_me: 'About Me',
    headline: 'The story behind the code',
    story: `I didn't start as a developer — I grew into one. Over the past ${EXPERIENCE}+ years I've gone from writing my first function to architecting enterprise Angular applications used by thousands of users daily.`,
    quote:
      "I believe good software isn't just about working code — it's about code that communicates clearly, scales gracefully, and makes the next developer's life easier.",
    story_2:
      'Today I work on TAP (Title Application Portal) at AKC, where I build Angular features that real users depend on. Clean architecture, Signals, and RxJS are my daily tools — but curiosity is my real stack.',
    timeline: [
      {
        year: '2026',
        role: 'Mid Angular Developer',
        company: 'AKC',
        note: 'TAP portal con Angular 18, Signals y RxJS.',
      },
      {
        year: '2021',
        role: 'Frontend Developer',
        company: 'TGC - Tecnología de Gestion y Comunicación',
        note: 'Provide support and development to specialized applications in the public sector, migrating some functionalities from Java to Oracle Apex.',
      },
      {
        year: '2020',
        role: 'Student',
        company: 'Early days',
        note: 'First Angular Project — school project',
      },
    ],
    values: [
      {
        icon: 'fas fa-project-diagram',
        title: 'Clean architecture',
        desc: 'Scalable patterns that survive feature growth.',
      },
      {
        icon: 'fas fa-bolt',
        title: 'Async mastery',
        desc: 'RxJS and Signals for predictable reactive state.',
      },
      {
        icon: 'fas fa-users',
        title: 'Team player',
        desc: 'Remote-first mindset, clear communication.',
      },
    ],
    email: 'tuahil@gmail.com',
    location: 'Monterrey N.L.',
    my_value: 'What I bring to a team',
    pdf_btn: 'Download CV PDF',
    pdf_url: 'assets/CV_2026_EN_GUILLERMO MORÁN L.pdf'
  },
  es: {
    about_me: 'Sobre Mí',
    headline: 'La historia detrás del código',
    story: `No comencé como desarrollador — me convertí en uno. En los últimos ${EXPERIENCE}+ años he pasado desde escribir mi primera función hasta arquitecturar aplicaciones enterprise en Angular usadas por miles de usuarios a diario.`,
    quote:
      'Creo que el buen software no se trata solo de código que funciona — se trata de código que comunica claramente, escala con gracia y hace la vida más fácil al siguiente desarrollador.',
    story_2:
      'Hoy trabajo en TAP (Title Application Portal) en AKC, donde construyo funcionalidades en Angular de las que los usuarios reales dependen. Arquitectura limpia, Signals y RxJS son mis herramientas diarias — pero la curiosidad es mi verdadero stack.',
    timeline: [
      {
        year: '2026',
        role: 'Desarrollador Angular de nivel intermedio',
        company: 'AKC',
        note: 'Portal TAP con Angular 18, Signals y RxJS.',
      },
      {
        year: '2021',
        role: 'Desarrollador Frontend',
        company: 'Empresa anterior',
        note: 'Brindar soporte y desarrollo a aplicaciones especializadas en el sector público, migrando algunas funcionalidades de Java a Oracle Apex.',
      },
      {
        year: '2020',
        role: 'Estudiante',
        company: 'Inicios',
        note: 'Primer proyecto Angular — proyecto escolar.',
      },
    ],
    values: [
      {
        icon: 'fas fa-project-diagram',
        title: 'Arquitectura limpia',
        desc: 'Patrones escalables que sobreviven al crecimiento de features.',
      },
      {
        icon: 'fas fa-bolt',
        title: 'Dominio asíncrono',
        desc: 'RxJS y Signals para estado reactivo predecible.',
      },
      {
        icon: 'fas fa-users',
        title: 'Trabajo en equipo',
        desc: 'Mentalidad remote-first, comunicación clara.',
      },
    ],
    email: 'tuahil@gmail.com',
    location: 'Monterrey, N.L.',
    my_value: 'Lo que aporto a un equipo',
    pdf_btn: 'Descargar CV PDF',
    pdf_url: 'assets/CV_2026_ES_GUILLERMO MORÁN L.pdf'
  },
};
