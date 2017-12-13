import { Entrevista, Candidato, Skill, Busqueda, Pregunta } from './shared/models/models';

export let MOCK_SKILLS: Skill[] = [
  {id: 1, nombre: 'Java'},
  {id: 2, nombre: 'NET'},
  {id: 3, nombre: 'Javascript'},
  {id: 4, nombre: 'Python'},
  {id: 5, nombre: 'Ruby'}
];

export let MOCK_PREGUNTAS: Pregunta[] = [
  {id: 1, skill: MOCK_SKILLS[0], pregunta: 'Pregunta de Java 1', respuesta: 'Respuesta 1'},
  {id: 2, skill: MOCK_SKILLS[0], pregunta: 'Pregunta de Java 2', respuesta: 'Respuesta 2'},
  {id: 3, skill: MOCK_SKILLS[0], pregunta: 'Pregunta de Java 3', respuesta: 'Respuesta 3'},
];

export let MOCK_CANDIDATOS: Candidato[] = [
  {id: 1, nombre: 'Jorge Ramirez', estado: 'Inicial', fecha: new Date('1980-12-12'), skills: [ MOCK_SKILLS[0] ]},
  {id: 2, nombre: 'Pedro Rodriguez', estado: 'Inicial', fecha: new Date(), skills: [ MOCK_SKILLS[1] ]},
  {id: 3, nombre: 'Pablo Totti', estado: 'Inicial', fecha: new Date('1960-12-12'), skills: [ MOCK_SKILLS[2] ]},
  {id: 4, nombre: 'Alejandro Molina', estado: 'Inicial', fecha: new Date(), skills: [ MOCK_SKILLS[3] ]},
];


export let MOCK_BUSQUEDAS: Busqueda[] = [
  { id: 1, descripcion: 'Java Sr for Citi', estado: 'activa', fecha_creacion: new Date('2017-10-10'),
    skills: [MOCK_SKILLS[0]], seniority: 'Sr'},
  { id: 2, descripcion: 'Frontend Jr for Hasbro', estado: 'activa', fecha_creacion: new Date('2017-10-10'),
    skills: [MOCK_SKILLS[0]], seniority: 'Jr'}
];


export let MOCK_ENTREVISTAS: Entrevista[] = [
  { id: 1, candidato: MOCK_CANDIDATOS[0], puntaje: null, salario: null, fecha: new Date(),
    busqueda: MOCK_BUSQUEDAS[0], preguntas: MOCK_PREGUNTAS, notas: '' },
  { id: 2, candidato: MOCK_CANDIDATOS[1], puntaje: null, salario: null, fecha: new Date(),
    busqueda: MOCK_BUSQUEDAS[1], preguntas: MOCK_PREGUNTAS, notas: '' },
  { id: 3, candidato: MOCK_CANDIDATOS[2], puntaje: null, salario: null, fecha: new Date(),
    busqueda: MOCK_BUSQUEDAS[0], preguntas: MOCK_PREGUNTAS, notas: '' },
  { id: 4, candidato: MOCK_CANDIDATOS[3], puntaje: null, salario: null, fecha: new Date(),
    busqueda: MOCK_BUSQUEDAS[1], preguntas: MOCK_PREGUNTAS, notas: '' },
];
