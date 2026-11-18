import {page} from '../site/pages.mjs';
import {titles} from '../site/content.mjs';

export function onRequest({request, next}) {
  const pathname = new URL(request.url).pathname;
  const key = pathname.slice(1).replace(/\/$/, '');
  if (pathname !== '/' && !Object.hasOwn(titles, key)) return next();
  if (!['GET', 'HEAD'].includes(request.method)) {
    return new Response('Method not allowed', {status: 405, headers: {Allow: 'GET, HEAD'}});
  }
  return new Response(request.method === 'HEAD' ? null : page(key || undefined), {
    headers: {'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-cache'}
  });
}
