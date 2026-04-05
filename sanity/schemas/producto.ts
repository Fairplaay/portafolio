// Producto para Showroom Demo schema
export default {
  name: 'producto',
  title: 'Producto',
  type: 'document',
  fields: [
    {
      name: 'nombre',
      title: 'Nombre del Producto',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sku',
      title: 'SKU',
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
      name: 'precio',
      title: 'Precio (USD)',
      type: 'number',
    },
    {
      name: 'atributos',
      title: 'Atributos Técnicos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'nombre', type: 'string', title: 'Nombre' },
            { name: 'valor', type: 'string', title: 'Valor' },
          ],
        },
      ],
    },
    {
      name: 'imagen',
      title: 'Foto del Producto',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'categoria',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Desarrollo Web', value: 'web' },
          { title: 'E-commerce', value: 'ecommerce' },
          { title: 'App Móvil', value: 'app' },
          { title: 'API / Backend', value: 'api' },
          { title: 'Otro', value: 'otro' },
        ],
      },
    },
    {
      name: 'disponible',
      title: 'Disponible',
      type: 'boolean',
      initialValue: true,
    },
  ],
};