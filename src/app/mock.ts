import { Entrevista, Candidato, Skill } from './shared/models/models';

export const MOCK_SKILLS: Skill[] = [
  {id: 1, nombre: 'Java'},
  {id: 2, nombre: 'NET'},
  {id: 3, nombre: 'Javascript'},
  {id: 4, nombre: 'Python'},
  {id: 5, nombre: 'Ruby'}
];

export const MOCK_CANDIDATOS: Candidato[] = [
  {id: 1, nombre: 'Jorge Ramirez', estado: 'Inicial', fecha_nacimiento: new Date(), skills: [ MOCK_SKILLS[0] ]},
  {id: 2, nombre: 'Jorge Ramirez', estado: 'Inicial', fecha_nacimiento: new Date(), skills: [ MOCK_SKILLS[1] ]},
  {id: 3, nombre: 'Jorge Ramirez', estado: 'Inicial', fecha_nacimiento: new Date(), skills: [ MOCK_SKILLS[2] ]},
  {id: 4, nombre: 'Jorge Ramirez', estado: 'Inicial', fecha_nacimiento: new Date(), skills: [ MOCK_SKILLS[3] ]},
];

export const MOCK_ENTREVISTAS: Entrevista[] = [
  { id: 1, candidato: MOCK_CANDIDATOS[0], puntaje: null, fecha: new Date(), skills_busqueda: [ MOCK_SKILLS[0] ], notas: '' },
  { id: 2, candidato: MOCK_CANDIDATOS[1], puntaje: null, fecha: new Date(), skills_busqueda: [ MOCK_SKILLS[0] ], notas: '' },
  { id: 3, candidato: MOCK_CANDIDATOS[2], puntaje: null, fecha: new Date(), skills_busqueda: [ MOCK_SKILLS[0] ], notas: '' },
  { id: 4, candidato: MOCK_CANDIDATOS[3], puntaje: null, fecha: new Date(), skills_busqueda: [ MOCK_SKILLS[0] ], notas: '' },
];
