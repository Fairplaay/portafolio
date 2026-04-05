// Experiencia laboral schema
export default {
  name: 'experiencia',
  title: 'Experiencia Laboral',
  type: 'document',
  fields: [
    {
      name: 'empresa',
      title: 'Empresa',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cargo',
      title: 'Cargo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
      rows: 3,
    },
    {
      name: 'fechaInicio',
      title: 'Fecha de Inicio',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'fechaFin',
      title: 'Fecha de Fin',
      type: 'date',
    },
    {
      name: 'actual',
      title: 'Trabajo Actual',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'ubicacion',
      title: 'Ubicación',
      type: 'string',
    },
  ],
};