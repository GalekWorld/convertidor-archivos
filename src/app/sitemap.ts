import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://convertidor-archivos.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://convertidor-archivos.vercel.app/caracteristicas',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://convertidor-archivos.vercel.app/tutoriales',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    }
  ]
}
