import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.workeraa.co.in',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://www.workeraa.co.in/contact',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://www.workeraa.co.in/industries',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://www.workeraa.co.in/services',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://www.workeraa.co.in/about',
      lastModified: new Date(),
      priority: 0.8,
    }
  ]
}