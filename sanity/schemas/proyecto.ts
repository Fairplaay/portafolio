// Proyecto de portafolio schema
export default {
  name: 'proyecto',
  title: 'Proyecto',
  type: 'document',
  fields: [
    {
      name: 'titulo',
      title: 'Título del Proyecto',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'titulo' },
    },
    {
      name: 'descripcion',
      title: 'Descripción Técnica',
      type: 'text',
      rows: 4,
    },
    {
      name: 'techStack',
      title: 'Stack Tecnológico',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'imagenes',
      title: 'Galería de Imágenes',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'linkDemo',
      title: 'URL Demo',
      type: 'url',
    },
    {
      name: 'linkGithub',
      title: 'URL GitHub',
      type: 'url',
    },
    {
      name: 'destacado',
      title: 'Proyecto Destacado',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'fecha',
      title: 'Fecha del Proyecto',
      type: 'date',
    },
  ],
};