import { Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile.interface';
import { Skill } from '../interfaces/skill.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileDataService {
  readonly profile = {
    name: 'Guillermo Morán L.',
    title: 'Software Engineer',
    intro: 'I build exceptional digital experiences that make an impact.',
    photo: 'assets/yo_canada.jpg',
    email: 'tuahil@gmail.com',
    phone: '+52 614 303 8485',
    location: 'Chihuahua, México',
    about:
      "I'm a passionate web developer with 6 years of experience creating modern, responsive websites and web applications. I specialize in front-end development but also have experience with back-end technologies. My approach combines technical expertise with an eye for design to deliver solutions that are both functional and visually appealing.",
    experience: '6',
    linkedin: 'https://www.linkedin.com/in/guillermo-moran-8290b0106/',
    github: 'https://github.com/T800-M101/oh-my-portfolio'
  };

  readonly skills = [
    { name: 'HTML5',
      description: 'Semantic markap, accessibility, SEO optimization', id: 1 },
    { name: 'CSS3',
      description: 'Responsive design, animations, Flexbox/Grid',id: 2 },
    { name: 'JavaScript',
      description: 'ES6+, DOM manipulation, async programming',id: 3 },
    {
      name: 'Angular',
      description:
        'Component-driven UI, reactive programming with RXJS, scalable arquitecture, dependency injection, object oriented programming',
        id: 4
    },
    {
      name: 'Node JS',
      description: 'Server-side Javascript, REST API´s, Express, functional programming', id: 5
    },
    {
      name: 'Nest JS',
      description: 'Skilled, in building scalable server-side applications using modular architecture. Experience with middleware, microservices and database integration.',
      id: 6
    },
    { name: 'Databases',
      description: 'MongoDB, SQL', id: 7 },
  ];

  getProfile(): Profile {
    return this.profile;
  }

  getSkills(): Skill[] {
    return this.skills;
  }

  constructor() {}
}
