export default function sitemap() {
  const baseUrl = 'https://finvalueadvisory.com';

  const routes = [
    '',
    '/about',
    '/services',
    '/industries',
    '/insights',
    '/team',
    '/careers',
    '/contact',
    '/privacy',
    '/terms'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8
  }));
}
