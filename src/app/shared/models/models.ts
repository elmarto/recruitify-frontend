export interface Candidato {
  id: number;
  nombre: string;
  estado: string;
  fecha: Date;
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
  fecha_creacion: Date;
  skills: Skill[];
  seniority: String;
}

export interface Entrevista {
  id: number;
  candidato: Candidato;
  puntaje: number;
  fecha: Date;
  busqueda: Busqueda;
  preguntas: Pregunta[];
  notas: string;
  salario: number;
}
