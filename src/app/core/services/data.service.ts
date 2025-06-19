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
    about:
      "I'm a passionate web developer with 6 years of experience building modern, responsive websites and web applications. I'm a full-stack developer. I have experience with both front-end and back-end technologies. My approach combines technical knowledge with a design vision to deliver functional and visually appealing solutions.",
    about_2: 'I like to contribute to the generation of a pleasant work environment. I believe teamwork is the way to go.',
    experience: '6',
    linkedin: 'https://www.linkedin.com/in/guillermo-moran-8290b0106/',
    github: 'https://github.com/T800-M101/oh-my-portfolio',
    portfolio: 'https://oh-my-portfolio.netlify.app/',
    work_exp: [
      {
        year: '2019 - 2021',
        company: 'Freelancer',
        resposabilities: 'Create small web pages with Angular and vanilla Javascript.'
      },
      {
        year: '2021 - 2021',
        company: 'TGC - Tecnología de Gestion y Comunicación',
        resposabilities: 'Provide support and development to specialized applications in the public sector, migrating some features from Java to Oracle Apex.'
      },
      {
        year: '2021 - Present',
        company: '3 Pillar Global',
        resposabilities: 'Collaborate with international teams and clients to develop scalable software solutions across frontend, backend, and microservices. Improve applications based on business requirements, resolve bugs, and ensure system reliability. Switch seamlessly between Angular, Node.js, NestJS, Python, and Oracle depending on project needs.'
      }
    ]
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
    about: "Soy un desarrollador web apasionado con 6 años de experiencia creando sitios web y aplicaciones web modernos y adaptables. Soy un desarrollador fullstack. Tengo experiencia con tecnologías frontend y back-end. Mi enfoque combina conocimientos técnicos con una visión de diseño para ofrecer soluciones funcionales y visualmente atractivas.",
    about_2: 'Me gusta contribuir a la creación de un ambiente de trabajo agradable. Creo que el trabajo en equipo es fundamental.',
    experience: '6',
    linkedin: 'https://www.linkedin.com/in/guillermo-moran-8290b0106/',
    github: 'https://github.com/T800-M101/oh-my-portfolio',
    portfolio: 'https://oh-my-portfolio.netlify.app/',
    work_exp: [
      {
        year: '2019 - 2021',
        company: 'Freelancer',
        resposabilities: 'Creando pequeñas páginas web con Angular y Javascript básico.'
      },
      {
        year: '2021 - 2021',
        company: 'TGC - Tecnología de Gestion y Comunicación',
        resposabilities: 'Brindar soporte y desarrollo a aplicaciones especializadas en el sector público, migrando algunas funcionalidades de Java a Oracle Apex.'
      },
      {
        year: '2021 - Present',
        company: '3 Pillar Global',
        resposabilities: 'Colaboro con equipos y clientes internacionales para desarrollar soluciones de software escalables en frontend, backend y microservicios. Mejoro las aplicaciones según los requisitos del negocio, resuelvo errores y garantizo la fiabilidad del sistema. Trabajo con facilidad entre diferente tecnologias como Angular, Node.js, NestJS, Python y Oracle según las necesidades del proyecto.'
      }
    ]
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
      name: 'Python',
      description: 'Skilled in building scalable microservices using Python, with experience in designing RESTful APIs, asynchronous processing, and containerized deployments.',
      id: 6
    },
    {
      name: 'Flask',
      description: 'Proficient in developing lightweight and scalable microservices using Flask, leveraging its simplicity and flexibility to build RESTful APIs.',
      id: 7
    },
    { name: 'Databases',
      description: 'MongoDB, SQL', 
      id: 8
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
      name: 'Python',
      description: 'Experiencia en la creación de microservicios escalables utilizando Python, con experiencia en el diseño de API RESTful, procesamiento asincrónico e implementaciones en contenedores.',
      id: 6
    },
    {
      name: 'Flask',
      description: 'Experiencia en el desarrollo de microservicios livianos y escalables utilizando Flask, aprovechando su simplicidad y flexibilidad para construir API RESTful.',
      id: 7

    },
    { name: 'Bases de datos',
      description: 'MongoDB, SQL', 
      id: 8 
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
    c_skills: 'PRO. SKILLS',
    c_profile: 'PROFILE',
    c_experience: 'WORK EXPERIENCE'
  
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
      c_experience: 'EXPERIENCIA LABORAL'
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
