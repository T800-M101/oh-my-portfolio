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
      "I'm a passionate web developer with 6 years of experience creating modern, responsive websites and web applications. I specialize in front-end development but also have experience with back-end technologies. My approach combines technical expertise with an eye for design to deliver solutions that are both functional and visually appealing.",
    about_2: 'I like to contribute to the generation of a pleasant work environment. I believe teamwork is the way to go.',
    experience: '6',
    linkedin: 'https://www.linkedin.com/in/guillermo-moran-8290b0106/',
    github: 'https://github.com/T800-M101/oh-my-portfolio'
  };

  private readonly profile_es = {
    name: 'Guillermo Morán L.',
    title: 'Ingeniero de Software',
    intro: 'Hago experiencias digitales exepcionales que crean impacto.',
    photo: 'assets/yo_canada.jpg',
    photo_2: 'assets/me.png',
    photo_3: 'assets/me-round.png',
    email: 'tuahil@gmail.com',
    phone: '+52 614 303 8485',
    location: 'Chihuahua, México',
    about: "Soy un desarrollador web apasionado con 6 años de experiencia creando sitios web y aplicaciones web modernos y adaptables. Me especializo en desarrollo front-end, pero también tengo experiencia con tecnologías back-end. Mi enfoque combina conocimientos técnicos con una visión de diseño para ofrecer soluciones funcionales y visualmente atractivas.",
    about_2: 'Me gusta contribuir a la creación de un ambiente de trabajo agradable. Creo que el trabajo en equipo es fundamental.',
    experience: '6',
    linkedin: 'https://www.linkedin.com/in/guillermo-moran-8290b0106/',
    github: 'https://github.com/T800-M101/oh-my-portfolio'
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
    light_mode: 'Light Mode'
  
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
      light_mode: 'Modo Claro'
  };

  private readonly projects_en = [
    {
      name: 'E-commerce Website', 
      description: 'A fully responsive e-commerce platform with product filtering, cart functionality, and checkout process.',
      techs: [{name: 'Angular', id: 0}, {name:'Node.js', id: 1}, {name: 'MongoDB', id: 2}],
      id: 0
    },

    {
      name: 'Task Management App',
      description: 'A productivity application for managing tasks with drag-and-drop functionality and team collaboration.',
      techs: [{name: 'Vue.js', id: 0 }, {name: 'Firebase', id: 1}],
      id: 1
    },

    {
      name:'Portfolio Website',
      description: 'A custom portfolio website with animations and contact form.',
      techs: [{name: 'HTML/CSS', id: 0}, {name: 'JavaScript', id: 1} ],
      id: 2
    }
  ];
  

  private readonly projects_es = [
    {
      name: 'E-commerce Website', 
      description: 'Una plataforma de comercio electrónico totalmente interactiva con filtrado de productos, funcionalidad de carrito y proceso de pago.',
      techs: [{name: 'Angular', id: 0}, {name:'Node.js', id: 1}, {name: 'MongoDB', id: 2}],
      id: 0
    },

    {
      name: 'Task Management App',
      description: 'Una aplicación de productividad para gestionar tareas con funcionalidad de arrastrar y soltar y colaboración en equipo.',
      techs: [{name: 'Vue.js', id: 0 }, {name: 'Firebase', id: 1}],
      id: 1
    },

    {
      name:'Portfolio Website',
      description: 'Un sitio web de portafolio personalizado con animaciones y formulario de contacto.',
      techs: [{name: 'HTML/CSS', id: 0}, {name: 'JavaScript', id: 1} ],
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
