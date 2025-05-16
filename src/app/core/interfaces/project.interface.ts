export interface Tech {
  name: string;
  id: number;
}

export interface Project {
  name: string;
  description: string;
  techs: Tech[];
  id: number;
}
