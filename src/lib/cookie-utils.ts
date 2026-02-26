/**
 * Читает значение cookie из строки заголовка Cookie (для сервера).
 */
export function getCookie(name: string, cookieHeader: string): string | undefined {
  if (!cookieHeader) return undefined;
  const match = cookieHeader.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1].trim()) : undefined;
}

/**
 * Устанавливает cookie в браузере (path=/ по умолчанию).
 */
export function setCookie(
  name: string,
  value: string,
  options?: { path?: string; maxAge?: number }
): void {
  if (typeof document === 'undefined') return;
  const path = options?.path ?? '/';
  const maxAge = options?.maxAge ?? 31536000; // 1 year
  document.cookie = `${name}=${encodeURIComponent(value)}; path=${path}; max-age=${maxAge}; SameSite=Lax`;
}
