// Educación schema
export default {
  name: 'educacion',
  title: 'Educación',
  type: 'document',
  fields: [
    {
      name: 'institucion',
      title: 'Institución',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'titulo',
      title: 'Título Obtenido',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'campo',
      title: 'Campo de Estudio',
      type: 'string',
    },
    {
      name: 'fechaInicio',
      title: 'Fecha de Inicio',
      type: 'date',
    },
    {
      name: 'fechaFin',
      title: 'Fecha de Fin',
      type: 'date',
    },
    {
      name: 'certificacion',
      title: 'URL de Certificación',
      type: 'url',
    },
  ],
};