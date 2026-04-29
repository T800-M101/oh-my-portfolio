export interface Tech {
  name: string;
  id: number;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  techs: Tech[];
  photo: string;
  demo: string;
  code: string;
}
