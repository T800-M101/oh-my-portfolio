export interface Profile {
  name: string;
  title: string;
  intro: string;
  photo: string;
  photo_2: string;
  photo_3: string;
  email: string;
  phone: string;
  location: string;
  education: string;
  bachelorsDegree: string;
  about: string;
  about_2: string;
  experience: string;
  linkedin: string;
  github:string;
  portfolio:string;
  work_exp: WorkExperience[];
  languages: string;
  degree: string;
}

interface WorkExperience {
  year: string;
  company: string;
  resposabilities: string;
}