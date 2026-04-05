// Bio schema - Perfil profesional
export default {
  name: 'bio',
  title: 'Biografía',
  type: 'document',
  fields: [
    {
      name: 'nombre',
      title: 'Nombre Completo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'titulo',
      title: 'Título Profesional',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'perfil',
      title: 'Perfil Profesional',
      type: 'text',
      rows: 4,
    },
    {
      name: 'foto',
      title: 'Foto de Perfil',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'ubicacion',
      title: 'Ubicación',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'telefono',
      title: 'Teléfono',
      type: 'string',
    },
    {
      name: 'redes',
      title: 'Redes Sociales',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'plataforma', type: 'string', title: 'Plataforma' },
            { name: 'url', type: 'url', title: 'URL' },
            { name: 'username', type: 'string', title: 'Usuario' },
          ],
        },
      ],
    },
    {
      name: 'skills',
      title: 'Habilidades Técnicas',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};