// Helper to get the correct asset path for both dev and production
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}
