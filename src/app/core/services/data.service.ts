import { inject, Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile.interface';
import { Skill } from '../interfaces/skill.interface';
import { LanguageService } from './language.service';
import { Template } from '../interfaces/template.interface';
import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private languageService = inject(LanguageService);

  private readonly profile_en = {
    name: 'Guillermo Morán L.',
    title: 'Software Engineer',
    intro: 'I build exceptional digital experiences that make an impact.',
    photo: 'assets/yo_canada.jpg',
    photo_2: 'assets/me.png',
    photo_3: 'assets/me-round.png',
    email: 'tuahil@gmail.com',
    phone: '+52 614 303 8485',
    location: 'Chihuahua, México',
    education: 'UTCH Chihuahua (2016 - 2019)',
    bachelorsDegree: 'Bachelor of Engineering in Communication and Information Technologies',
    about:
      "I'm a passionate web developer with 6 years of experience building modern, responsive websites and web applications. I'm a full-stack developer. I have experience with both front-end and back-end technologies. My approach combines technical knowledge with a design vision to deliver functional and visually appealing solutions.",
    about_2: 'I like to contribute to the generation of a pleasant work environment. I believe teamwork is the way to go.',
    experience: '6',
    linkedin: 'https://www.linkedin.com/in/guillermo-moran-8290b0106/',
    github: 'https://github.com/T800-M101/oh-my-portfolio',
    portfolio: 'https://oh-my-portfolio.netlify.app/',
    work_exp: [
      {
        year: '2021 - Present',
        company: '3 Pillar Global',
        resposabilities: "Collaborate with international teams and clients to develop scalable software solutions across frontend, backend, and microservices. Improve applications based on business requirements, resolve bugs, and ensure system reliability. Switch seamlessly between Angular, Node.js, NestJS, Python, and Oracle depending on project needs. <br><br>REGIS (Internal App): <br>Collaborated in the development of an internal application designed specifically for operational teams. Played an active role across multiple development workflows, contributing to both the implementation of new features and the ongoing support of mission-critical modules. Ensured alignment with business requirements while maintaining high standards of code quality, maintainability, and performance. <br><br> JPM (Judge Panel Management):<br> Contributed to the development of a complex enterprise application focused on administrative workflows for judges and customers. Took responsibility for key tasks critical to delivering a high-quality product. Maintained a strong emphasis on performance, reliability, and user experience, while adhering to industry best practices in software design and fostering effective collaboration with cross-functional teams. <br><br> OLL (Online Litters Registration):<br> Participated in the end-to-end development of a puppy litter registration application, emphasizing scalability, usability, and transactional integrity. Applied advanced software engineering principles to ensure a seamless user experience for both field personnel and administrators. Delivered an application that supports accurate and efficient litter tracking and reporting. <br><br> PONOS (A slack bot that provides ChatOps capabilities to developers): <br> Developed from scratch a bot to automate moving code among environments (test, stage, production), create tags and build deploys.<br><br>Skyjenks Jobs (Automation):<br> Developed Python-based automation scripts to optimize and replace repetitive manual processes within the organization’s data management operations. These automations significantly reduced operational overhead, improved data accuracy, and boosted productivity across multiple departments. Delivered reusable, maintainable solutions aligned with long-term business automation objectives.<br><br> Deployment Team (Releases):<br> Served as a key member of the deployment and release management team, responsible for validating application changes and promoting them across staging environments. Ensured deployments were secure, reliable, and compliant with organizational standards. Advocated for continuous integration and continuous deployment best practices to support scalable, low-risk release cycles."
      },
        {
        year: '2021 - 2021',
        company: 'TGC - Tecnología de Gestion y Comunicación',
        resposabilities: 'Provide support and development to specialized applications in the public sector, migrating some features from Java to Oracle Apex.'
      },
       {
        year: '2019 - 2021',
        company: 'Freelancer',
        resposabilities: 'Create small web pages with Angular and vanilla Javascript.'
      },
    ],
    languages: 'spanish - english',
    degree: 'Bachelor’s Degree'
  };

  private readonly profile_es = {
    name: 'Guillermo Morán L.',
    title: 'Ing. de Software',
    intro: 'Hago experiencias digitales exepcionales que crean impacto.',
    photo: 'assets/yo_canada.jpg',
    photo_2: 'assets/me.png',
    photo_3: 'assets/me-round.png',
    email: 'tuahil@gmail.com',
    phone: '+52 614 303 8485',
    location: 'Chihuahua, México',
    education: 'UTCH Chihuahua (2016 - 2019)',
    bachelorsDegree: 'Ingeniero en Tecnologías de la Comunicación e Información',
    about: "Soy un desarrollador web apasionado con 6 años de experiencia creando sitios web y aplicaciones web modernos y adaptables. Soy un desarrollador fullstack. Tengo experiencia con tecnologías frontend y back-end. Mi enfoque combina conocimientos técnicos con una visión de diseño para ofrecer soluciones funcionales y visualmente atractivas.",
    about_2: 'Me gusta contribuir a la creación de un ambiente de trabajo agradable. Creo que el trabajo en equipo es fundamental.',
    experience: '6',
    linkedin: 'https://www.linkedin.com/in/guillermo-moran-8290b0106/',
    github: 'https://github.com/T800-M101/oh-my-portfolio',
    portfolio: 'https://oh-my-portfolio.netlify.app/',
    work_exp: [
      {
        year: '2021 - Presente',
        company: '3 Pillar Global',
        resposabilities: "Colaboro con equipos y clientes internacionales para desarrollar soluciones de software escalables en frontend, backend y microservicios. Mejoro aplicaciones según los requisitos del negocio, resuelvo errores y garantizo la confiabilidad del sistema. Me muevo sin dificultad entre Angular, Node.js, NestJS, Python y Oracle según las necesidades del proyecto.<br><br>REGIS (Aplicación Interna): Colaboré en el desarrollo de una aplicación interna diseñada específicamente para los equipos operativos. Tuve un rol activo en múltiples flujos de trabajo de desarrollo, contribuyendo tanto en la implementación de nuevas funcionalidades como en el soporte continuo de módulos críticos para el negocio. Aseguré el cumplimiento de los requisitos del negocio mientras mantenía altos estándares de calidad del código, mantenibilidad y rendimiento.<br><br> JPM (Gestión del Panel de Jueces): Contribuí al desarrollo de una compleja aplicación empresarial centrada en flujos administrativos para jueces y clientes. Asumí responsabilidades clave para garantizar la entrega de un producto de alta calidad. Mantuve un fuerte enfoque en el rendimiento, la confiabilidad y la experiencia del usuario, cumpliendo con las mejores prácticas de la industria en diseño de software y fomentando la colaboración efectiva con equipos multifuncionales. <br><br> OLL (Registro en Línea de Camadas): Participé en el desarrollo completo de una aplicación de registro de camada de perros recien macidos, con énfasis en la escalabilidad, usabilidad e integridad transaccional. Apliqué principios avanzados de ingeniería de software para asegurar una experiencia fluida tanto para el personal de campo como para los administradores. Entregué una aplicación que permite un seguimiento y reporte preciso y eficiente de registro de camadas de cachorros.<br><br> PONOS (Un bot de Slack que proporciona capacidades de ChatOps para desarrolladores): Desarrollé desde cero un bot para automatizar el movimiento de código entre entornos (pruebas, staging, producción), crear etiquetas (tags) y generar despliegues.<br><br>Skyjenks Jobs (Automatización): Desarrollé scripts de automatización en Python para optimizar y reemplazar procesos manuales repetitivos dentro de las operaciones de gestión de datos de la organización. Estas automatizaciones redujeron significativamente la carga operativa, mejoraron la precisión de los datos y aumentaron la productividad en varios departamentos. Entregué soluciones reutilizables, mantenibles y alineadas con los objetivos de automatización empresarial a largo plazo.<br><br>Equipo de Despliegue (Releases): Formé parte del equipo de despliegue y gestión de versiones, responsable de validar los cambios en las aplicaciones y promoverlos en los entornos de staging. Aseguré que los despliegues fueran seguros, confiables y cumplieran con los estándares de la organización. Promoví las mejores prácticas de integración y despliegue continuo para respaldar ciclos de entrega escalables y de bajo riesgo."
      },
       {
        year: '2021 - 2021',
        company: 'TGC - Tecnología de Gestion y Comunicación',
        resposabilities: 'Brindar soporte y desarrollo a aplicaciones especializadas en el sector público, migrando algunas funcionalidades de Java a Oracle Apex.'
      },
      {
        year: '2019 - 2021',
        company: 'Freelancer',
        resposabilities: 'Creando pequeñas páginas web con Angular y Javascript básico.'
      }
    ],
     languages: 'español - inglés',
     degree: 'Licenciatura'
  };

  private readonly skills_en = [
    { name: 'HTML5',
      description: 'Semantic markap, accessibility, SEO optimization', 
      id: 0 
    },
    { name: 'CSS3',
      description: 'Responsive design, animations, Flexbox/Grid',
      id: 1 
    },
    { name: 'JavaScript',
      description: 'ES6+, DOM manipulation, async programming',
      id: 2 
    },
    {
      name: 'Angular',
      description:'Component-driven UI, reactive programming with RXJS, scalable arquitecture, dependency injection, object oriented programming',
      id: 3
    },
    {
      name: 'Node JS',
      description: 'Server-side Javascript, REST API´s, Express, functional programming', 
      id: 4
    },
    {
      name: 'Nest JS',
      description: 'Skilled, in building scalable server-side applications using modular architecture. Experience with middleware, microservices and database integration.',
      id: 5
    },
    {
      name: 'TypeORM',
      description: 'Used extensively in backend development with NestJS to define entities, manage database relations, and perform queries in PostgreSQL. Familiar with repositories and eager/lazy loading strategies.',
      id: 6
    },
    {
      name: 'Python',
      description: 'Skilled in building scalable microservices using Python, with experience in designing RESTful APIs, asynchronous processing, and containerized deployments.',
      id: 7
    },
    {
      name: 'Flask',
      description: 'Proficient in developing lightweight and scalable microservices using Flask, leveraging its simplicity and flexibility to build RESTful APIs.',
      id: 8
    },
    { name: 'Databases',
      description: 'MongoDB, SQL', 
      id: 9
    },
  ];


  private readonly skills_es = [
    { name: 'HTML5',
      description: 'Marcado semántico, accesibilidad y optimización SEO', 
      id: 0
    },
    { name: 'CSS3',
      description: 'Diseño responsivo, animaciones, Flexbox/Grid',
      id: 1 
    },
    { name: 'JavaScript',
      description: 'ES6+, Manipulación DOM, programación asíncrona',
      id: 2 
    },
    {
      name: 'Angular',
      description:'Interfaz de usuario basada en componentes, programación reactiva con RXJS, arquitectura escalable, inyección de dependencias, programación orientada a objetos',
      id: 3
    },
    {
      name: 'Node JS',
      description: 'Javascript del lado del servidor, API REST, Express, programación funcional',
      id: 4
    },
    {
      name: 'Nest JS',
      description: 'Experiencia en la creación de aplicaciones escalables del lado del servidor mediante arquitectura modular y middleware, microservicios e integración de bases de datos.',
      id: 5
    },
    {
     name: 'TypeORM',
     description: 'Uso extensivo en el desarrollo backend con NestJS para definir entidades, gestionar relaciones en la base de datos y realizar consultas en PostgreSQL. Familiarizado con el uso de repositorios y estrategias de carga eager/lazy.',
    id: 6
    },
    {
      name: 'Python',
      description: 'Experiencia en la creación de microservicios escalables utilizando Python, con experiencia en el diseño de API RESTful, procesamiento asincrónico e implementaciones en contenedores.',
      id: 7
    },
    {
      name: 'Flask',
      description: 'Experiencia en el desarrollo de microservicios livianos y escalables utilizando Flask, aprovechando su simplicidad y flexibilidad para construir API RESTful.',
      id: 8

    },
    { name: 'Bases de datos',
      description: 'MongoDB, SQL', 
      id: 9 
    }
  ];

  private readonly template_en = {
    greeting: "Hi, I'm",
    view_work: 'View My Work',
    contact_me: 'Contact Me',
    home: 'Home',
    about: 'About',
    about_me: 'About Me',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    name: 'Name',
    email: 'Email',
    experience: 'Experience',
    location: 'Location',
    years: 'years',
    pdf: 'Generate CV PDF',
    my_skills: 'My Skills',
    my_projects: 'My Projects',
    live_demo: 'Live Demo',
    code: 'Code',
    get_in_touch: 'Get In Touch',
    lets_talk: 'Let´s talk about your project',
    contact_msg: "Feel free to reach out if you're looking for a developer, have a question, or just want to connect.",
    placeholder_name: 'Your Name',
    placeholder_email: 'Your Email',
    placeholder_subject: 'Subject',
    placeholder_msg: 'Your Message',
    send_msg: 'Send Message',
    rights: 'All rights reserved.',
    portfolio: 'Portfolio',
    dark_mode: 'Dark Mode',
    light_mode: 'Light Mode',
    whatsapp: 'https://wa.me/5216143038485?text=Hi%20there,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect',
    chat: 'Chat with me!',
    phone_img: 'assets/phone.png',
    email_img: 'assets/email.png',
    git_img: 'assets/git.png',
    portfolio_img: 'assets/portfolio_icon.png',
    c_education: 'EDUCATION',
    c_skills: 'SKILLS',
    c_profile: ' PROFILE',
    c_experience: 'WORK EXPERIENCE',
    c_languages: 'LANGUAGES'

  
  };
  
  private readonly template_es = {
      greeting: 'Hola, Soy',
      view_work: 'Ve mi trabajo',
      contact_me: 'Contáctame',
      home: 'Inicio',
      about: 'Acerca de mí',
      about_me: 'Acerca de mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
      name: 'Nombre',
      email: 'correo electrónico',
      experience: 'Experiencia',
      location: 'Ubicación',
      years: 'años',
      pdf: 'Genera CV PDF',
      my_skills: 'Mis habilidades',
      my_projects: 'Mis Proyectos',
      live_demo: 'Demo',
      code: 'Código',
      get_in_touch: 'Ponte en Contacto',
      lets_talk: 'Hablemos de tu proyecto',
      contact_msg: "No dudes en comunicarte con nosotros si estás buscando un desarrollador, tienes alguna pregunta o simplemente quieres conectarte.",
      placeholder_name: 'Tu Nombre',
      placeholder_email: 'Tu Correo',
      placeholder_subject: 'Asunto',
      placeholder_msg: 'Tu mensaje',
      send_msg: 'Enviar Mensaje',
      rights: 'Todos los derechos reservados.',
      portfolio: 'Portafolio',
      dark_mode: 'Modo Oscuro',
      light_mode: 'Modo Claro',
      whatsapp: 'https://wa.me/5216143038485?text=Hola,%20vi%20tu%20portafolio%20y%20me%20gustaría%20platicar',
      chat: '¡Hablemos!',
      phone_img: 'assets/phone.png',
      email_img: 'assets/email.png',
      git_img: 'assets/git.png',
      portfolio_img: 'assets/portfolio_icon.png',
      c_education: 'EDUCACION',
      c_skills: 'HABILIDADES',
      c_profile: 'PERFIL',
      c_experience: 'EXPERIENCIA LABORAL',
      c_languages: 'IDIOMAS'
  };

  private readonly projects_en = [
    {
      name: 'Fit-Pro Gym', 
      description: 'A fully responsive gym platform with bookin classes, register, payments and more.',
      techs: [{name: 'Angular', id: 0}, {name:'Node.js', id: 1}, {name: 'MongoDB', id: 2}],
      photo: '/assets/fit-pro.png',
      id: 0
    },

    {
      name: 'NestJS Backend',
      description: 'A backend with modules: login, users, classes, instructors, memeberships, etc.',
      techs: [{name: 'Vue.js', id: 0 }, {name: 'Firebase', id: 1}],
      photo: '/assets/nestjs.png',
      id: 1
    },

    {
      name:'Personal Journal',
      description: 'A simple app to keep record your memories.',
      techs: [{name: 'HTML/CSS', id: 0}, {name: 'JavaScript', id: 1} ],
      photo: '/assets/journal.png',
      id: 2
    }
  ];
  

  private readonly projects_es = [
    {
      name: 'Fit-Pro Gym', 
      description: 'Una plataforma de gimnasio totalmente receptiva con reserva de clases, registro, pagos y más.',
      techs: [{name: 'Angular', id: 0}, {name:'Node.js', id: 1}, {name: 'MongoDB', id: 2}],
      photo: '/assets/fit-pro.png',
      id: 0
    },

    {
      name: 'NestJS Backend',
      description: 'Un backend con módulos: login, usuarios, clases, instructores, membresías, etc.',
      techs: [{name: 'Vue.js', id: 0 }, {name: 'Firebase', id: 1}],
      photo: '/assets/nestjs.png',
      id: 1
    },

    {
      name:'Personal Journal',
      description: 'Una aplicación sencilla para guardar tus recuerdos.',
      techs: [{name: 'HTML/CSS', id: 0}, {name: 'JavaScript', id: 1} ],
      photo: '/assets/journal.png',
      id: 2
    }
  ];
  

  getProfile(): Profile {
    return this.languageService.getCurrentLanguage() === 'es' ? this.profile_es : this.profile_en;
  }

  getSkills(): Skill[] {
    return this.languageService.getCurrentLanguage() === 'es' ? this.skills_es : this.skills_en;
  }

  getTemplateData(): Template {
    return this.languageService.getCurrentLanguage() === 'es' ? this.template_es : this.template_en;
  }

  getProjects(): Project[] {
    return this.languageService.getCurrentLanguage() === 'es' ? this.projects_es : this.projects_en;
  }
 
}
