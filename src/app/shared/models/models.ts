export interface Candidato {
  id: number;
  nombre: string;
  estado: string;
  fecha_nacimiento: Date;
  skills: Skill[];
}
export interface Pregunta {
  id: number;
  skill: Skill;
  pregunta: string;
  respuesta: string;
}

export interface Skill {
  id: number;
  nombre: string;
}

export interface Busqueda {
  id: number;
  descripcion: string;
  estado: string;
  fecha_creacion: String;
  skills: Skill;
  seniority: String;
}

export interface Entrevista {
  id: number;
  candidato: Candidato;
  puntaje: number;
  fecha: Date;
  skills_busqueda: Skill[];
  notas: string;
}
